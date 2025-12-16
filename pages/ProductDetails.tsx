import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMenu } from '../context/MenuContext';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { formatCurrency } from '../utils/format';
import { ChevronLeft, ShoppingBag, Truck, ShieldCheck, Share2 } from 'lucide-react';
import SEO from '../components/SEO';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { getProduct } = useMenu();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const product = id ? getProduct(id) : undefined;

  // State for image gallery
  const [activeImage, setActiveImage] = useState<string>('');

  // Handle image initialization properly
  useEffect(() => {
    if (product) {
      const imgs = product.images && product.images.length > 0 ? product.images : ['https://via.placeholder.com/600'];
      setActiveImage(imgs[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-400">Mahsulot topilmadi</h2>
          <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 font-bold hover:underline">
            Ortga qaytish
          </button>
        </div>
      </div>
    );
  }

  // Fallback for images
  const images = product.images && product.images.length > 0 ? product.images : ['https://via.placeholder.com/600'];
  // Use activeImage if set, otherwise default to first image
  const displayImage = activeImage || images[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-8 animate-slide-up">
      <SEO
        title={product.name}
        description={product.description}
        image={displayImage}
        keywords={product.seoKeywords || `${product.category}, ${product.name}, qadoqlash, paket, quti, toshkent`}
        product={{
          name: product.name,
          price: product.price,
          image: displayImage,
          category: product.category
        }}
      />

      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="font-bold text-slate-900 uppercase tracking-wider text-xs md:text-sm truncate max-w-[200px]">
          {product.category}
        </span>
        <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors">
          <Share2 size={20} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto md:flex md:gap-8 md:p-8">
        {/* Product Image Gallery */}
        <div className="md:w-1/2 md:sticky md:top-24 h-fit">
          {/* Main Image */}
          <div className="aspect-square w-full bg-white md:rounded-3xl overflow-hidden shadow-sm border-b md:border border-slate-100 relative group">
            <img
              src={displayImage}
              alt={product.name}
              className="w-full h-full object-contain p-4 md:p-8 transition-transform duration-500"
            />
            {product.popular && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase shadow-lg shadow-red-200">
                Bestseller
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 px-4 md:px-0 overflow-x-auto hide-scrollbar pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-xl border-2 flex-shrink-0 overflow-hidden transition-all ${displayImage === img ? 'border-red-600 shadow-md scale-105' : 'border-transparent bg-white hover:border-slate-200'
                  }`}
              >
                <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 py-6 md:w-1/2 md:py-0">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-bold uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-2 tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl md:text-4xl font-black text-red-600">
                {formatCurrency(product.price)}
              </span>
              <span className="text-sm text-slate-400 line-through mt-2 decoration-red-300">
                {formatCurrency(product.price * 1.15)}
              </span>
            </div>
          </div>

          {/* Action Button for Desktop */}
          <div className="hidden md:flex gap-4 mb-8">
            <button
              onClick={() => {
                addToCart(product);
                // Optional: Show toast
              }}
              className="flex-1 bg-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-200 hover:bg-red-700 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag size={20} />
              {t.addToCart}
            </button>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
            <h3 className="font-bold text-slate-900 text-lg mb-3">{t.description}</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {product.description}
            </p>
            {/* Mock Specs */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-3 rounded-lg">
                <span className="block text-[10px] text-slate-400 uppercase font-bold">Kafolat</span>
                <span className="font-bold text-slate-800 text-sm">1 Yil</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <span className="block text-[10px] text-slate-400 uppercase font-bold">Yetkazib berish</span>
                <span className="font-bold text-slate-800 text-sm">Butun O'zbekiston</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xs">Asl mahsulot</p>
                <p className="text-[10px] text-slate-500">100% Original</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Truck size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xs">Tezkor yetkazish</p>
                <p className="text-[10px] text-slate-500">24 soat ichida</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-40 pb-safe">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Narxi</span>
            <span className="text-xl font-black text-slate-900">{formatCurrency(product.price).split(" ")[0]}</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-red-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-red-200 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            {t.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;