import React from 'react';

function Footer() {
  return (
    <footer>
      
      <div className="footer-container">
        <div className="hr"></div>
        <div className="follow group">
          <h3>Follow</h3>
          <ul>
          <a href="https://www.facebook.com/jesus.islord99/" id="fb" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href='https://www.instagram.com/eliiyas_t/?hl=en'id="insta" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/eliyas-kassaye/" id="linkedin" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="https://api.whatsapp.com/send?phone=+358405390711" id="whatsapp" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
          <a href="https://github.com/eliyasson" id="git" target="_blank" rel="noreferrer"><i class="fab fa-github" ></i></a>
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

