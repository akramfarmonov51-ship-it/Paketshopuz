import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingBag, User, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { items } = useCart();
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-4 p-4 rounded-xl transition-all font-bold ${
        isActive ? 'bg-orange-600 text-white shadow-md shadow-orange-200' : 'text-slate-500 hover:bg-orange-50 hover:text-orange-600'
    }`;

  return (
    <div className="hidden lg:flex flex-col w-72 bg-white h-screen sticky top-0 border-r border-slate-200 z-40 flex-shrink-0">
      <div className="p-6 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200 shrink-0">
                <Package size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h1 className="text-xl font-black text-slate-900 tracking-tighter leading-none">PaketShop.uz</h1>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Qadoqlash Markazi</p>
            </div>
        </div>
      </div>
      
      <nav className="flex-1 px-6 space-y-3 mt-2">
        <NavLink to="/" className={navClass}>
          <Home size={24} />
          <span>{t.home}</span>
        </NavLink>
        <NavLink to="/menu" className={navClass}>
          <LayoutGrid size={24} />
          <span>{t.menu}</span>
        </NavLink>
        <NavLink to="/cart" className={navClass}>
          <div className="relative">
            <ShoppingBag size={24} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
                {count}
              </span>
            )}
          </div>
          <span>{t.cart}</span>
        </NavLink>
        <NavLink to="/profile" className={navClass}>
          <User size={24} />
          <span>{t.profile}</span>
        </NavLink>
      </nav>

      {isAdmin && (
          <div className="px-6 pb-2">
            <NavLink to="/admin" className="flex items-center space-x-4 p-4 rounded-xl font-bold bg-slate-900 text-white">
                <span>Admin Panel</span>
            </NavLink>
          </div>
      )}

      <div className="p-8 border-t border-slate-100">
        <div className="flex items-center space-x-2 mb-2">
           <div className="w-2 h-8 bg-orange-600 skew-x-[-12deg]"></div>
           <div className="w-2 h-8 bg-orange-600 skew-x-[-12deg]"></div>
           <div className="w-2 h-8 bg-orange-600 skew-x-[-12deg]"></div>
        </div>
        <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase">
          {t.slogan}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;