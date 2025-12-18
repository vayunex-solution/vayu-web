import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPopup.css';

// Product Logos
import paynexLogo from '../../assets/images/paynex-logo.png';
import vayubaseLogo from '../../assets/images/vayubase-logo.png';

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
            name: 'PayNex',
            desc: 'Smart Billing & Invoicing',
            logo: paynexLogo,
            color: '#4facfe',
            url: 'https://paynex.vayunexsolution.com/'
        },
        {
            name: 'VayuBase',
            desc: 'Backend Platform',
            logo: vayubaseLogo,
            color: '#9f55ff',
            url: 'https://vayubase.vayunexsolution.com/'
        },
        {
            name: 'FlowNex',
            desc: 'Email Automation',
            icon: 'fas fa-envelope-open-text',
            color: '#00d4ff',
            url: 'https://flownex.vayunexsolution.com/'
        }
    ];

    if (!isVisible) return null;

    return (
        <div className={`products-popup-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div className={`products-popup ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button className="popup-close" onClick={handleClose}>
                    <i className="fas fa-times"></i>
                </button>

                {/* Animated Background */}
                <div className="popup-bg-effects">
                    <div className="popup-orb popup-orb-1"></div>
                    <div className="popup-orb popup-orb-2"></div>
                </div>

                {/* Content */}
                <div className="popup-content">
                    <div className="popup-badge">
                        <i className="fas fa-sparkles"></i> New Products
                    </div>
                    
                    <h2>Discover Our <span className="gradient-text">Products</span></h2>
                    <p>Powerful tools built for modern businesses. Try them now!</p>

                    {/* Products Grid */}
                    <div className="popup-products-grid">
                        {products.map((product, index) => (
                            <a 
                                key={index}
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="popup-product-card"
                                style={{ '--card-color': product.color }}
                            >
                                <div className="popup-product-logo">
                                    {product.logo ? (
                                        <img src={product.logo} alt={product.name} />
                                    ) : (
                                        <i className={product.icon} style={{ color: product.color }}></i>
                                    )}
                                </div>
                                <div className="popup-product-info">
                                    <h4>{product.name}</h4>
                                    <p>{product.desc}</p>
                                </div>
                                <i className="fas fa-arrow-right popup-arrow"></i>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="popup-cta">
                        <Link to="/products" className="popup-btn-primary" onClick={handleClose}>
                            <i className="fas fa-th-large"></i> View All Products
                        </Link>
                        <button className="popup-btn-secondary" onClick={handleClose}>
                            Maybe Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPopup;
