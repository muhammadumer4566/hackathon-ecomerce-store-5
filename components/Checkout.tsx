'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import TopHeader from './TopHeader';
import Footer from './Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVV: string;
}

const Checkout: React.FC = () => {
  const { cartItems , clearCart } = useCart(); // Cart Context
  const { setOrderDetails } = useOrder(); // Order Context
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Total Price Calculation
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex = /^\d{16}$/;
    const cardCVVRegex = /^\d{3}$/;
    const phoneRegex = /^\d{11}$/;   
    const postalCodeRegex = /^\d{5}$/; 
  
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.postalCode.trim() ||
      !formData.cardNumber.trim() ||
      !formData.cardExpiry.trim() ||
      !formData.cardCVV.trim()
    ) {
      toast.error('Please fill in all fields.');
      return false;
    }
  
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email address.');
      return false;
    }
  
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Invalid phone number. Must be 11 digits.');
      return false;
    }

    if (!postalCodeRegex.test(formData.postalCode)) {
      toast.error('Invalid postal code. Must be 5 digits.');
      return false;
    }
  
    if (!cardNumberRegex.test(formData.cardNumber)) {
      toast.error('Invalid card number. Must be 16 digits');
      return false;
    }
  
    if (!cardCVVRegex.test(formData.cardCVV)) {
      toast.error('Invalid CVV. Must be 3 digits');
      return false;
    }
  
    return true;
  };
  

  // Handle Order Submission
  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulating API submission delay
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Order placed successfully!');

      // Save order details in Order Context
      setOrderDetails({
        customerInfo: formData,
        cartItems,
      });

      clearCart();

      // Redirect to Order Confirmation Page
      router.push('/order-confirmation');
    }, 1000);
  };

  return (
    <>
      <TopHeader />
      <div className="max-w-[1440px] mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {/* Layout with Form and Summary */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Billing Details Form */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-center mb-4">Billing Details</h2>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Name */}
              <div className="flex-1">
                <label htmlFor="name" className="block font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              {/* Email */}
              <div className="flex-1">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>

            {/* Address Info */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="address" className="block font-medium mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="123 Main St, Apt 101"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="city" className="block font-medium mb-2">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="New York"
                  type="text"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="phone" className="block font-medium mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="123-456-7890"
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="postalCode" className="block font-medium mb-2">
                  Postal Code
                </label>
                <input
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="12345"
                  type="text"
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="cardNumber" className="block font-medium mb-2">
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="1234 5678 9012 3456"
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cardExpiry" className="block font-medium mb-2">
                  Expiry Date
                </label>
                <input
                  id="cardExpiry"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cardCVV" className="block font-medium mb-2">
                  CVV
                </label>
                <input
                  id="cardCVV"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="123"
                  type="password"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[350px] p-6 bg-gray-50 rounded-lg shadow-lg self-center">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between py-2 border-b">
                <span>{item.title} (x{item.quantity})</span>
                <span>${(item.discountedPrice * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="font-bold text-xl text-green-600 mt-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className={`w-full mt-6 px-4 py-3 rounded-md ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
