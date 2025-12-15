import React from 'react';
import { FaPaw, FaTruck, FaMedkit, FaShoppingCart } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-green-50">

        
                <section className="text-center py-20 px-6 relative">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">
                        Welcome to AmarPet
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
                        We provide everything your pets need — from nutritious food, accessories, medicines to expert care.
                    </p>
                    <img
                        src="https://i.fbcd.co/products/original/c-1000-designbundle-dog-playing-ball-11-10-dbf1659c830df1ed4a93f8ab5a8302e7a291b44c4c7cffec0b4cf2dc738a43f6.jpg"
                        alt="Happy Pets"
                        className="mx-auto mt-10 rounded-3xl shadow-lg w-full max-w-3xl"
                    />
                </section>

            
                <section className="max-w-7xl mx-auto my-20 px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            AmarPet aims to make pet care enjoyable and stress-free.
                            From timely delivery to reliable products, we take care of everything for your furry friends.
                        </p>
                    </div>

            
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
                            <FaPaw className="text-pink-500 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Pet Adoption & Sales</h3>
                            <p className="text-gray-600">Find loving pets and give them a forever home.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
                            <FaShoppingCart className="text-purple-500 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Pet Food & Accessories</h3>
                            <p className="text-gray-600">Healthy food, toys, beds, and accessories for pets.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
                            <FaMedkit className="text-green-500 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Medicines & Care</h3>
                            <p className="text-gray-600">Essential medicines and grooming products for your pets.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
                            <FaTruck className="text-yellow-500 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                            <p className="text-gray-600">Quick and reliable delivery right to your doorstep.</p>
                        </div>
                    </div>
                </section>

                
                <section className="bg-pink-100 py-20 px-6 text-center rounded-3xl mx-6 md:mx-20 shadow-lg">
                    <h2 className="text-4xl font-bold text-pink-600 mb-4">Join the AmarPet Family</h2>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                        Explore our wide range of products and services to keep your pets happy and healthy.
                    </p>
                    <a
                        href="/"
                        className="px-8 py-4 bg-pink-600 text-white rounded-full text-lg font-semibold hover:bg-pink-700 transition"
                    >
                        Explore Products
                    </a>
                </section>
            </div>
        </div>
    );
};

export default About;