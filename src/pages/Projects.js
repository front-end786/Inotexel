import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar />

      <section className="projects-hero">
        <div className="projects-hero-content">
          <p className="projects-subtitle">BOOSTING OUR PROJECTS</p>
          <h1>
            Our Work Speaks <span className="highlight">Louder Than Code</span>
          </h1>
          <p className="projects-description">
            Explore a curated selection of our most impactful projects. From
            AI-driven analytics to immersive mobile experiences, we build
            digital products that define the future.
          </p>

          <div className="project-filters">
            <button className="filter-btn active">All Work</button>
            <button className="filter-btn">AI & ML</button>
            <button className="filter-btn">Web Apps</button>
            <button className="filter-btn">Mobile</button>
            <button className="filter-btn">Design Systems</button>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-container">
          <div className="project-card large">
            <div className="project-card-large-buttons">
              <button className="card-btn">View Case Study</button>
              <button className="card-btn">Visit Site</button>
            </div>
            <h3>Nexus Analytics</h3>
            <p>
              A powerful real-time analytics platform that empowers millions of
              data cubes in real-time for enterprise decision making.
            </p>
          </div>

          <div className="project-card finflow">
            <div className="project-info ">
              <h3>FinFlow Wallet</h3>
              <p>Digital wallet solution</p>
            </div>
          </div>

          <div className="project-card dark-phone">
            <div className="project-info">
              <img
                src="./images/finger-print.png"
                alt="finger-print"
                className="finger-print"
              />
              <h3>Secure ID</h3>
              <p>Biometric authentication SDK for mobile applications</p>
            </div>
          </div>

          <div className="project-card medium">
            <div className="project-info">
              <h3>Retro Future</h3>
              <p>Vintage-inspired music player with modern features</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta">
        <div className="project-cta-content">
          <h2>Your Project Here?</h2>
          <p>Let's work together on something amazing</p>
          <button className="cta-btn">Contact Us</button>
        </div>
      </section>

      {/* <section className="trusted-section">
        <p className="trusted-label">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="trusted-logos">
          <div className="logo-item">AWS</div>
          <div className="logo-item">Google</div>
          <div className="logo-item">Airbnb</div>
          <div className="logo-item">Stripe</div>
          <div className="logo-item">Spotify</div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Projects;
