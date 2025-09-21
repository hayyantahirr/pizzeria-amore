"use client";

import React from 'react';
import { useCart } from './CartContext';

const AddToCartButton = ({ product }) => {
  const { openModal } = useCart();

  return (
    <button 
      className="bg-[#5E3D1C] text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-[#4a3016] transition-colors text-xs md:text-sm"
      onClick={() => openModal(product)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;