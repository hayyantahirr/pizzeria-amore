"use client";

import React, { createContext, useState, useContext } from "react";

// Create a context for cart management
const CartContext = createContext();

// Create a provider component to wrap the application and provide cart state
export const CartProvider = ({ children }) => {
  // State to hold the selected product for the modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to open the modal with a product
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Clear the selected product after a delay to allow for exit animations
    setTimeout(() => {
      setSelectedProduct(null);
    }, 300);
  };

  // Function to add an item to the cart
  const addToCart = (product, quantity = 1, size = "Medium") => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart with the same size
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItemIndex >= 0) {
        // If item exists with same size, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems;
      } else {
        // If item doesn't exist with this size, add it with the specified quantity and size
        return [...prevItems, { ...product, quantity, size }];
      }
    });

    // Close the modal after adding to cart
    closeModal();
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of items in the cart
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.item_price * item.quantity,
    0
  );

  // Provide the cart state and functions to children components
  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        isModalOpen,
        cartItems,
        cartCount,
        cartTotal,
        openModal,
        closeModal,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context in components
export const useCart = () => useContext(CartContext);
