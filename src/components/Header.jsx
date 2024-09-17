import React from 'react'; import './Header.css';

const Header = () => {
  return (
    <header className="blog-header">
      <div className="logo">My Blog</div>
      <div className="social-icons">
        <a href="https://github.com/parmarkriss" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i> </a>
        <a href="https://www.linkedin.com/in/krissparmar/" target="_blank" rel="noreferrer"> 
          <i className="fab fa-linkedin"></i> </a>
        <a href="https://www.instagram.com/kriss__0823/" target="_blank" rel="noreferrer"> <i className="fab fa-instagram"></i> </a>
      </div>
    </header>
  );
};

export default Header; 