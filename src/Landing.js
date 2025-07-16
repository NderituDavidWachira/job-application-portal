import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  // Refs for observing visibility
  const statsRef = useRef(null);
  const workRef = useRef(null);
  const catRef = useRef(null);
  const successRef = useRef(null);
  const ctaRef = useRef(null);

  const [count, setCount] = useState({ workers: 0, repeat: 0, response: 0, rating: 0 });

  const serviceCategories = [
    { name: 'Cleaning Services', icon: '🧹', path: '/category/cleaning' },
    { name: 'Childcare', icon: '👶', path: '/category/childcare' },
    { name: 'Plumbing', icon: '🔧', path: '/category/plumbing' },
    { name: 'Electrical', icon: '💡', path: '/category/electrical' },
    { name: 'Masonry', icon: '🧱', path: '/category/masonry' },
    { name: 'Transport', icon: '🚗', path: '/category/transport' },
    { name: 'Tutoring', icon: '📚', path: '/category/tutoring' },
    { name: 'Beauty', icon: '💇', path: '/category/beauty' },
  ];

  // Animate numbers on scroll
  const animateCounts = () => {
    let frame = 0;
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = t => t * (2 - t);

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount({
        workers: Math.floor(10000 * progress),
        repeat: Math.floor(85 * progress),
        response: Math.floor(24 * progress),
        rating: (progress * 4.9).toFixed(1),
      });
      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);
  };

  useEffect(() => {
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (el === statsRef.current) animateCounts();
        } else {
          el.classList.remove('is-visible');
          if (el === statsRef.current) {
            setCount({ workers: 0, repeat: 0, response: 0, rating: 0 });
          }
        }
      });
    }, options);

    const refs = [statsRef, workRef, catRef, successRef, ctaRef];
    refs.forEach(ref => ref.current && observer.observe(ref.current));

    return () => {
      refs.forEach(ref => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section - Always Visible */}
      <section className="hero-section">
        <div className="hero-content fade-in-left is-visible">
          <h1 className="black-title">Connecting Skilled Workers with Local Opportunities</h1>
          <p className="hero-subtitle">
            Find trusted professionals or get hired for your skills.
            Join thousands of workers and clients in our growing community.
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => navigate('/login')}>Find Work</button>
            <button className="cta-secondary" onClick={() => navigate('/login')}>Hire Workers</button>
          </div>
        </div>
        <div className="hero-image-container fade-in-right is-visible">
          <img src="/images/Day care.jpg" alt="Skilled workers smiling" className="hero-image" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section fade-in" ref={statsRef}>
        <div className="stat-item"><h3>{count.workers.toLocaleString()}+</h3><p>Skilled Workers</p></div>
        <div className="stat-item"><h3>{count.repeat}%</h3><p>Repeat Hire Rate</p></div>
        <div className="stat-item"><h3>{count.response}h</h3><p>Avg Response Time</p></div>
        <div className="stat-item"><h3>{count.rating}★</h3><p>Avg Rating</p></div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works fade-in" ref={workRef}>
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step"><div className="step-number">1</div><h3>Create Your Profile</h3><p>Showcase your skills, experience, and availability</p></div>
          <div className="step"><div className="step-number">2</div><h3>Get Matched</h3><p>We connect you with relevant job opportunities</p></div>
          <div className="step"><div className="step-number">3</div><h3>Start Working</h3><p>Begin building your career and client base</p></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section fade-in" ref={catRef}>
        <h2>Popular Service Categories</h2>
        <div className="categories-grid">
          {serviceCategories.map((category, index) => (
            <div key={index} className="category-card" onClick={() => navigate(category.path)}>
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section fade-in" ref={successRef}>
        <h2>Success Stories</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"This platform changed my life. I now have a steady stream of clients."</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/Day care.jpg" alt="Sarah K." />
              <div><h4>Sarah K.</h4><p>Professional Cleaner</p></div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"I found a great childcare provider here. Life has been much easier!"</p>
            </div>
            <div className="testimonial-author">
              <img src="/images/Day care.jpg" alt="James M." />
              <div><h4>James M.</h4><p>Satisfied Client</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta fade-in" ref={ctaRef}>
        <h2>Ready to Get Started?</h2>
        <p>Join our community today and take control of your work life</p>
        <div className="cta-buttons">
          <button className="cta-primary" onClick={() => navigate('/login')}>Sign Up Now</button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
