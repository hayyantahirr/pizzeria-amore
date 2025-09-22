"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartContext';

export default function CheckoutForm() {
  const router = useRouter();
  const { cartItems, finalTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'cod',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number must have at least 10 digits';
    }
    
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the order to your backend
      // For now, we'll just simulate a successful order
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store order in localStorage for demo purposes
      const order = {
        id: `ORD-${Date.now()}`,
        items: cartItems,
        total: finalTotal,
        customer: formData,
        date: new Date().toISOString(),
        status: 'pending'
      };
      
      const savedOrders = JSON.parse(localStorage.getItem('pizzeriaAmoreOrders') || '[]');
      savedOrders.push(order);
      localStorage.setItem('pizzeriaAmoreOrders', JSON.stringify(savedOrders));
      
      // Clear cart and redirect to success page
      clearCart();
      router.push(`/checkout/success?orderId=${order.id}`);
      
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#5E3D1C] mb-6">Delivery Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
        </div>
        
        {/* Email */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        
        {/* Phone */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="1234567890"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        
        {/* Address */}
        <div className="col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="123 Main St, Apt 4B"
          />
          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
        </div>
        
        {/* City */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="New York"
          />
          {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
        </div>
        
        {/* ZIP Code */}
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code *
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="10001"
          />
          {errors.zipCode && <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>}
        </div>
        
        {/* Notes */}
        <div className="col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Notes (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Special instructions for delivery (e.g., gate code, landmark, etc.)"
          ></textarea>
        </div>
      </div>
      
      {/* Payment Method */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-[#5E3D1C] mb-4">Payment Method</h3>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === 'cod'}
              onChange={handleChange}
              className="h-4 w-4 text-[#5E3D1C] focus:ring-[#5E3D1C]"
            />
            <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
              Cash on Delivery (COD)
            </label>
          </div>
          
          <p className="text-sm text-gray-500 ml-7">
            Pay with cash upon delivery. Our delivery person will collect the payment.
          </p>
        </div>
      </div>
      
      {/* Place Order Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#5E3D1C] text-white py-3 px-4 rounded-md font-medium hover:bg-[#4a3016] transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Processing...' : `Place Order - Rs. ${finalTotal}`}
        </button>
      </div>
    </form>
  );
}