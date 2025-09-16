import React from "react";
import Image from "next/image";
import ContactCard from "@/Components/ContactCard";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const signatureSrc = "/extra's/signature design.svg";

const page = () => {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="mt-15 relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-start text-left w-full max-w-5xl px-4 py-16 md:py-20 mx-auto">
          {/* Signature above heading */}
          <div className="mb-3 w-40 md:w-56">
            <Image
              src={signatureSrc}
              alt="Signature"
              width={308}
              height={46}
              className="w-full h-auto"
            />
          </div>
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-black leading-tight font-serif mb-3">
            Get in touch with Pizzeria Amore
          </h1>
          {/* Paragraph */}
          <p className="text-base md:text-lg text-gray-700 max-w-2xl">
            We'd love to hear from you. Whether it's a question, feedback, or a
            special request, drop us a line.
          </p>
        </div>
      </section>

      {/* Section 1: Contact info and map */}
      <section className="w-full px-4 py-10 md:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              How to contact us
            </h2>
            <p className="text-gray-700 mb-2">Phone: +39 06 1234 5678</p>
            <p className="text-gray-700 mb-2">Email: info@pizzeria-amore.it</p>
            <p className="text-gray-700">
              Address: Via della Pizza, 21, Roma, Italia
            </p>
          </div>
          <div className="w-full h-64 md:h-80">
            <iframe
              title="Pizzeria Amore Location"
              src="https://www.google.com/maps?q=Rome,Italy&output=embed"
              className="w-full h-full rounded-md border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Contact form */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <ContactCard />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
