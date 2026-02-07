import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './hooks/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import BackToTop from './components/common/BackToTop';
import ScrollProgress from './components/common/ScrollProgress';
import CookieConsent from './components/common/CookieConsent';
import ProductsPopup from './components/common/ProductsPopup';
import './styles/main.css';

// Lazy Load Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

// Lazy Load Service Pages
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'));
const AIDataPage = lazy(() => import('./pages/services/AIDataPage'));
const RecruitmentPage = lazy(() => import('./pages/services/RecruitmentPage'));
const SEOGrowthPage = lazy(() => import('./pages/services/SEOGrowthPage'));
const TrainingPage = lazy(() => import('./pages/services/TrainingPage'));
const DigitalMarketingPage = lazy(() => import('./pages/services/DigitalMarketingPage'));

// simple Loading Spinner
const LoadingSpinner = () => (
  <div style={{ 
    height: '100vh', 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000', 
    color: '#00d4ff',
    fontSize: '1.5rem',
    fontFamily: 'monospace'
  }}>
    Loading Vayunex Protocol...
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="App">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Service Pages */}
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/ai-data-science" element={<AIDataPage />} />
            <Route path="/services/recruitment" element={<RecruitmentPage />} />
            <Route path="/services/seo-growth" element={<SEOGrowthPage />} />
            <Route path="/services/training" element={<TrainingPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent />
        <ProductsPopup />
      </div>
    </Router>
  );
}

export default App;

