"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext';

const CartModal = () => {
  const { selectedProduct, isModalOpen, closeModal, addToCart } = useCart();
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Product details */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#5E3D1C] mb-2">{selectedProduct.item_name}</h3>
          <p className="text-gray-600 mb-4">{selectedProduct.item_desc || "No description available"}</p>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-[#5E3D1C] font-bold text-xl">Rs. {selectedProduct.item_price}</span>
            
            <button 
              onClick={() => addToCart(selectedProduct)}
              className="bg-[#5E3D1C] text-white px-6 py-2 rounded-lg hover:bg-[#4a3016] transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;