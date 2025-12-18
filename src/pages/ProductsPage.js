import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import '../styles/InnerPage.css';
import './ProductsPage.css';

// Product Logos
import paynexLogo from '../assets/images/paynex-logo.png';
import vayubaseLogo from '../assets/images/vayubase-logo.png';

// Product Hero Images
import paynexHero from '../assets/images/paynex-hero.png';
import vayubaseHero from '../assets/images/vayubase-hero.png';
import flownexHero from '../assets/images/flownex-hero.png';

const ProductsPage = () => {
    const [activeProduct, setActiveProduct] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef(null);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Products Data
    const products = [
        {
            id: 'paynex',
            name: 'PayNex',
            tagline: 'Smart Billing & Invoice Management',
            shortDesc: 'GST-ready invoicing for modern businesses',
            description: 'Modern billing software that helps businesses create GST-ready invoices, track payments, and monitor financial performance.',
            logo: paynexLogo,
            heroImage: paynexHero,
            color: '#4facfe',
            colorRgb: '79, 172, 254',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            darkColor: '#1a3a5c',
            status: 'Live',
            offer: '🔥 Free Trial Available',
            url: 'https://paynex.vayunexsolution.com/',
            features: [
                { icon: 'fas fa-file-invoice', title: 'GST Invoicing', desc: 'Tax-compliant invoices' },
                { icon: 'fas fa-bell', title: 'Auto Reminders', desc: 'Never miss payments' },
                { icon: 'fas fa-chart-line', title: 'Analytics', desc: 'Revenue insights' },
                { icon: 'fas fa-cloud', title: 'Cloud Based', desc: 'Access anywhere' }
            ],
            stats: { users: '500+', invoices: '10K+', uptime: '99.9%' }
        },
        {
            id: 'vayubase',
            name: 'VayuBase',
            tagline: 'Unified Backend Platform',
            shortDesc: 'One backend for all your apps',
            description: 'Centralized backend infrastructure for developers to build and scale multiple applications seamlessly.',
            logo: vayubaseLogo,
            heroImage: vayubaseHero,
            color: '#9f55ff',
            colorRgb: '159, 85, 255',
            gradient: 'linear-gradient(135deg, #9f55ff 0%, #7c3aed 100%)',
            darkColor: '#2d1a4a',
            status: 'Live',
            offer: '⚡ API Access Ready',
            url: 'https://vayubase.vayunexsolution.com/',
            features: [
                { icon: 'fas fa-server', title: 'BaaS', desc: 'Backend as a Service' },
                { icon: 'fas fa-shield-alt', title: 'Auth System', desc: 'Built-in security' },
                { icon: 'fas fa-plug', title: 'REST APIs', desc: 'Easy integration' },
                { icon: 'fas fa-database', title: 'Scalable DB', desc: 'Grows with you' }
            ],
            stats: { projects: '50+', apiCalls: '1M+', uptime: '24/7' }
        },
        {
            id: 'flownex',
            name: 'FlowNex',
            tagline: 'Email Automation Platform',
            shortDesc: 'Reliable email delivery at scale',
            description: 'Powerful email automation for transactional, workflow, and marketing emails with high deliverability.',
            logo: null,
            heroImage: flownexHero,
            icon: 'fas fa-envelope-open-text',
            color: '#00d4ff',
            colorRgb: '0, 212, 255',
            gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
            darkColor: '#0a2a3a',
            status: 'Live',
            offer: '📧 100K Free Emails',
            url: 'https://flownex.vayunexsolution.com/',
            features: [
                { icon: 'fas fa-paper-plane', title: 'Transactional', desc: 'Instant delivery' },
                { icon: 'fas fa-robot', title: 'Automation', desc: 'Smart workflows' },
                { icon: 'fas fa-palette', title: 'Templates', desc: 'Beautiful emails' },
                { icon: 'fas fa-chart-bar', title: 'Analytics', desc: 'Track everything' }
            ],
            stats: { emails: '100K+', delivery: '98%', speed: '<1s' }
        }
    ];

    const currentProduct = products[activeProduct];

    return (
        <div className="products-ultra-premium">
            <SEO
                title="Our Products - PayNex, VayuBase, FlowNex | Vayunex"
                description="Discover Vayunex products: PayNex billing, VayuBase backend, FlowNex email automation."
                keywords="PayNex, VayuBase, FlowNex, billing software, backend platform, email automation"
            />

            {/* Hero Section with Parallax */}
            <section className="ultra-hero" ref={heroRef}>
                {/* Animated Background */}
                <div className="hero-bg-animation">
                    <div className="bg-gradient" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>

                    {/* SVG Light Trails */}
                    <svg className="light-trails-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <linearGradient id="trail1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="30%" stopColor="#9f55ff" />
                                <stop offset="70%" stopColor="#4facfe" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                            <linearGradient id="trail2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="30%" stopColor="#00d4ff" />
                                <stop offset="70%" stopColor="#0099cc" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                            <linearGradient id="trail3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Curved Light Trail 1 */}
                        <path
                            d="M 0 400 Q 250 200 500 350 T 1000 300"
                            fill="none"
                            stroke="url(#trail1)"
                            strokeWidth="3"
                            filter="url(#glow)"
                            className="light-path light-path-1"
                        />

                        {/* Curved Light Trail 2 */}
                        <path
                            d="M 0 600 Q 300 400 500 550 T 1000 500"
                            fill="none"
                            stroke="url(#trail2)"
                            strokeWidth="2.5"
                            filter="url(#glow)"
                            className="light-path light-path-2"
                        />

                        {/* Curved Light Trail 3 */}
                        <path
                            d="M 100 800 Q 350 500 600 650 T 1000 550"
                            fill="none"
                            stroke="url(#trail3)"
                            strokeWidth="1.5"
                            filter="url(#glow)"
                            className="light-path light-path-3"
                        />

                        {/* Spiral Effect */}
                        <ellipse
                            cx="500" cy="500" rx="300" ry="150"
                            fill="none"
                            stroke="url(#trail1)"
                            strokeWidth="1"
                            filter="url(#glow)"
                            className="spiral-ring spiral-ring-1"
                        />
                        <ellipse
                            cx="500" cy="500" rx="250" ry="120"
                            fill="none"
                            stroke="url(#trail2)"
                            strokeWidth="1"
                            filter="url(#glow)"
                            className="spiral-ring spiral-ring-2"
                        />
                    </svg>

                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                        <div className="shape shape-5"></div>
                    </div>
                    <div className="grid-overlay"></div>
                </div>

                <div className="hero-main-content">
                    {/* Left Side - Text */}
                    <div className="hero-text-area">
                        <div className="hero-eyebrow">
                            <span className="pulse-dot"></span>
                            Vayunex Product Suite
                        </div>
                        <h1 className="hero-headline">
                            Build. Scale.
                            <span className="text-gradient"> Succeed.</span>
                        </h1>
                        <p className="hero-subtext">
                            Three powerful products designed to transform how you manage billing,
                            build applications, and communicate with customers.
                        </p>

                        {/* Product Switcher */}
                        <div className="product-switcher">
                            {products.map((product, index) => (
                                <button
                                    key={product.id}
                                    className={`switcher-btn ${activeProduct === index ? 'active' : ''}`}
                                    onClick={() => setActiveProduct(index)}
                                    style={{
                                        '--btn-color': product.color,
                                        '--btn-gradient': product.gradient
                                    }}
                                >
                                    {product.logo ? (
                                        <img src={product.logo} alt={product.name} className="switcher-logo" />
                                    ) : (
                                        <i className={product.icon}></i>
                                    )}
                                    <span className="switcher-name">{product.name}</span>
                                    {activeProduct === index && <span className="active-indicator"></span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Product Card */}
                    <div className="hero-product-display">
                        <div
                            className="product-showcase-card"
                            style={{
                                '--card-color': currentProduct.color,
                                '--card-gradient': currentProduct.gradient,
                                '--card-rgb': currentProduct.colorRgb
                            }}
                        >
                            {/* Glow Effect */}
                            <div className="card-glow"></div>

                            {/* Offer Badge */}
                            <div className="offer-badge">{currentProduct.offer}</div>

                            {/* Product Image */}
                            <div className="product-image-wrapper">
                                <img
                                    src={currentProduct.heroImage}
                                    alt={currentProduct.name}
                                    className="product-hero-img"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="product-card-info">
                                <div className="product-header">
                                    {currentProduct.logo ? (
                                        <img src={currentProduct.logo} alt="" className="product-logo-small" />
                                    ) : (
                                        <div className="product-icon-box" style={{ background: currentProduct.gradient }}>
                                            <i className={currentProduct.icon}></i>
                                        </div>
                                    )}
                                    <div>
                                        <h2>{currentProduct.name}</h2>
                                        <p className="product-tagline-small">{currentProduct.tagline}</p>
                                    </div>
                                    <span className="live-indicator">
                                        <span className="live-dot"></span> Live
                                    </span>
                                </div>

                                <p className="product-desc-short">{currentProduct.description}</p>

                                {/* Mini Features */}
                                <div className="mini-features">
                                    {currentProduct.features.map((f, i) => (
                                        <div key={i} className="mini-feature">
                                            <i className={f.icon}></i>
                                            <span>{f.title}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats Bar */}
                                <div className="stats-bar">
                                    {Object.entries(currentProduct.stats).map(([key, value], i) => (
                                        <div key={i} className="stat-item">
                                            <span className="stat-val">{value}</span>
                                            <span className="stat-key">{key}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={currentProduct.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="explore-btn"
                                    style={{ background: currentProduct.gradient }}
                                >
                                    <span>Explore {currentProduct.name}</span>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className="products-grid-section">
                <div className="section-header">
                    <span className="section-badge">Our Products</span>
                    <h2>Everything You Need to <span className="text-gradient">Grow</span></h2>
                </div>

                <div className="products-mega-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="mega-product-card"
                            style={{
                                '--card-color': product.color,
                                '--card-gradient': product.gradient
                            }}
                        >
                            <div className="mega-card-bg">
                                <img src={product.heroImage} alt="" />
                            </div>

                            <div className="mega-card-content">
                                <div className="mega-logo-area">
                                    {product.logo ? (
                                        <img src={product.logo} alt="" className="mega-logo" />
                                    ) : (
                                        <div className="mega-icon" style={{ background: product.gradient }}>
                                            <i className={product.icon}></i>
                                        </div>
                                    )}
                                    <span className="mega-status">Live</span>
                                </div>

                                <h3>{product.name}</h3>
                                <p className="mega-tagline">{product.tagline}</p>
                                <p className="mega-desc">{product.shortDesc}</p>

                                <div className="mega-features">
                                    {product.features.slice(0, 3).map((f, i) => (
                                        <span key={i} className="mega-feature-pill">
                                            <i className={f.icon}></i> {f.title}
                                        </span>
                                    ))}
                                </div>

                                <div className="mega-offer">{product.offer}</div>

                                <a
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mega-cta"
                                >
                                    Get Started <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Comparison */}
            <section className="comparison-section">
                <div className="section-header">
                    <span className="section-badge">Compare</span>
                    <h2>Choose Your <span className="text-gradient">Solution</span></h2>
                </div>

                <div className="comparison-table">
                    <div className="comparison-header">
                        <div className="comparison-cell header-cell">Features</div>
                        {products.map(p => (
                            <div key={p.id} className="comparison-cell header-cell product-header-cell">
                                {p.logo ? (
                                    <img src={p.logo} alt="" className="comp-logo" />
                                ) : (
                                    <i className={p.icon} style={{ color: p.color }}></i>
                                )}
                                <span>{p.name}</span>
                            </div>
                        ))}
                    </div>

                    {['Cloud Based', 'API Access', 'Analytics', 'Automation', 'Templates'].map((feature, i) => (
                        <div key={i} className="comparison-row">
                            <div className="comparison-cell feature-name">{feature}</div>
                            {products.map(p => (
                                <div key={p.id} className="comparison-cell">
                                    <i className="fas fa-check-circle" style={{ color: p.color }}></i>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-ultra">
                <div className="cta-bg-effects">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-inner">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Join hundreds of businesses already using Vayunex products</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-btn-primary">
                            <i className="fas fa-headset"></i> Contact Sales
                        </Link>
                        <a href="https://paynex.vayunexsolution.com/" className="cta-btn-secondary">
                            <i className="fas fa-play"></i> Try Free Demo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
