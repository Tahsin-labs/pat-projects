import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './AuthProvider';
// import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => alert("You Logout"))
            .catch((error) => console.log(error));
    };

    return (
        <div className="sticky top-0 z-50 shadow-lg bg-gray-900/80 backdrop-blur-xl border-b border-gray-700">

            <div className="navbar max-w-6xl mx-auto text-white px-4">


                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-purple-300 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-52 p-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
                        >
                            <li><NavLink className="hover:text-purple-300" to="/">Home</NavLink></li>
                            <li><NavLink className="hover:text-purple-300" to="/game">All Pet</NavLink></li>
                            <li><NavLink className="hover:text-purple-300" to="/about">About</NavLink></li>
                            <li><NavLink className="hover:text-purple-300" to="/addService">AddService</NavLink></li>
                            <li><NavLink className="hover:text-purple-300" to="/myListing">Listing</NavLink></li>
                            <li><NavLink className="hover:text-purple-300" to="/orders">Orders</NavLink></li>
                        </ul>
                    </div>

                    <Link to="/" className="text-2xl font-bold text-purple-400 tracking-wide">
                        TahsinLAB..
                    </Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-sm font-semibold">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-300 border-b-2 border-purple-300 pb-1"
                                        : ""
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-300 border-b-2 border-purple-300 pb-1"
                                        : ""
                                }
                                to="/game"
                            >
                                All Pet
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-300 border-b-2 border-purple-300 pb-1"
                                        : ""
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-300 border-b-2 border-purple-300 pb-1"
                                        : ""
                                }
                                to="/addService"
                            >
                                AddService
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-300 border-b-2 border-purple-300 pb-1"
                                        : ""
                                }
                                to="/myListing"
                            >
                                Listing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-300 border-b-2 border-purple-300 pb-1"
                                        : ""
                                }
                                to="/orders"
                            >
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                </div>


                <div className="navbar-end flex items-center gap-4">

                    {user ? (
                        <div className="flex items-center gap-3">
                            <Link to="/profile">
                                <img
                                    className="w-11 h-11 rounded-full border border-purple-500 shadow-md"
                                    src={user.photoURL}
                                    alt="profile"
                                />
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <NavLink
                                to="/login"
                                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
                            >
                                Register
                            </NavLink>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Header;
