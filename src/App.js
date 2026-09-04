import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './hooks/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import BackToTop from './components/common/BackToTop';
import ScrollProgress from './components/common/ScrollProgress';
import CookieConsent from './components/common/CookieConsent';
import ProductsPopup from './components/common/ProductsPopup';
import { usePageTracking, useScrollTracking } from './hooks/useAnalyticsTracking';
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
const AIKnowledgePage = lazy(() => import('./pages/AIKnowledgePage'));

// Lazy Load Product Pages
const JwelnexPage = lazy(() => import('./pages/products/JwelnexPage'));
const PayNexPage = lazy(() => import('./pages/products/PayNexPage'));
const SocialNexPage = lazy(() => import('./pages/products/SocialNexPage'));
const SchoolDostPage = lazy(() => import('./pages/products/SchoolDostPage'));

// Lazy Load Service Pages
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'));
const AIDataPage = lazy(() => import('./pages/services/AIDataPage'));
const RecruitmentPage = lazy(() => import('./pages/services/RecruitmentPage'));
const SEOGrowthPage = lazy(() => import('./pages/services/SEOGrowthPage'));
const TrainingPage = lazy(() => import('./pages/services/TrainingPage'));
const DigitalMarketingPage = lazy(() => import('./pages/services/DigitalMarketingPage'));

// Lazy Load Blog Pages
const BlogListPage = lazy(() => import('./pages/blog/BlogListPage'));
const BlogDetailPage = lazy(() => import('./pages/blog/BlogDetailPage'));
const BlogCategoryPage = lazy(() => import('./pages/blog/BlogCategoryPage'));

// Lazy Load Programmatic Pages
const IndustryTemplate = lazy(() => import('./pages/programmatic/IndustryTemplate'));
const CityTemplate = lazy(() => import('./pages/programmatic/CityTemplate'));

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

// Wrapper component to use router hooks
const AnalyticsWrapper = () => {
  usePageTracking();
  useScrollTracking();

  // Client-side canonical fallback redirect
  useEffect(() => {
    if (window.location.hostname === 'vayunexsolution.com') {
      window.location.replace(`https://www.vayunexsolution.com${window.location.pathname}${window.location.search}${window.location.hash}`);
    }
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <AnalyticsWrapper />
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
            <Route path="/ai-knowledge-base" element={<AIKnowledgePage />} />

            {/* Service Pages */}
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/ai-data-science" element={<AIDataPage />} />
            <Route path="/services/recruitment" element={<RecruitmentPage />} />
            <Route path="/services/seo-growth" element={<SEOGrowthPage />} />
            <Route path="/services/training" element={<TrainingPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />

            {/* Dedicated Product Pages */}
            <Route path="/products/jwelnex" element={<JwelnexPage />} />
            <Route path="/products/paynex" element={<PayNexPage />} />
            <Route path="/products/socialnex" element={<SocialNexPage />} />
            <Route path="/products/schooldost" element={<SchoolDostPage />} />

            {/* Blog Pages */}
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/blog/category/:slug" element={<BlogCategoryPage />} />

            {/* Programmatic SEO Architecture */}
            <Route path="/industries/:industry" element={<IndustryTemplate />} />
            <Route path="/city/:city" element={<CityTemplate />} />

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

