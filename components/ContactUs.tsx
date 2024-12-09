'use client'
import React, { useState } from "react";
import Footer from "./Footer";

const ContactUs = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <>

            <nav className="bg-white py-4 px-6 shadow-md">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">Bandage</div>

                    {/* Hamburger Icon for Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
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

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        <a href="/" className="hover:text-gray-900">
                            Home
                        </a>
                        <a href="/productpage" className="hover:text-gray-900">
                            Product
                        </a>
                        <a href="/pricing" className="hover:text-gray-900">
                            Pricing
                        </a>
                        <a href="/contact" className="hover:text-gray-900">
                            Contact
                        </a>
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#" className="text-sm font-medium text-blue-500 hover:underline">
                            Login
                        </a>
                        <button className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
                            Become a member →
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="mt-4 space-y-4 md:hidden">
                        <a href="/" className="block text-sm font-medium text-gray-600 hover:text-gray-900">
                            Home
                        </a>
                        <a href="/productpage" className="block text-sm font-medium text-gray-600 hover:text-gray-900">
                            Product
                        </a>
                        <a href="/pricing" className="block text-sm font-medium text-gray-600 hover:text-gray-900">
                            Pricing
                        </a>
                        <a href="/contact" className="block text-sm font-medium text-gray-600 hover:text-gray-900">
                            Contact
                        </a>
                        <a href="#" className="block text-sm font-medium text-blue-500 hover:underline">
                            Login
                        </a>
                        <button className="w-full px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
                            Become a member →
                        </button>
                    </div>
                )}
            </nav>

            <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mx-auto container">
                <div className="max-w-[1440px] mx-auto container  flex items-center justify-center gap-9 ">
                    {/* Left Content */}
                    <div className=" space-y-6">
                        <h4 className="uppercase text-sm font-medium text-gray-500">
                            Contact Us
                        </h4>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Get in touch today!
                        </h2>
                        <p className="text-gray-600">
                            We know how large objects will act, <br /> but things on a small scale.
                        </p>
                        <div>
                            <p className="text-gray-800 font-medium">
                                Phone: <span className="text-black">+451 215 215</span>
                            </p>
                            <p className="text-gray-800 font-medium">
                                Fax: <span className="text-black">+451 215 215</span>
                            </p>
                        </div>
                        {/* Social Icons */}
                        <div className="mt-6 flex space-x-4">
                            <img
                                src="/about/Icon-Twitter2.png"
                                className=" bg-blue-700 w-6 h-6"                        >
                            </img>
                            <img
                                src="/about/Icon-Facebook.png"
                                className=" bg-blue-700 w-6 h-6"
                            >
                            </img>
                            <img
                                src="/about/insta2.png"
                                className=" bg-blue-700 w-6 h-6"                        >
                            </img>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-1/2 h-[400px]">
                        <img
                            src="/images/contact.png"
                            alt="Family Shopping"
                            className="object-contain  h-full w-full "
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto text-center space-y-12">
                    {/* Heading Section */}
                    <div>
                        <h4 className="uppercase text-sm text-blue-500 font-medium mb-2">
                            Visit Our Office
                        </h4>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            We help small businesses <br /> with big ideas
                        </h2>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
                        {/* Phone Card */}
                        <div className="flex flex-col space-y-5 items-center bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <div className="w-12 h-12 flex items-center justify-center mb-4">
                                <img
                                    src="/images/icon.png"
                                    className=" w-10 h-10"                        >
                                </img>
                            </div>
                            <p className="text-sm text-gray-600">
                                georgia.young@example.com <br />
                                georgia.young@ple.com
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800">Get Support</h3>
                            <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Location Card */}
                        <div className="flex flex-col space-y-5 items-center bg-[#252B42] text-white shadow-lg rounded-lg p-6">
                            <div className="w-12 h-12 flex items-center justify-center mb-4">
                                <img
                                    src="/images/icon.png"
                                    className=" w-10 h-10"                        >
                                </img>
                            </div>
                            <p className="text-sm">
                                georgia.young@example.com <br />
                                georgia.young@ple.com
                            </p>
                            <h3 className="text-lg font-semibold">Get Support</h3>
                            <button className="mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition">
                                Submit Request
                            </button>
                        </div>

                        {/* Email Card */}
                        <div className="flex flex-col items-center space-y-5 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <div className="w-12 h-12 flex items-center justify-center mb-4">
                                <img
                                    src="/images/icon.png"
                                    className=" w-10 h-10"                        >
                                </img>
                            </div>
                            <p className="text-sm text-gray-600">
                                georgia.young@example.com <br />
                                georgia.young@ple.com
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800">Get Support</h3>
                            <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
                                Submit Request
                            </button>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-white py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6">
                        {/* Arrow and Subtitle */}
                        <div className="text-center">
                            <div className="text-blue-500 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 mx-auto animate-bounce"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 19V6m-7 7l7-7 7 7"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-gray-600 text-sm uppercase tracking-wide">
                                WE Can Not WAIT TO MEET YOU
                            </h4>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
                            Let’s Talk
                        </h1>

                        {/* Button */}
                        <button className="px-8 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
                            Try it free now
                        </button>
                    </div>
                </div>
            </section>
           <Footer/>

        </>

    );
};

export default ContactUs;
