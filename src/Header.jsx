import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-[#fffaf6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="https://amarpet.com/assets/icons/amar-pet.svg"
              alt="logo"
              className="w-32 sm:w-36"
            />
          </Link>


          <nav className="hidden lg:flex gap-8 font-medium">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/game" className={navLinkStyle}>
              All Pet
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>

            {user && (
              <>
                <NavLink to="/addService" className={navLinkStyle}>
                  Add Service
                </NavLink>
                <NavLink to="/myListing" className={navLinkStyle}>
                  Listing
                </NavLink>
                <NavLink to="/orders" className={navLinkStyle}>
                  Orders
                </NavLink>
              </>
            )}
          </nav>


          <div className="flex items-center gap-4">
            {user ? (
              <Link to="/profile" className="lg:hidden">
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-10 h-10 rounded-full border"
                />
              </Link>
            ) : (
              <div className=" flex gap-2">
                <NavLink
                  to="/login"
                  className="px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition text-sm"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition text-sm"
                >
                  Register
                </NavLink>
              </div>
            )}


            {user && (
              <div className="hidden lg:flex items-center gap-4">
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
              </div>
            )}


            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>


              <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-bold">Menu</h2>
                  <button
                    className="p-2 rounded-md hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col p-4 gap-2 text-gray-700 text-sm">
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to="/"
                    className="block px-2 py-2 rounded hover:bg-pink-50"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to="/game"
                    className="block px-2 py-2 rounded hover:bg-pink-50"
                  >
                    All Pet
                  </NavLink>
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to="/about"
                    className="block px-2 py-2 rounded hover:bg-pink-50"
                  >
                    About
                  </NavLink>

                  {user && (
                    <>
                      <NavLink
                        onClick={() => setMobileMenuOpen(false)}
                        to="/addService"
                        className="block px-2 py-2 rounded hover:bg-pink-50"
                      >
                        Add Service
                      </NavLink>
                      <NavLink
                        onClick={() => setMobileMenuOpen(false)}
                        to="/myListing"
                        className="block px-2 py-2 rounded hover:bg-pink-50"
                      >
                        Listing
                      </NavLink>
                      <NavLink
                        onClick={() => setMobileMenuOpen(false)}
                        to="/orders"
                        className="block px-2 py-2 rounded hover:bg-pink-50"
                      >
                        Orders
                      </NavLink>
                    </>
                  )}
                </nav>

                <div className="p-4 border-t flex flex-col gap-2">
                  {user ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <NavLink
                        onClick={() => setMobileMenuOpen(false)}
                        to="/login"
                        className="px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        onClick={() => setMobileMenuOpen(false)}
                        to="/register"
                        className="px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                      >
                        Register
                      </NavLink>
                    </>
                  )}
                </div>
              </div>


              {mobileMenuOpen && (
                <div
                  className="fixed inset-0 bg-black/40 z-40"
                  onClick={() => setMobileMenuOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
