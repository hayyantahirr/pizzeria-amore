import React from "react";
import Image from "next/image";

const wheatLeft = "/extra's/wheat-1.svg";
const wheatRight = "/extra's/wheat-duo.svg";
const mainImage = "/extra's/pizza-shop.jpg";

const Sec1 = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[#F5F2EF] overflow-hidden">
      {/* Left background wheat-1 */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-0 pointer-events-none select-none ">
        <Image
          src={wheatRight}
          alt="Wheat Right"
          fill
          className="object-contain object-right opacity-30 "
          priority
        />
      </div>
      {/* Right background wheat-duo */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-0 pointer-events-none select-none ">
        <Image
          src={wheatLeft}
          alt="Wheat Left"
          fill
          className="object-contain object-left opacity-30 "
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 py-16 md:py-24 mx-auto gap-8">
        {/* Main image (left, only visible on md and up) */}
        <div className="hidden md:flex flex-1 items-center justify-center mb-8 md:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={mainImage}
              alt="Pizza Shop"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
        {/* Text content (right) */}
        <div className="flex-1 flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight mb-4 font-serif">
            {/* Replace with Figma heading text if different */}
            Pizzeria Amore
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 font-light max-w-xl">
            {/* Replace with Figma subtext if different */}
            Step into our pizza shop and feel the warmth of Italy. From our open
            kitchen to our friendly staff, every detail is crafted to bring you
            an authentic experience.
          </p>
          <a
            href="/about"
            className="inline-block  text-[#DE6868] text-sm md:text-md font-semibold   transition-colors duration-200"
          >
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
