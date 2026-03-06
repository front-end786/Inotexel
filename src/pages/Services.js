import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />

      <section className="services-hero">
        <div className="services-hero-content">
          <h1>
            Innovation that <span className="highlight">Scales With You</span>
          </h1>
          <p className="services-description">
            From AI-powered insights to cloud-scale infrastructure, our platform
            is engineered to enhance your team's ability to build and deploy
            world-class digital products.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          {/* <div className="floating-cube"></div> */}
          <img
            src="/images/Container.png"
            alt="Services Hero"
            className="services-hero-image"
          />
        </div>
      </section>

      <section className="services-grid">
        <div className="services-container">
          <h2 className="section-title">
            Comprehensive <span className="highlight">Tech Solutions</span>
          </h2>
          <p className="section-subtitle">
            Identify your goals and challenges, and we'll provide the tools and
            services designed for the modern enterprise.
          </p>

          <div className="services-cards">
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/mobile.png" alt="Android Icon" />
              </div>
              <h3>Mobile Applications</h3>
              <p>
                We build mobile apps that don't crash, lag, or make users rage-
                quit. iOS or Android? Both? Doesn't matter.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/web app.png" alt="Web Icon" />
              </div>
              <h3>Web Application</h3>
              <p>
                We design and develop fast, beautiful, and bulletproof web apps
                that actually work (and don't crash on demo day).
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/ui-ux.png" alt="Design Icon" />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                We help you sprinkle AI on your product - the useful kind, not
                the "ask me anything and I'll hallucinate" kind.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/AI SAAS PRODUCTS.png" alt="AI SAAS PRODUCT" />
              </div>
              <h3>AI-SaaS Products</h3>
              <p>
                We design and develop fast, beautiful, and bulletproof web apps
                that actually work (and don't crash on demo day).
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/AI DEVELOPMENT.png" alt="AI DEV Icon" />
              </div>
              <h3>AI Development</h3>
              <p>
                We design and develop fast, beautiful, and bulletproof web apps
                that actually work (and don't crash on demo day).
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/automations.png" alt="Automation Icon" />
              </div>
              <h3>Clude Automation</h3>
              <p>
                We automate your workflows so you can scale without hiring 10
                more people. Custom-built and done-for-you for profits.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/images/BLOCKCHAIN AND WEB3.png"
                  alt="Blockchain Icon"
                />
              </div>
              <h3>BlockChain & WEB3</h3>
              <p>
                Decentralized applications and smart contracts. Build the future
                of finance, gaming, and digital ownership.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/images/ai-ml.png" alt="AI/ML Icon" />
              </div>
              <h3>AI/ML Solutions</h3>
              <p>
                We help you sprinkle AI on your product - the useful kind, not
                the "ask me anything and I'll hallucinate" kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <h2>Why InoTexel?</h2>

          <div className="why-cards">
            <div className="why-card">
              <div className="why-icon">
                <img src="/images/why-inotexel (1).png" alt="Fast Icon" />
              </div>
              <h3>Rapid Deployment</h3>
              <p>
                Our CI/CD pipelines and automated testing ensure you get
                features to market faster without breaking things.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <img src="/images/why-inotexel (2).png" alt="Security Icon" />
              </div>
              <h3>Enterprise Security</h3>
              <p>
                Security is baked in, not bolted on. We follow industry best
                practices to protect your data and intellectual property.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <img src="/images/why-inotexel (3).png" alt="Support Icon" />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Our global team ensures that someone is always watching your
                infrastructure, ready to respond to any incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-container">
          <h2>Trusted by innovative teams</h2>
          <div className="testimonial-logos">
            <div className="company-logo">Acme Corp</div>
            <div className="company-logo">Quantum</div>
            <div className="company-logo">Echo Valley</div>
            <div className="company-logo">Celestial</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "InoTexel transformed our legacy systems into a modern,
              cloud-native infrastructure. The results were immediate—50% faster
              deployments and a 99.9% uptime. Our developers love the platform."
            </p>
            <div className="testimonial-author">
              {/* <div className="author-avatar"></div> */}
              <div>
                <p className="author-name">Sarah Chen</p>
                <p className="author-title">CTO, TechFlow Inc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to start your project?</h2>
          <p>
            Let's discuss how InoTexel can help you achieve your business goals
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

export default Services;
