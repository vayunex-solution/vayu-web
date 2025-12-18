import React from 'react';
import PageHeader from '../components/common/PageHeader';
import SEO from '../components/common/SEO';
import '../styles/InnerPage.css';

const CareersPage = () => {
    // Perks & Benefits ka naya data
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

    return (
        <div className="inner-page">
            <SEO 
              title="Careers - Join Our Innovative Tech Team in Tricity"
              description="Explore exciting tech career opportunities at Vayunex. We're hiring for remote and in-office positions in the Chandigarh area. Join a culture of growth."
              keywords="Tech jobs Chandigarh, IT careers Mohali, remote jobs, software developer jobs Panchkula, work at Vayunex, hiring developers Punjab"
            />
            <PageHeader
                title="Join Our Team"
                subtitle="Become a part of a culture that values innovation, growth, and collaboration."
            />
            <div className="page-content">
                <section className="content-section">
                    <h2>Why Work at Vayunex?</h2>
                    <p>
                        At Vayunex, we are more than just a company; we are a community of passionate individuals driven by a common goal: to make a difference. We offer a dynamic work environment where creativity is encouraged, and every voice is heard. If you are looking to challenge yourself and grow with a forward-thinking company, Vayunex is the place for you.
                    </p>
                </section>

                {/* --- Naya Perks & Benefits Section --- */}
                <section className="content-section">
                    <h2>Perks & Benefits</h2>
                    <div className="perks-grid">
                        {perks.map((perk, index) => (
                            <div className="perk-card" key={index}>
                                <div className="perk-icon"><i className={perk.icon}></i></div>
                                <h3 className="perk-title">{perk.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <h2>Open Positions</h2>
                    <div className="job-listings">
                        {openPositions.map((job, index) => (
                            <div className="job-card" key={index}>
                                <div className="job-info">
                                    <h3 className="job-title">{job.title}</h3>
                                    <p className="job-location">
                                        <span className="job-department">{job.department}</span> | {job.location}
                                    </p>
                                </div>
                                <button className="job-apply-btn">Apply Now</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CareersPage;