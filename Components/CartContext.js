"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for cart management
const CartContext = createContext();

// Create a provider component to wrap the application and provide cart state
export const CartProvider = ({ children }) => {
  // State to hold the selected product for the modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("pizzeriaAmoreCart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pizzeriaAmoreCart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of items in the cart
  const cartTotal = cartItems.reduce((total, item) => {
    // Get the price based on size
    let price = item.item_price;
    if (item.size === "Extra Small" && item.item_xs_price) {
      price = item.item_xs_price;
    } else if (item.size === "Small" && item.item_sm_price) {
      price = item.item_sm_price;
    } else if (item.size === "Medium" && item.item_md_price) {
      price = item.item_md_price;
    } else if (item.size === "Large" && item.item_l_price) {
      price = item.item_l_price;
    } else if (item.size === "Extra Large" && item.item_xl_price) {
      price = item.item_xl_price;
    } else {
      // Apply multiplier if specific price not available
      const multipliers = {
        "Extra Small": 0.7,
        Small: 0.85,
        Medium: 1,
        Large: 1.2,
        "Extra Large": 1.4,
      };
      price = Math.round(item.item_price * multipliers[item.size]);
    }

    return total + price * item.quantity;
  }, 0);

  // Calculate tax (10% of subtotal)
  const taxAmount = Math.round(cartTotal * 0.1);

  // Calculate final total with tax
  const finalTotal = cartTotal + taxAmount;

  // Check if a product is in the cart
  const isInCart = (productId, size) => {
    return cartItems.some(
      (item) => item.id === productId && item.size === size
    );
  };

  // Get quantity of a product in cart
  const getCartItemQuantity = (productId, size) => {
    const item = cartItems.find(
      (item) => item.id === productId && item.size === size
    );
    return item ? item.quantity : 0;
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Provide the cart state and functions to children components
  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        isModalOpen,
        isSidebarOpen,
        cartItems,
        cartCount,
        cartTotal,
        taxAmount,
        finalTotal,
        openModal,
        closeModal,
        toggleSidebar,
        addToCart,
        removeFromCart,
        updateQuantity,
        isInCart,
        getCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context in components
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
