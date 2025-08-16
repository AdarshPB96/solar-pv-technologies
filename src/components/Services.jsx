import React from "react";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          End-to-end energy and security solutions—designed for Kerala’s climate and your budget.
        </p>
        <div className="card-grid">
          {servicesData.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-media">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-body">
                <div className="card-icon" aria-hidden>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#quote" className="link">Get a quote →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
