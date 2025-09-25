import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import styles from "./menu.module.css";
import { createClient } from "@/lib/supabaseServer";
import SearchBar from "@/Components/SearchBar";
import MenuClientWrapper from "@/Components/MenuClientWrapper";
import AnimateOnScroll from "@/Components/AnimateOnScroll";

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
            <AnimateOnScroll animation="fadeInDown" duration={1.2}>
              <h1 className="text-4xl md:text-5xl font-bold text-[#5E3D1C] mb-2 md:mb-4">
                Order Now
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeIn" delay={0.3} duration={1.5}>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Explore our delicious selection of pizzas, appetizers, drinks, and
                more. All made with the finest ingredients and prepared with love.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="absolute top-10 left-10 hidden md:block">
            <div className="mask-group">
              
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar />
        </div>

        {/* Client-side wrapper for cart functionality */}
        <MenuClientWrapper products={productsByCategory} />

        <Footer />
      </div>
    </div>
  );
}

export default Page;
