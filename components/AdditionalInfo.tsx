
const AdditionalInfo = () => {

    return (
        <div className=" px-4 sm:px-6 my-16 lg:px-8">
            {/* Tabs Section */}
            <div className="border-b border-gray-200 mb-8">
                <ul className="flex text-gray-500 text-sm text-center font-medium space-x-4">
                    <li className="cursor-pointer hover:text-blue-500">Description</li>
                    <li className="cursor-pointer text-blue-500">Additional Information</li>
                    <li className="cursor-pointer hover:text-blue-500">Reviews (0)</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Section - Image */}
                <div className="col-span-1">
                    <img
                        src="/images/pro2.png"
                        alt="Product"
                        className="w-full h-auto rounded-lg object-cover shadow"
                    />
                </div>

                {/* Middle Section - Text Content */}
                <div className="col-span-1 lg:col-span-1">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        the quick fox jumps over
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                        consequent sent nostrum met.
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                        consequent sent nostrum met.
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                        consequent sent nostrum met.
                    </p>
                </div>

                {/* Right Section - List */}
                <div className="col-span-1 lg:col-span-1">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        the quick fox jumps over
                    </h2>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">›</span>
                            the quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">›</span>
                            the quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">›</span>
                            the quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">›</span>
                            the quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">›</span>
                            the quick fox jumps over the lazy dog
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div className="bg-white my-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto">
                   
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Bestseller Products</h2>

                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                            >
                               
                                <div className="w-full h-56 overflow-hidden rounded-t-lg">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                               
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                                    <p className="text-sm text-gray-500">{product.department}</p>
                                    <div className="mt-2 flex items-center space-x-2">
                                        <span className="text-sm text-gray-500 line-through">{product.price}</span>
                                        <span className="text-sm text-green-500 font-bold">{product.discountedPrice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 mt-12">
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
            </div> */}

            
        </div>
    );
};

export default AdditionalInfo;
