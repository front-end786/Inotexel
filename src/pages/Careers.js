import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Careers.css';

const Careers = () => {
  return (
    <div className="careers-page">
      <Navbar />
      
      <section className="careers-hero">
        <div className="careers-hero-content">
          <p className="careers-label">IT'S AN EXCITING TIME TO BE HERE</p>
          <h1>Join the future of <span className="highlight">Innovation & Texture</span></h1>
          <p className="careers-description">
            We're building the next generation of SaaS tools for creators, 
            developers, and innovators. Join our team of passionate professionals 
            shaping the future of digital collaboration.
          </p>
          <div className="careers-buttons">
            <button className="btn-primary">View Open Roles</button>
            <button className="btn-outline">Life at InoTexel</button>
          </div>
        </div>
      </section>

      <section className="perks-section">
        <div className="perks-container">
          <p className="section-label">OUR BENEFITS</p>
          <h2>Perks that power your potential</h2>
          
          <div className="perks-grid">
            <div className="perk-card">
              <div className="perk-icon">🏠</div>
              <h3>Remote-First Culture</h3>
              <p>
                Work from anywhere in the world. We believe great work happens 
                when you're in your element, whether that's your home office or a beach in Bali.
              </p>
            </div>

            <div className="perk-card">
              <div className="perk-icon">💚</div>
              <h3>Holistic Health</h3>
              <p>
                Comprehensive health, dental, and vision coverage for you and 
                your family. Plus mental health support and wellness stipends.
              </p>
            </div>

            <div className="perk-card">
              <div className="perk-icon">📈</div>
              <h3>Continuous Growth</h3>
              <p>
                Unlimited learning budget for courses, conferences, and certifications. 
                We invest in your growth because your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="life-section">
        <div className="life-container">
          <h2>Life at InoTexel</h2>
          <p className="life-subtitle">
            Experience a workplace where innovation meets work-life balance, 
            and every voice matters in shaping our future.
          </p>
          
          <div className="life-gallery">
            <div className="gallery-item large">
              <div className="gallery-image team"></div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image office"></div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image workspace"></div>
            </div>
            <div className="gallery-item quote-card">
              <div className="quote-content">
                <p className="quote-text">
                  "At InoTexel, I've found more than just a job—I've found a 
                  community that challenges me to grow while supporting my journey."
                </p>
                <div className="quote-author">
                  <div className="quote-avatar"></div>
                  <div>
                    <p className="quote-name">Maria Rodriguez</p>
                    <p className="quote-role">Senior Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image meeting"></div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image lounge"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="positions-section">
        <div className="positions-container">
          <h2>Open Positions</h2>
          <p className="positions-subtitle">Join our growing team</p>
          
          <div className="positions-list">
            <div className="position-card">
              <div className="position-header">
                <div>
                  <h3>Senior Full-Stack Engineer</h3>
                  <p className="position-meta">Engineering • Remote • Full-time</p>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <div>
                  <h3>Product Designer (UI/UX)</h3>
                  <p className="position-meta">Design • Remote • Full-time</p>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <div>
                  <h3>Frontend Developer</h3>
                  <p className="position-meta">Engineering • Remote • Full-time</p>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <div>
                  <h3>Marketing Manager</h3>
                  <p className="position-meta">Marketing • Remote • Full-time</p>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="positions-cta">
            <p>Don't see a role that fits?</p>
            <a href="#" className="link-btn">Send us your resume →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
