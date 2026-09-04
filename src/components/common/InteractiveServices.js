import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './InteractiveServices.css';

const InteractiveServices = ({ services }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [ref, isVisible] = useScrollAnimation();

    // Service icons mapping
    const serviceIcons = {
        "Web & App Development": "fas fa-code",
        "AI & Data Science": "fas fa-brain",
        "Recruitment & Staffing": "fas fa-users",
        "Digital Marketing": "fas fa-bullhorn",
        "Growth & SEO Strategy": "fas fa-chart-line",
        "Skill Development": "fas fa-graduation-cap"
    };

    // Service colors mapping
    const serviceColors = {
        "Web & App Development": "#4facfe",
        "AI & Data Science": "#9f55ff",
        "Recruitment & Staffing": "#00d4ff",
        "Digital Marketing": "#ff6b6b",
        "Growth & SEO Strategy": "#28a745",
        "Skill Development": "#feca57"
    };

    if (!services || services.length === 0) {
        return null;
    }

    return (
        <div ref={ref} className={`services-showcase ${isVisible ? 'is-visible' : ''}`}>
            {/* Background Effects */}
            <div className="services-bg-effects">
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
            </div>

            {/* Section Header */}
            <div className="services-header">
                <span className="services-badge">
                    <i className="fas fa-sparkles"></i> What We Do
                </span>
                <h2>Our <span className="gradient-text">Services</span></h2>
                <p>Comprehensive solutions to accelerate your business growth</p>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
                {services.map((service, index) => (
                    <Link
                        to={service.link || '/contact'}
                        key={service.title}
                        className={`service-card ${hoveredIndex === index ? 'hovered' : ''}`}
                        style={{
                            '--card-color': serviceColors[service.title] || '#9f55ff',
                            '--delay': `${index * 0.1}s`
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Card Glow */}
                        <div className="card-glow"></div>

                        {/* Card Content */}
                        <div className="card-inner">
                            {/* Icon */}
                            <div className="service-icon-wrapper">
                                <div className="icon-bg"></div>
                                <i className={serviceIcons[service.title] || 'fas fa-cog'}></i>
                            </div>

                            {/* Title */}
                            <h3 className="service-title">{service.title}</h3>

                            {/* Description */}
                            <p className="service-desc">{service.description}</p>

                            {/* CTA */}
                            <div className="service-cta">
                                <span>Explore</span>
                                <div className="arrow-container">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>

                            {/* Hover Image Preview */}
                            <div className="hover-preview">
                                <img src={service.imageUrl} alt={service.title} loading="lazy" />
                            </div>
                        </div>

                        {/* Shine Effect */}
                        <div className="card-shine"></div>
                    </Link>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="services-bottom-cta">
                <Link to="/contact" className="main-cta-btn">
                    <span>Start Your Project</span>
                    <i className="fas fa-rocket"></i>
                </Link>
            </div>
        </div>
    );
};

export default InteractiveServices;
