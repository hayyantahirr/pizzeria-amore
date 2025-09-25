

import React from "react";
import AboutHero from "@/Components/AboutHero";
import AboutSec1 from "@/Components/AboutSec-1";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AnimateOnScroll from "@/Components/AnimateOnScroll";

const page = () => {
  return (
    <>
      <Navbar />
      <AnimateOnScroll animation="fadeIn" duration={1.2}>
        <AboutHero />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fadeIn" duration={1.2} delay={0.3}>
        <AboutSec1/>
      </AnimateOnScroll>
      <Footer />
    </>
  );
};

export default page;
