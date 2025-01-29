"use client";

import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BestsellerProducts from "./BestsellerProducts";
import Footer from "./Footer";
import TopHeader from "./TopHeader";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast"; // Importing toast from react-hot-toast

dotenv.config();

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

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  useCdn: true,
  apiVersion: "2025-01-13",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const { addToCart } = useCart(); // Cart context to manage the cart

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;

      const query = `*[_type == "product" && _id == $id]{
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
        const fetchedProduct: Product[] = await client.fetch(query, { id });
        setProduct(fetchedProduct[0] || null);
      } catch (error) {
        console.error("Error fetching product data from Sanity:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountedPrice =
    product.price - (product.price * product.dicountPercentage) / 100;

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        title: product.title,
        price: product.price,
        discountedPrice,
        productImage: product.productImage,
        quantity: 1,
      });
      toast.success("Product added to cart successfully!", {
        position: "top-center", 
      });
    }
  };

  return (
    <>
      <TopHeader />
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto text-sm text-gray-500 mb-6">
          <span>Home</span> &gt; <span>Shop</span>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.productImage}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col py-5">
            <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
            <div className="mt-4 flex gap-2 flex-wrap">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center">
              <p className="text-lg font-bold text-red-600 line-through mr-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-lg font-bold text-green-600">
                ${discountedPrice.toFixed(2)}
              </p>
              <span className="text-sm text-gray-600 ml-2">
                ({product.dicountPercentage}% off)
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2 line-clamp-6">
              {product.description}
            </p>

            <div className="mt-7 flex gap-4 items-center">
              <button
                onClick={handleAddToCart}
                className="bg-green-900 text-white px-4 py-2 rounded font-medium flex items-center"
              >
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="bg-gray-300 p-3 rounded flex items-center">
                <HeartIcon className="h-5 w-5 text-red-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Display all products at the bottom */}
        <BestsellerProducts displayAll currentTitle={product.title} />
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
