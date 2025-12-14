import React from 'react';
import { Link } from 'react-router';

const Eror = () => {
    return (
        <div>
            <section className="h-screen bg-[#0d0f16] text-gray-300 flex items-center justify-center px-6">
                <div className="text-center">

                
                    <h1 className="text-7xl md:text-8xl font-extrabold text-white tracking-widest relative inline-block">
                        404
                        <span className="absolute inset-0 text-indigo-500 blur-sm opacity-60 select-none">
                            404
                        </span>
                    </h1>

                    
                    <p className="mt-6 text-lg text-gray-400">
                        The doorway you're trying to enter doesn't exist anymore.
                    </p>
                    <p className="text-sm mt-2 text-gray-500">
                        Maybe it was a hidden level… or maybe it never loaded.
                    </p>

            
                    <Link
                        to="/"
                        className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold text-white transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50"
                    >
                        Return to Home
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Eror;