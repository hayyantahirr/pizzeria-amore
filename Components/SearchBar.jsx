"use client";
import { supabase } from "@/lib/supabaseClient";
import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("dishes").select("*");

        if (error) {
          console.error("Error fetching products:", error);
        } else {
          setProducts(data || []);
          setFilteredProducts(data || []);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      setShowResults(false);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const filtered = products.filter((product) => {
      const titleMatch = product.item_name?.toLowerCase().includes(searchLower);
      const descriptionMatch = product.item_desc
        ?.toLowerCase()
        .includes(searchLower);
      return titleMatch || descriptionMatch;
    });

    setFilteredProducts(filtered);
    setShowResults(true);
  }, [searchTerm, products]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setShowResults(value.trim().length > 0);
  };

  const handleInputFocus = () => {
    if (searchTerm.trim().length > 0) {
      setShowResults(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding results to allow clicking on them
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <>
      {" "}
      <div className="search-bar absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex items-center w-[90%] md:w-auto  z-[99999]">
        <div className="search-icon-container bg-[#5E3D1C] p-2 md:p-3 rounded-l-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-6 md:h-6"
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
        <div className="search-input-container flex-1 ">
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="py-2 md:py-3 px-3 md:px-4 w-full md:w-[300px] border border-gray-300 rounded-r-lg focus:outline-none text-sm md:text-base"
          />

          {/* Search Results Dropdown */}
          {showResults && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-50">
              {loading ? (
                <div className="p-4 text-center text-gray-500">Loading...</div>
              ) : filteredProducts.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No products found for "{searchTerm}"
                </div>
              ) : (
                <>
                  <div className="p-2 bg-gray-100 border-b">
                    <span className="text-sm text-gray-600">
                      {filteredProducts.length} product
                      {filteredProducts.length !== 1 ? "s" : ""} found
                    </span>
                  </div>
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                      onClick={() => {
                        // Scroll to the product in the main menu
                        const element = document.getElementById(
                          `product-${product.id}`
                        );
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                          element.classList.add("ring-2", "ring-[#5E3D1C]");
                          setTimeout(() => {
                            element.classList.remove(
                              "ring-2",
                              "ring-[#5E3D1C]"
                            );
                          }, 2000);
                        }
                        setSearchTerm("");
                        setShowResults(false);
                      }}
                    >
                      <img
                        src={product.item_pic}
                        alt={product.item_name}
                        className="w-12 h-12 object-cover rounded-md"
                        onError={(e) => {
                          e.target.src = "/logo.jpg";
                        }}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">
                          {product.item_name}
                        </div>
                        <div className="text-sm text-gray-600 line-clamp-1">
                          {product.item_desc || "No description"}
                        </div>
                        <div className="text-sm font-semibold text-green-600">
                          Rs. {product.item_price}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
