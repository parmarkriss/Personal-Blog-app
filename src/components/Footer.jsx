import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
        <div className="social-icons">
          <a href="" className="social-icon">Github</a>
          <a href="" className="social-icon">Linkedin</a>
          <a href="" className="social-icon">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
