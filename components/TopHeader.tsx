'use client'
import React, { useState } from "react";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const TopHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex bg-[#1a1a2e] text-white py-2 px-4 md:px-8 text-sm justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-4">
          <span>📞 (225) 555-0118</span>
          <span>✉️ michelle.rivera@example.com</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-9 mt-2 sm:mt-0">
          <span className="hidden sm:inline">Follow Us and get a chance to win 80% off</span>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Follow Us:</span>
            <img src="/about/insta2.png" alt="Instagram" className="w-4 h-4" />
            <img src="/about/Icon-Facebook.png" alt="Facebook" className="w-4 h-4" />
            <img src="/about/Icon-Twitter2.png" alt="Twitter" className="w-4 h-4" />
            <img src="/about/link2.png" alt="YouTube" className="w-4 h-4" />
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="py-4 px-4 md:px-8 flex justify-between items-center max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="text-xl font-bold">Bandage</div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-6">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <Link href="/shop" className="text-gray-700 hover:text-blue-500">
              Shop
            </Link>
            <a href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Pages
            </a>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-1 text-blue-500">
              <UserIcon className="w-5 h-5" />
              <span className="hidden md:inline">Login / Register</span>
            </a>
            <MagnifyingGlassIcon className="w-5 h-5 text-blue-500" />
            <a href="/productpage">
              <div className="flex items-center gap-1">
                <ShoppingCartIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-blue-500">1</span>
              </div>
            </a>
            <div className="flex items-center gap-1">
              <HeartIcon className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-blue-500">1</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block lg:hidden text-gray-700 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md py-4 px-4 flex flex-col gap-4">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <Link href="/shop" className="text-gray-700 hover:text-blue-500">
              Shop
            </Link>
            <a href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Pages
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default TopHeader;
