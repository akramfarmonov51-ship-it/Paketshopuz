import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  product?: {
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Paketlar, qutilar, bir martalik idishlar va skotch - biznesingiz uchun ulgurji narxlarda.",
  keywords = "paket, karobka, skotch, bir martalik idishlar, qadoqlash, uzbekistan, toshkent",
  image = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
  url = window.location.href,
  product
}) => {

  useEffect(() => {
    // Update Title
    document.title = `${title} | PaketShop.uz`;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph / Facebook / Telegram
    updateMeta('og:title', `${title} | PaketShop.uz`, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:url', url, 'property');
    updateMeta('og:type', product ? 'product' : 'website', 'property');
    updateMeta('og:site_name', 'PaketShop.uz', 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', `${title} | PaketShop.uz`);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Product-specific structured data (JSON-LD)
    if (product) {
      const existingScript = document.querySelector('script[data-seo-ld]');
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-ld', 'true');
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": description,
        "brand": {
          "@type": "Brand",
          "name": "PaketShop.uz"
        },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "UZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "PaketShop.uz"
          }
        }
      });
      document.head.appendChild(script);
    }

    // Business structured data
    const existingBusiness = document.querySelector('script[data-seo-business]');
    if (!existingBusiness) {
      const businessScript = document.createElement('script');
      businessScript.type = 'application/ld+json';
      businessScript.setAttribute('data-seo-business', 'true');
      businessScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "PaketShop.uz",
        "description": "Qadoqlash mahsulotlari do'koni - paketlar, qutilar, bir martalik idishlar",
        "url": "https://paketshop.uz",
        "telephone": "+998901234567",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toshkent",
          "addressCountry": "UZ"
        },
        "priceRange": "$$"
      });
      document.head.appendChild(businessScript);
    }

  }, [title, description, keywords, image, url, product]);

  return null;
};

export default SEO;