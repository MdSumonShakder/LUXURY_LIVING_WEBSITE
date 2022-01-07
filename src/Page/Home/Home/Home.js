import React from "react";
import Projects from "../Projects/Projects";
import Banner from "./../Banner/Banner";
import Services from "./../Services/Services";
import Testimonials from "./../Testimonials/Testimonials";
import Contact from "./../Contact/Contact";
import Footer from "./../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
