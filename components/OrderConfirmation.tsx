'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrder } from '../context/OrderContext';
import TopHeader from './TopHeader';
import Footer from './Footer';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const { orderDetails } = useOrder();
  const router = useRouter();

  useEffect(() => {
    if (!orderDetails) {
      router.push('/checkout'); // Redirect if no order details
    }
  }, [orderDetails, router]);

  if (!orderDetails) return null; // Prevent rendering if redirected

  const { customerInfo, cartItems } = orderDetails;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  return (
    <>
      <TopHeader />
      <div className="max-w-[1440px] mx-auto py-10 px-5 text-center">
        <div className="flex flex-col items-center space-y-6">
          <CheckCircle className="text-green-500" size={64} />
          <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>
          <p className="text-gray-600 max-w-2xl">
            Your order has been successfully placed. Here are the details:
          </p>

          <div className="bg-gray-100 w-full max-w-xl p-6 rounded-lg shadow text-left">
            <h2 className="text-lg font-bold mb-2">Shipping Address</h2>
            <p className="text-gray-700">
              {customerInfo.name} <br />
              {customerInfo.address} <br />
              {customerInfo.city}, {customerInfo.postalCode} <br />
              Phone: {customerInfo.phone}
            </p>

            <h2 className="text-lg font-bold mt-6 mb-2">Items Ordered</h2>
            <div className="divide-y divide-gray-300">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <span>
                    {item.title} (x{item.quantity})
                  </span>
                  <span>${(item.discountedPrice * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 text-lg font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderConfirmation;
