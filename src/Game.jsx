import React, { useState, useEffect } from 'react';
import Appk from './Appk';

const Game = () => {
    const [homeApp, setHomeApp] = useState([]);
    const [category, setCategory] = useState('');

    // Fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/services');
                const data = await res.json();
                setHomeApp(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Filter products by category if selected
    const filteredApps = category ? homeApp.filter(app => app.category === category) : homeApp;

    return (
        <div className="min-h-screen bg-gradient-to-b bg-[#E8F5E9] text-gray-900 pb-20">

            <section className="py-16 px-4">
                <div className="container mx-auto">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 
                    text-pink-600 drop-shadow-lg tracking-wide font-serif">
                        ✨ Enjoy Your Games ✨
                    </h2>

                    {/* Cute Select Dropdown */}
                    <div className="flex justify-center mb-10">
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="px-6 py-3 rounded-full bg-white/80 shadow-md border border-pink-300 
                            focus:ring-2 focus:ring-pink-400 text-gray-700"
                        >
                            <option value="">All Categories</option>
                            <option value="pets">Pets</option>
                            <option value="food">Food</option>
                            <option value="accessories">Accessories</option>
                            <option value="care-products">Care Products</option>
                        </select>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredApps.map(app => (
                            <div
                                key={app.id}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={app.id * 100}
                                className="bg-white/70 backdrop-blur-md p-5 rounded-3xl shadow-lg 
                                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <Appk app={app} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Game;
