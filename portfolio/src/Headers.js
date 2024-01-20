import React from 'react';

function Header() {
  return (
    
    <header>
      <div className="nav-bar" id="nav-bar">
      <a href="#home" className="logo">Eliyas</a>
        <div className="navigation">
          <div className="nav-items">
            <div className="nav-close-btn"></div>
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="nav-menu-btn"></div>
      </div>
    </header>
  );
}

export default Header;