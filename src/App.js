import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// Service Pages
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import AIDataPage from './pages/services/AIDataPage';
import RecruitmentPage from './pages/services/RecruitmentPage';
import SEOGrowthPage from './pages/services/SEOGrowthPage';
import TrainingPage from './pages/services/TrainingPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';

import ScrollToTop from './hooks/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import BackToTop from './components/common/BackToTop';
import ScrollProgress from './components/common/ScrollProgress';
import CookieConsent from './components/common/CookieConsent';
import ProductsPopup from './components/common/ProductsPopup';
import './styles/main.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="App">
        <Navbar />
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

