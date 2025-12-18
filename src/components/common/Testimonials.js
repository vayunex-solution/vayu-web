import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'CEO, TechStart India',
      company: 'TechStart India',
      content: 'Vayunex transformed our digital presence completely. Their team delivered a stunning website that exceeded our expectations. The attention to detail and technical expertise is remarkable.',
      rating: 5,
      avatar: null // Will use initials
    },
    {
      name: 'Priya Mehta',
      role: 'Founder, GreenLeaf Solutions',
      company: 'GreenLeaf Solutions',
      content: 'The recruitment services from Vayunex helped us find the perfect tech talent for our startup. Their understanding of our requirements and quick turnaround was impressive.',
      rating: 5,
      avatar: null
    },
    {
      name: 'Amit Kapoor',
      role: 'CTO, DataFlow Analytics',
      company: 'DataFlow Analytics',
      content: 'PayNex has revolutionized our billing process. The automation features save us hours every week, and the interface is incredibly intuitive. Highly recommended!',
      rating: 5,
      avatar: null
    },
    {
      name: 'Sneha Gupta',
      role: 'Director, CloudNine Enterprises',
      company: 'CloudNine Enterprises',
      content: 'Working with Vayunex on our AI integration project was a game-changer. Their team\'s expertise in data science helped us unlock insights we never knew existed.',
      rating: 5,
      avatar: null
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Generate initials from name
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Generate random gradient for avatar
  const getAvatarGradient = (name) => {
    const gradients = [
      'linear-gradient(135deg, #9f55ff, #7c3aed)',
      'linear-gradient(135deg, #00d4ff, #0099cc)',
      'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      'linear-gradient(135deg, #26de81, #20bf6b)',
      'linear-gradient(135deg, #fd79a8, #e84393)',
    ];
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
  };

  return (
    <section className="testimonials-section section">
      <div className="section-title-container">
        <h2 className="section-title">What Our Clients Say</h2>
      </div>
      
      <div className="testimonials-container">
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                opacity: index === currentIndex ? 1 : 0.3,
                zIndex: index === currentIndex ? 2 : 1
              }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <div className="testimonial-author">
                <div 
                  className="author-avatar"
                  style={{ background: getAvatarGradient(testimonial.name) }}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow prev" onClick={goToPrev} aria-label="Previous testimonial">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nav-arrow next" onClick={goToNext} aria-label="Next testimonial">
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Dots Navigation */}
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
