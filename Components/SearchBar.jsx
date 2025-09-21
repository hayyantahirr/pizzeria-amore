"use client"
import React from "react";

const SearchBar = () => {
  return (
    <>
      {" "}
      <div className="search-bar absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex items-center w-[90%] md:w-auto">
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
        <div className="search-input-container flex-1">
          <input
            type="text"
            placeholder="Search Products"
            className="py-2 md:py-3 px-3 md:px-4 w-full md:w-[300px] border border-gray-300 rounded-r-lg focus:outline-none text-sm md:text-base"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
