import React from 'react';

const ResponsiveNav = () => {
  const handleMenuClick = () => {
    navigation.classList.add("active");
  };

  const handleCloseClick = () => {
    navigation.classList.remove("active");
  };

  return (
    <>
      <div className="nav-menu-btn" onClick={handleMenuClick}></div>
      <div className="nav-close-btn" onClick={handleCloseClick}></div>
    </>
  );
};

export default ResponsiveNav;