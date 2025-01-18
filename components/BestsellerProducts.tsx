'use client';
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  tags: string[];
  dicountPercentage: number;
  description: string;
  isNew: boolean;
}

const BestsellerProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        "productImage": productImage.asset->url,
        tags,
        dicountPercentage,
        description,
        isNew
      }`;

      try {
        const fetchedProduct: Product[] = await client.fetch(query);
        setProducts(fetchedProduct.slice(0, 8)); // Display only the first 8 products
      } catch (error) {
        console.error("Error fetching product data from Sanity:", error);
      }
    }

    fetchProduct();
  }, []);

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white py-10 px-5">
      <h3 className="text-center text-gray-500 text-sm mb-2 uppercase">
        Featured Products
      </h3>
      <h2 className="text-center text-2xl font-bold mb-2">
        Bestseller Products
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border rounded-lg shadow-sm overflow-hidden"
          >
            {/* Product Image */}
            <Image
              src={product.productImage}
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-[400px] object-cover"
            />
            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-3">{product.description}</p>
              <div className="mt-2 flex justify-center items-center gap-2 text-gray-500">
                {/* Price and Discount */}
                <span className="text-green-500 font-bold">{product.price} $</span>
              </div>
              <div className="mt-2 text-gray-500">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full">
                  {product.dicountPercentage}% Off
                </span>
              </div>
              {/* Tags and Is New */}
              <div className="mt-4 flex justify-center gap-1">
                {product.isNew && (
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                )}
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="w-3 h-3 rounded-full bg-green-500"
                    title={tag}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;
