'use client'
import React, { useEffect, useState } from "react";
import { EyeIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import AdditionalInfo from "./AdditionalInfo";
import TopHeader from "./TopHeader";
import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@sanity/client';

// Define the type for the product data
interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  tags: string[];
  discountPercentage: number;
  description: string;
  isNew: boolean;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

const ProductPage = () => {
  // Specify the product type for useState
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch product data from Sanity
  useEffect(() => {
    async function fetchProduct() {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        "productImage": productImage.asset->url,
        tags,
        discountPercentage,
        description,
        isNew
      }`;

      try {
        const fetchedProduct: Product[] = await client.fetch(query);
        // Assuming you have only one product or you want to display the first one
        setProduct(fetchedProduct[0] || null); // Set null if no product found
      } catch (error) {
        console.error("Error fetching product data from Sanity:", error);
      }
    }

    fetchProduct();
  }, []);

  // Ensure product data is loaded before rendering
  if (!product) {
    return <div>Loading...</div>;
  }

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
                src={product.productImage}
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
              {["/images/pro1.png", "/images/pro1.png"].map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border border-gray-300 hover:border-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <span className="text-sm text-gray-500 ml-2">(10 Reviews)</span>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-4">${product.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                Availability: <span className="text-green-500">In Stock</span>
              </p>
              <p className="text-sm text-gray-600 mt-4 line-clamp-5">{product.description}</p>
            </div>

            {/* Color Options */}
            <div className="mt-4">
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
