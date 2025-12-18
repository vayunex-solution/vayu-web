import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/InnerPage.css';
import './AboutPage.css';

// Team images
import yashAvatar from '../assets/images/yash.jpeg';
import ronitAvatar from '../assets/images/ronit.jpg';

const AboutPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [missionRef, missionVisible] = useScrollAnimation();
    const [valuesRef, valuesVisible] = useScrollAnimation();
    const [teamRef, teamVisible] = useScrollAnimation();

    const values = [
        { icon: 'fas fa-lightbulb', title: 'Innovation', description: 'Pushing boundaries and embracing new technologies.', color: '#ffc107' },
        { icon: 'fas fa-handshake', title: 'Partnership', description: 'Building lasting relationships with clients.', color: '#4facfe' },
        { icon: 'fas fa-star', title: 'Excellence', description: 'Delivering the highest quality in everything.', color: '#9f55ff' },
        { icon: 'fas fa-shield-alt', title: 'Integrity', description: 'Operating with transparency and honesty.', color: '#00d4ff' },
    ];

    const teamMembers = [
        {
            name: 'Yash Kumar',
            role: 'CEO & Founder',
            avatar: yashAvatar,
            description: 'A visionary leader with a passion for technology and a drive to turn ambitious ideas into market-realities.',
            social: { linkedin: '#', twitter: '#' }
        },
        {
            name: 'Rajesh',
            role: 'Co-Founder & CTO',
            avatar: ronitAvatar,
            description: 'The technical architect behind our innovative products, ensuring robustness and scalability.',
            social: { linkedin: '#', twitter: '#' }
        },
    ];

    return (
        <div className="about-page-premium">
            <SEO 
                title="About Us - Our Mission & Team | Vayunex Solution"
                description="Meet the team behind Vayunex. Learn about our mission, vision, and core values driving innovation in IT solutions."
                keywords="About Vayunex, Vayunex team, company mission, IT company values, tech leadership"
            />

            {/* Hero Section */}
            <section className="about-hero" ref={heroRef}>
                <div className="about-hero-bg">
                    <div className="hero-orb hero-orb-1"></div>
                    <div className="hero-orb hero-orb-2"></div>
                    <div className="hero-grid"></div>
                </div>
                <div className={`about-hero-content ${heroVisible ? 'visible' : ''}`}>
                    <span className="hero-badge">
                        <i className="fas fa-building"></i> About Us
                    </span>
                    <h1>We Build the <span className="text-gradient">Future</span></h1>
                    <p>A team of innovators, thinkers, and builders dedicated to engineering growth and delivering excellence.</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-section" ref={missionRef}>
                <div className={`mission-content ${missionVisible ? 'visible' : ''}`}>
                    <div className="mission-text">
                        <span className="section-badge">Our Purpose</span>
                        <h2>Mission & <span className="text-gradient">Vision</span></h2>
                        <p className="mission-main">
                            Our mission is to <strong>empower businesses</strong> with transformative digital solutions. We leverage cutting-edge technology and strategic insights to turn ambitious ideas into market-realities.
                        </p>
                        <p className="vision-text">
                            Our vision is to be a global leader in IT and business solutions, known for our commitment to innovation, quality, and client success.
                        </p>
                        <div className="mission-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Client-First Approach</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Cutting-Edge Technology</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Scalable Solutions</span>
                            </div>
                        </div>
                    </div>
                    <div className="mission-visual">
                        <div className="visual-card">
                            <div className="visual-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3>Engineering Growth</h3>
                            <p>Transforming ideas into scalable digital products</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section" ref={valuesRef}>
                <div className={`values-content ${valuesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What Drives Us</span>
                        <h2>Our Core <span className="text-gradient">Values</span></h2>
                    </div>
                    <div className="values-grid-premium">
                        {values.map((value, index) => (
                            <div 
                                key={index} 
                                className="value-card-premium"
                                style={{ '--value-color': value.color, '--delay': `${index * 0.1}s` }}
                            >
                                <div className="value-icon-box">
                                    <i className={value.icon}></i>
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section" ref={teamRef}>
                <div className={`team-content ${teamVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">The People</span>
                        <h2>Meet Our <span className="text-gradient">Founders</span></h2>
                    </div>
                    <div className="team-grid-premium">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={index} 
                                className="team-card-premium"
                                style={{ '--delay': `${index * 0.15}s` }}
                            >
                                <div className="team-avatar-container">
                                    <img src={member.avatar} alt={member.name} />
                                    <div className="avatar-glow"></div>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p>{member.description}</p>
                                    <div className="team-social">
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training CTA Section */}
            <section className="training-cta-section">
                <div className="training-cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="training-cta-content">
                    <span className="section-badge">Education</span>
                    <h2>Fueling the Next Generation of <span className="text-gradient">Tech Talent</span></h2>
                    <p>
                        Beyond products and services, we're committed to education. Our training portal offers hands-on courses in cutting-edge technologies.
                    </p>
                    <div className="cta-buttons">
                        <a href="https://academy.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="cta-btn-primary">
                            <i className="fas fa-graduation-cap"></i> Visit Training Portal
                        </a>
                        <Link to="/contact" className="cta-btn-secondary">
                            <i className="fas fa-headset"></i> Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;