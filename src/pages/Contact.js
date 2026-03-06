import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-hero">
        <div className="contact-content">
          <p className="contact-subtitle">Contact us anytime</p>
          <h1>Let's start a <span className="highlight">conversation.</span></h1>
          <p className="contact-description">
            Have a project in mind or just want to explore our platform features? 
            Our team is ready to help you streamline your workflow today.
          </p>

          <div className="contact-info-cards">
            <div className="info-card">
              <div className="icon-wrapper email-icon">✉</div>
              <h3>Email Us</h3>
              <p>hello@inotexel.com</p>
              <p>support@inotexel.com</p>
            </div>

            <div className="info-card">
              <div className="icon-wrapper location-icon">📍</div>
              <h3>Visit HQ</h3>
              <p>1200 Tech Boulevard</p>
              <p>San Francisco, CA 94103</p>
            </div>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-marker">📍</div>
              <p className="map-credit">inoTexel HQ</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-card">
            <h2>Get in Touch</h2>
            <p className="form-subtitle">We usually respond within 2 hours.</p>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Jane" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="jane@company.com" />
              </div>

              <div className="form-group">
                <label>Topic</label>
                <select>
                  <option>Product Support</option>
                  <option>Sales Inquiry</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us how we can help..."></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
