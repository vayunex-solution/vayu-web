import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Components
import HeroCanvas from '../components/3D/HeroCanvas';
import InteractiveServices from '../components/common/InteractiveServices';
import ProcessTimeline from '../components/common/ProcessTimeline';
import ProductShowcase from '../components/common/ProductShowcase';
import Testimonials from '../components/common/Testimonials';
import SEO from '../components/common/SEO';

// Styles
import './HomePage.css';

// Data
import webDevImage from '../assets/images/web-dev.png';
import aiDataImage from '../assets/images/ai-data.png';
import recruitmentImage from '../assets/images/recruitment.png';
import growthSeoImage from '../assets/images/growth-seo.png';
import trainingImage from '../assets/images/training.png';

// --- Helper Hook for Scroll Animations ---
const useIntersectionObserver = (refs) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);
};


const HomePage = () => {
  // Data
  const services = [
    { imageUrl: webDevImage, title: "Web & App Development", description: "Building custom-built, high-performance digital platforms to establish and enhance your online presence.", link: "/services/web-development" },
    { imageUrl: aiDataImage, title: "AI & Data Science", description: "Leveraging AI and data analytics to provide intelligent insights and drive business decisions.", link: "/services/ai-data-science" },
    { imageUrl: recruitmentImage, title: "Recruitment & Staffing", description: "Connecting businesses with top-tier talent through bespoke, strategic recruitment solutions.", link: "/services/recruitment" },
    { imageUrl: growthSeoImage, title: "Digital Marketing", description: "Transform your brand with social media management, content creation, and data-driven marketing strategies.", link: "/services/digital-marketing" },
    { imageUrl: growthSeoImage, title: "Growth & SEO Strategy", description: "Designing custom strategies to expand sales pipelines and accelerate your revenue growth through SEO.", link: "/services/seo-growth" },
    { imageUrl: trainingImage, title: "Skill Development", description: "Empowering the next generation of tech talent through our dedicated hands-on training portal.", link: "/services/training" }
  ];

  // Refs for Animations
  const productsTitleRef = useRef(null);
  const servicesTitleRef = useRef(null);
  const processTitleRef = useRef(null);
  const paynexRef = useRef(null);

  useIntersectionObserver([productsTitleRef, servicesTitleRef, processTitleRef, paynexRef]);

  return (
    <main className="home-page">
      <SEO
        title="Top IT, Web Development & Recruitment Company in Chandigarh Tricity"
        description="Vayunex is a leading IT and recruitment company in Chandigarh, Mohali, and Panchkula, offering web development, AI solutions, and innovative products like PayNex."
        keywords="IT company Chandigarh, web development Mohali, recruitment agency Panchkula, Vayunex, PayNex, AI services Punjab, software company Haryana, best IT company in Zirakpur"
      />

      {/* --- Hero Section --- */}
      <section className="hero-section">
        <HeroCanvas />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              We Engineer Growth.
              <br />
              We Deliver Excellence.
            </h1>
            <p className="hero-subtitle">
              Vayunex is your strategic partner in IT, Recruitment, and Business Consulting. We turn ambitious ideas into market-realities.
            </p>
            <Link to="/contact" className="hero-cta">
              Let's Build Together
            </Link>
          </div>
        </div>
      </section>

      {/* --- Products Section --- */}
      <section id="products" className="section products-section">
        <div ref={productsTitleRef} className="section-title-container">
          <h2 className="section-title">Our Flagship Product</h2>
        </div>
        <ProductShowcase />
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="section services-section">
        <div ref={servicesTitleRef} className="section-title-container">
          <h2 className="section-title">Our Expert Services</h2>
        </div>
        <InteractiveServices services={services} />
      </section>

      {/* --- Process Section --- */}
      <section className="section process-section">
        <div ref={processTitleRef} className="section-title-container">
          <h2 className="section-title">Our Strategic Process</h2>
        </div>
        <ProcessTimeline />
      </section>

      {/* --- Testimonials Section --- */}
      <Testimonials />

      {/* --- PayNex Teaser Section --- */}
      <section className="section paynex-teaser" >
        <div ref={paynexRef} className="paynex-content section-title-container">
          <p className="paynex-subtitle">ALWAYS INNOVATING</p>
          <h2 className="paynex-title">What's Next?</h2>
          <p className="paynex-description">
            We are constantly building the next generation of digital products. Stay tuned for what's coming.
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email for updates" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

