"use client";

import React from 'react';
import CartButton from './CartButton';
import CartSidebar from './CartSidebar';
import CartModalWrapper from './CartModalWrapper';
import AddToCartButton from './AddToCartButton';

// This client component wraps all the cart-related functionality
export default function MenuClientWrapper({ products }) {
  return (
    <>
      {/* Render product grid with AddToCartButton */}
      <div className="products-section mt-12 md:mt-16 px-4 md:px-8">
        {/* Dynamic Categories and Products */}
        {Object.keys(products).length > 0 ? (
          Object.keys(products).map((category) => (
            <div key={category} className="category-section my-8 md:my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5E3D1C] mb-4 md:mb-6">
                {category}
              </h2>
              <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-4 md:my-8">
                {products[category].map((product) => (
                  <div
                    key={product.id}
                    className="product-card border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="product-image relative h-48 md:h-64 bg-gray-100">
                      <img
                        src={product.item_pic}
                        alt={product.item_name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="product-info p-3 md:p-4">
                      <h3 className="text-base md:text-lg font-semibold text-[#5E3D1C]">
                        {product.item_name}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-2">
                        {product.item_desc || "No description available"}
                      </p>
                      <div className="flex justify-between items-center mt-3 md:mt-4">
                        <span className="text-[#5E3D1C] font-bold text-sm md:text-base">
                          Rs. {product.item_price}
                        </span>
                        <AddToCartButton product={product} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-products text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600">
              No products available
            </h2>
            <p className="text-gray-500 mt-2">
              Please check back later for our menu items.
            </p>
          </div>
        )}
      </div>

      {/* Cart components */}
      <CartButton />
      <CartSidebar />
      <CartModalWrapper />
    </>
  );
}