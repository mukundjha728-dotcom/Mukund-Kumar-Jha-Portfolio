import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact"; 
import Footer from "../components/Footer"; 
import MahadevCodeBackground from "../components/MahadevCodeBackground";

const Home = () => {
  return (
    <>
      {/* Global fixed background — visible across entire website */}
      <MahadevCodeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Contact /> 
      </main>
      <div className="relative z-10">
        <Footer /> 
      </div>
    </>
  );
};

export default Home;
