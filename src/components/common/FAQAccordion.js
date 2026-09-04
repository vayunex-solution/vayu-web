import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './FAQAccordion.css';

const FAQAccordion = ({ faqs, title = "Frequently Asked Questions", subtitle = "Find answers to common questions about our services." }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [headerRef] = useScrollAnimation(0.2);
    const [faqRef, faqVisible] = useScrollAnimation(0.2);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="faq-section" ref={faqRef}>
            <div className={`container faq-container fade-up ${faqVisible ? 'is-visible' : ''}`}>
                <div className="section-header" ref={headerRef}>
                    <span className="section-badge">FAQ</span>
                    <h2>{title.split(' ').map((word, i) => 
                        i === title.split(' ').length - 1 ? <span key={i} className="text-gradient">{word}</span> : word + ' '
                    )}</h2>
                    <p className="section-subtitle">{subtitle}</p>
                </div>
                
                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${openIndex === index ? 'is-open' : ''}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <button 
                                className="faq-question" 
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3>{faq.question}</h3>
                                <div className="faq-icon">
                                    <span className="faq-plus"></span>
                                    <span className="faq-minus"></span>
                                </div>
                            </button>
                            <div 
                                className="faq-answer-wrapper" 
                                style={{ maxHeight: openIndex === index ? '500px' : '0' }}
                            >
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
