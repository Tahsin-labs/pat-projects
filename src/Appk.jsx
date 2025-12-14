import React from "react";
import { Link } from "react-router";

const Appk = ({ app }) => {
    const { _id, name, description, image, location, price } = app;

    return (
        <Link to={`/details/${_id}`} className="block w-full h-full">
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

                    {/* Title */}
                    <h2 className="text-xl font-bold text-pink-700 capitalize">
                        {name}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-5">

                        {/* Location */}
                        <span className="text-xs px-3 py-1 rounded-full bg-pink-200 text-pink-800 font-medium">
                            📍 {location}
                        </span>

                        {/* Price */}
                        <span className="text-xs px-3 py-1 rounded-full bg-purple-200 text-purple-800 font-semibold">
                            ৳ {price}
                        </span>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Appk;
