import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(getSavedTheme());
  const [icon, setIcon] = useState(getSavedIcon());

  const handleThemeChange = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem("saved-theme", newTheme);
      return newTheme;
    });

    setIcon((prevIcon) => {
      const newIcon = prevIcon === 'moon' ? 'sun' : 'moon';
      localStorage.setItem("saved-icon", newIcon);
      return newIcon;
    });
  };

  function getSavedTheme() {
    return localStorage.getItem("saved-theme") || 'light';
  }

  function getSavedIcon() {
    return localStorage.getItem("saved-icon") || 'moon';
  }

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  return (
    <div className={`theme-btn flex-center ${theme}`} onClick={handleThemeChange}>
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
    </div>
  );
};

export default ThemeSwitcher;

