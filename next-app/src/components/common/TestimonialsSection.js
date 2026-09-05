import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    clientName: "Rahul Sharma",
    company: "Tech Retailers",
    content: "Vayunex Solutions completely transformed our digital presence. Their PayNex billing software streamlined our entire checkout process, and their SEO efforts 10x'd our organic traffic.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=0D8ABC&color=fff"
  },
  {
    id: 2,
    clientName: "Anita Desai",
    company: "EduCare Academy",
    content: "SchoolDost by Vayunex is a game-changer. It digitized our entire student management system within weeks. The team is highly responsive and technically brilliant.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Anita+Desai&background=9f55ff&color=fff"
  },
  {
    id: 3,
    clientName: "Vikram Singh",
    company: "Global Logistics",
    content: "Their AI data science team helped us optimize our supply chain routes. We saved 15% on fuel costs in the first quarter alone. Highly recommend Vayunex for enterprise solutions.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=00d4ff&color=fff"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">Don't just take our word for it. See what our enterprise partners have to say.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.clientName} className="author-image" />
                <div className="author-details">
                  <h4 className="author-name">{testimonial.clientName}</h4>
                  <span className="author-company">{testimonial.company}</span>
                </div>
                <div className="author-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
