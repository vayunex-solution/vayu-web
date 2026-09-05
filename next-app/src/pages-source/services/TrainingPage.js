import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import FAQAccordion from '../../components/common/FAQAccordion';
import ServiceTrustLayer from '../../components/common/ServiceTrustLayer';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import QuickAnswers from '../../components/common/QuickAnswers';
import './ServicesPage.css';

const TrainingPage = () => {
    const [heroRef, heroVisible] = useScrollAnimation();
    const [problemsRef, problemsVisible] = useScrollAnimation();
    const [outcomesRef, outcomesVisible] = useScrollAnimation();
    const [capabilitiesRef, capabilitiesVisible] = useScrollAnimation();
    const [deliverablesRef, deliverablesVisible] = useScrollAnimation();
    const [industriesRef, industriesVisible] = useScrollAnimation();
    const [techRef, techVisible] = useScrollAnimation();
    const [processRef, processVisible] = useScrollAnimation();

    const problemsSolved = [
        { icon: 'fas fa-graduation-cap', title: 'Outdated Curriculum', desc: 'Universities teaching 10-year-old frameworks that companies no longer use in production.' },
        { icon: 'fas fa-briefcase', title: 'Skill Gaps', desc: 'Corporate teams struggling to adopt modern cloud and AI technologies efficiently.' },
        { icon: 'fas fa-users-slash', title: 'Lack of Practical Experience', desc: 'Graduates knowing the theory but unable to build scalable, real-world applications.' },
        { icon: 'fas fa-chart-line', title: 'High Turnover', desc: 'Companies losing top talent because they fail to invest in continuous technical upskilling.' }
    ];

    const outcomes = [
        {
            icon: 'fas fa-rocket',
            title: 'Job-Ready Engineering',
            desc: 'Equip individuals with the exact modern stacks required by top-tier tech companies.',
            color: '#4facfe'
        },
        {
            icon: 'fas fa-server',
            title: 'Corporate Upskilling',
            desc: 'Transform your legacy IT team into a modern, agile cloud engineering unit.',
            color: '#9f55ff'
        },
        {
            icon: 'fas fa-code-branch',
            title: 'Production Experience',
            desc: 'Learn by building real, deployable SaaS applications, not just toy projects.',
            color: '#00d4ff'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Future-Proof Skills',
            desc: 'Stay ahead of the curve by mastering AI integration, modern DevOps, and scalable architecture.',
            color: '#ff6b6b'
        }
    ];

    const capabilities = [
        { name: 'Full-Stack Development', icon: 'fas fa-laptop-code', color: '#61DAFB' },
        { name: 'Cloud & DevOps', icon: 'fas fa-cloud', color: '#339933' },
        { name: 'AI & Data Science', icon: 'fas fa-brain', color: '#3776AB' },
        { name: 'Corporate Bootcamps', icon: 'fas fa-building', color: '#47A248' },
        { name: '1-on-1 Mentorship', icon: 'fas fa-user-tie', color: '#FF9900' },
        { name: 'Placement Prep', icon: 'fas fa-briefcase', color: '#FFCA28' }
    ];

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

    const targetAudience = [
        { icon: 'fas fa-user-graduate', title: 'Students', desc: 'Bridging the gap between academic theory and industry requirements to secure high-paying jobs.', color: '#4facfe' },
        { icon: 'fas fa-sync', title: 'Career Transitioners', desc: 'Non-technical professionals looking to successfully pivot into software engineering.', color: '#9f55ff' },
        { icon: 'fas fa-building', title: 'Enterprise Teams', desc: 'Corporate cohorts requiring intensive upskilling in modern cloud and AI architectures.', color: '#00d4ff' },
        { icon: 'fas fa-code', title: 'Junior Developers', desc: 'Leveling up to senior roles by mastering system design and advanced full-stack concepts.', color: '#ff6b6b' }
    ];

    const techStack = [
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
        { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
        { name: 'TensorFlow', icon: 'fas fa-network-wired', color: '#FF6F00' },
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' }
    ];

    const process = [
        { step: '01', title: 'Live Classes', desc: 'Interactive, real-time sessions with senior industry engineers.' },
        { step: '02', title: 'Hands-on Projects', desc: 'Building production-grade clones and custom SaaS applications.' },
        { step: '03', title: 'Code Reviews', desc: 'Strict peer and mentor code reviews via GitHub pull requests.' },
        { step: '04', title: 'Mentorship', desc: 'Weekly 1-on-1 sessions to unblock progress and discuss system design.' },
        { step: '05', title: 'Certification', desc: 'Earning an industry-recognized certificate upon rigorous project evaluation.' },
        { step: '06', title: 'Placement', desc: 'Mock interviews, resume building, and direct referrals to our hiring network.' }
    ];

    const faqData = [
        {
            question: "Are the training sessions pre-recorded or live?",
            answer: "We focus on live, instructor-led sessions. This ensures you can ask questions in real-time, get unstuck immediately, and participate in live pair-programming exercises."
        },
        {
            question: "Do you offer corporate or team training?",
            answer: "Yes. We offer customized corporate bootcamps tailored to your company's specific tech stack to rapidly upskill your engineering teams."
        },
        {
            question: "Is placement guaranteed?",
            answer: "While no ethical institution can guarantee a job, we provide robust placement assistance including mock technical interviews, resume optimization, and direct referrals to our partner network."
        },
        {
            question: "Do I need prior coding experience?",
            answer: "Our Full-Stack and Python courses are designed from scratch for absolute beginners. Our advanced AI and DevOps modules do require foundational programming knowledge."
        },
        {
            question: "Is there ongoing support provided?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution remains secure, updated, and fully optimized."
        }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Skill Development & Corporate Training",
        "provider": {
            "@type": "Organization",
            "name": "Vayunex Solution"
        },
        "serviceType": "Educational Service"
    };

    return (
        <div className="service-page training-page">
            <SEO 
                title="Corporate IT Training & Skill Development | Vayunex Academy"
                description="Master full-stack development, AI, and cloud engineering through live, project-based training led by senior industry engineers."
                keywords="IT corporate training, full stack web development course, react training, python bootcamp, tech upskilling"
                canonicalUrl="https://vayunexsolution.com/services/training"
                faqData={faqData}
                structuredData={serviceSchema}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumbs />
                <QuickAnswers 
                    title="What is Corporate IT Training?"
                    answer="Corporate IT Training involves upskilling your engineering and business teams with the latest technologies. We provide expert-led workshops on AI, Cloud, React, and modern DevOps practices to ensure your workforce remains competitive and capable of delivering cutting-edge solutions."
                />
            </div>


            {/* 1. Hero */}
            <section className="service-hero" ref={heroRef}>
                <div className="service-hero-bg">
                    <div className="hero-orb orb-1"></div>
                    <div className="hero-orb orb-2"></div>
                    <div className="hero-grid"></div>
                </div>
                <div className={`service-hero-content ${heroVisible ? 'visible' : ''}`}>
                    <span className="service-badge">
                        <i className="fas fa-graduation-cap"></i> Skill Development
                    </span>
                    <h1>Master The Tech Stack <span className="text-gradient">Companies Actually Use</span></h1>
                    <p>Bridge the gap between outdated theory and modern production standards. We train individuals and corporate teams to build scalable software using modern cloud architectures.</p>
                    <div className="hero-cta-group">
                        <Link to="/contact?intent=training" className="cta-primary">
                            <i className="fas fa-paper-plane"></i> Explore Courses
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Business Problem */}
            <section className="tech-stack-section" ref={problemsRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${problemsVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">The Challenge</span>
                        <h2>Problems We <span className="text-gradient">Solve</span></h2>
                    </div>
                    <div className="tech-grid">
                        {problemsSolved.map((problem, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': '#ff6b6b', flexBasis: '250px', flexGrow: 1, alignItems: 'flex-start', textAlign: 'left' }}>
                                <i className={problem.icon} style={{ marginBottom: '10px' }}></i>
                                <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '5px' }}><strong>{problem.title}</strong></span>
                                <small style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{problem.desc}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Outcome */}
            <section className="service-types-section" ref={outcomesRef} style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <div className={`section-content ${outcomesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Educational Impact</span>
                        <h2>Focus On <span className="text-gradient">Outcomes</span></h2>
                    </div>
                    <div className="types-grid">
                        {outcomes.map((outcome, index) => (
                            <div 
                                key={index} 
                                className="type-card"
                                style={{ '--card-color': outcome.color, '--delay': `${index * 0.1}s` }}
                            >
                                <div className="type-icon">
                                    <i className={outcome.icon}></i>
                                </div>
                                <h3>{outcome.title}</h3>
                                <p>{outcome.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Capabilities */}
            <section className="tech-stack-section" ref={capabilitiesRef}>
                <div className={`section-content ${capabilitiesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Training Capabilities</span>
                        <h2>How We <span className="text-gradient">Teach</span></h2>
                    </div>
                    <div className="tech-grid">
                        {capabilities.map((cap, index) => (
                            <div
                                key={index}
                                className="tech-item"
                                style={{ '--tech-color': cap.color, minWidth: '180px' }}
                            >
                                <i className={cap.icon}></i>
                                <span>{cap.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Deliverables (Courses) */}
            <section className="service-types-section" ref={deliverablesRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${deliverablesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">What We Teach</span>
                        <h2>Core <span className="text-gradient">Curriculum</span></h2>
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
                                <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    <strong>Duration:</strong> {course.duration} <br />
                                    <strong>Level:</strong> {course.level}
                                </p>
                                <ul className="type-examples" style={{ marginTop: '1rem' }}>
                                    {course.topics.map((topic, i) => (
                                        <li key={i}><i className="fas fa-check"></i> {topic}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Industries */}
            <section className="tech-stack-section" ref={industriesRef} style={{ background: 'var(--bg-secondary)' }}>
                <div className={`section-content ${industriesVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Who We Help</span>
                        <h2>Built For <span className="text-gradient">Ambitious</span> Engineers</h2>
                    </div>
                    <div className="tech-grid">
                        {targetAudience.map((audience, index) => (
                            <div key={index} className="tech-item" style={{ '--tech-color': audience.color, flexBasis: '250px', flexGrow: 1, alignItems: 'flex-start', textAlign: 'left' }}>
                                <i className={audience.icon} style={{ marginBottom: '10px' }}></i>
                                <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '5px' }}><strong>{audience.title}</strong></span>
                                <small style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{audience.desc}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Tech Stack */}
            <section className="tech-stack-section" ref={techRef} style={{ background: 'var(--bg-primary)' }}>
                <div className={`section-content ${techVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Technologies</span>
                        <h2>Stacks We <span className="text-gradient">Master</span></h2>
                    </div>
                    <div className="tech-grid">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="tech-item"
                                style={{ '--tech-color': tech.color }}
                            >
                                <i className={tech.icon}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Process Section */}
            <section className="process-section" ref={processRef}>
                <div className={`section-content ${processVisible ? 'visible' : ''}`}>
                    <div className="section-header">
                        <span className="section-badge">Methodology</span>
                        <h2>Our Learning <span className="text-gradient">Process</span></h2>
                    </div>
                    <div className="process-timeline">
                        {process.map((item, index) => (
                            <div
                                key={index}
                                className="process-item"
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className="process-number">{item.step}</div>
                                <div className="process-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Trust Layer */}
            <ServiceTrustLayer />

            {/* 10. FAQ Section */}
            <FAQAccordion faqs={faqData} title="Common Questions About Our Training" />

            {/* CTA Section */}
            <section className="service-cta-section">
                <div className="cta-bg">
                    <div className="cta-orb cta-orb-1"></div>
                    <div className="cta-orb cta-orb-2"></div>
                </div>
                <div className="cta-content">
                    <h2>Ready to Upgrade Your <span className="text-gradient">Tech Skills</span>?</h2>
                    <p>Join our next cohort and learn to build production-ready software.</p>
                    <div className="cta-buttons">
                        <Link to="/contact?intent=training" className="cta-primary">
                            <i className="fas fa-comments"></i> Enroll Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrainingPage;
