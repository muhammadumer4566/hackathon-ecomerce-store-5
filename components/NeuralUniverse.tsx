import React from "react";

const NeuralUniverse = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        {/* Left Section: Image */}
        <div className="relative">
          <img
            src="/images/neutral.png"
            alt="Neural Universe"
            className="w-[725px] h-[500px] object-cover"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="space-y-6">
          <h4 className="text-sm font-medium uppercase text-gray-500">
            Summer 2020
          </h4>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Part of the Neural <br /> Universe
          </h1>
          <p className="text-gray-600 text-lg">
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700">
              Buy Now
            </button>
            <button className="border-2 border-green-600 text-green-600 py-3 px-6 rounded-md hover:bg-green-100">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralUniverse;
