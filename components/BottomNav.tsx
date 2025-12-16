import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const BottomNav = () => {
  const { items } = useCart();
  const { t } = useLanguage();
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-red-600' : 'text-slate-400'}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex justify-around items-center z-40 pb-safe shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
      <NavLink to="/" className={navClass}>
        <Home size={24} />
        <span className="text-xs font-medium">{t.home}</span>
      </NavLink>
      <NavLink to="/menu" className={navClass}>
        <LayoutGrid size={24} />
        <span className="text-xs font-medium">{t.menu}</span>
      </NavLink>
      <NavLink to="/cart" className={navClass}>
        <div className="relative">
          <ShoppingBag size={24} />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </div>
        <span className="text-xs font-medium">{t.cart}</span>
      </NavLink>
      <NavLink to="/profile" className={navClass}>
        <User size={24} />
        <span className="text-xs font-medium">{t.profile}</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;