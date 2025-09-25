
import React from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { Libre_Franklin } from "next/font/google";
import Link from "next/link";

const wheatLeft = "/extra's/wheat-1.svg";
const wheatRight = "/extra's/wheat-duo.svg";
const mainImage = "/extra's/pizza-shop.jpg";

const Sec1 = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[#F5F2EF] overflow-hidden">
      {/* Left background wheat-1 */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-0 pointer-events-none select-none">
        <Image
          src={wheatRight}
          alt="Wheat Right"
          fill
          className="object-contain object-right opacity-30"
          priority
        />
      </div>
      {/* Right background wheat-duo */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-0 pointer-events-none select-none">
        <Image
          src={wheatLeft}
          alt="Wheat Left"
          fill
          className="object-contain object-left opacity-30"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 py-16 md:py-24 mx-auto gap-8">
        {/* Main image (left, only visible on md and up) */}
        <AnimateOnScroll 
          animation="fadeInLeft" 
          duration={1.2} 
          delay={0.2} 
          className="hidden md:flex flex-1 items-center justify-center mb-8 md:mb-0"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={mainImage}
              alt="Pizza Shop"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </AnimateOnScroll>
        
        {/* Text content (right) */}
        <div className="flex-1 flex flex-col items-start text-left">
          <AnimateOnScroll animation="fadeInRight" duration={1} delay={0.3}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight mb-4 font-serif">
              Pizzeria Amore
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeInRight" duration={1} delay={0.5}>
            <p className="text-base md:text-lg text-gray-700 mb-6 font-light max-w-xl">
              Step into our pizza shop and feel the warmth of Italy. From our open
              kitchen to our friendly staff, every detail is crafted to bring you
              an authentic experience.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeInUp" duration={1} delay={0.7}>
            <Link
              href="/about"
              className="inline-block text-[#DE6868] text-sm md:text-md font-semibold transition-colors duration-200"
            >
              Explore more
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
