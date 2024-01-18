import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="hr"></div>
        <div className="follow group">
          <h3>Follow</h3>
          <ul>
            <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#" target="_blank"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright group">
        <p>Copyright © 2024 || All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

