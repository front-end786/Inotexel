import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Transforming Ideas into s{" "}
              <span className="highlight">Intelligent Digital Solutions</span>
            </h1>
            <p className="hero-description">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="hero-buttons">
              <Link to="/services">
                {" "}
                <button className="btn-primary">Explore Services</button>
              </Link>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>

          <div className="hero-image">
            <div className="placeholder-image team-meeting">
              <img src="/images/hero.png" alt="Team Meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="growth-section">
        <div className="growth-container">
          <div className="growth-content">
            <p className="section-label">WHAT WE BELIEVE IN</p>
            <h2>Empowering growth through relentless innovation.</h2>
            <p>
              We help the best technology minds be as scalable as it needs to
              be. Our platform is built to grow with you, adapting to your needs
              as they evolve.
            </p>
            <p>
              At the heart of our offering is a dedication to simplicity and
              power. We've engineered a platform that's both easy to use and
              incredibly powerful, allowing you to focus on what matters most:
              building great products.
            </p>
          </div>
          <div className="growth-stats">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <h3>Reliability</h3>
              <p className="stat-value">99.9%</p>
              <p>Uptime guaranteed for mission-critical applications</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <h3>Velocity</h3>
              <p className="stat-value">10x</p>
              <p>Faster deployment with our streamlined workflow</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔒</div>
              <h3>Security</h3>
              <p className="stat-value">Enterprise</p>
              <p>Grade protection for your data and applications</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* A more Effective */}

      <section className="growth-section">
        <p className="pill-intro">Boost your productivity</p>
        <div className="growth-content">
          <h2>A more effective way to track progress</h2>
          <p>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <img src="/images/group.png" alt="Growth" className="growth-image" />
      </section>

      <section className="journey-section">
        <h2>Our Journey</h2>
        <p className="journey-subtitle">
          From a garage startup to a global powerhouse
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker blue"></div>
            <div className="timeline-content">
              <h3>The Inception</h3>
              <p>
                It began with a simple idea: what if we could make cloud
                infrastructure as easy to use as a smartphone? Three engineers
                in San Francisco set out to make that vision a reality.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker purple"></div>
            <div className="timeline-content">
              <h3>Series A Funding</h3>
              <p>
                Our vision resonated. Leading VCs believed in our mission to
                democratize cloud infrastructure, providing the runway to scale
                our team and technology.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker pink"></div>
            <div className="timeline-content">
              <h3>Global Expansion</h3>
              <p>
                From a small startup to a global presence. We opened offices
                across three continents, bringing our platform to developers
                worldwide.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker cyan"></div>
            <div className="timeline-content">
              <h3>Defining the Standard</h3>
              <p>
                Today, we're not just building products—we're setting the
                standard for what modern cloud infrastructure should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Enterprise clients</p>
          </div>
          <div className="stat-item">
            <h3>35</h3>
            <p>Global data centers</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer support</p>
          </div>
          <div className="stat-item">
            <h3>100M+</h3>
            <p>API requests daily</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to start your project?</h2>
          <p>
            Let's discuss how we can help you achieve your business goals
            through technology.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Schedule Consultation</button>
            <button className="btn-secondary">View Pricing</button>
          </div>
          <p className="cta-note">
            No credit card required • Free 14-day trial
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
