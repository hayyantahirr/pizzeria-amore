"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function CheckoutForm({ finalTotal }) {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Create refs for all form fields to easily access their values
  const fullName = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const address = useRef(null);
  const city = useRef(null);
  const note = useRef(null);
  const paymentMethod = useRef(null);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // This function is available for any real-time validation or input handling
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate fullName: must not be empty
    if (!fullName.current.value.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email: must be a valid email format
    if (!email.current.value.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.current.value)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Validate phone: must have at least 10 digits
    if (!phone.current.value.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10,}$/.test(phone.current.value.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Phone number must have at least 10 digits";
      isValid = false;
    }

    // Validate address: must not be empty
    if (!address.current.value.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    // Validate city: must not be empty
    if (!city.current.value.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Stop submission if validation fails
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");
    // Generate a unique ID for the order for local tracking
    const orderId = uuidv4();
    try {
      // Prepare the order data, including customer details and all cart items
      const orderData = {
        fullName: fullName.current.value,
        email: email.current.value,
        phone: phone.current.value,
        address: address.current.value,
        city: city.current.value,
        notes: note.current.value,
        paymentMethod: "cod", // Set payment method (only COD is supported for now)
        cartItems: cartItems, // Include all items from the cart
        total_price: finalTotal,
        order_id: orderId,
      };

      // Send the prepared data to the API endpoint
      await axios.post("/api/add-order-details", orderData);

      // Create a complete order object to store locally
      const order = {
        id: orderId,
        items: cartItems,
        total: finalTotal,
        customer: {
          fullName: fullName.current.value,
          email: email.current.value,
          phone: phone.current.value,
          address: address.current.value,
          city: city.current.value,
          notes: note.current.value,
          paymentMethod: "cod",
        },
        date: new Date().toISOString(),
        status: "pending",
      };

      // Save the order to localStorage for the success page
      const savedOrders = JSON.parse(
        localStorage.getItem("pizzeriaAmoreOrders") || "[]"
      );
      savedOrders.push(order);
      localStorage.setItem("pizzeriaAmoreOrders", JSON.stringify(savedOrders));

      // Redirect to the success page first, then clear the cart
      router.push(`/checkout/success?orderId=${orderId}`);
      clearCart();
    } catch (error) {
      // Log and display any errors that occur during submission
      console.error("Error placing order:", error);
      setError(
        error.response?.data?.error ||
          "There was an error placing your order. Please try again."
      );
    } finally {
      // Ensure the submitting state is reset
      setIsSubmitting(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#5E3D1C] mb-6">
        Delivery Information
      </h2>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name *
          </label>
          <input
            ref={fullName}
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number *
          </label>
          <input
            ref={phone}
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="1234567890"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Delivery Address *
          </label>
          <input
            ref={address}
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="123 Main St, Apt 4B"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">{errors.address}</p>
          )}
        </div>

        {/* City */}
        <div className="col-span-2 md:col-span-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City *
          </label>
          <input
            ref={city}
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="New York"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city}</p>
          )}
        </div>

        {/* Notes */}
        <div className="col-span-2">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Delivery Notes (Optional)
          </label>
          <textarea
            ref={note}
            id="notes"
            name="notes"
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Special instructions for delivery (e.g., gate code, landmark, etc.)"
          ></textarea>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-[#5E3D1C] mb-4">
          Payment Method
        </h3>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              ref={paymentMethod}
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              defaultChecked
              onChange={handleChange}
              className="h-4 w-4 text-[#5E3D1C] focus:ring-[#5E3D1C]"
            />
            <label
              htmlFor="cod"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Cash on Delivery (COD)
            </label>
          </div>

          <p className="text-sm text-gray-500 ml-7">
            Pay with cash upon delivery. Our delivery person will collect the
            payment.
          </p>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#5E3D1C] text-white py-3 px-4 rounded-md font-medium hover:bg-[#4a3016] transition-colors disabled:opacity-70"
        >
          {isSubmitting ? "Processing..." : `Place Order - Rs. ${finalTotal}`}
        </button>
      </div>
    </form>
  );
}
