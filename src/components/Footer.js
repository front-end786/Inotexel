import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/images/logo (2).png" alt="InoTexel Logo" />
          </div>
          <p className="footer-desc">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </p>
          {/* <div className="social-links">
            <a href="#" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="#" aria-label="YouTube">
              ▶
            </a>
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="TikTok">
              ♪
            </a>
          </div> */}
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>
              <Link to="/services">Features</Link>
            </li>
            <li>
              <Link to="/services">Integrations</Link>
            </li>
            <li>
              <Link to="/services">Updates</Link>
            </li>
            <li>
              <Link to="/services">FAQ</Link>
            </li>
            <li>
              <Link to="/services">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/home-alt">About</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/">Manifesto</Link>
            </li>
            <li>
              <Link to="/">Press</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to="/">Examples</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
            <li>
              <Link to="/">Guides</Link>
            </li>
            <li>
              <Link to="/">Docs</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Security</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
