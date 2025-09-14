import React from "react";
import Image from "next/image";

const wholeWatermark = "/extra's/whole-pizza-watermark.png";
const sliceWatermark = "/extra's/pizza-slice-watermark.png";
const signature = "/extra's/signature design.svg";

const pizzaImages = [
  "/pizza-images/Alpine-pizza.png",
  "/pizza-images/Cheesy-lord.png",
  "/pizza-images/premio.jpg",
];

const Sec2 = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#F8F9FA] overflow-hidden py-16">
      {/* Background watermark images */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        {/* 4 whole-pizza watermarks */}
        <Image
          src={wholeWatermark}
          alt="Watermark"
          width={120}
          height={120}
          className="absolute top-8 left-12 opacity-15"
        />
        <Image
          src={wholeWatermark}
          alt="Watermark"
          width={100}
          height={100}
          className="absolute top-32 right-16 opacity-12"
        />
        <Image
          src={wholeWatermark}
          alt="Watermark"
          width={140}
          height={140}
          className="absolute bottom-20 left-8 opacity-10"
        />
        <Image
          src={wholeWatermark}
          alt="Watermark"
          width={110}
          height={110}
          className="absolute bottom-8 right-20 opacity-18"
        />

        {/* 3 pizza-slice watermarks */}
        <Image
          src={sliceWatermark}
          alt="Slice Watermark"
          width={80}
          height={80}
          className="absolute top-16 right-8 opacity-20"
        />
        <Image
          src={sliceWatermark}
          alt="Slice Watermark"
          width={90}
          height={90}
          className="absolute bottom-32 left-20 opacity-15"
        />
        <Image
          src={sliceWatermark}
          alt="Slice Watermark"
          width={70}
          height={70}
          className="absolute top-24 left-1/2 opacity-12"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Signature above heading */}
          <div className="mb-6">
            <Image
              src={signature}
              alt="Signature"
              width={200}
              height={60}
              className="mx-auto"
            />
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-black mb-6">
            Today's Special
          </h2>
        </div>

        {/* Pizza cards */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-8 lg:gap-12 justify-center items-center">
          {pizzaImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden duration-300 w-[325px] h-[438px] flex flex-col"
            >
              {/* Pizza image */}
              <div className="flex justify-center py-2">
                <Image
                  src={image}
                  alt={`Pizza ${index + 1}`}
                  width={158}
                  height={158}
                  className="w-[158px] h-[158px] object-cover rounded-lg "
                />
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {index === 0
                      ? "Alpine Pizza"
                      : index === 1
                      ? "Cheesy Lord"
                      : "Mushroom Madness"}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {index === 0
                      ? "Fresh mountain herbs & premium cheese blend on our signature crust"
                      : index === 1
                      ? "Triple cheese blend with gourmet toppings and fresh basil"
                      : "Wild mushrooms & truffle oil on artisan dough"}
                  </p>
                </div>
                <button className="text-[#DE6868] font-semibold text-sm hover:text-[#c55a5a] transition-colors duration-300 self-start">
                  Explore More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        
      </div>
    </section>
  );
};

export default Sec2;
