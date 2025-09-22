"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

const CartModal = () => {
  const { 
    selectedProduct, 
    isModalOpen, 
    closeModal, 
    addToCart, 
    isInCart, 
    getCartItemQuantity,
    updateQuantity,
    removeFromCart 
  } = useCart();
  const modalRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState("Medium");

  // Size options with price multipliers
  const sizeOptions = [
    { name: "Extra Small", multiplier: 0.7 },
    { name: "Small", multiplier: 0.85 },
    { name: "Medium", multiplier: 1 },
    { name: "Large", multiplier: 1.2 },
    { name: "Extra Large", multiplier: 1.4 },
  ];

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, closeModal]);

  // If modal is not open or no product is selected, don't render anything
  if (!isModalOpen || !selectedProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>

      {/* Modal content */}
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto z-10 overflow-hidden transform transition-all"
      >
        {/* Product image */}
        <div className="relative h-64 w-full bg-gray-100">
          <Image
            src={selectedProduct.item_pic}
            alt={selectedProduct.item_name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />

          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Product details */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#5E3D1C] mb-2">
            {selectedProduct.item_name}
          </h3>
          <p className="text-gray-600 mb-4">
            {selectedProduct.item_desc || "No description available"}
          </p>

          {/* Size selection dropdown */}
          <div className="mb-4">
            <label
              htmlFor="size-select"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Size:
            </label>
            <select
              id="size-select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#5E3D1C] focus:border-[#5E3D1C]"
            >
              <option value="Extra Small">
                Extra Small - Rs.{" "}
                {selectedProduct.item_xs_price ||
                  Math.round(selectedProduct.item_price * 0.7)}
              </option>
              <option value="Small">
                Small - Rs.{" "}
                {selectedProduct.item_sm_price ||
                  Math.round(selectedProduct.item_price * 0.85)}
              </option>
              <option value="Medium">
                Medium - Rs.{" "}
                {selectedProduct.item_md_price || selectedProduct.item_price}
              </option>
              <option value="Large">
                Large - Rs.{" "}
                {selectedProduct.item_l_price ||
                  Math.round(selectedProduct.item_price * 1.2)}
              </option>
              <option value="Extra Large">
                Extra Large - Rs.{" "}
                {selectedProduct.item_xl_price ||
                  Math.round(selectedProduct.item_price * 1.4)}
              </option>
            </select>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[#5E3D1C] font-bold text-xl">
              Rs.{" "}
              {selectedProduct[`item_${selectedSize.toLowerCase().replace(/\s+/g, '_')}_price`] || 
                Math.round(
                  selectedProduct.item_price *
                    sizeOptions.find((option) => option.name === selectedSize)
                      .multiplier
                )
              }
            </span>

            {isInCart(selectedProduct.id, selectedSize) ? (
              <div className="flex items-center space-x-2">
                {getCartItemQuantity(selectedProduct.id, selectedSize) === 1 ? (
                  <button
                    onClick={() => removeFromCart(selectedProduct.id, selectedSize)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                    aria-label="Remove from cart"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => updateQuantity(selectedProduct.id, selectedSize, getCartItemQuantity(selectedProduct.id, selectedSize) - 1)}
                    className="bg-[#5E3D1C] text-white p-2 rounded-full hover:bg-[#4a3016] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
                
                <span className="text-lg font-medium w-8 text-center">
                  {getCartItemQuantity(selectedProduct.id, selectedSize)}
                </span>
                
                <button
                  onClick={() => updateQuantity(selectedProduct.id, selectedSize, getCartItemQuantity(selectedProduct.id, selectedSize) + 1)}
                  className="bg-[#5E3D1C] text-white p-2 rounded-full hover:bg-[#4a3016] transition-colors"
                  aria-label="Increase quantity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(selectedProduct, 1, selectedSize)}
                className="bg-[#5E3D1C] text-white px-6 py-2 rounded-lg hover:bg-[#4a3016] transition-colors"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
