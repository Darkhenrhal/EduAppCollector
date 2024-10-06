import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";
import Mygpa from "./Mygpa";

const Page = () => {
  return (
    <main className="overflow-x-hidden overflow-y-auto bg-white text-dark">
      <section id="hero" className="">
        <Hero className="z-1" />
      </section>
      <section id="features" className="mb-4">
        <Features />
      </section>
      <section id="contact" className="bg-greylight pt-16 pb-16">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default Page;
