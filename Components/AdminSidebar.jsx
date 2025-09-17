"use client";

import React from "react";
import { FaHome, FaPizzaSlice, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AdminSidebar = ({ showSidebar, setActiveComponent, activeComponent }) => {
  const router = useRouter();

  const handleSignOut = () => {
    // For now, just redirect to home page
    router.push('/');
  };

  return (
    <div
      className={`w-64 bg-white shadow-sm h-screen fixed md:relative transition-all duration-300 z-10 ${
        showSidebar ? "left-0" : "-left-64 md:left-0"
      }`}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Pizzeria Amore</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveComponent('dashboard')}
                className={`w-full flex items-center p-3 text-gray-600 rounded-md ${
                  activeComponent === 'dashboard' ? 'bg-gray-100 text-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <FaHome className="mr-3" />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent('menu')}
                className={`w-full flex items-center p-3 text-gray-600 rounded-md ${
                  activeComponent === 'menu' ? 'bg-gray-100 text-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <FaPizzaSlice className="mr-3" />
                <span>Menu Items</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveComponent('orders')}
                className={`w-full flex items-center p-3 text-gray-600 rounded-md ${
                  activeComponent === 'orders' ? 'bg-gray-100 text-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <FaClipboardList className="mr-3" />
                <span>Order List</span>
              </button>
            </li>
            <li className="mt-auto pt-6">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center p-3 text-red-500 hover:bg-red-50 rounded-md"
              >
                <FaSignOutAlt className="mr-3" />
                <span>Sign Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
