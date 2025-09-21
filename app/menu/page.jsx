import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import Image from "next/image";
import styles from "./menu.module.css";

const Page = () => {
  return (
    <>
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
            className={`${styles["coffee-beans-bg-3"]} opacity-40 absolute bottom-20 left-1/2 transform -translate-x-1/2  md:block`}
          ></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-bold text-[#5E3D1C] mb-4">Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lobortis elit et mi lobortis, sed varius tortor aliquam. Maecenas
              ac quam lacinia,
            </p>
          </div>

          <div className="absolute top-10 left-10">
            <div className="mask-group">
              <div className={styles["coffee-image"]}></div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="search-icon-container bg-[#5E3D1C] p-3 rounded-l-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search Products"
                className="py-3 px-4 w-[300px] border border-gray-300 rounded-r-lg focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section mt-16 px-8">
          <div className="products-header bg-[#F9F5F0] p-4 rounded-lg flex justify-between items-center">
            <div className="sort-by flex items-center">
              <span className="text-gray-800 font-medium mr-2">Sort by</span>
              <select className="border border-gray-300 rounded p-1">
                <option>Category's</option>
                <option>Appetizers</option>
                <option>Pizza</option>
                <option>Drinks</option>
                <option>Sandwhich's</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {/* Product Card 1 */}
            <div className="product-card border border-gray-200 rounded-lg overflow-hidden">
              <div className="product-image relative h-64 bg-gray-100">
                <Image
                  src="/drinks/mojito.png"
                  alt="Mojito"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="product-info p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#5E3D1C]">
                    Mojito
                  </h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FF9529"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          stroke="#FF9529"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Refreshing mint and lime drink
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#5E3D1C] font-bold">$4.99</span>
                  <button className="bg-[#5E3D1C] text-white px-4 py-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="product-card border border-gray-200 rounded-lg overflow-hidden">
              <div className="product-image relative h-64 bg-gray-100">
                <Image
                  src="/drinks/mocktail.png"
                  alt="Mocktail"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="product-info p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#5E3D1C]">
                    Fruit Mocktail
                  </h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FF9529"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          stroke="#FF9529"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Mixed fruit non-alcoholic drink
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#5E3D1C] font-bold">$5.99</span>
                  <button className="bg-[#5E3D1C] text-white px-4 py-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="product-card border border-gray-200 rounded-lg overflow-hidden">
              <div className="product-image relative h-64 bg-gray-100">
                <Image
                  src="/drinks/orange ocean.png"
                  alt="Orange Ocean"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                      stroke="#5E3D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="product-info p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#5E3D1C]">
                    Orange Ocean
                  </h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FF9529"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          stroke="#FF9529"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Refreshing orange juice blend
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#5E3D1C] font-bold">$4.49</span>
                  <button className="bg-[#5E3D1C] text-white px-4 py-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* More product cards can be added here */}
          </div>

          {/* Pagination */}
          <div className="pagination flex justify-center items-center gap-2 my-8">
            <button className="bg-[#5E3D1C] text-white w-10 h-10 rounded-lg flex items-center justify-center">
              1
            </button>
            <button className="bg-[#8B5E34] text-white w-10 h-10 rounded-lg flex items-center justify-center">
              2
            </button>
            <button className="bg-[#8B5E34] text-white w-10 h-10 rounded-lg flex items-center justify-center">
              3
            </button>
            <button className="bg-[#8B5E34] text-white w-10 h-10 rounded-lg flex items-center justify-center">
              4
            </button>
            <button className="p-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#5E3D1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16L16 12L12 8"
                  stroke="#5E3D1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H16"
                  stroke="#5E3D1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
