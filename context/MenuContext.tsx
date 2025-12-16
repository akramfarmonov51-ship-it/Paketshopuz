import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { MENU_ITEMS } from '../constants';

interface MenuContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('paketshop_menu');
    let items = saved ? JSON.parse(saved) : MENU_ITEMS;

    // Data Migration: Convert legacy 'image' string to 'images' array
    items = items.map((p: any) => {
      // If product has old 'image' but no 'images', migrate it
      if (!p.images && p.image) {
        return { ...p, images: [p.image] };
      }
      // If product has neither, ensure images is initialized
      if (!p.images && !p.image) {
        return { ...p, images: [] };
      }
      return p;
    });

    return items;
  });

  useEffect(() => {
    localStorage.setItem('paketshop_menu', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const updateProduct = (product: Product) => {
    setProducts(prev => prev.map(p => p.id === product.id ? product : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const getProduct = (id: string) => products.find(p => p.id === id);

  return (
    <MenuContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProduct }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used within MenuProvider');
  return context;
};