import React from "react";
import Image from "next/image";

const watermarkSrc = "/extra's/about-watermark-1.svg";
const signatureSrc = "/extra's/signature design.svg";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center bg-[#F8F9FA] overflow-hidden mt-10">
      {/* Background watermarks */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Desktop: show watermark with left offset; Mobile: hide */}
        <div
          className="hidden sm:block absolute inset-0"
          style={{ left: "-800px" }}
        >
          <Image
            src={watermarkSrc}
            alt="Watermark"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Top-right partial watermark (about-watermark-2) */}
        <div className="absolute -top-8 right-[5px] w-[350px] h-[350px] hidden sm:block">
          <Image
            src="/extra's/about-watermark-2.png"
            alt="About Watermark 2"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Below second watermark (watermark-image-3) */}
        <div className="absolute top-[180px] right-[5px] w-[220px] h-[220px] hidden sm:block">
          <Image
            src="/extra's/about-watermark-3.svg"
            alt="Watermark 3"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-xl">
            {/* Signature just under heading, slightly left */}
            <div className="">
              <Image
                src={signatureSrc}
                alt="Signature"
                width={250}
                height={60}
              />
            </div>{" "}
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
              About Us
            </h1>
            {/* Subtext */}
            <p className="text-base md:text-lg text-[#2B231D] max-w-2xl">
              Crafted with passion and rooted in Italian tradition, our story is
              about family, flavor, and the joy of sharing great food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
