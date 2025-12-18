import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ServicesPage.css';

const TrainingPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [coursesRef, coursesVisible] = useScrollAnimation();
    const [methodRef, methodVisible] = useScrollAnimation();

    const courses = [
        {
            icon: 'fab fa-react',
            title: 'Full Stack Web Development',
            duration: '4 Months',
            level: 'Beginner to Advanced',
            topics: ['HTML, CSS, JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Deployment'],
            color: '#61DAFB'
        },
        {
            icon: 'fab fa-python',
            title: 'Python Programming',
            duration: '3 Months',
            level: 'Beginner',
            topics: ['Python Basics', 'OOP Concepts', 'Web Scraping', 'Automation', 'Projects'],
            color: '#3776AB'
        },
        {
            icon: 'fas fa-brain',
            title: 'Data Science & AI',
            duration: '5 Months',
            level: 'Intermediate',
            topics: ['Python for Data', 'ML Algorithms', 'Deep Learning', 'Model Deployment'],
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Mobile App Development',
            duration: '4 Months',
            level: 'Beginner to Intermediate',
            topics: ['React Native', 'Flutter Basics', 'App Publishing', 'Firebase'],
            color: '#00d4ff'
        }
    ];

    const methodology = [
        { icon: 'fas fa-video', title: 'Live Classes', desc: 'Interactive sessions with industry experts' },
        { icon: 'fas fa-laptop-code', title: 'Hands-on Projects', desc: 'Real-world projects for practical learning' },
        { icon: 'fas fa-users', title: 'Mentorship', desc: '1-on-1 guidance from experienced mentors' },
        { icon: 'fas fa-certificate', title: 'Certification', desc: 'Industry-recognized certificates' },
        { icon: 'fas fa-briefcase', title: 'Placement Support', desc: 'Career guidance and job assistance' },
        { icon: 'fas fa-infinity', title: 'Lifetime Access', desc: 'Access to recordings and resources forever' }
    ];

    return (
        <div className="service-page training-page">
            <SEO 
                title="Skill Development & Training | Vayunex Academy"
                description="Learn web development, Python, Data Science, and more with Vayunex Academy. Hands-on training with placement support."
                keywords="web development course, Python training, data science course, coding bootcamp, IT training"
            />

            {/* Hero */}
            <section className="service-hero" ref={heroRef}>
                <div className="service-hero-bg">
                    <div className="hero-orb orb-1"></div>
                    <div className="hero-orb orb-2"></div>
                    <div className="hero-grid"></div>
                </div>
                <div className={`service-hero-content ${heroVisible ? 'visible' : ''}`}>
                    <span className="service-badge">
                        <i className="fas fa-graduation-cap"></i> Vayunex Academy
                    </span>
                    <h1>Skill <span className="text-gradient">Development</span></h1>
                    <p>Empowering the next generation of tech talent through hands-on, industry-relevant training programs.</p>
                    <div className="hero-cta-group">
                        <a href="https://academy.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                            <i className="fas fa-external-link-alt"></i> Visit Academy
                        </a>
                        <Link to="/contact" className="cta-secondary">
                            <i className="fas fa-info-circle"></i> Enquire Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section className="service-types-section" ref={coursesRef}>
                <div className={`section-content ${coursesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Our Programs</span>
                        <h2>Featured <span className="text-gradient">Courses</span></h2>
                    </div>
                    <div className="types-grid">
                        {courses.map((course, index) => (
                            <div 
                                key={index} 
                                className="type-card"
                                style={{ '--card-color': course.color, '--delay': `${index * 0.1}s` }}
                            >
                                <div className="type-icon">
                                    <i className={course.icon}></i>
                                </div>
                                <h3>{course.title}</h3>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: course.color }}>
                                        <i className="fas fa-clock"></i> {course.duration}
                                    </span>
                                    <span style={{ fontSize: '0.8rem', color: '#888' }}>
                                        <i className="fas fa-signal"></i> {course.level}
                                    </span>
                                </div>
                                <ul className="type-examples">
                                    {course.topics.map((topic, i) => (
                                        <li key={i}><i className="fas fa-check"></i> {topic}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us / Methodology */}
            <section className="tech-stack-section" ref={methodRef}>
                <div className={`section-content ${methodVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Why Choose Us</span>
                        <h2>Our <span className="text-gradient">Methodology</span></h2>
                    </div>
                    <div className="tech-grid">
                        {methodology.map((item, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': '#9f55ff' }}>
                                <i className={item.icon}></i>
                                <span><strong>{item.title}</strong></span>
                                <small style={{ color: '#888', fontSize: '0.75rem', textAlign: 'center' }}>{item.desc}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Start Your <span className="text-gradient">Tech Journey</span> Today</h2>
                    <p>Join thousands of students who have transformed their careers with Vayunex Academy.</p>
                    <div className="cta-buttons">
                        <a href="https://academy.vayunexsolution.com/" target="_blank" rel="noopener noreferrer" className="cta-primary">
                            <i className="fas fa-graduation-cap"></i> Explore Courses
                        </a>
                        <Link to="/contact" className="cta-secondary">
                            <i className="fas fa-phone"></i> Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrainingPage;
