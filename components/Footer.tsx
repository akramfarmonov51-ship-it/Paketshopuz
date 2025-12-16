import React from 'react';
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail, CreditCard, ShieldCheck, Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-24 md:pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                  <Package size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 italic tracking-tighter">
                PaketShop.uz
              </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            Biznesingiz uchun eng sifatli qadoqlash mahsulotlari va bir martalik idishlar. 
            Ulgurji va chakana savdo.
          </p>
          <div className="flex gap-3">
             <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-400"><CreditCard size={18} /></div>
             <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-400"><ShieldCheck size={18} /></div>
          </div>
        </div>
        
        <div>
          <h3 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-wider">Mijozlar uchun</h3>
          <ul className="space-y-2.5 text-sm text-slate-500 font-medium">
            <li><a href="#" className="hover:text-orange-600 hover:translate-x-1 transition-all inline-block">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-orange-600 hover:translate-x-1 transition-all inline-block">Yetkazib berish</a></li>
            <li><a href="#" className="hover:text-orange-600 hover:translate-x-1 transition-all inline-block">To'lov turlari</a></li>
            <li><a href="#" className="hover:text-orange-600 hover:translate-x-1 transition-all inline-block">Korporativ mijozlarga</a></li>
            <li><a href="#" className="hover:text-orange-600 hover:translate-x-1 transition-all inline-block">Qaytarish siyosati</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-wider">Aloqa markazi</h3>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">
            <li className="flex items-start gap-3">
                <Phone size={18} className="text-orange-600 mt-0.5" /> 
                <span>+998 90 123 45 67<br/><span className="text-xs text-slate-400 font-normal">Har kuni 08:00 dan 20:00 gacha</span></span>
            </li>
            <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-600 mt-0.5" /> 
                <span>Toshkent sh., Chilonzor, Ulgurji bozor</span>
            </li>
            <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-600" /> 
                <span>zakaz@paketshop.uz</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-wider">Bizni kuzating</h3>
          <p className="text-xs text-slate-400 mb-4">Yangi tovarlar va aksiyalardan xabardor bo'ling.</p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-blue-200"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-pink-200"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-all shadow-sm hover:shadow-sky-200"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
        <p>&copy; {new Date().getFullYear()} PaketShop. Barcha huquqlar himoyalangan.</p>
        <p>Sayt test rejimida ishlamoqda.</p>
      </div>
    </footer>
  );
};

export default Footer;