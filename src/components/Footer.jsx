import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="Solar PV Technologies logo" className="logo small" />
          <div>
            <div className="brand-text">Solar PV Technologies</div>
            <div className="muted">Clean energy • Security • Backup</div>
          </div>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copy muted">
          © {new Date().getFullYear()} Solar PV Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
