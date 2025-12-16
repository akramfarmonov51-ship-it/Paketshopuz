import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from './Toast';
import { formatCurrency } from '../utils/format';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    showToast(`${product.name} savatga qo'shildi ✓`, 'success');
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  const displayImage = product.images?.[0] || 'https://via.placeholder.com/300';

  return (
    <div 
      onClick={handleCardClick}
      className="product-card bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col h-full border border-slate-100 group cursor-pointer"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        {/* Skeleton while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton" />
        )}
        <img 
          src={displayImage} 
          alt={product.name} 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {product.popular && (
          <span className="absolute top-2 left-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-r-lg shadow-md">
            🔥 Top
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-900 text-sm leading-tight mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-[11px] text-slate-500 mb-3 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 line-through decoration-red-400 opacity-60">
              {formatCurrency(Math.round(product.price * 1.15))}
            </span>
            <span className="font-black text-slate-900 text-base">
              {formatCurrency(product.price).split(" ")[0]} 
              <span className="text-[10px] font-normal text-slate-500 ml-0.5">so'm</span>
            </span>
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`add-to-cart-btn w-10 h-10 rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all ${
              isAdding 
                ? 'bg-green-500 shadow-green-200' 
                : 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-200 hover:shadow-orange-300'
            } text-white`}
          >
            {isAdding ? (
              <Check size={20} strokeWidth={3} className="animate-scale-in" />
            ) : (
              <Plus size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;