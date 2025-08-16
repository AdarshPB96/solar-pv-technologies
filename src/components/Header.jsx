import React from "react";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Solar PV Technologies home">
          <img src="/logo.png" alt="Solar PV Technologies logo" className="logo" />
          <span className="brand-text">Solar PV Technologies</span>
        </a>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="btn btn--small" href="#quote">Get a Quote</a>
        </nav>
        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
