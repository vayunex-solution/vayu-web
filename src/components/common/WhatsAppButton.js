import React, { useState } from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // WhatsApp number - format: country code + number (no + or spaces)
  const phoneNumber = '919518051255';
  const message = encodeURIComponent('Hi! I would like to know more about Vayunex services.');
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon">
        <i className="fab fa-whatsapp"></i>
      </div>
      <span className="whatsapp-tooltip">Chat with us!</span>
      
      {/* Pulse animation rings */}
      <span className="pulse-ring"></span>
      <span className="pulse-ring delay"></span>
    </a>
  );
};

export default WhatsAppButton;
