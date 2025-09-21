import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import Image from "next/image";
import styles from "./menu.module.css";
import { createClient } from "@/lib/supabaseServer";
import SearchBar from "@/Components/SearchBar";

// This is a Server Component
async function Page() {
  // Fetch products from Supabase
  const supabase = await createClient();
  const { data: products, error } = await supabase.from("dishes").select("*");

  if (error) {
    console.error("Error fetching products:", error);
  }

  // Group products by category
  const productsByCategory = {};

  if (products) {
    products.forEach((product) => {
      const category = product.item_category;
      if (!productsByCategory[category]) {
        productsByCategory[category] = [];
      }
      productsByCategory[category].push(product);
    });
  }

  // Get unique categories
  const categories = Object.keys(productsByCategory);

  return (
    <div>
      <Navbar />
      <div className="products-container bg-white mt-15">
        {/* Product Heading Section */}
        <div className={`${styles["product-heading"]} relative`}>
          <div className="bg-white w-full h-[300px]"></div>
          <div
            className={`${styles["coffee-beans-bg-1"]} opacity-40 absolute top-20 left-10 hidden md:block`}
          ></div>
          <div
            className={`${styles["coffee-beans-bg-2"]} opacity-40 absolute top-20 right-10 hidden md:block`}
          ></div>
          <div
            className={`${styles["coffee-beans-bg-3"]} opacity-40 absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block`}
          ></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5E3D1C] mb-2 md:mb-4">
              Order Now
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Explore our delicious selection of pizzas, appetizers, drinks, and
              more. All made with the finest ingredients and prepared with love.
            </p>
          </div>

          <div className="absolute top-10 left-10 hidden md:block">
            <div className="mask-group">
              <div className={styles["coffee-image"]}></div>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar />
        </div>

        {/* Products Section */}
        <div className="products-section mt-12 md:mt-16 px-4 md:px-8">
          {/* Dynamic Categories and Products */}
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category} className="category-section my-8 md:my-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5E3D1C] mb-4 md:mb-6">
                  {category}
                </h2>
                <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-4 md:my-8">
                  {productsByCategory[category].map((product) => (
                    <div
                      key={product.id}
                      className="product-card border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="product-image relative h-48 md:h-64 bg-gray-100">
                        <Image
                          src={product.item_pic}
                          alt={product.item_name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
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
                          <button className="bg-[#5E3D1C] text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-[#4a3016] transition-colors text-xs md:text-sm">
                            Add to Cart
                          </button>
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

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Page;
