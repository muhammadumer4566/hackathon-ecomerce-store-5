'use client';

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import TopHeader from "./TopHeader";
import Footer from "./Footer";
import { TrashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
    toast.success("Item removed from cart!");
  };

  // Handle Checkout
  const handleProceedToCheckout = () => {
    // Redirect to Checkout page (you can replace '/checkout' with your actual path)
    router.push('/checkout');
  };

  // Handle Continue Shopping
  const handleContinueShopping = () => {
    // Redirect to the product page (replace '/products' with your actual products page URL)
    router.push('/');
  };

  return (
    <>
      <TopHeader />
      <div className="max-w-[1440px] mx-auto py-10 px-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-600">Your cart is empty.</div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border p-4 rounded-lg shadow-sm gap-6 bg-white"
                >
                  <Image
                    src={item.productImage}
                    alt={item.title}
                    width={100}
                    height={100}
                    className=" w-[100px] h-[100px] object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-green-600 font-bold mt-2">
                      ${item.discountedPrice.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={`bg-gray-300 px-3 py-1 rounded ${item.quantity === 1 && "opacity-50 cursor-not-allowed"}`}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="px-4 text-center text-lg font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-blue-500"
                  >
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <div className="text-gray-700 text-lg mb-2">
            <span className="block">Items in cart: {cartItems.length}</span>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-4">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <button
            onClick={handleProceedToCheckout}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium mb-4"
          >
            Proceed to Checkout
          </button>

          <button
            onClick={handleContinueShopping}
            className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
