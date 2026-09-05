'use client';

import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import BackToTop from '../common/BackToTop';
import ScrollProgress from '../common/ScrollProgress';
import CookieConsent from '../common/CookieConsent';
import ProductsPopup from '../common/ProductsPopup';
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
