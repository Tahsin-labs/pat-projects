import React, { useState, useEffect } from 'react';
import Appk from './Appk';

const Game = () => {
    const [homeApp, setHomeApp] = useState([]);
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:3000/services');
                const data = await res.json();
                setHomeApp(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Filter by category & search by name
    const filteredApps = homeApp.filter(app => {
        const matchCategory = category ? app.category === category : true;
        const matchSearch = app.name
            ?.toLowerCase()
            .includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b bg-[#E8F5E9] text-gray-900 pb-20">

            <section className="py-16 px-4">
                <div className="container mx-auto">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 
                    text-pink-600 drop-shadow-lg tracking-wide font-serif">
                        Pick Your Products
                    </h2>

                    
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">

                
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="px-6 py-3 rounded-full bg-white/80 shadow-md border border-pink-300 
                            focus:ring-2 focus:ring-pink-400 text-gray-700 w-full md:w-64"
                        >
                            <option value="">All Categories</option>
                            <option value="pets">Pets</option>
                            <option value="food">Food</option>
                            <option value="accessories">Accessories</option>
                            <option value="care-products">Care Products</option>
                        </select>

            
                        <input
                            type="text"
                            placeholder="Search by product name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="px-6 py-3 rounded-full bg-white/80 shadow-md border border-purple-300 
                            focus:ring-2 focus:ring-purple-400 text-gray-700 w-full md:w-80"
                        />
                    </div>

        
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <span className="loading loading-bars loading-xl"></span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredApps.length > 0 ? (
                                filteredApps.map(app => (
                                    <div
                                        key={app._id}
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        className="bg-white/70 backdrop-blur-md p-5 rounded-3xl shadow-lg 
                                        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                    >
                                        <Appk app={app} />
                                    </div>
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-500 text-lg">
                                    No products found
                                </p>
                            )}
                        </div>
                    )}

                </div>
            </section>

        </div>
    );
};

export default Game;
