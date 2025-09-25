"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useCart } from "@/Components/CartContext";
import CheckoutForm from "@/Components/CheckoutForm";
import AnimateOnScroll from "@/Components/AnimateOnScroll";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, cartTotal, taxAmount, finalTotal } = useCart();

  // Redirect to menu if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/menu");
    }
  }, [cartItems, router]);

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 mt-15">
        <AnimateOnScroll animation="fadeInDown" duration={0.8}>
          <h1 className="text-3xl font-bold text-[#5E3D1C] mb-8">Checkout</h1>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <AnimateOnScroll animation="fadeInRight" duration={1}>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-[#5E3D1C] mb-4">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => (
                    <AnimateOnScroll 
                      key={`${item.id}-${item.size}`}
                      animation="fadeIn" 
                      delay={index * 0.1} 
                      duration={0.6}
                    >
                      <div
                        className="flex justify-between border-b pb-2"
                      >
                        <div>
                          <p className="font-medium">{item.item_name}</p>
                          <p className="text-sm text-gray-600">Size: {item.size}</p>
                          <p className="text-sm text-gray-600">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium">
                          Rs. {item.item_price * item.quantity}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>

                <AnimateOnScroll animation="fadeInUp" delay={0.3} duration={0.8}>
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>Rs. {cartTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (10%)</span>
                      <span>Rs. {taxAmount}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t">
                      <span>Total</span>
                      <span>Rs. {finalTotal}</span>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <AnimateOnScroll animation="fadeInLeft" duration={1}>
              <CheckoutForm cartItems={cartItems} finalTotal={finalTotal} />
            </AnimateOnScroll>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
