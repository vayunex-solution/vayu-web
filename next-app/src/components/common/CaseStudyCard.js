import React from 'react';
import './CaseStudyCard.css';

const CaseStudyCard = ({ title, category, results, imageUrl, clientName }) => {
  return (
    <div className="case-study-card">
      <div className="case-study-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="case-study-overlay">
          <span className="case-study-category">{category}</span>
        </div>
      </div>
      <div className="case-study-content">
        <div className="case-study-header">
          <h3 className="case-study-title">{title}</h3>
          <span className="case-study-client">Client: {clientName}</span>
        </div>
        <div className="case-study-results">
          <h4>Key Results</h4>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i> {result}
              </li>
            ))}
          </ul>
        </div>
        <button className="btn-read-more">Read Full Case Study <i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
