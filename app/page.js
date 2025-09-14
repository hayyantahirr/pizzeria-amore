import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Sec1 from "@/Components/sec-1";
import Sec2 from "@/Components/sec-2";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sec1 />
      <Sec2 />
    </>
  );
};

export default Home;
