import React from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const Sec4 = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#CFBCAE] overflow-hidden py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Bottom section - Map and Content */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left side - Map */}
            <AnimateOnScroll
              animation="fadeInLeft"
              duration={1.2}
              delay={0.2}
              className="flex-1"
            >
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                <div className="text-center">
                  {/* Main heading */}
                  <AnimateOnScroll
                    animation="fadeInDown"
                    duration={1}
                    delay={0.3}
                  >
                    <h2 className="text-2xl md:text-3xl text-center font-semibold text-black">
                      Visit Us
                    </h2>
                  </AnimateOnScroll>

                  {/* Signature below heading */}
                  <AnimateOnScroll animation="fadeIn" duration={1} delay={0.4}>
                    <div className="flex justify-center">
                      <Image
                        src="/extra's/signature design.svg"
                        alt="Signature"
                        width={200}
                        height={60}
                        className="mx-auto mb-7"
                      />
                    </div>
                  </AnimateOnScroll>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.7144!2d12.4964!3d41.9028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28e1cdf0b5fca3d5!2sRome%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location in Italy"
                ></iframe>
              </div>
            </AnimateOnScroll>

            {/* Right side - Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Subheading */}
              <AnimateOnScroll animation="fadeInRight" duration={1} delay={0.3}>
                <p className="text-md md:text-lg text-gray-700 mb-5 max-w-2xl mx-auto lg:mx-0">
                  Experience the authentic taste of Italy in the heart of our
                  charming restaurant. From traditional wood-fired pizzas to
                  handmade pasta, every dish tells a story of Italian culinary
                  heritage.
                </p>
              </AnimateOnScroll>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <AnimateOnScroll
                  animation="fadeInRight"
                  duration={0.8}
                  delay={0.4}
                >
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-6 h-6 mr-4">
                      <svg
                        className="w-full h-full text-[#DE6868]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Via Roma 123, 00100 Rome, Italy
                    </span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll
                  animation="fadeInRight"
                  duration={0.8}
                  delay={0.5}
                >
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-6 h-6 mr-4">
                      <svg
                        className="w-full h-full text-[#DE6868]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">+39 06 1234 5678</span>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll
                  animation="fadeInRight"
                  duration={0.8}
                  delay={0.6}
                >
                  <div className="flex items-center justify-center lg:justify-start">
                    <div className="w-6 h-6 mr-4">
                      <svg
                        className="w-full h-full text-[#DE6868]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Mon-Sun: 11:00 AM - 11:00 PM
                    </span>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Call to action button */}
              <AnimateOnScroll animation="fadeInUp" duration={1} delay={0.7}>
                <div className="flex justify-center lg:justify-start">
                  <Link href={"/contact"}>
                    <button className="flex items-center gap-2 text-[#DE6868] px-5 py-2 text-lg font-semibold cursor-pointer">
                      Get Directions{" "}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
