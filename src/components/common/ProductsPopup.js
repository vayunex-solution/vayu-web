import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPopup.css';

import paynexLogo from '../../assets/images/paynex-logo.webp';
import socialnexLogo from '../../assets/images/socialnex-logo.webp';
import schooldostLogo from '../../assets/images/schooldost-logo.webp';

const ProductsPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if popup was already shown in this session
        const popupShown = sessionStorage.getItem('vayunex-products-popup');
        
        if (!popupShown) {
            // Show popup after 5 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('vayunex-products-popup', 'shown');
        }, 300);
    };

    const products = [
        {
            id: 'jwelnex',
            name: 'Jwelnex ERP',
            desc: 'End-to-end jewellery management',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 13L2 9z" />
                    <path d="M11 3 8 9l4 13 4-13-3-6" />
                    <path d="M2 9h20" />
                </svg>
            ),
            color: '#F59E0B',
            url: '/products/jwelnex'
        },
        {
            id: 'paynex',
            name: 'PayNex',
            desc: 'Intelligent payment infrastructure',
            logo: paynexLogo,
            color: '#10B981',
            url: '/products/paynex'
        },
        {
            id: 'socialnex',
            name: 'SocialNex',
            desc: 'AI social media command center',
            logo: socialnexLogo,
            color: '#8B5CF6',
            url: '/products/socialnex'
        },
        {
            id: 'schooldost',
            name: 'SchoolDost',
            desc: 'Modern school management',
            logo: schooldostLogo,
            color: '#06B6D4',
            url: '/products/schooldost'
        },
        {
            id: 'inventorynex',
            name: 'InventoryNex',
            desc: 'Real-time inventory intelligence',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
            color: '#F97316',
            url: '/products/inventorynex'
        }
    ];

    if (!isVisible) return null;

    return (
        <div className={`products-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div className={`products-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button className="popup-close" onClick={handleClose}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Animated Background */}
                <div className="popup-bg-effects">
                    <div className="popup-orb popup-orb-1"></div>
                    <div className="popup-orb popup-orb-2"></div>
                </div>

                {/* Content */}
                <div className="popup-content">
                    <div className="popup-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Product Ecosystem
                    </div>
                    
                    <h2>Discover Our <span className="gradient-text">Platforms</span></h2>
                    <p>Enterprise-grade SaaS products built for modern businesses.</p>

                    {/* Products Grid */}
                    <div className="popup-products-grid">
                        {products.map((product, index) => (
                            <Link 
                                key={index}
                                to={product.url}
                                className="popup-product-card"
                                style={{ '--card-color': product.color }}
                                onClick={handleClose}
                            >
                                <div className="popup-product-logo">
                                    {product.logo ? (
                                        <div className="popup-product-logo-wrapper">
                                            <img src={product.logo} alt={product.name} />
                                        </div>
                                    ) : (
                                        <div className="popup-product-icon-wrapper" style={{ color: product.color }}>
                                            {product.icon}
                                        </div>
                                    )}
                                </div>
                                <div className="popup-product-info">
                                    <h4>{product.name}</h4>
                                    <p>{product.desc}</p>
                                </div>
                                <svg className="popup-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="popup-cta">
                        <Link to="/products" className="popup-btn-primary" onClick={handleClose}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                            View All Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPopup;
