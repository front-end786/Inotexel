import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HomeAlt.css";

const HomeAlt = () => {
  return (
    <div className="home-alt-page">
      <Navbar />

      <section className="hero-alt">
        <div className="hero-alt-content">
          <h1>
            Transforming Ideas into{" "}
            <span className="gradient-text">Intelligent Digital Solutions</span>
          </h1>
          <p className="hero-alt-description">
            Full-service digital agency specializing in AI-powered applications,
            cloud infrastructure, and cutting-edge web solutions.
          </p>
          <div className="hero-alt-buttons">
            <button className="btn-primary">Get In</button>
            <button className="btn-outline">Explore</button>
          </div>
        </div>
      </section>

      <section className="effective-section">
        <div className="effective-container">
          <p className="section-label">OUR APPROACH</p>
          <h2>A more effective way to track progress</h2>

          <div className="effective-content">
            <div className="phone-mockup-large">
              <div className="phone-screen">
                <div className="screen-header">
                  <span>Tasks</span>
                </div>
                <div className="task-list">
                  <div className="task-item">✓ Design</div>
                  <div className="task-item">✓ Development</div>
                  <div className="task-item">□ Testing</div>
                  <div className="task-item">□ Deployment</div>
                  <div className="task-item">□ Launch</div>
                </div>
              </div>
            </div>

            <div className="decorative-elements">
              <div className="floating-element plant">🌿</div>
              <div className="floating-element sphere">⚪</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-alt-section">
        <div className="features-alt-container">
          <div className="feature-alt-card">
            <div className="feature-alt-icon">📊</div>
            <h3>Progress visualization</h3>
            <p>
              Track your project milestones with intuitive dashboards and
              real-time updates that keep everyone aligned.
            </p>
          </div>

          <div className="feature-alt-card">
            <div className="feature-alt-icon">🔄</div>
            <h3>Seamless sync & sharing</h3>
            <p>
              Collaborate effortlessly with automatic syncing across all devices
              and instant sharing capabilities.
            </p>
          </div>

          <div className="feature-alt-card">
            <div className="feature-alt-icon">📱</div>
            <h3>Works on all your devices</h3>
            <p>
              Access your projects anywhere, anytime. Fully responsive design
              works perfectly on desktop, tablet, and mobile.
            </p>
          </div>

          <div className="feature-alt-card">
            <div className="feature-alt-icon">🔔</div>
            <h3>Real-time notifications</h3>
            <p>
              Stay informed with instant notifications about project updates,
              deadlines, and team activities.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="management-section">
        <div className="management-container">
          <p className="section-label">STREAMLINED FOR EASY MANAGEMENT</p>
          <h2>Streamlined for easy management</h2>
          <p className="management-description">
            Organize your workflow with powerful tools designed to simplify 
            complex projects and boost team productivity.
          </p>

          <div className="management-grid">
            <div className="management-card">
              <div className="card-image green">
                <div className="chart-visual"></div>
              </div>
              <h3>Integration management</h3>
              <p>Connect all your favorite tools and services in one place</p>
            </div>

            <div className="management-card">
              <div className="card-image yellow">
                <div className="emoji-visual">🍋</div>
              </div>
              <h3>Goal setting and tracking</h3>
              <p>Set clear objectives and monitor progress with precision</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="testimonials-alt-section">
        <div className="testimonials-alt-container">
          <h2>What our users say</h2>

          <div className="testimonials-alt-grid">
            <div className="testimonial-alt-card">
              <p>
                "We were able to cut our development time in half. The platform
                is intuitive and the support team is incredibly responsive."
              </p>
              <div className="testimonial-alt-author">
                <div className="author-alt-avatar"></div>
                <div>
                  <p className="author-alt-name">Alex Martinez</p>
                  <p className="author-alt-role">Product Manager</p>
                </div>
              </div>
            </div>

            <div className="testimonial-alt-card">
              <p>
                "The best investment we've made for our team. Project visibility
                has improved dramatically and everyone stays on the same page."
              </p>
              <div className="testimonial-alt-author">
                <div className="author-alt-avatar"></div>
                <div>
                  <p className="author-alt-name">Jamie Lee</p>
                  <p className="author-alt-role">Engineering Lead</p>
                </div>
              </div>
            </div>

            <div className="testimonial-alt-card">
              <p>
                "Finally, a tool that actually makes sense. No steep learning
                curve, just straightforward project management that works."
              </p>
              <div className="testimonial-alt-author">
                <div className="author-alt-avatar"></div>
                <div>
                  <p className="author-alt-name">Chris Taylor</p>
                  <p className="author-alt-role">Startup Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeAlt;
