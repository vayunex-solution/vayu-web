import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './VayunexLabs.css';

const VayunexLabs = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section ref={ref} className={`vayunex-labs-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="labs-container">
                <div className="labs-header">
                    <span className="labs-badge">Vayunex Labs</span>
                    <h2 className="labs-title">
                        Not Just an Agency. <br />
                        <span className="gradient-text">We Build Digital Legacies.</span>
                    </h2>
                    <p className="labs-subtitle">
                        Explore our flagship platforms engineered entirely in-house by Vayunex Solution.
                    </p>
                </div>

                <div className="labs-grid">
                    {/* SocialNex Card */}
                    <div className="lab-card socialnex-card">
                        <div className="card-glow-bg socialnex-glow"></div>
                        <div className="lab-card-inner">
                            <div className="card-header">
                                <h3 className="product-name">SocialNex</h3>
                                <span className="product-status">Beta</span>
                            </div>
                            <h4 className="product-tagline">Stop Wasting 10 Hours a Week. Automate Everything.</h4>
                            <p className="product-description">
                                Your AI-powered social media command center. Schedule posts, generate AI graphics, and dominate 6+ platforms from a single dashboard.
                            </p>
                            
                            <ul className="feature-list">
                                <li>
                                    <i className="fas fa-check-circle"></i> 
                                    <span>Write Once, Rule Everywhere</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> 
                                    <span>Built-in Gemini AI Designer</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> 
                                    <span>Set-and-Forget Scheduling</span>
                                </li>
                            </ul>

                            <div className="card-footer">
                                <Link to="/socialnex" className="lab-cta socialnex-cta">
                                    Claim Free Early Access <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* SchoolDost Card */}
                    <div className="lab-card schooldost-card">
                        <div className="card-glow-bg schooldost-glow"></div>
                        <div className="lab-card-inner">
                            <div className="card-header">
                                <h3 className="product-name">SchoolDost</h3>
                                <div className="live-indicator">
                                    <span className="live-dot"></span> Live
                                </div>
                            </div>
                            <h4 className="product-tagline">India's #1 Verified Student Network.</h4>
                            <p className="product-description">
                                Not just another generic social app. An exclusive, 100% verified community for Indian college students to connect, share resources, and level up. No randos allowed.
                            </p>
                            
                            <ul className="feature-list">
                                <li>
                                    <i className="fas fa-check-circle"></i> 
                                    <span>100% Verified Peers</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> 
                                    <span>Smart Campus Matching</span>
                                </li>
                                <li>
                                    <i className="fas fa-check-circle"></i> 
                                    <span>Gamified Growth</span>
                                </li>
                            </ul>

                            <div className="card-footer">
                                <Link to="/schooldost" className="lab-cta schooldost-cta">
                                    Join The Campus Network <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VayunexLabs;
