
import React from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const coffeeBeansBg = "/extra's/coffe beans bg.png";

const Sec3 = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#F5F2EF] overflow-hidden py-16">
      {/* Coffee beans background watermark */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <Image
          src={coffeeBeansBg}
          alt="Coffee Beans Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Signature above heading */}
            <AnimateOnScroll animation="fadeIn" duration={1} delay={0.2}>
              <div className="mb-6 flex justify-center lg:justify-start">
                <Image
                  src="/extra's/signature design.svg"
                  alt="Signature"
                  width={200}
                  height={60}
                />
              </div>
            </AnimateOnScroll>

            {/* Main heading */}
            <AnimateOnScroll animation="fadeInUp" duration={1.2} delay={0.3}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Authentic Italian Experience
              </h2>
            </AnimateOnScroll>

            {/* Subheading */}
            <AnimateOnScroll animation="fadeInUp" duration={1} delay={0.4}>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                From our family recipes passed down through generations to the
                finest ingredients imported directly from Italy, we bring you the
                true taste of authentic Italian cuisine.
              </p>
            </AnimateOnScroll>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              <AnimateOnScroll animation="fadeInLeft" duration={0.8} delay={0.5}>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-[#DE6868] rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Traditional family recipes
                  </span>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeInLeft" duration={0.8} delay={0.6}>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-[#DE6868] rounded-full mr-4"></div>
                  <span className="text-gray-700">Fresh ingredients daily</span>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeInLeft" duration={0.8} delay={0.7}>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-[#DE6868] rounded-full mr-4"></div>
                  <span className="text-gray-700">Handcrafted with love</span>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Call to action button */}
            <AnimateOnScroll animation="fadeInUp" duration={1} delay={0.8}>
              <div className="flex justify-center lg:justify-start">
                <Link href={"/about"}>
                <button className="flex items-center gap-2 text-[#DE6868] px-8 py-4 text-lg font-semibold cursor-pointer">
                  Discover Our Story{" "}
                  <Image
                    src="/extra's/arrow-right.svg"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                  />
                </button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Images (hidden on mobile) */}
          <div className="hidden md:flex flex-1 flex-col md:flex-row lg:flex-col gap-6">
            {/* Top image */}
            <AnimateOnScroll animation="fadeInRight" duration={1.2} delay={0.4}>
              <div className="relative">
                <Image
                  src="/extra's/pizza making.jpg"
                  alt="Pizza Making"
                  width={400}
                  height={300}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </AnimateOnScroll>

            {/* Bottom image */}
            <AnimateOnScroll animation="fadeInRight" duration={1.2} delay={0.6}>
              <div className="relative">
                <Image
                  src="/extra's/pizza serving.jpg"
                  alt="Pizza Serving"
                  width={400}
                  height={300}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
