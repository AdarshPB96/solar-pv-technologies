import React from "react";
import mainimage from "../assets/main_image.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container grid two-col">
        <div className="hero-copy">
          <h1>
            Solar Power for Homes & Businesses{" "}
            <span className="accent">— clean, reliable, affordable.</span>
          </h1>
          <p>
            We design and install high-efficiency on-grid, off-grid and hybrid solar systems,
            along with complete power-backup, batteries and smart security solutions.
          </p>
          <div className="cta-row">
            <a href="#quote" className="btn btn--primary">Get Free Site Visit</a>
            <a href="#services" className="btn btn--ghost">Explore Services</a>
          </div>
          <ul className="hero-points">
            <li>Custom design, quality hardware, neat installation</li>
            <li>Monitoring, warranty & after-sales support</li>
            <li>Guidance on subsidies and approvals</li>
          </ul>
        </div>
        <div className="hero-media">
          <img src={mainimage} alt="Technicians installing solar panels" />
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true" />
    </section>
  );
}
