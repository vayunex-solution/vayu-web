'use client';

import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import dynamic from 'next/dynamic';

// Non-critical UI — lazy loaded after paint
const WhatsAppButton = dynamic(() => import('../common/WhatsAppButton'), { ssr: false });
const BackToTop = dynamic(() => import('../common/BackToTop'), { ssr: false });
const ScrollProgress = dynamic(() => import('../common/ScrollProgress'), { ssr: false });
const CookieConsent = dynamic(() => import('../common/CookieConsent'), { ssr: false });
const ProductsPopup = dynamic(() => import('../common/ProductsPopup'), { ssr: false });
import { usePageTracking, useScrollTracking } from '../../hooks/useAnalyticsTracking';


const AnalyticsTracker = () => {
  usePageTracking();
  useScrollTracking();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'vayunexsolution.com') {
      window.location.replace(`https://www.vayunexsolution.com${window.location.pathname}${window.location.search}${window.location.hash}`);
    }
  }, []);

  return null;
};

export default function ClientLayout({ children }) {
  return (
    <div className="App">
      <AnalyticsTracker />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
      <ProductsPopup />
    </div>
  );
}
