import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-4 font-montserrat">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap items-center justify-between bg-gray-100 py-6 px-4 rounded-lg">
          {/* Logo */}
          <h3 className="text-xl font-bold text-gray-800">Bandage</h3>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-6"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Company Info</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Features</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h4>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 text-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 text-sm mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="text-gray-600 text-sm text-center">
          Made With Love By{" "}
          <a
            href="https://my-portfolio-website45.netlify.app/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Muhammad Umer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
