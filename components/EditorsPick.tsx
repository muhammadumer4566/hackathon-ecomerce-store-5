import React from "react";

const EditorsPick = () => {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]">
      <div className="max-w-[1200px] w-full flex flex-col gap-8 bg-[#FAFAFA] p-6 md:p-10 rounded-md">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-Montserrat font-semibold text-xl md:text-2xl">
            EDITOR’S PICK
          </h3>
          <p className="text-sm md:text-base text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Men Image */}
          <div className="relative w-full h-[400px]">
            <img
              src="/images/men.jpeg"
              alt="Men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-sm text-[#252B42] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-full h-[400px]">
            <img
              src="/images/women.jpg"
              alt="Women"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-sm text-[#252B42] hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids */}
          <div className="grid grid-cols-1 gap-6">
            {/* Accessories Image */}
            <div className="relative w-full h-[200px] md:h-[240px]">
              <img
                src="/images/women2.jpg"
                alt="Accessories"
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-sm text-[#252B42] hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative w-full h-[200px] md:h-[240px]">
              <img
                src="/images/kids.jpg"
                alt="Kids"
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-sm text-[#252B42] hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
