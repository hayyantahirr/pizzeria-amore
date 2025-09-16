"use client";
import React, { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Register = ({ isOpen, onClose, onSwitch }) => {
  const modalRef = useRef(null);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // open and close functionality
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

  // Login user by email and password
  async function registerUser() {
    setErrorMessage("");
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            name,
            display_name: name,
          },
        },
      });
      if (error) throw error;
      router.push("/auth/callback");
      onClose?.();
    } catch (err) {
      setErrorMessage(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  // Login user by Google
  async function loginWithGoogle() {
    setErrorMessage("");
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (err) {
      setErrorMessage(err.message || "Google login failed");
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl shadow-2xl w-80 h-[26rem] p-5 flex flex-col"
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="sr-only" htmlFor="register-email">
          Email
        </label>
        <input
          id="register-email"
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#DE6868]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        {errorMessage && (
          <div className="text-sm text-red-600 mb-2">{errorMessage}</div>
        )}

        <button
          type="button"
          disabled={loading}
          onClick={registerUser}
          className="w-full bg-[#DE6868] hover:bg-[#c75858] text-white font-semibold py-2 rounded-lg transition-colors mb-3 disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <div className="flex items-center my-3">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          disabled={loading}
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-2 rounded-lg transition-colors mb-3 hover:bg-gray-50 disabled:opacity-60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
            className="mr-2"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          {loading ? "Signing up..." : "Continue with Google"}
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
