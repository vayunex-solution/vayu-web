import React, { useState, useEffect } from 'react';
import { industryCompanies } from '../../data/industryCompanies';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './IndustryNetwork.css';

// Tooltip Component
const CardTooltip = ({ company }) => (
  <div className="company-card-tooltip">
    <strong className="tooltip-title">{company.name}</strong>
    <span className="tooltip-industry">{company.category}</span>
    {company.relationshipType && (
      <span className="tooltip-relationship">{company.relationshipType}</span>
    )}
  </div>
);

const CompanyTextCard = ({ company, isFeatured = false }) => {
  const CardContent = () => (
    <>
      {company.website && (
        <span className="website-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>
      )}
      <div className="company-card-content">
        <span className="company-name">{company.name}</span>
      </div>
      <CardTooltip company={company} />
    </>
  );

  const style = {
    '--hover-color': company.color,
    boxShadow: `inset 0 0 0 0 ${company.color}`,
  };

  const className = `company-card company-text-card ${isFeatured ? 'featured-card' : ''}`;

  if (company.website) {
    return (
      <a href={company.website} target="_blank" rel="noopener noreferrer" className={className} style={style}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 4px 20px -5px ${company.color}40, inset 0 0 0 1px ${company.color}`; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        aria-label={`Visit ${company.name} official website`}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className={className} style={style}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 4px 20px -5px ${company.color}40, inset 0 0 0 1px ${company.color}`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      <CardContent />
    </div>
  );
};

const CompanyImageCard = ({ company, imageSrc, onError, isFeatured = false }) => {
  const CardContent = () => (
    <>
      {company.website && (
        <span className="website-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </span>
      )}
      <div className="company-image-wrapper">
        <img src={imageSrc} alt={`${company.name} logo`} onError={onError} loading="lazy" />
      </div>
      <CardTooltip company={company} />
    </>
  );

  const style = {
    '--hover-color': company.color,
  };

  const className = `company-card company-image-card ${isFeatured ? 'featured-card' : ''}`;

  if (company.website) {
    return (
      <a href={company.website} target="_blank" rel="noopener noreferrer" className={className} style={style} aria-label={`Visit ${company.name} official website`}>
        <CardContent />
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      <CardContent />
    </div>
  );
};

const CompanyCard = ({ company, isFeatured = false }) => {
  const [imageError, setImageError] = useState(false);
  
  let imageSrc = null;
  if (company.cardType === 'image' && company.logoFile) {
    try {
       // Using require context correctly for static compilation fallback
       imageSrc = require(`../../assets/images/company-logos/${company.logoFile}`);
       if (imageSrc.default) imageSrc = imageSrc.default;
    } catch (e) {
       // fallback triggered immediately at render if file is missing locally
       imageSrc = null; 
    }
  }

  // If image fails to load via URL or import fails, fallback to text card
  if (!imageSrc || imageError || company.cardType !== 'image') {
     return <CompanyTextCard company={company} isFeatured={isFeatured} />;
  }

  return <CompanyImageCard company={company} imageSrc={imageSrc} onError={() => setImageError(true)} isFeatured={isFeatured} />;
};

const IndustryNetwork = ({ isCompact = false }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = ['All', 'Technology', 'Automobile', 'Jewellery', 'Healthcare', 'Education', 'Real Estate', 'Travel', 'Manufacturing'];

  const filteredCompanies = activeFilter === 'All' 
    ? industryCompanies 
    : industryCompanies.filter(c => c.category === activeFilter);

  const featuredCompanies = industryCompanies.filter(c => c.featured);
  
  // For the infinite marquee, duplicate the array to ensure smooth looping
  const marqueeItems = [...filteredCompanies, ...filteredCompanies];

  return (
    <section ref={ref} className={`industry-network-section ${isCompact ? 'compact-mode' : ''}`} aria-label="Industry Relationship Network">
      <div className="container">
        <div className={`industry-network-header fade-up ${isVisible ? 'is-visible' : ''}`}>
          <h2>Industry Relationship Network</h2>
          <p>
            Helping businesses connect with qualified talent across technology, automobile, healthcare, jewellery, education, manufacturing, real estate, and travel sectors.
          </p>
        </div>

        <div className={`industry-filters fade-up ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category}
              className={`industry-filter-chip ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Brands Row */}
        {activeFilter === 'All' && featuredCompanies.length > 0 && (
          <div className={`featured-brands-container fade-up ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
            <h3 className="featured-brands-title">Featured Brands</h3>
            <div className="featured-brands-row">
              {featuredCompanies.map((company, index) => (
                <CompanyCard key={`featured-${index}`} company={company} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Desktop Marquee (Hidden on mobile via CSS) */}
        {!isMobile && activeFilter === 'All' && (
          <div className={`industry-marquee-container fade-up ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="industry-marquee-track">
              {marqueeItems.map((company, index) => (
                <CompanyCard key={`marquee-${index}`} company={company} />
              ))}
            </div>
          </div>
        )}

        {/* Desktop Grid (Shown when filtered) */}
        {!isMobile && activeFilter !== 'All' && (
          <div className="industry-grid">
            {filteredCompanies.map((company, index) => (
              <CompanyCard key={`grid-${index}`} company={company} />
            ))}
          </div>
        )}

        {/* Mobile Grid (Always shown on mobile) */}
        {isMobile && (
          <div className={`mobile-grid-view fade-up ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
             {filteredCompanies.map((company, index) => (
              <CompanyCard key={`mobile-${index}`} company={company} />
            ))}
          </div>
        )}

        <div className={`industry-trust-statement fade-up ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
          <p>
            "Through recruitment, staffing, workforce consulting, and technology engagements, Vayunex has built relationships with businesses across multiple industries."
          </p>
          <p className="legal-disclaimer">
            * Company names are displayed to represent businesses within our recruitment, staffing, consulting, and industry engagement network. Display does not imply endorsement, partnership, or ownership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryNetwork;
