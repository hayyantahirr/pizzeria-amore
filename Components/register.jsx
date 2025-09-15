"use client";
import React, { useEffect, useRef, useState } from "react";

const Register = ({ isOpen, onClose, onSwitch }) => {
  const modalRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl shadow-2xl w-80 h-[22rem] p-5 flex flex-col"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-title"
      >
        <h2
          id="register-title"
          className="text-lg font-bold text-gray-900 mb-4 text-center"
        >
          Register
        </h2>

        <label className="sr-only" htmlFor="register-name">
          Name
        </label>
        <input
          id="register-name"
          type="text"
          placeholder="Name"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#DE6868]"
        />

        <label className="sr-only" htmlFor="register-email">
          Email
        </label>
        <input
          id="register-email"
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#DE6868]"
        />

        <div className="relative mb-4">
          <label className="sr-only" htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#DE6868]"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-2 my-auto h-8 w-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.5a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.01 9.964 7.183.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.01-9.964-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>

        <button
          type="button"
          className="w-full bg-[#DE6868] hover:bg-[#c75858] text-white font-semibold py-2 rounded-lg transition-colors mb-3"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-auto">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => onSwitch?.("login")}
            className="text-[#DE6868] font-semibold hover:underline"
          >
            Login
          </button>
        </p>

        <button
          type="button"
          aria-label="Close register modal"
          onClick={() => onClose?.()}
          className="absolute -top-3 -right-3 bg-white rounded-full shadow p-1 text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Register;
