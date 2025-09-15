import React from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
const signatureSrc = "/extra's/signature design.svg";
const sectionTwoImage = "/extra's/pizza-shop.jpg";
// Section 1 collage images
const imageOne = "/appetizers/plain fries.jpg";
const imageTwo = "/pizza-images/premio.jpg";
const imageThree = "/pizza-images/mushroom madness.jpg";
const imageFour = "/pizza-images/tomato paradise.jpg";

const AboutSec1 = () => {
  return (
    <div className="w-full bg-[#F5F2EF]">
      {/* Section 1: Image left, text right with signature above heading */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image collage left (4 images) */}
          <div className="order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={imageOne}
                  alt="Plain Fries"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md translate-y-10 md:translate-y-10">
                <Image
                  src={imageTwo}
                  alt="Premio Pizza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md -translate-y-2 md:-translate-y-4">
                <Image
                  src={imageThree}
                  alt="Mushroom Madness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={imageFour}
                  alt="Tomato Paradise"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          {/* Text right */}
          <div className="order-2">
            <div className="mb-3">
              <Image
                src={signatureSrc}
                alt="Signature"
                width={220}
                height={60}
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight mb-4 font-serif">
              About Pizzeria Amore
            </h2>
            <p className="text-base md:text-lg text-[#2B231D] mb-6 max-w-xl">
              From hand-stretched dough to slow-simmered sauces, every bite is
              our love letter to Italian tradition. Gather around, share a
              slice, and taste the craft in every layer.
            </p>
            <Link href="/contact">
              <h3 className="inline-block text-[#DE6868] text-sm md:text-md font-semibold">
                Contact Us
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Text left, image right (pizza-shop) */}
      <section className="relative w-full py-10 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text left */}
          <div className="order-2 lg:order-1">
            <div className="mb-3">
              <Image
                src={signatureSrc}
                alt="Signature"
                width={220}
                height={60}
              />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-black leading-tight mb-4 font-serif">
              Crafted With Heart
            </h3>
            <p className="text-base md:text-lg text-[#2B231D] mb-6 max-w-xl">
              Every day begins with fresh ingredients and ends with smiles
              around the table. Our kitchen is where simple ingredients become
              unforgettable memories.
            </p>
            <a
              href="/menu"
              className="inline-block text-[#DE6868] text-sm md:text-md font-semibold"
            >
              Explore our menu
            </a>
          </div>
          {/* Image right */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={sectionTwoImage}
                alt="Our pizza shop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSec1;
