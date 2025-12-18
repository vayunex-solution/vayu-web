import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './ProcessTimeline.css';

const ProcessTimeline = () => {
    const [ref, isVisible] = useScrollAnimation();

    const processSteps = [
        {
            icon: 'fas fa-search',
            title: '1. Discovery & Strategy',
            description: 'We begin by understanding your vision, challenges, and goals to create a tailored strategy for success.'
        },
        {
            icon: 'fas fa-pencil-ruler',
            title: '2. Design & Prototyping',
            description: 'Our team designs intuitive, user-centric interfaces and prototypes to bring the strategic vision to life.'
        },
        {
            icon: 'fas fa-cogs',
            title: '3. Engineering & Development',
            description: 'Using cutting-edge technology, we build robust, scalable, and high-performance solutions.'
        },
        {
            icon: 'fas fa-rocket',
            title: '4. Delivery & Growth',
            description: 'We deploy the solution and provide ongoing support to ensure continuous growth and market adaptation.'
        }
    ];

    return (
        <div ref={ref} className={`process-timeline ${isVisible ? 'is-visible' : ''}`}>
            {processSteps.map((step, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-icon">
                        <i className={step.icon}></i>
                    </div>
                    <div className="timeline-content">
                        <h4 className="timeline-title">{step.title}</h4>
                        <p className="timeline-description">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProcessTimeline;
