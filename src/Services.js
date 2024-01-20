import React from 'react';

function Services() {
  return (
    <section class="services section" id="services">
        <div class="container flex-center">
            <h2 class="section-title">Services</h2>
            <div class="content">
                <ul class="service-list">
                    <li class="service-container">
                        <div class="service-card">
                            <i class="fa-solid fa-desktop"></i>
                            <h3>Web <br /> Design</h3>
                        </div>
                    </li>
                    <li class="service-container">
                        <div class="service-card">
                            <i class="fa-solid fa-desktop"></i>
                            <h3>Front-End Development</h3>
                        </div>
                    </li>
                    <li class="service-container">
                        <div class="service-card">
                            <i class="fa-solid fa-laptop-code"></i>
                            <h3>Responsive Design</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Services;
