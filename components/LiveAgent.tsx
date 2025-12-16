import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Mic, MicOff, Loader2, Volume2 } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality, FunctionDeclaration, Type } from '@google/genai';
import { useCart } from '../context/CartContext';
import { useMenu } from '../context/MenuContext';
import { useNavigate } from 'react-router-dom';
import { SYSTEM_INSTRUCTION } from '../constants';
import { createBlob, decode, decodeAudioData } from '../utils/audio';

// --- Tool Definitions ---
const addToOrderDecl: FunctionDeclaration = {
  name: 'addToOrder',
  description: 'Add an item to the cart using its menu name.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      itemName: { type: Type.STRING, description: 'The name of the product from the menu.' },
      quantity: { type: Type.NUMBER, description: 'Quantity to add (default is 1).' }
    },
    required: ['itemName'] // Quantity is now optional
  }
};

const getCartStatusDecl: FunctionDeclaration = {
  name: 'getCartStatus',
  description: 'Get the current list of items in the cart and the total price.',
  parameters: {
    type: Type.OBJECT,
    properties: {}
  }
};

const confirmOrderDecl: FunctionDeclaration = {
  name: 'confirmOrder',
  description: 'Confirm the order and go to checkout.',
  parameters: {
    type: Type.OBJECT,
    properties: {}
  }
};

