import React from "react";
import Footer from "./Footer";
import BestsellerProducts from "./BestsellerProducts";
import TopHeader from "./TopHeader";

const Shop = () => {
    return (

        <div className="bg-white">
            <TopHeader />

            {/* Header Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-bold mb-4">Shop</h1>
            </div>

            {/* Product Grid Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {["/images/img1.jpeg", "/images/img2.jpeg", "/images/img3.jpeg", "/images/img4.jpeg"].map(
                    (image, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={image}
                                alt={`Product ${index + 1}`}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-white font-semibold text-lg">CLOTHS</h3>
                                    <p className="text-white text-sm">5 Items</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* Filter Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col gap-4 sm:gap-6 sm:flex-row justify-between items-start sm:items-center">
                {/* Results Text */}
                <p className="text-gray-600 text-sm">
                    Showing all 12 results
                </p>

                {/* Controls Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Views Section */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm">Views:</span>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <span className="block w-4 h-4 bg-gray-500"></span>
                        </button>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <span className="block w-4 h-1 bg-gray-500"></span>
                        </button>
                    </div>

                    {/* Sorting Dropdown */}
                    <select className="border border-gray-300 p-2 rounded-lg text-sm w-full sm:w-auto">
                        <option>Popularity</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>

                    {/* Filter Button */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full sm:w-auto">
                        Filter
                    </button>
                </div>
            </div>


            {/* Brands Section */}
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

            <Footer />
            <BestsellerProducts />

            <div className="flex justify-center items-center py-2">
                <div className="flex border rounded-md shadow-sm">
                    {/* First Button */}
                    <button
                        className="px-4 py-2 border-r text-sm text-gray-500 bg-gray-100 cursor-not-allowed"
                    >
                        First
                    </button>

                    {/* Page Numbers */}
                    <button className="px-4 py-2 border-r text-sm text-blue-500 hover:bg-gray-100">
                        1
                    </button>
                    <button className="px-4 py-2 border-r text-sm bg-blue-500 text-white">
                        2
                    </button>
                    <button className="px-4 py-2 border-r text-sm text-blue-500 hover:bg-gray-100">
                        3
                    </button>

                    {/* Next Button */}
                    <button className="px-4 py-2 text-sm text-blue-500 hover:bg-gray-100">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;
