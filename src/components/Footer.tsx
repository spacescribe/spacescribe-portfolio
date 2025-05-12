// import React from 'react';
// import { NavLink } from 'react-router';  
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; 2025 Nandini Choukimath. All rights reserved.</p>
      </div>
      {/* <nav className="social-nav">
        <NavLink 
          to="https://www.linkedin.com/in/nandini-choukimath/" 
          target="_blank" 
          className="social-link">
          LinkedIn
        </NavLink>
        <NavLink 
          to="https://github.com/spacescribe" 
          target="_blank" 
          className="social-link">
          GitHub
        </NavLink>
        <NavLink 
          to="https://twitter.com/nandinich" 
          target="_blank" 
          className="social-link">
          Twitter
        </NavLink>
      </nav> */}
    </footer>
  );
};

export default Footer;