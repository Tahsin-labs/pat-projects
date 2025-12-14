import React, { use, useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
// import { AuthContext } from "../Provide/AuthProvider";
import { Link } from "react-router";
import { AuthContext } from "./AuthProvider";

const ForgetPassword = () => {
    const { auth } = use(AuthContext);
    const emailRef = useRef(null);

    const handleForgetPass = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!");
            })
            .catch(() => {
                toast.error("Check your email or create an account first.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">

            
            <div className="hidden md:flex w-1/2 items-center justify-center">
                <img
                    src="https://i.ibb.co/F4g060hS/forgot-password-concept-illustration-86047-1067.jpg"
                    alt="Forgot Illustration"
                    className="max-w-md"
                />
            </div>

            
            <div className="w-full md:w-1/2 p-8">
                <h1 className="text-4xl font-semibold text-gray-900">Forgot Password</h1>
                <p className="text-gray-600 mt-2">
                    Please enter your email address below
                </p>

                <form
                    onSubmit={handleForgetPass}
                    className="mt-6 space-y-6">

                    
                    <div>
                        <label className="text-gray-600 block mb-1">Enter Email Address</label>
                        <input
                            type="email"
                            ref={emailRef}
                            placeholder="Enter email address"
                            className="
                                w-full border-b border-gray-300 bg-transparent 
                                focus:outline-none focus:border-blue-400
                                py-2 text-gray-700
                            "
                        />
                    </div>

                    
                    <button
                        type="submit"
                        className="
                            bg-blue-400 text-white px-6 py-2 rounded-full 
                            hover:bg-blue-500 transition
                        "
                    >
                        Next
                    </button>
                </form>

                <div className="mt-6">
                    <Link
                        to="/login"
                        className="text-blue-500 hover:underline"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default ForgetPassword;
