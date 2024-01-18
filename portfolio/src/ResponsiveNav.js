import React, { useState } from 'react';

const ResponsiveNav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={`nav-menu-btn ${isActive ? 'active' : ''}`} onClick={handleMenuClick}></div>
      <div className={`nav-close-btn ${isActive ? 'active' : ''}`} onClick={handleCloseClick}></div>
    </>
  );
};

export default ResponsiveNav;
