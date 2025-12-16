# PaketShop.uz - Qadoqlash Mahsulotlari Do'koni

<div align="center">
  <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200" alt="PaketShop.uz Banner" width="100%" />
  
  **🛒 O'zbekiston uchun qadoqlash mahsulotlari online do'koni**
  
  Paketlar • Qutilar • Bir Martalik Idishlar • Skotch • Gigiena
</div>

---

## 🚀 Texnologiyalar

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS
- **AI Assistant**: Google Gemini Live API (Ovozli yordamchi)
- **Maps**: Leaflet + OpenStreetMap
- **PWA**: Service Worker, Offline support
- **Telegram**: Mini App SDK integratsiyasi

## 📦 O'rnatish

```bash
# Dependencies o'rnatish
npm install

# Development server
npm run dev

# Production build
npm run build
```

## ⚙️ Environment Variables

`.env.local` faylini yarating:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## 🌐 Deploy

### Render.com (Tavsiya etiladi)

1. GitHub'ga push qiling
2. [Render.com](https://render.com) da yangi **Static Site** yarating
3. Repository'ni ulang
4. Environment variable'larni qo'shing: `GEMINI_API_KEY`
5. Deploy!

### Vercel

```bash
npm i -g vercel
vercel
```

## 📱 Telegram Mini App

1. [@BotFather](https://t.me/BotFather) da bot yarating
2. `/newapp` buyrug'ini yuboring
3. Web App URL'ni kiriting (deploy qilingan URL)
4. Tayyor!

## 🎤 AI Ovozli Yordamchi

Foydalanuvchilar mikrofon tugmasini bosib AI yordamchi bilan gaplashishlari mumkin:
- "Menga pitssa qutisi kerak"
- "Kraft paket qo'sh"
- "Savatda nima bor?"
- "Buyurtma qil"

## 📂 Loyiha Tuzilmasi

```
paketshop.uz/
├── components/          # Qayta ishlatiladigan komponentlar
│   ├── ProductCard.tsx  # Mahsulot kartasi
│   ├── LiveAgent.tsx    # AI Ovozli yordamchi
│   ├── Toast.tsx        # Bildirishnomalar
│   └── ...
├── pages/               # Sahifalar
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Cart.tsx
│   └── admin/           # Admin panel
├── context/             # React Context providers
├── constants.ts         # Mahsulotlar ro'yxati
└── types.ts             # TypeScript types
```

## 📄 Litsenziya

MIT License - bepul foydalaning!

---

Made with ❤️ in Uzbekistan
