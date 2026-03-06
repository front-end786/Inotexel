import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {/* <div className="logo-icon">IT</div>
          <span>InoTexel.AI</span> */}
          <img
            src="/images/logo (2).png"
            alt="InoTexel.AI Logo"
            className="logo-image"
          />
        </Link>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/careers" onClick={closeMenu}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/home-alt" onClick={closeMenu}>
              About Us
            </Link>
          </li>
        </ul>

        <div className="right-nav">
          <div
            className={`nav-burger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <Link to="/contact" className="nav-btn">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
