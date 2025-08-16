import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-icons">
          <a href="tel:+918943710783" className="contact-icon" aria-label="Call us">
            📞 +91 8943710783
          </a>
          <a href="mailto:pvsolartechnologies@gmail.com" className="contact-icon" aria-label="Email us">
            📧 pvsolartechnologies@gmail.com
          </a>
          <a
            href="https://wa.me/918943710783"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Chat on WhatsApp"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
