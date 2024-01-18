import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Headers from './Headers';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import ResponsiveNav from './ResponsiveNav';
import ScrollRevealComponent from './ScrollRevealComponent';

ReactDOM.render(
  <>
   <ResponsiveNav />
   <Headers />
   <Home />
   <About />
   <Skills />
   <Services />
   <Contact />
   <Footer />
  
   <ScrollRevealComponent />
  </>, 
document.getElementById("root"));