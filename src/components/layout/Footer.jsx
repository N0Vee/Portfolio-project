import React from 'react';
import '../style/Footer.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="glowing-dots">
          {Array.from({ length: 30 }).map((_, index) => (
            <div 
              key={index} 
              className="dot" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>

        {/* Section separator from MainSection */}
        <div className="section-separator">
          <div className="separator-content">
            <div className="separator-line"></div>
            <div className="separator-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="separator-line"></div>
          </div>
        </div>

        <div className="footer-content fade-in">
          <div className="footer-logo">
            <span className="highlight">Portfolio</span>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/education" className="footer-link">Education</a>
            <a href="/projects" className="footer-link">Projects</a>
          </div>

          {/* Social links from MainSection */}
          <div className="social-links">
            <a href="https://github.com/N0Vee" target="_blank" rel="noopener noreferrer" className="socialButton">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/wanichanon-saelee-0b2717252/" target="_blank" rel="noopener noreferrer" className="socialButton">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://discordapp.com/users/Nveee#9120" target="_blank" rel="noopener noreferrer" className="socialButton">
              <i className="fab fa-discord"></i>
            </a>
            <a href="mailto:contact@wanichanon.work@gmail.com" className="socialButton">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom fade-in">
          <p>© {currentYear} Wanichanon. All rights reserved.</p>
          <p className="built-with">
            Built with <span className="heart">❤</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;