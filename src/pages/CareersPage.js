import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import FinalCTA from '../components/common/FinalCTA';
import CareerApplicationModal from '../components/common/CareerApplicationModal';
import { trackCareerApplyClick } from '../utils/analytics';
import './CareersPage.css';

const CareersPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const perks = [
        { icon: 'fas fa-globe', title: 'Remote First Culture' },
        { icon: 'fas fa-clock', title: 'Flexible Work Hours' },
        { icon: 'fas fa-chart-line', title: 'Career Growth' },
        { icon: 'fas fa-laptop-medical', title: 'Health & Wellness' },
        { icon: 'fas fa-users', title: 'Collaborative Team' },
        { icon: 'fas fa-graduation-cap', title: 'Continuous Learning' },
    ];

    const openPositions = [
        { title: 'Senior React Developer', location: 'Remote', department: 'Engineering' },
        { title: 'AI/ML Engineer', location: 'Remote', department: 'Data Science' },
        { title: 'Business Development Manager', location: 'Remote', department: 'Sales' },
        { title: 'UI/UX Designer', location: 'Remote', department: 'Design' },
    ];

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
        trackCareerApplyClick(job.title, job.department);
    };

    return (
        <main className="careers-page">
            <SEO 
              title="Careers - Join Our Innovative Tech Team in Tricity"
              description="Explore exciting tech career opportunities at Vayunex. We're hiring for remote and in-office positions in the Chandigarh area. Join a culture of growth."
              keywords="Tech jobs Chandigarh, IT careers Mohali, remote jobs, software developer jobs Panchkula, work at Vayunex, hiring developers Punjab"
            />
            
            {/* ========== HERO SECTION ========== */}
            <section className="careers-hero" aria-label="Careers Hero">
                <div className="careers-hero__bg">
                    <div className="cp-orb cp-orb--1" />
                    <div className="cp-orb cp-orb--2" />
                    <div className="cp-grid" />
                </div>
                
                <div className="container">
                    <div className="careers-hero__content fade-up is-visible">
                        <span className="section-eyebrow">Careers at Vayunex</span>
                        <h1 className="hero-heading">
                            Join Our <span className="gradient-text">Team</span>
                        </h1>
                        <p className="hero-subheading">
                            Become a part of a culture that values innovation, growth, and collaboration.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== CONTENT SECTIONS ========== */}
            <div className="cp-content container">
                
                <section className="cp-section">
                    <div className="cp-section-header">
                        <h2>Why Work at Vayunex?</h2>
                        <p>
                            At Vayunex, we are more than just a company; we are a community of passionate individuals driven by a common goal: to make a difference. We offer a dynamic work environment where creativity is encouraged, and every voice is heard. If you are looking to challenge yourself and grow with a forward-thinking company, Vayunex is the place for you.
                        </p>
                    </div>
                </section>

                <section className="cp-section">
                    <div className="cp-section-header">
                        <h2>Perks & Benefits</h2>
                    </div>
                    <div className="cp-perks-grid">
                        {perks.map((perk, index) => (
                            <div className="cp-perk-card" key={index}>
                                <div className="cp-perk-icon"><i className={perk.icon}></i></div>
                                <h3 className="cp-perk-title">{perk.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="cp-section">
                    <div className="cp-section-header">
                        <h2>Open Positions</h2>
                    </div>
                    <div className="cp-jobs-list">
                        {openPositions.map((job, index) => (
                            <div className="cp-job-card" key={index}>
                                <div className="cp-job-info">
                                    <h3 className="cp-job-title">{job.title}</h3>
                                    <div className="cp-job-meta">
                                        <span className="cp-job-department">{job.department}</span>
                                        <span className="cp-job-location"><i className="fas fa-map-marker-alt" style={{marginRight: '6px'}}></i>{job.location}</span>
                                    </div>
                                </div>
                                <button className="cp-job-apply-btn" onClick={() => handleApplyClick(job)}>Apply Now</button>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* ========== FINAL CTA ========== */}
            <FinalCTA />

            {/* ========== CAREER APPLICATION MODAL ========== */}
            <CareerApplicationModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedJob={selectedJob}
            />
        </main>
    );
};

export default CareersPage;