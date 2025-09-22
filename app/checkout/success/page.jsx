"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [order, setOrder] = useState(null);
  
  const orderId = searchParams.get('orderId');
  
  useEffect(() => {
    if (!orderId) {
      router.push('/menu');
      return;
    }
    
    // Get order details from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('pizzeriaAmoreOrders') || '[]');
    const foundOrder = savedOrders.find(o => o.id === orderId);
    
    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      router.push('/menu');
    }
  }, [orderId, router]);
  
  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5E3D1C] mx-auto"></div>
            <p className="mt-4 text-lg">Loading order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-[#5E3D1C]">Order Placed Successfully!</h1>
            <p className="text-gray-600 mt-2">Thank you for your order. We're preparing your delicious pizza!</p>
          </div>
          
          <div className="border-t border-b py-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order ID:</span>
              <span>{order.id}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Date:</span>
              <span>{new Date(order.date).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Amount:</span>
              <span className="font-bold">Rs. {order.total}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#5E3D1C] mb-4">Delivery Information</h2>
            <p><span className="font-medium">Name:</span> {order.customer.fullName}</p>
            <p><span className="font-medium">Address:</span> {order.customer.address}, {order.customer.city}, {order.customer.zipCode}</p>
            <p><span className="font-medium">Phone:</span> {order.customer.phone}</p>
            <p><span className="font-medium">Payment Method:</span> Cash on Delivery</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#5E3D1C] mb-4">Order Summary</h2>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.item_name}</span>
                    <span className="text-sm text-gray-600"> ({item.size}) x{item.quantity}</span>
                  </div>
                  <span>Rs. {item.item_price * item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/menu" className="inline-block bg-[#5E3D1C] text-white py-3 px-6 rounded-md font-medium hover:bg-[#4a3016] transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}