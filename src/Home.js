import React from 'react';

function Home() {
  return (
    <section className="home flex-center" id="home">
      <div className="home-container">
        <div className="media-icons">
          <a href="https://www.facebook.com/jesus.islord99/" id="fb" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href='https://www.instagram.com/eliiyas_t/?hl=en'id="insta" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/eliyas-kassaye/" id="linkedin" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="https://api.whatsapp.com/send?phone=+358405390711" id="whatsapp" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i></a>
          <a href="https://github.com/eliyasson" id="git" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
        </div>
        <div className="info">
          <h2>I am <span>Eliyas Kassaye</span></h2>
          <h3>Web Developer</h3>
          <a href="#contact" class="btn">Contact Me <i class="fas fa-arrow-circle-right"></i></a>
        </div>
        <div className="home-img">
          <img src="./Images/eliyas.png" alt="Eliyas" />
        </div>
      </div>
    </section>
  );
}

export default Home;
