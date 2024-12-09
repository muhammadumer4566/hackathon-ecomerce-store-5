'use client'
import React, { useState } from "react";
import Footer from "./Footer";

const PricingSection = () => {

    const pricingPlans = [
        {
            title: "FREE",
            price: "0",
            button1: "Try to free",
            description: "Organize across all apps by hand",
            features: [
                "Unlimited product updates",
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Email and community support",
            ],
            bgColor: "bg-white",
            textColor: "text-gray-900",
            border: "border-blue-300",
        },
        {
            title: "STANDARD",
            price: "9.99",
            button1: "Try to free",
            description: "Organize across all apps by hand",
            features: [
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Priority support",
                "Email and community support",
            ],
            bgColor: "bg-blue-900",
            textColor: "text-white",
            isHighlighted: true,
        },
        {
            title: "PREMIUM",
            price: "19.99",
            button1: "Try to free",
            description: "Organize across all apps by hand",
            features: [
                "Unlimited product updates",
                "5GB Cloud storage",
                "Email and community support",
                "Custom integrations",
                "Email and community support",
            ],
            bgColor: "bg-white",
            textColor: "text-gray-900",
            border: "border-blue-300",
        },
    ];

    const faqs = [
        {
            question: "the quick fox jumps over the lazy dog",
            answer:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        },
    ];

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

            <div className="bg-white">
                {/* Header Section */}
                <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
                    <h4 className="text-sm font-medium text-gray-500 uppercase">Pricing</h4>
                    <h1 className="text-4xl font-bold text-gray-900 mt-5">Simple Pricing</h1>
                    <nav className="flex justify-center mt-7 text-sm text-gray-500">
                        <span>Home</span>
                        <span className="mx-2">{`>`}</span>
                        <span>Pricing</span>
                    </nav>
                </div>

                {/* Pricing Toggle Section */}
                <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1440px] mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Problems trying to resolve the conflict between <br /> the two major realms
                            of Classical physics: Newtonian mechanics.
                        </p>

                        {/* Toggle Buttons */}
                        <div className="flex justify-center items-center mt-8 gap-4">
                            <span className="text-gray-700 font-medium">Monthly</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500"></div>
                                <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></span>
                            </label>
                            <span className="text-gray-700 font-medium">Yearly</span>
                            <button className="ml-4 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200">
                                Save 25%
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                    {/* Pricing Plans Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg shadow-md ${plan.isHighlighted
                                    ? "transform scale-105 border-blue-500"
                                    : plan.border || "border-gray-200"
                                    } ${plan.bgColor} ${plan.textColor} border`}
                            >
                                <h3 className="text-xl font-bold">{plan.title}</h3>
                                <p className="mt-2 text-sm">{plan.description}</p>
                                <div className="mt-6 text-4xl font-bold">
                                    {plan.price} <span className="text-lg">$</span>{" "}
                                    <span className="text-sm font-medium">Per Month</span>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span
                                                className={`w-5 h-5 flex items-center justify-center rounded-full ${feature.includes("Unlimited")
                                                    ? "bg-green-500 text-white"
                                                    : "bg-gray-300 text-gray-500"
                                                    }`}
                                            >
                                                ✓
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                {/* Try for Free Button */}
                                <div className="mt-6 text-center">
                                    <button className="px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
                                        Try for free
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Company Logos Section */}
                    <div className="bg-gray-50 py-8 mt-12">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8">
                            {["icon1", "icon2", "icon3", "icon4", "icon5"].map((icon, index) => (
                                <img
                                    key={index}
                                    src={`/images/${icon}.png`}
                                    alt={icon}
                                    className="w-20 h-20 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-900">Pricing FAQs</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Problems trying to resolve the conflict between the two major realms
                        of Classical physics
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 rounded-lg shadow flex flex-col gap-2"
                        >
                            <div className="flex items-start gap-2">
                                <span className="text-blue-500 text-lg font-bold">›</span>
                                <h3 className="text-lg font-bold text-gray-900">
                                    {faq.question}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500">
                        Haven’t got your answer?{" "}
                        <a
                            href="#"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Contact our support
                        </a>
                    </p>
                </div>
            </div>
            <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-[1440px] mx-auto">
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Start your 14 days free trial
                    </h2>
                    <p className="mt-4 text-sm text-gray-500">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequent.
                    </p>

                    {/* Button */}
                    <div className="mt-6">
                        <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
                            Try it free now
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-6 flex justify-center space-x-4">
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
            </div>

            <Footer />

        </>

    );
};

export default PricingSection;
