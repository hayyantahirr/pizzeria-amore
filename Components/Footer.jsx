import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F5F2EF] text-[#2B231D] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row md:flex-row justify-around items-center gap-4 ">
          {/* Left side - Logo and Brand Name */}
          <div className="w-82">
            <div className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Pizzeria Amore Logo"
                width={140}
                height={140}
                className="mr-3 rounded-full"
              />
              <h2 className="text-[#2B231D] text-2xl font-bold">
                Pizzeria Amore
              </h2>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="w-48">
            <h3 className=" text-lg font-semibold  text-center text-[#2B231D]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-center">
              <Link href="/">
                <button className=" text-[#2B231D] hover:text-[#DE6868] transition-colors duration-300 text-sm">
                  Home
                </button>
              </Link>

              <a
                href="/menu"
                className=" text-[#2B231D] hover:text-[#DE6868] transition-colors duration-300 text-sm"
              >
                Menu
              </a>
              <a
                href="/about"
                className="text-[#2B231D] hover:text-[#DE6868] transition-colors duration-300 text-sm"
              >
                About Us
              </a>
              <a
                href="/contact"
                className=" text-[#2B231D] hover:text-[#DE6868] transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div className="w-64 text-center px-4">
            <h3 className="text-lg font-semibold mb-6 text-[#2B231D]">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-3">
                  <svg
                    className="w-full h-full text-[#DE6868]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-[#2B231D] text-sm">Via Roma 123</p>
                  <p className="text-[#2B231D] text-sm">00100 Rome, Italy</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-3">
                  <svg
                    className="w-full h-full text-[#DE6868]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#2B231D] text-sm">+39 06 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-3">
                  <svg
                    className="w-full h-full text-[#DE6868]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#2B231D] text-sm">
                    info@pizzeriaamore.com
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-3">
                  <svg
                    className="w-full h-full text-[#DE6868]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#2B231D] text-sm">
                    Mon-Sun: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-gray-600 mt-4 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#2B231D] text-sm mb-4 md:mb-0">
              © 2025 Pizzeria Amore. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-[#2B231D] hover:text-[#DE6868] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-[#2B231D] hover:text-[#DE6868] transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
