import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const IndustryTemplate = () => {
    const { industry } = useParams();
    const formattedIndustry = industry.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `IT Solutions for ${formattedIndustry} | Vayunex Solution`,
        "description": `Custom enterprise software, AI integration, and digital marketing tailored specifically for the ${formattedIndustry} industry.`
    };

    return (
        <div className="programmatic-page">
            <SEO 
                title={`IT Solutions & Software for ${formattedIndustry}`}
                description={`Custom enterprise software, AI integration, and digital marketing tailored specifically for the ${formattedIndustry} industry by Vayunex Solution.`}
                keywords={`${industry} software, IT solutions for ${industry}, custom ${industry} development`}
                structuredData={schema}
            />
            
            <div style={{ maxWidth: '1200px', margin: '100px auto 50px', padding: '0 2rem' }}>
                <Breadcrumbs />
                <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    IT Solutions for the <span style={{ color: 'var(--primary-color)' }}>{formattedIndustry}</span> Industry
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                    Scalable, enterprise-grade technology designed to solve the unique challenges of {formattedIndustry} businesses.
                </p>
                {/* Future: Dynamic content injection based on industry */}
            </div>
        </div>
    );
};

export default IndustryTemplate;
