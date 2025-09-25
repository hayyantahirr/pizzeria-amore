"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { supabase } from "@/lib/supabaseClient";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contacts" },
  { name: "Order Now", href: "/menu" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full bg-[#F5F2EF] shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 relative">
            {/* Hamburger for mobile (left) */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#DE6868] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#DE6868]"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            {/* Logo - make it bigger than navbar height */}
            <div
              className="flex-shrink-0 flex items-center z-10"
              style={{ height: "100%" }}
            >
              <a href="/" className="flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={56}
                  height={56}
                  className="md:mt-15 mt-5 object-contain h-15 md:h-25 w-auto rounded-full -my-2 shadow"
                  priority
                />
              </a>
            </div>
            {/* Links (desktop) */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href &&
                  (pathname === link.href ||
                    (link.href === "/" && pathname === "/"));

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-200 px-7 ${
                      isActive
                        ? "text-[#DE6868] underline underline-offset-8 decoration-2 decoration-[#DE6868]"
                        : "text-gray-800 hover:text-[#DE6868]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#F5F2EF] shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              {navLinks.map((link) => {
                const isActive =
                  link.href &&
                  (pathname === link.href ||
                    (link.href === "/" && pathname === "/"));
                if (link.name === "Login/Register") {
                  return isAuthenticated ? (
                    <button
                      key="Logout"
                      type="button"
                      className="block text-left w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-gray-800 hover:text-[#DE6868]"
                      onClick={async () => {
                        await supabase.auth.signOut();
                        setMenuOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      key={link.name}
                      type="button"
                      className="block text-left w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-gray-800 hover:text-[#DE6868]"
                      onClick={() => {
                        setLoginOpen(true);
                        setMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </button>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#DE6868] underline underline-offset-8 decoration-2 decoration-[#DE6868]"
                        : "text-gray-800 hover:text-[#DE6868]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
