import React from "react";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container grid two-col">
        <div className="about-media">
          <img src="/logo.png" alt="Solar panels on a modern roof" />
        </div>
        <div className="about-copy">
          <h2>About Us</h2>
          <p>
            At <strong>Solar PV Technologies</strong>, we combine practical on-ground experience with
            reliable components to deliver long-lasting systems. From the first site visit to after-sales
            service, our team keeps things simple, transparent and on time.
          </p>
          <ul className="checklist">
            <li>Clean cable management and weather-proof mounting</li>
            <li>Load study, shadow analysis & safety-first design</li>
            <li>Documentation help for approvals and subsidies</li>
          </ul>
          <a href="#contact" className="btn btn--primary">Talk to an Engineer</a>
        </div>
      </div>
    </section>
  );
}
