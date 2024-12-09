'use client'
import React, { useState } from "react";
import Footer from "./Footer";

const AboutUs = () => {

  const teamMembers = [
    {
      id: 1,
      image: "/images/img1.jpeg",
      name: "Username",
      profession: "Profession",
      socials: ["facebook", "instagram", "twitter"],
    },
    {
      id: 2,
      image: "/images/img2.jpeg",
      name: "Username",
      profession: "Profession",
      socials: ["facebook", "instagram", "twitter"],
    },
    {
      id: 3,
      image: "/images/img3.jpeg",
      name: "Username",
      profession: "Profession",
      socials: ["facebook", "instagram", "twitter"],
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


      <div className="py-12 sm:px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-6 lg:px-8">
          {/* Left Section */}
          <div className="space-y-6 text-center lg:text-left">
            <h4 className="text-sm uppercase text-gray-500">About Company</h4>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">About Us</h1>
            <p className="text-gray-600">
              We know how large objects will act, <br /> but things on a small scale.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
              Get Quote Now
            </button>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center">
            <img
              src="/images/about.png"
              alt="About Us"
              className="w-full max-w-[500px] h-auto object-cover"
            />
          </div>
        </div>

        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto space-y-12">
            {/* Heading Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Problems trying
              </h2>
              <p className="text-gray-600">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">15K</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">150K</h3>
                <p className="text-sm text-gray-600">Monthly Visitors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">15</h3>
                <p className="text-sm text-gray-600">Countries Worldwide</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-sm text-gray-600">Top Partners</p>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src="/images/vid.png"
                alt="Video Thumbnail"
                className="w-[72] h-full object-cover mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            {/* Title Section */}
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600 text-sm mt-2">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics.
            </p>

            {/* Team Members */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="text-center flex flex-col items-center"
                >
                  {/* Member Image */}
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.profession}</p>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-4">
                    {member.socials.map((social, index) => (
                      <a
                        key={index}
                        href={`https://${social}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social === "facebook" && (
                          <img
                            src="/about/Icon-Facebook.png"
                            alt="Facebook"
                            className="w-5 h-5 bg-blue-900"
                          />
                        )}
                        {social === "instagram" && (
                          <img
                            src="/about/insta2.png"
                            alt="Instagram"
                            className="w-5 h-5 bg-blue-900"
                          />
                        )}
                        {social === "twitter" && (
                          <img
                            src="/about/Icon-Twitter2.png"
                            alt="Twitter"
                            className="w-5 h-5 bg-blue-900"
                          />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* Top Section */}
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800">Big Companies Are Here</h2>
              <p className="text-gray-600 text-sm mt-2">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
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

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left Content */}
            <div className="bg-blue-500 text-white p-8 rounded-lg flex-1 h-full">
              <h4 className="text-sm font-medium uppercase mb-2">Work With Us</h4>
              <h2 className="text-3xl font-bold mb-4">Now Let’s grow Yours</h2>
              <p className="text-sm text-blue-200 mb-6">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
              </p>
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition">
                Button
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src="/images/img3.jpeg"
                alt="Company"
                className="w-full h-[560px] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
