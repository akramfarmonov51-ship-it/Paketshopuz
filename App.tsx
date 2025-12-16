import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { MenuProvider } from './context/MenuContext';
import { OrderProvider } from './context/OrderContext';
import { ToastProvider } from './components/Toast';
import ErrorBoundary from './components/ErrorBoundary';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import LiveAgent from './components/LiveAgent';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMenu from './pages/admin/AdminMenu';
import AdminOrders from './pages/admin/AdminOrders';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 lg:flex text-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 relative h-screen overflow-y-auto">
        <div className="flex-1 pb-20 lg:pb-0">
          <Outlet />
          <Footer />
        </div>
        <BottomNav />
        <LiveAgent />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AuthProvider>
          <MenuProvider>
            <OrderProvider>
              <CartProvider>
                <ToastProvider>
                  <HashRouter>
                    <Routes>
                      {/* Public App */}
                      <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="product/:id" element={<ProductDetails />} />
                      </Route>

                      {/* Admin Panel */}
                      <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="menu" element={<AdminMenu />} />
                        <Route path="orders" element={<AdminOrders />} />
                      </Route>
                    </Routes>
                  </HashRouter>
                </ToastProvider>
              </CartProvider>
            </OrderProvider>
          </MenuProvider>
        </AuthProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;