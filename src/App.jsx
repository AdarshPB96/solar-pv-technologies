import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Badges from "./components/Badges";
import Services from "./components/Services";
import About from "./components/About";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./components/StyleTag.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Solar PV Technologies";
  }, []);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Badges />
      <Services />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