const LiveAgent: React.FC = () => {
  const [active, setActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const { addToCart } = useCart();
  const { products } = useMenu();
  const navigate = useNavigate();

  // --- REFS (Fix for Stale Closures) ---
  const addToCartRef = useRef(addToCart);
  const productsRef = useRef(products);
  const navigateRef = useRef(navigate);

  useEffect(() => {
    addToCartRef.current = addToCart;
    productsRef.current = products;
    navigateRef.current = navigate;
  }, [addToCart, products, navigate]);

  const audioContextRef = useRef<AudioContext | null>(null);
  const inputContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<any>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Improved Product Search
  const findProduct = (name: string) => {
    const list = productsRef.current;
    const cleanName = name.toLowerCase().trim();

    // 1. Exact match
    let found = list.find(p => p.name.toLowerCase() === cleanName);

    // 2. Contains match (e.g. "Pepsi" matches "Pepsi 0.5L")
    if (!found) found = list.find(p => p.name.toLowerCase().includes(cleanName));

    // 3. Reverse contains (e.g. "Savat L" matches "Savat")
    if (!found) found = list.find(p => cleanName.includes(p.name.toLowerCase()));

    // 4. Word-by-word match (e.g. "Katta fri" matches "Fri Kartoshkasi (Katta)")
    if (!found) {
      const parts = cleanName.split(' ');
      found = list.find(p => parts.every(part => p.name.toLowerCase().includes(part)));
    }

    return found;
  };

  const stopAudio = useCallback(() => {
    if (audioContextRef.current) {
      audioContextRef.current.suspend();
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) { }
    });
    sourcesRef.current.clear();
    setSpeaking(false);
  }, []);

  const disconnect = useCallback(() => {
    if (sessionRef.current) {
      sessionRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (inputContextRef.current) {
      inputContextRef.current.close();
      inputContextRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setActive(false);
    setConnecting(false);
    setSpeaking(false);
  }, []);

  const connect = useCallback(async () => {
    if (!process.env.API_KEY) {
      alert("API Key missing");
      return;
    }

    try {
      setConnecting(true);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const inputContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      inputContextRef.current = inputContext;

      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = audioContext;
      nextStartTimeRef.current = 0;

      // Use current products for instruction
      const dynamicInstruction = `${SYSTEM_INSTRUCTION}\nCurrent Menu: ${JSON.stringify(productsRef.current.map(i => ({ id: i.id, name: i.name, price: i.price })))}`;

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: dynamicInstruction,
          tools: [{ functionDeclarations: [addToOrderDecl, getCartStatusDecl, confirmOrderDecl] }],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          }
        },
        callbacks: {
          onopen: () => {
            console.log('Gemini Live Connected');
            setConnecting(false);
            setActive(true);

            const source = inputContext.createMediaStreamSource(stream);
            const scriptProcessor = inputContext.createScriptProcessor(4096, 1, 1);

            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputContext.destination);
          },
          onmessage: async (msg: LiveServerMessage) => {
            const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioData) {
              setSpeaking(true);
              if (audioContext.state === 'suspended') await audioContext.resume();

              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, audioContext.currentTime);

              const audioBuffer = await decodeAudioData(
                decode(audioData),
                audioContext,
                24000,
                1
              );

              const source = audioContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(audioContext.destination);
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setSpeaking(false);
              });

              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }

            if (msg.serverContent?.interrupted) {
              stopAudio();
              nextStartTimeRef.current = 0;
            }

            if (msg.toolCall) {
              for (const fc of msg.toolCall.functionCalls) {
                let result: any = { error: 'Unknown tool' };
                console.log("AI Calling Tool:", fc.name, fc.args);

                try {
                  if (fc.name === 'addToOrder') {
                    const { itemName, quantity } = fc.args as any;
                    const qty = quantity ? Number(quantity) : 1;

                    const product = findProduct(itemName);

                    if (product) {
                      // DIRECTLY update localStorage to avoid async state issues
                      const savedCart = localStorage.getItem('paketshop_cart');
                      const cartItems = savedCart ? JSON.parse(savedCart) : [];

                      const existingIdx = cartItems.findIndex((i: any) => i.id === product.id);
                      if (existingIdx >= 0) {
                        cartItems[existingIdx].quantity += qty;
                      } else {
                        cartItems.push({ ...product, quantity: qty });
                      }

                      localStorage.setItem('paketshop_cart', JSON.stringify(cartItems));

                      // Trigger storage event for CartContext to update
                      window.dispatchEvent(new StorageEvent('storage', {
                        key: 'paketshop_cart',
                        newValue: JSON.stringify(cartItems)
                      }));

                      result = { success: true, message: `Added ${qty} x ${product.name} to cart.` };
                      console.log(`ADDED TO CART (localStorage): ${product.name} x ${qty}`);
                    } else {
                      result = { success: false, message: `Product "${itemName}" not found. Available: ${productsRef.current.slice(0, 5).map(p => p.name).join(', ')}...` };
                      console.warn(`PRODUCT NOT FOUND: ${itemName}`);
                    }
                  } else if (fc.name === 'getCartStatus') {
                    // Read directly from localStorage to avoid any state delay issues, or use Ref if we tracked total there.
                    // Better to read from storage for reliability in this async context.
                    const savedCart = localStorage.getItem('paketshop_cart');
                    const cartItems = savedCart ? JSON.parse(savedCart) : [];
                    const currentTotal = cartItems.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
                    const currentCount = cartItems.length;

                    result = {
                      itemCount: currentCount,
                      totalAmount: currentTotal,
                      currency: 'UZS',
                      items: cartItems.map((i: any) => `${i.quantity}x ${i.name}`).join(', ')
                    };
                  } else if (fc.name === 'confirmOrder') {
                    navigateRef.current('/cart');
                    result = { success: true, message: "Navigating to checkout page." };
                  }
                } catch (e) {
                  console.error("Tool Execution Error:", e);
                  result = { error: (e as Error).message };
                }

                sessionPromise.then(session => {
                  session.sendToolResponse({
                    functionResponses: [{
                      id: fc.id,
                      name: fc.name,
                      response: { result }
                    }]
                  });
                });
              }
            }
          },
          onclose: () => {
            setActive(false);
          },
          onerror: (err) => {
            console.error("Gemini Error:", err);
            setActive(false);
            setConnecting(false);
          }
        }
      });
      sessionRef.current = sessionPromise;

    } catch (e) {
      console.error(e);
      setConnecting(false);
    }
  }, [stopAudio]); // Dependencies reduced since we use Refs

  return (
    <div className="fixed bottom-24 lg:bottom-10 right-4 lg:right-10 z-50">
      <button
        onClick={active ? disconnect : connect}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-95 ${active
          ? 'bg-white text-orange-600 border-4 border-orange-600 animate-pulse'
          : 'bg-gradient-to-br from-orange-500 to-orange-600 text-white hover:shadow-orange-300 hover:scale-110'
          }`}
      >
        {connecting ? (
          <Loader2 className="animate-spin w-8 h-8" />
        ) : active ? (
          speaking ? <Volume2 className="animate-bounce w-8 h-8" /> : <Mic className="w-8 h-8" />
        ) : (
          <MicOff className="w-8 h-8" />
        )}
      </button>
      {active && (
        <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          🎤 Tinglayapman...
        </div>
      )}
    </div>
  );
};

export default LiveAgent;