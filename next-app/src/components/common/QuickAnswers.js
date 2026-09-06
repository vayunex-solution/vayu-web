import React from 'react';
import './QuickAnswers.css';

const QuickAnswers = ({ title, answer }) => {
  return (
    <div className="quick-answer-block" itemScope itemType="https://schema.org/CreativeWork">
      <div className="qa-badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        AI Summary
      </div>
      <h3 itemProp="name" className="qa-title">{title}</h3>
      <p itemProp="text" className="qa-text">
        {answer}
      </p>
    </div>
  );
};

export default QuickAnswers;
