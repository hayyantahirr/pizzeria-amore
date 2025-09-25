"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      const savedOrders = JSON.parse(
        localStorage.getItem("pizzeriaAmoreOrders") || "[]"
      );
      const currentOrder = savedOrders.find((o) => o.id === orderId);
      setOrder(currentOrder);
    }
    setLoading(false);
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Order Not Found
        </h1>
        <p className="text-gray-700 mb-6">
          We couldn't find the details for this order. It might have been
          cleared from your session.
        </p>
        <Link
          href="/"
          className="bg-[#5E3D1C] text-white py-2 px-6 rounded-md font-medium hover:bg-[#4a3016] transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600">
            Thank You for Your Order!
          </h1>
          <p className="text-gray-600 mt-2">
            Your order has been placed successfully.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#5E3D1C] mb-4">
            Order Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Order ID:</span>
              <span className="text-gray-700">{order.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date:</span>
              <span className="text-gray-700">
                {new Date(order.date).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Amount:</span>
              <span className="font-bold text-lg">Rs. {order.total}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#5E3D1C] mb-3">
            Items Ordered
          </h3>
          <ul className="space-y-3">
            {order.items.map((item) => (
              <li
                key={`${item.id}-${item.size}`}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">
                    {item.item_name} ({item.size})
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-semibold">
                  Rs. {item.item_price * item.quantity}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/menu"
            className="bg-[#5E3D1C] text-white py-3 px-8 rounded-md font-medium hover:bg-[#4a3016] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
