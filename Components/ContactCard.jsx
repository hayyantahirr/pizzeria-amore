"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactCard = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function sendEmail(e) {
    e.preventDefault();
    setStatus(null);

    const name = nameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const message = messageRef.current?.value || "";

    if (!name || !email || !message) {
      setStatus("All fields are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      setStatus("Message must be at least 10 characters.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        "service_bt91rjf",
        "template_89nyp3r",
        formRef.current,
        "weOrWij0wVzYHCqoz"
      );
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setStatus(
        typeof err?.text === "string"
          ? err.text
          : "Failed to send. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="p-6 md:p-8 rounded-lg border shadow-sm bg-white">
      <h3 className="text-lg md:text-xl font-semibold mb-2">
        Send us a message
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        We usually reply within 1 business day.
      </p>
      <form
        ref={formRef}
        className="grid grid-cols-1 gap-4"
        onSubmit={sendEmail}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            ref={nameRef}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#DE6868]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            ref={emailRef}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#DE6868]"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            ref={messageRef}
            className="w-full border rounded-md px-3 py-2 h-32 resize-vertical focus:outline-none focus:ring-2 focus:ring-[#DE6868]"
            placeholder="enter your message"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-[#DE6868] text-white px-4 py-2 rounded-md hover:bg-[#c94c4c] transition-colors disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {status && status !== "success" && (
          <p className="text-red-600 text-sm">{status}</p>
        )}
        {status === "success" && (
          <p className="text-green-600 text-sm">
            Thanks! Your message has been sent.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactCard;
