'use client';
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

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

interface BestsellerProductsProps {
  displayAll?: boolean;
  currentTitle?: string; // Title of the current product being viewed
}

const BestsellerProducts: React.FC<BestsellerProductsProps> = ({ displayAll = false, currentTitle }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

        // Use a Set to ensure only unique titles are added
        const seenTitles = new Set<string>();
        const uniqueProducts = fetchedProduct.filter((product) => {
          if (seenTitles.has(product.title)) {
            return false; // Skip if title already exists
          }
          seenTitles.add(product.title);
          return true; // Include product with unique title
        });

        const filteredProducts = uniqueProducts.filter(
          (product) => product.title !== currentTitle 
        );

        setProducts(displayAll ? filteredProducts : filteredProducts.slice(2, 6)); // Display all or first 4
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data from Sanity:", error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [displayAll, currentTitle]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-2xl font-bold mb-8">
        {displayAll ? "All Products" : "Bestseller Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const discountedPrice = product.price - (product.price * product.dicountPercentage) / 100;

          return (
            <div
              key={product._id}
              className="bg-white border rounded-lg shadow-sm overflow-hidden"
            >
              <Link href={`/productpage/${product._id}`}>
                <Image
                  src={product.productImage}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p className="text-gray-500 mt-3 text-sm line-clamp-3">{product.description}</p>
                <div className="mt-2 flex justify-center items-center gap-8 text-gray-500">
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-red-600 font-bold line-through">
                      ${product.price}
                    </span>
                    <span className="text-green-500 font-bold">
                      ${discountedPrice.toFixed(2)}
                    </span>
                  </div>
                  <span className="mt-3 text-black text-xs">
                    ({product.dicountPercentage}% Off)
                  </span>
                </div>
                <button className="mt-3 bg-black text-white py-1 px-3 rounded">
                  Read more
                </button>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestsellerProducts;
