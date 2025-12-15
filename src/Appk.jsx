import React from "react";
import { Link } from "react-router";

const Appk = ({ app }) => {
    const { _id, name, category, image, location, price } = app;

    return (
        <div className="w-full h-full">
            <div
                className="
                h-full flex flex-col
                bg-white/80 backdrop-blur-md
                rounded-3xl overflow-hidden
                shadow-lg hover:shadow-purple-300
                hover:-translate-y-2 transition-all duration-300
            "
            >
                {/* IMAGE */}
                <figure className="h-56 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </figure>

                {/* CONTENT */}
                <div className="flex flex-col justify-between flex-1 p-5 bg-gradient-to-b from-pink-100/60 to-purple-100/60">

                    {/* Name */}
                    <h2 className="text-xl font-bold text-pink-700 capitalize">
                        {name}
                    </h2>

                    {/* Category */}
                    <p className="text-sm text-purple-700 font-medium mt-1">
                        Category: {category}
                    </p>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center mt-4">

                        {/* Location */}
                        <span className="text-xs px-3 py-1 rounded-full bg-pink-200 text-pink-800 font-medium">
                            📍 {location}
                        </span>

                        {/* Price / Free */}
                        <span className="text-xs px-3 py-1 rounded-full bg-purple-200 text-purple-800 font-semibold">
                            {price === 0 ? "Free for Adoption" : `৳ ${price}`}
                        </span>
                    </div>

                    {/* Button */}
                    <Link to={`/details/${_id}`} className="mt-5">
                        <button
                            className="
                            w-full py-2 rounded-xl
                            bg-purple-600 text-white font-semibold
                            hover:bg-purple-700 transition
                        "
                        >
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Appk;
