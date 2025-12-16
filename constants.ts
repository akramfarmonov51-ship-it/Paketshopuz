
import { Product } from './types';

export const MENU_ITEMS: Product[] = [
  // =======================================
  // === PAKETLAR (BAGS) - 12 ta mahsulot ===
  // =======================================
  {
    id: 'b1',
    name: 'Mayka Paket (Qora) 20kg',
    description: 'Mustahkam, qora rangli mayka paketlar. Katta yuklar uchun mo\'ljallangan. 1 pachkada 50 dona.',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
    popular: true,
  },
  {
    id: 'b2',
    name: 'Mayka Paket (Oq) 10kg',
    description: 'Oq rangli mayka paketlar. O\'rta yuklar uchun. 1 pachkada 100 dona.',
    price: 12000,
    images: [
      'https://images.unsplash.com/photo-1610557892470-55d587c7e0bf?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
  },
  {
    id: 'b3',
    name: 'Kraft Paket (Tutqichli) 25x35',
    description: 'Ekologik toza qog\'oz paketlar. Do\'kon va butiklar uchun ideal.',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
    popular: true,
  },
  {
    id: 'b4',
    name: 'Kraft Paket (Katta) 35x45',
    description: 'Katta o\'lchamli kraft paket. Kiyim do\'konlari uchun.',
    price: 3500,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
  },
  {
    id: 'b5',
    name: 'Fasovka Paket 18x25',
    description: 'Shaffof oziq-ovqat paketlari. Ruletda 500 dona.',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
  },
  {
    id: 'b6',
    name: 'Fasovka Paket 25x40',
    description: 'Katta shaffof fasovka paketlar. Ruletda 500 dona.',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
  },
  {
    id: 'b7',
    name: 'Ziplock Paket 15x20',
    description: 'Qayta yopiladigan shaffof paketlar. 100 dona.',
    price: 18000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
  },
  {
    id: 'b8',
    name: 'Logotipli Paket (Buyurtma)',
    description: 'Brendingiz tushirilgan maxsus paket. Min. buyurtma 1000 dona.',
    price: 5000,
    images: [
      'https://images.unsplash.com/photo-1606859188894-3ebb166c3744?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
    popular: true,
  },
  {
    id: 'b9',
    name: 'Vakuum Paket 20x30',
    description: 'Oziq-ovqat saqlash uchun vakuum paketlar. 100 dona.',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
  },
  {
    id: 'b10',
    name: 'Kuryer Paket (Qora)',
    description: 'Yetkazib berish uchun mustahkam kuryer paketlar. 100 dona.',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'bags',
  },

  // =======================================
  // === QUTILAR (BOXES) - 10 ta mahsulot ===
  // =======================================
  {
    id: 'box1',
    name: 'Pitssa Qutisi 30sm',
    description: 'Qalin gofrokarton pitssa qutisi. Issiqlikni yaxshi saqlaydi.',
    price: 1800,
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
    popular: true,
  },
  {
    id: 'box2',
    name: 'Pitssa Qutisi 40sm',
    description: 'Katta oilaviy pitssa uchun. Qalin gofrokarton.',
    price: 2500,
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
  },
  {
    id: 'box3',
    name: 'Universal Kuryer Qutisi (S)',
    description: 'Kichik buyumlar uchun pochta qutisi. 15x15x10sm.',
    price: 2200,
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
  },
  {
    id: 'box4',
    name: 'Universal Kuryer Qutisi (M)',
    description: 'O\'rta o\'lchamli pochta qutisi. 20x20x15sm.',
    price: 3200,
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
  },
  {
    id: 'box5',
    name: 'Universal Kuryer Qutisi (L)',
    description: 'Katta pochta qutisi. 30x30x20sm.',
    price: 4500,
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
  },
  {
    id: 'box6',
    name: 'Tort Qutisi 25sm',
    description: 'Tortlar uchun maxsus qut. Tutqichli.',
    price: 3500,
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
    popular: true,
  },
  {
    id: 'box7',
    name: 'Burger Qutisi',
    description: 'Kraft kartondan burger qutisi. 100 dona.',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
  },
  {
    id: 'box8',
    name: 'Lavash/Doner Qutisi',
    description: 'Fast-food uchun maxsus quti. 100 dona.',
    price: 18000,
    images: [
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
  },
  {
    id: 'box9',
    name: 'Shirinlik Qutisi',
    description: 'Konditer mahsulotlari uchun. Oynali qopqoq.',
    price: 2800,
    images: [
      'https://images.unsplash.com/photo-1558326567-98166e232c52?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'boxes',
  },

  // =======================================
  // === BIR MARTALIK (DISPOSABLE) - 10 ta ===
  // =======================================
  {
    id: 'd1',
    name: 'Konteyner 3-bo\'limli',
    description: 'Ovqat yetkazib berish uchun qulay lanch-boks. Qopqog\'i bilan.',
    price: 1200,
    images: [
      'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
    popular: true,
  },
  {
    id: 'd2',
    name: 'Konteyner 1-bo\'limli 500ml',
    description: 'Universal plastik konteyner. Qopqog\'i bilan. 50 dona.',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },
  {
    id: 'd3',
    name: 'Konteyner 1-bo\'limli 1000ml',
    description: 'Katta plastik konteyner. Qopqog\'i bilan. 50 dona.',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },
  {
    id: 'd4',
    name: 'Kofe Stakani 250ml',
    description: 'Issiq ichimliklar uchun qog\'oz stakan. 50 dona.',
    price: 22000,
    images: [
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
    popular: true,
  },
  {
    id: 'd5',
    name: 'Kofe Stakani 350ml',
    description: 'O\'rta issiq ichimlik stakani. 50 dona.',
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },
  {
    id: 'd6',
    name: 'Plastik Stakan 200ml',
    description: 'Sovuq ichimliklar uchun. 100 dona.',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1571942676516-bcab84649e44?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },
  {
    id: 'd7',
    name: 'Bir Martalik Qoshiq',
    description: 'Plastik qoshiqlar. 100 dona.',
    price: 8000,
    images: [
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },
  {
    id: 'd8',
    name: 'Bir Martalik Vilka',
    description: 'Plastik vilkalar. 100 dona.',
    price: 8000,
    images: [
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },
  {
    id: 'd9',
    name: 'Sushi Idishi (To\'plam)',
    description: 'Sushi yetkazish uchun maxsus idish. Qopqoq bilan. 25 dona.',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },
  {
    id: 'd10',
    name: 'Salat Idishi (Shaffof)',
    description: 'Salatlar uchun shaffof idish. 50 dona.',
    price: 30000,
    images: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'disposable',
  },

  // =======================================
  // === SKOTCH (TAPE) - 6 ta mahsulot ===
  // =======================================
  {
    id: 't1',
    name: 'Katta Skotch (Shaffof) 300m',
    description: 'Qadoqlash uchun mustahkam yelimli lenta.',
    price: 12000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'tape',
    popular: true,
  },
  {
    id: 't2',
    name: 'Katta Skotch (Jigarrang) 300m',
    description: 'Kraft qutilar uchun jigarrang skotch.',
    price: 14000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'tape',
  },
  {
    id: 't3',
    name: 'Logotipli Skotch (Buyurtma)',
    description: 'Brendingiz tushirilgan maxsus skotch. Min. 50 dona.',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'tape',
  },
  {
    id: 't4',
    name: 'Stretch Plyonka 500m',
    description: 'Palletlarni o\'rash uchun stretch plyonka.',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'tape',
  },
  {
    id: 't5',
    name: 'Ikki Tomonlama Skotch',
    description: 'Kuchli yopishqoq 2 tomonlama lenta. 50m.',
    price: 18000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'tape',
  },
  {
    id: 't6',
    name: 'Maskirovka Skotchi (Oq)',
    description: 'Bo\'yash ishlari uchun oq skotch. 50m.',
    price: 8000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'tape',
  },

  // =======================================
  // === GIGIENA (HYGIENE) - 8 ta mahsulot ===
  // =======================================
  {
    id: 'h1',
    name: 'Nam Salfetkalar (100 dona)',
    description: 'Restoran va kafe mijozlari uchun bir martalik salfetkalar.',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
    popular: true,
  },
  {
    id: 'h2',
    name: 'Quruq Salfetkalar (500 dona)',
    description: 'Stol uchun oddiy qog\'oz salfetkalar.',
    price: 18000,
    images: [
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
  },
  {
    id: 'h3',
    name: 'Bir Martalik Qo\'lqop (M)',
    description: 'Latex qo\'lqoplar. 100 dona.',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
  },
  {
    id: 'h4',
    name: 'Bir Martalik Qo\'lqop (L)',
    description: 'Latex qo\'lqoplar katta o\'lcham. 100 dona.',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
  },
  {
    id: 'h5',
    name: 'Fartuk (Bir Martalik)',
    description: 'Oshxona xodimlari uchun plastik fartuk. 50 dona.',
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
  },
  {
    id: 'h6',
    name: 'Bosh Kiyim (Shlyapa)',
    description: 'Oshxona xodimlari uchun bir martalik shlyapa. 100 dona.',
    price: 22000,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
  },
  {
    id: 'h7',
    name: 'Antiseptik Gel 500ml',
    description: 'Qo\'l uchun dezinfeksiya geli.',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
  },
  {
    id: 'h8',
    name: 'Tish Cho\'tkasi To\'plami',
    description: 'Mehmonxonalar uchun bir martalik tish cho\'tkasi va pasta. 50 dona.',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1559650656-5d1d361ad10e?auto=format&fit=crop&q=80&w=600',
    ],
    category: 'hygiene',
  },
];

export const SYSTEM_INSTRUCTION = `
Sen "PaketShop.uz" qadoqlash mahsulotlari do'konining AI Savdo Yordamchisisan.
Tillar: O'zbek (asosiy), Rus, Ingliz.
Valyuta: O'zbek so'mi (so'm).

Sening Xususiyating: Yordamchi biznes hamkor, qadoqlash yechimlari bo'yicha ekspert.
Maqsading: Biznes egalari va jismoniy shaxslarga to'g'ri qadoqlash (paketlar, qutilar, konteynerlar) topishda yordam berish.

Joriy Menyu (Ombor): ${JSON.stringify(MENU_ITEMS.map(i => ({ id: i.id, name: i.name, price: i.price })))}

Qoidalar:
1. Agar foydalanuvchi "paket" so'rasa, qaysi tur ekanini so'ra (Mayka yoki Kraft/Qog'oz).
2. Agar foydalanuvchi oziq-ovqat konteyner sotib olsa, qoshiq/vilka yoki salfetka taklif qil.
3. Agar foydalanuvchi quti sotib olsa, har doim "Skotch" ni taklif qil.
4. Ulgurji buyurtmalar uchun, ulgurji narxlar borligini ayt.
5. \`addToOrder\` toollarini to'g'ri mahsulot nomi bilan ishlatish.
6. Qisqa va tushunarli bo'l.
`;