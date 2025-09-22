"use client";

import React, { useRef, useEffect } from "react";
import { useCart } from "./CartContext";
import Image from "next/image";

const CartSidebar = () => {
  const {
    isSidebarOpen,
    toggleSidebar,
    cartItems,
    cartTotal,
    taxAmount,
    finalTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${isSidebarOpen ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm" />

      <div
        ref={sidebarRef}
        className="absolute top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto"
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold dark:text-white">Your Cart</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

        <div className="p-4 flex-grow">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Your cart is empty
              </p>
              <button
                onClick={toggleSidebar}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => {
                // Get the price based on size
                let price = item.item_price;
                if (item.size === "Extra Small" && item.item_xs_price) {
                  price = item.item_xs_price;
                } else if (item.size === "Small" && item.item_sm_price) {
                  price = item.item_sm_price;
                } else if (item.size === "Medium" && item.item_md_price) {
                  price = item.item_md_price;
                } else if (item.size === "Large" && item.item_l_price) {
                  price = item.item_l_price;
                } else if (item.size === "Extra Large" && item.item_xl_price) {
                  price = item.item_xl_price;
                } else {
                  // Apply multiplier if specific price not available
                  const multipliers = {
                    "Extra Small": 0.7,
                    Small: 0.85,
                    Medium: 1,
                    Large: 1.2,
                    "Extra Large": 1.4,
                  };
                  price = Math.round(item.item_price * multipliers[item.size]);
                }

                return (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex items-center space-x-4 p-2 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={item.item_pic || "/logo.jpg"}
                        alt={item.item_name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-medium dark:text-white">
                        {item.item_name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Size: {item.size}
                      </p>
                      <p className="text-sm font-medium dark:text-white">
                        Rs{price}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          item.quantity === 1
                            ? removeFromCart(item.id, item.size)
                            : updateQuantity(
                                item.id,
                                item.size,
                                item.quantity - 1
                              )
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {item.quantity === 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        )}
                      </button>

                      <span className="text-gray-700 dark:text-gray-300 w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Subtotal
                </span>
                <span className="font-medium dark:text-white">
                  Rs{cartTotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Tax (10%)
                </span>
                <span className="font-medium dark:text-white">
                  RS{taxAmount}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span className="dark:text-white">Total</span>
                <span className="dark:text-white">Rs{finalTotal}</span>
              </div>

              <button className="w-full py-2 mt-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
