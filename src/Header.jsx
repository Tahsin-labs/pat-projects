import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => toast("Logout Successfully"))
            .catch((error) => console.log(error));
    };

    const navLinkStyle = ({ isActive }) =>
        isActive
            ? "text-pink-600 font-semibold border-b-2 border-pink-500 pb-1"
            : "text-gray-700 hover:text-pink-600 transition";

    return (
        <header className="sticky top-0 z-50 bg-[#fffaf6] border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">

            
                    <Link to="/" className="flex items-center ">
                        <img 
                            src="https://amarpet.com/assets/icons/amar-pet.svg"
                            alt="logo"
                            className="w-40"
                        />
                      
                    </Link>

                
                    <nav className="hidden lg:flex gap-8 font-medium">
                        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
                        <NavLink to="/game" className={navLinkStyle}>All Pet</NavLink>
                        <NavLink to="/about" className={navLinkStyle}>About</NavLink>

                        {user && (
                            <>
                                <NavLink to="/addService" className={navLinkStyle}>Add Service</NavLink>
                                <NavLink to="/myListing" className={navLinkStyle}>Listing</NavLink>
                                <NavLink to="/orders" className={navLinkStyle}>Orders</NavLink>
                            </>
                        )}
                    </nav>

                    
                    <div className="flex items-center gap-4">

                        {user ? (
                            <>
                                <Link to="/profile">
                                    <img
                                        src={user.photoURL}
                                        alt="profile"
                                        className="w-10 h-10 rounded-full border"
                                    />
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className="px-5 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="px-5 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                                >
                                    Register
                                </NavLink>
                            </>
                        )}

                        
                        <div className="dropdown lg:hidden">
                            <label tabIndex={0} className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>

                            <ul
                                tabIndex={0}
                                className="menu dropdown-content mt-3 p-4 shadow bg-white rounded-xl w-52"
                            >
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/game">All Pet</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>

                                {user && (
                                    <>
                                        <li><NavLink to="/addService">Add Service</NavLink></li>
                                        <li><NavLink to="/myListing">Listing</NavLink></li>
                                        <li><NavLink to="/orders">Orders</NavLink></li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </header>
    );
};

export default Header;
