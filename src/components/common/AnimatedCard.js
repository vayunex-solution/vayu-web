import React from 'react';
import './AnimatedCard.css';

const AnimatedCard = ({ icon, title, description }) => {
  return (
    <div className="animated-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default AnimatedCard;