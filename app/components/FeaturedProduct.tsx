import Image from "next/image";

const FeaturedProducts = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-10 px-4 py-10">
            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-4/12 mb-10">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image
                        src="/images/pic1.jpeg"
                        alt="Pic One"
                        width={600}
                        height={600}
                        layout="responsive"
                        objectFit="cover"
                    />
                    <div className="p-4">
                        <p className="text-center text-xl font-semibold text-gray-800">PKR 150,000</p>
                        <div className="flex justify-center items-center mt-4">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-5/12 lg:w-4/12 xl:w-4/12 mb-10">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image
                        src="/images/pic2.jpeg"
                        alt="Pic Two"
                        width={600}
                        height={600}
                        layout="responsive"
                        objectFit="cover"
                    />
                    <div className="p-4">
                        <p className="text-center text-xl font-semibold text-gray-800">PKR 100,000</p>
                        <div className="flex justify-center items-center mt-4">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
