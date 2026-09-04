import React from 'react';
import './QuickAnswers.css';

const QuickAnswers = ({ title, answer }) => {
  return (
    <div className="quick-answer-block" itemScope itemType="https://schema.org/CreativeWork">
      <div className="qa-badge">✨ AI Summary</div>
      <h3 itemProp="name" className="qa-title">{title}</h3>
      <p itemProp="text" className="qa-text">
        {answer}
      </p>
    </div>
  );
};

export default QuickAnswers;
