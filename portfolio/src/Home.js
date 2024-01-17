import React from 'react';

function Home() {
  return (
    <section className="home flex-center" id="home">
      <div className="home-container">
        <div className="media-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-whatsapp"></i>
        <i className="fab fa-github"></i>
        </div>
        <div className="info">
          <h2>I am <span>Eliyas Kassaye</span></h2>
          <h3>Web Developer</h3>
          <a>Contact Me <i className="fas fa-arrow-circle-right"></i></a>
        </div>
        <div className="home-img">
          <img src="" alt="Your Alt Text Here" />
        </div>
      </div>
    </section>
  );
}

export default Home;
