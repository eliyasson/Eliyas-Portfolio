import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent = () => {
  useEffect(() => {
    // Initialization - Call it only once when the component mounts
    ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 100
    });

    // Your reveal calls
    ScrollReveal().reveal('.home .info h2, .section-title-02', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.service-container, .skills-container', { delay: 500, origin: 'bottom', interval: 200 });

    // Cleanup - if necessary
    return () => {
      // Any cleanup logic, if needed
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return null;
};

export default ScrollRevealComponent;
