import React from "react";
import Image from "next/image";
import Link from "next/link";

const watermarkSrc = "/extra's/whole-pizza-watermark.png";
const mainImageSrc = "/pizza-images/premio.jpg";
const signatureSrc = "/extra's/signature design.svg";

const Hero = () => {
  return (
    <section className="mt-15 relative w-full min-h-[70vh] flex items-center justify-center  overflow-hidden">
      {/* Watermark images (always visible, but only 4 on mobile) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        {/* 4 watermark images always visible */}
        <Image
          src={watermarkSrc}
          alt="Watermark"
          width={180}
          height={180}
          className="absolute top-4 left-8 opacity-10"
          style={{ zIndex: 1 }}
        />
        <Image
          src={watermarkSrc}
          alt="Watermark"
          width={120}
          height={120}
          className="absolute top-1/2 left-1/4 opacity-10"
          style={{ zIndex: 1 }}
        />
        <Image
          src={watermarkSrc}
          alt="Watermark"
          width={140}
          height={140}
          className="absolute top-10 right-1/4 opacity-10"
          style={{ zIndex: 1 }}
        />
        <Image
          src={watermarkSrc}
          alt="Watermark"
          width={160}
          height={160}
          className="absolute bottom-10 right-8 opacity-10"
          style={{ zIndex: 1 }}
        />
        {/* 3 watermark images hidden on mobile */}
        <Image
          src={watermarkSrc}
          alt="Watermark"
          width={100}
          height={100}
          className="absolute bottom-8 left-12 opacity-10 hidden md:block"
          style={{ zIndex: 1 }}
        />
        <Image
          src={watermarkSrc}
          alt="Watermark"
          width={110}
          height={110}
          className="absolute top-1/3 right-10 opacity-10 hidden md:block"
          style={{ zIndex: 1 }}
        />
        <Image
          src={watermarkSrc}
          alt="Watermark"
          width={90}
          height={90}
          className="absolute bottom-1/4 right-1/3 opacity-10 hidden md:block"
          style={{ zIndex: 1 }}
        />
      </div>
      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 py-16 md:py-24 mx-auto">
        {/* Text content (left, always visible) */}
        <div className="flex-1 flex flex-col items-start text-left order-2 md:order-1 mr-5">
          {/* Signature image above heading (always visible) */}
          <div className="mb-2 w-48 md:w-64 ">
            <Image
              src={signatureSrc}
              alt="Signature"
              width={308}
              height={46}
              className="w-full h-auto"
            />
          </div>
          {/* Main heading (black) */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-2 font-serif ">
            Welcome to Pizzeria Amore
          </h1>
          {/* Subtext below heading */}
          <p className="text-base md:text-lg text-gray-700 mb-6 font-light max-w-xl">
            Experience the authentic taste of Italy with our handcrafted pizzas,
            fresh ingredients, and cozy atmosphere. Your slice of amore awaits!
          </p>
          <Link href="/menu">
            <button
              href="/menu"
              className="inline-block bg-[#DE6868] text-white text-lg md:text-xl  px-2 py-1 rounded-lg shadow hover:bg-[#c94c4c] transition-colors duration-200"
            >
              View Menu
            </button>
          </Link>
        </div>
        {/* Main image (right, desktop only) */}
        <div className="hidden md:flex flex-1 items-center justify-center order-1 md:order-2">
          <div className="relative w-80 h-80 rounded-full shadow-lg overflow-hidden">
            <Image
              src={mainImageSrc}
              alt="Premio Pizza"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
