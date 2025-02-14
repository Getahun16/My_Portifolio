import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Nav from "@/pages/Nav";
import NavMobile from "@/pages/NavMobile";
import Project from "@/pages/Project";
import Services from "@/pages/Services";
import Skills from "@/pages/Skills"; // Fixed incorrect import
import Footer from "@/pages/Footer";
import AboutMe from "@/pages/AboutMe";
import ScrollUpButton from "./ScrollUpButton";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []); // Added empty dependency array to prevent infinite re-renders

  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default HomePage;
