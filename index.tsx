import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Telegram WebApp initialization
const initTelegramApp = () => {
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();

    // Set theme colors matching brand
    tg.setHeaderColor('#f97316'); // Orange
    tg.setBackgroundColor('#f8fafc'); // Slate-50

    console.log('Telegram WebApp initialized:', tg.initDataUnsafe?.user?.first_name || 'Guest');
  }
};

// Initialize Telegram first
initTelegramApp();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}