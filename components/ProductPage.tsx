import { EyeIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import TopHeader from "./TopHeader";

const ProductPage = () => {
  return (
    <>
      <TopHeader />
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto text-sm text-gray-500 mb-6">
          <span>Home</span> &gt; <span>Shop</span>
        </div>

        {/* Product Section */}
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Product Images */}
          <div className="flex flex-col">
            <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/images/pro.jpg"
                alt="Main Product"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2">
                &lt;
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2">
                &gt;
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {["/images/pro1.png", "/images/pro1.png"].map(
                (thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-lg border border-gray-300 hover:border-blue-500"
                  />
                )
              )}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Floating Phone</h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <span className="text-sm text-gray-500 ml-2">(10 Reviews)</span>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-4">$1,139.33</p>
              <p className="text-sm text-gray-500 mt-1">
                Availability: <span className="text-green-500">In Stock</span>
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>

            {/* Color Options */}
            <div className="mt-6">
              <h3 className="text-sm font-bold text-gray-800 mb-2">Colors</h3>
              <div className="flex gap-4">
                {["bg-green-500", "bg-orange-500", "bg-blue-500", "bg-gray-700"].map(
                  (color, index) => (
                    <span
                      key={index}
                      className={`w-8 h-8 ${color} rounded-full border border-gray-300 hover:scale-110 cursor-pointer`}
                    />
                  )
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <div className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-600">
                Select Options
              </div>
              <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300">
                <ShoppingCartIcon className="h-5 w-5" />
              </div>
              <button className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300">
                <HeartIcon className="h-5 w-5" />
              </button>
              <button className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300">
                <EyeIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <AdditionalInfo />
      </div>
    </>
  );
};

export default ProductPage;
