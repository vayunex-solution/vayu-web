'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPopup.css';

import paynexLogo from '../../assets/images/paynex-logo.webp';
import socialnexLogo from '../../assets/images/socialnex-logo.webp';
import schooldostLogo from '../../assets/images/schooldost-logo.webp';

import { getAllProducts } from '../../data/products';

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

    const products = getAllProducts();

    const getProductIcon = (id, color) => {
        switch (id) {
            case 'jwelnex':
                return (
                    <div className="popup-product-icon-wrapper" style={{ color }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 3h12l4 6-10 13L2 9z" />
                            <path d="M11 3 8 9l4 13 4-13-3-6" />
                            <path d="M2 9h20" />
                        </svg>
                    </div>
                );
            case 'inventorynex':
                return (
                    <div className="popup-product-icon-wrapper" style={{ color }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                            <line x1="12" y1="22.08" x2="12" y2="12"/>
                        </svg>
                    </div>
                );
            case 'paynex':
                return (
                    <div className="popup-product-logo-wrapper">
                        <img src={paynexLogo?.src || paynexLogo || '/images/paynex-logo.webp'} alt="" />
                    </div>
                );
            case 'socialnex':
                return (
                    <div className="popup-product-logo-wrapper">
                        <img src={socialnexLogo?.src || socialnexLogo || '/images/socialnex-logo.webp'} alt="" />
                    </div>
                );
            case 'schooldost':
                return (
                    <div className="popup-product-logo-wrapper">
                        <img src={schooldostLogo?.src || schooldostLogo || '/images/schooldost-logo.webp'} alt="" />
                    </div>
                );
            default:
                return null;
        }
    };

    if (!isVisible) return null;

    return (
        <div className={`products-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div 
                className={`products-popup ${isClosing ? 'closing' : ''}`} 
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-title"
            >
                {/* Close Button */}
                <button className="popup-close" onClick={handleClose} aria-label="Close product dialog">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Animated Background */}
                <div className="popup-bg-effects" aria-hidden="true">
                    <div className="popup-orb popup-orb-1"></div>
                    <div className="popup-orb popup-orb-2"></div>
                </div>

                {/* Content */}
                <div className="popup-content">
                    <div className="popup-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Product Ecosystem
                    </div>
                    
                    <h2 id="popup-title">Discover Our <span className="gradient-text">Platforms</span></h2>
                    <p>Enterprise-grade SaaS products built for modern organizations.</p>

                    {/* Products Grid */}
                    <div className="popup-products-grid">
                        {products.map((product) => {
                            const cardContent = (
                                <>
                                    <div className="popup-product-logo">
                                        {getProductIcon(product.id, product.brandColor)}
                                    </div>
                                    <div className="popup-product-info">
                                        <div className="popup-product-header">
                                            <h4>{product.name}</h4>
                                            <span className={`popup-status-badge popup-status-badge--${product.badgeClass}`}>
                                                {product.statusLabel}
                                            </span>
                                        </div>
                                        <p>{product.tagline}</p>
                                    </div>
                                    <svg className="popup-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </>
                            );

                            return product.officialUrl ? (
                                <a
                                    key={product.id}
                                    href={product.officialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="popup-product-card"
                                    style={{ '--card-color': product.brandColor }}
                                    onClick={handleClose}
                                >
                                    {cardContent}
                                </a>
                            ) : (
                                <Link
                                    key={product.id}
                                    to={product.internalRoute}
                                    className="popup-product-card"
                                    style={{ '--card-color': product.brandColor }}
                                    onClick={handleClose}
                                >
                                    {cardContent}
                                </Link>
                            );
                        })}
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
