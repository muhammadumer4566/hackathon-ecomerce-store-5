import React from "react";

const BestsellerProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/img1.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 2,
      image: "/images/img2.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 3,
      image: "/images/img3.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 4,
      image: "/images/img4.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 5,
      image: "/images/img5.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 6,
      image: "/images/img3.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 7,
      image: "/images/img4.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      id: 8,
      image: "/images/img2.jpeg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
    },
  ];

  return (
    <div className="bg-white py-10 px-5">
      <h3 className="text-center text-gray-500 text-sm mb-2 uppercase">
        Featured Products
      </h3>
      <h2 className="text-center text-2xl font-bold mb-2">
        Bestseller Products
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-sm overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.department}</p>
              <div className="mt-2 flex justify-center items-center gap-2 text-gray-500">
                <span className="line-through">{product.oldPrice}</span>
                <span className="text-green-500 font-bold">{product.newPrice}</span>
              </div>
              {/* Color Options */}
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestsellerProducts;
