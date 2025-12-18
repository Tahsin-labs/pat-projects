import React from "react";
import { Link } from "react-router";

const Appk = ({ app }) => {
    const { _id, name, category, image,  price,
        description
    } = app;
    console.log(app)

    return (
        <div className="w-full h-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]">

                {/* Image Section */}
                <div className="relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-64 object-cover"
                    />

                    {/* Price Tag */}
                    <div className="absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-bold text-white
                        bg-gradient-to-r from-orange-500 to-orange-400">
                        {price === 0 ? "Free" : `৳ ${price}`}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 text-left">

                    {/* Category / Age */}
                    <p className="text-orange-500 text-sm font-semibold mb-2 uppercase">
                        {category}
                    </p>

                    {/* Product Name */}
                    <h2 className="text-2xl font-bold text-gray-700 mb-4 tracking-tight">
                        {name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                     {
                            description
                        }
                    </p>

                    {/* Button */}
                    <div className="flex justify-end">
                        <Link to={`/details/${_id}`}>
                            <button
                                className="
                                px-6 py-2 rounded-full font-bold text-white
                                bg-gradient-to-r from-purple-600 to-blue-600
                                hover:-translate-y-1 hover:shadow-lg
                                transition-all duration-300
                                "
                            >
                                Details
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Appk;
