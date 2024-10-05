import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";
import Mygpa from "./Mygpa";

const Page = () => {
  return (
    <main className="overflow-x-hidden h-screen bg-white text-dark">
      {/* Navbar with absolute positioning */}
      <Navbar className="z-100 absolute top-0 left-0 right-0 w-full" />
      
      {/* Hero section with padding to go underneath the Navbar */}
      <section id="hero" > {/* Adjust padding to match navbar height */}
        <Hero className="z-1 " />
      </section> 
      <section>
        <Mygpa/>
      </section>
      <section id="features" className="mb-3"><Features /></section> 
      {/* <section id="contact"><Contact /></section>  */}
      <section id="footer"><Footer/></section>
    </main>
  );
};

export default Page;
