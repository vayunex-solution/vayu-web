import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const CityTemplate = () => {
    const { city } = useParams();
    const formattedCity = city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Top IT Company in ${formattedCity} | Vayunex Solution`,
        "description": `Vayunex Solution is the leading IT and software development company serving businesses in ${formattedCity}.`
    };

    return (
        <div className="programmatic-page">
            <SEO 
                title={`Top IT & Software Company in ${formattedCity} | Vayunex`}
                description={`Looking for the best IT company in ${formattedCity}? Vayunex Solution provides enterprise software, Web Development, and digital marketing services in ${formattedCity}.`}
                keywords={`IT company ${city}, software development ${city}, web development ${city}, digital marketing ${city}`}
                structuredData={schema}
            />
            
            <div style={{ maxWidth: '1200px', margin: '100px auto 50px', padding: '0 2rem' }}>
                <Breadcrumbs />
                <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Leading IT Services in <span style={{ color: 'var(--primary-color)' }}>{formattedCity}</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                    Empowering businesses in {formattedCity} with world-class digital solutions, AI integration, and robust enterprise software.
                </p>
                {/* Future: Dynamic content injection based on city */}
            </div>
        </div>
    );
};

export default CityTemplate;
