import React from 'react';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container flex-center">
        <h2 className="section-title">Contact Me</h2>
        <div className="content">
          <div className="contact-left">
            <h2 id="contact-h2">If you want to know more about me or my work, <br />or if you would just like to say hello, Just give me a call or send me an email. <br />I'd love to hear from you.</h2>
            <ul className="contact-list">
              <li>
                <h3 className="item-title"><i className="fas fa-phone"></i>Phone</h3>
                <span>+358405390711</span>
              </li>
              <li>
                <h3 className="item-title"><i className="fas fa-envelope"></i>Email Address</h3>
                <span><a href="mailto:example@example.com">eliyasson11@gmail.com</a></span>
              </li>
              <li>
                <h3 className="item-title"><i className="fas fa-map-marker-alt"></i>Address</h3>
                <span>Juustenintie 3 Helsinki, Finland</span>
              </li>
            </ul>
          </div>
          <div className="contact-right">
            <form action="https://formspree.io/f/xleqgrjp" method="POST" className="contact-form">
              <div className="first-row">
                <input type="text" name="Name" placeholder="Name" required />
              </div>
              <div className="second-row">
                <input type="email" name="Email" placeholder="Email" id="email" required />
                <input type="text" placeholder="Subject" required name="Subject" />
              </div>
              <div className="third-row">
                <textarea name="Message" rows="7" placeholder="Message" required></textarea>
              </div>
              <button className="btn" type="submit">Send Your Message <i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

