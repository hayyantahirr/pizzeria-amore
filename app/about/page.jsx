import React from "react";
import AboutHero from "@/Components/AboutHero";
import AboutSec1 from "@/Components/AboutSec-1";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutSec1/>
      <Footer />
    </>
  );
};

export default page;
