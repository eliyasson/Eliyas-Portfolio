import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent = () => {
  useEffect(() => {
    ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 100
    });

    ScrollReveal().reveal('.home .info h2, .section-title-02', { delay: 500, origin: 'left' });
    // ... Other ScrollReveal configurations

    ScrollReveal().reveal('.service-container, .skills-container', { delay: 500, origin: 'bottom', interval: 200 });
  }, []);

  return null;
};

export default ScrollRevealComponent;
