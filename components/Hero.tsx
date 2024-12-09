import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[716px] sm:h-[600px] md:h-[716px] bg-blue-500 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center sm:items-start px-4 sm:px-8 lg:px-12 text-center sm:text-left h-full">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl">
          <p className="uppercase text-sm tracking-widest mb-4 text-white">
            Summer 2020
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            New Collection
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
