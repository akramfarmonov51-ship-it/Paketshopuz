// Seed script - mahsulotlarni database ga yuklash
import { createProduct, initDatabase } from './db/neon.js';
import dotenv from 'dotenv';

dotenv.config();

const PRODUCTS = [
    // PAKETLAR
    { id: 'b1', name: 'Mayka Paket (Qora) 20kg', description: 'Mustahkam, qora rangli mayka paketlar. 1 pachkada 50 dona.', price: 15000, images: ['/images/mayka_paket.png'], category: 'bags', popular: true },
    { id: 'b2', name: 'Mayka Paket (Oq) 10kg', description: 'Oq rangli mayka paketlar. 1 pachkada 100 dona.', price: 12000, images: ['/images/mayka_paket.png'], category: 'bags' },
    { id: 'b3', name: 'Kraft Paket (Tutqichli) 25x35', description: 'Ekologik toza qog\'oz paketlar. Do\'kon va butiklar uchun ideal.', price: 2500, images: ['/images/kraft_paket.png'], category: 'bags', popular: true },
    { id: 'b4', name: 'Kraft Paket (Katta) 35x45', description: 'Katta o\'lchamli kraft paket. Kiyim do\'konlari uchun.', price: 3500, images: ['/images/kraft_paket.png'], category: 'bags' },
    { id: 'b5', name: 'Fasovka Paket 18x25', description: 'Shaffof oziq-ovqat paketlari. Ruletda 500 dona.', price: 35000, images: ['/images/mayka_paket.png'], category: 'bags' },

    // QUTILAR
    { id: 'box1', name: 'Pitssa Qutisi 30sm', description: 'Qalin gofrokarton pitssa qutisi. Issiqlikni yaxshi saqlaydi.', price: 1800, images: ['/images/pizza_box.png'], category: 'boxes', popular: true },
    { id: 'box2', name: 'Pitssa Qutisi 40sm', description: 'Katta oilaviy pitssa uchun. Qalin gofrokarton.', price: 2500, images: ['/images/pizza_box.png'], category: 'boxes' },
    { id: 'box3', name: 'Universal Kuryer Qutisi (S)', description: 'Kichik buyumlar uchun pochta qutisi. 15x15x10sm.', price: 2200, images: ['/images/courier_box.png'], category: 'boxes' },
    { id: 'box4', name: 'Universal Kuryer Qutisi (M)', description: 'O\'rta o\'lchamli pochta qutisi. 20x20x15sm.', price: 3200, images: ['/images/courier_box.png'], category: 'boxes' },
    { id: 'box5', name: 'Tort Qutisi 25sm', description: 'Tortlar uchun maxsus qut. Tutqichli.', price: 3500, images: ['/images/courier_box.png'], category: 'boxes', popular: true },

    // BIR MARTALIK
    { id: 'd1', name: 'Konteyner 3-bo\'limli', description: 'Ovqat yetkazib berish uchun qulay lanch-boks. Qopqog\'i bilan.', price: 1200, images: ['/images/food_container.png'], category: 'disposable', popular: true },
    { id: 'd2', name: 'Konteyner 1-bo\'limli 500ml', description: 'Universal plastik konteyner. 50 dona.', price: 25000, images: ['/images/food_container.png'], category: 'disposable' },
    { id: 'd3', name: 'Kofe Stakani 250ml', description: 'Issiq ichimliklar uchun qog\'oz stakan. 50 dona.', price: 22000, images: ['/images/coffee_cup.png'], category: 'disposable', popular: true },
    { id: 'd4', name: 'Kofe Stakani 350ml', description: 'O\'rta issiq ichimlik stakani. 50 dona.', price: 28000, images: ['/images/coffee_cup.png'], category: 'disposable' },
    { id: 'd5', name: 'Bir Martalik Qoshiq', description: 'Plastik qoshiqlar. 100 dona.', price: 8000, images: ['/images/food_container.png'], category: 'disposable' },

    // SKOTCH
    { id: 't1', name: 'Katta Skotch (Shaffof) 300m', description: 'Qadoqlash uchun mustahkam yelimli lenta.', price: 12000, images: ['/images/packing_tape.png'], category: 'tape', popular: true },
    { id: 't2', name: 'Katta Skotch (Jigarrang) 300m', description: 'Kraft qutilar uchun jigarrang skotch.', price: 14000, images: ['/images/packing_tape.png'], category: 'tape' },
    { id: 't3', name: 'Stretch Plyonka 500m', description: 'Palletlarni o\'rash uchun stretch plyonka.', price: 45000, images: ['/images/packing_tape.png'], category: 'tape' },

    // GIGIENA
    { id: 'h1', name: 'Nam Salfetkalar (100 dona)', description: 'Restoran uchun bir martalik salfetkalar.', price: 25000, images: ['/images/wet_wipes.png'], category: 'hygiene', popular: true },
    { id: 'h2', name: 'Quruq Salfetkalar (500 dona)', description: 'Stol uchun oddiy qog\'oz salfetkalar.', price: 18000, images: ['/images/wet_wipes.png'], category: 'hygiene' },
    { id: 'h3', name: 'Bir Martalik Qo\'lqop (M)', description: 'Latex qo\'lqoplar. 100 dona.', price: 35000, images: ['/images/wet_wipes.png'], category: 'hygiene' },
];

async function seed() {
    console.log('🌱 Seeding database...');

    await initDatabase();

    for (const product of PRODUCTS) {
        await createProduct(product as any);
        console.log(`  ✓ ${product.name}`);
    }

    console.log(`\n✅ ${PRODUCTS.length} products seeded!`);
    process.exit(0);
}

seed().catch(console.error);
