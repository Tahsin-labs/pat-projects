import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../Provider/AuthProvider';
import { Toaster } from "react-hot-toast";
import { AuthContext } from './AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { signIn, handleGoogleIn } = use(AuthContext);

    const emailRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => navigate(location.state || "/"))
            .catch(err => setError(err.code));
    };

    const signGoogle = () => {
        handleGoogleIn()
            .then(result => signIn(result.user))
            .catch(err => console.log(err));
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-3"
            style={{
                backgroundImage: `url('https://i.ibb.co/CsQ8P2zB/Eo-Rvvd-QR4-S3o-XLEb-TYPx-FW.jpg')`,
            }}
        >
            
            <div className="
                backdrop-blur-xl bg-white/10 border border-white/20
                shadow-2xl rounded-2xl p-8 w-full max-w-sm
                animate-fadeIn
            ">
                <form onSubmit={handleLogin} className="space-y-5">

                    <h2 className="text-white text-3xl font-semibold text-center mb-4 tracking-wide">
                        Login
                    </h2>

            
                    <label className="text-white/80 text-sm">Email</label>
                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        required
                        className="
                            w-full px-4 py-2 rounded-lg bg-white/20 text-white 
                            placeholder-white/60 border border-white/30 
                            focus:outline-none focus:ring-2 focus:ring-pink-300
                        "
                        placeholder="Email"
                    />

                
                    <label className="text-white/80 text-sm">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        className="
                            w-full px-4 py-2 rounded-lg bg-white/20 text-white 
                            placeholder-white/60 border border-white/30 
                            focus:outline-none focus:ring-2 focus:ring-pink-300
                        "
                        placeholder="Password"
                    />

                    
                    <div className="text-right">
                        <Link className="text-white/70 text-sm hover:underline" to="/forget-password">
                            Forgot password?
                        </Link>
                    </div>

                    {error && <p className="text-red-400 text-xs">{error}</p>}

                
                    <button
                        type="button"
                        onClick={signGoogle}
                        className="
                            w-full flex items-center gap-2 justify-center 
                            bg-white text-black py-2 rounded-lg 
                            hover:bg-gray-200 transition
                        "
                    >
                        <svg width="18" height="18" viewBox="0 0 512 512">
                            <path fill="#EA4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                            <path fill="#34A853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285F4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#FBBC05" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                        </svg>
                        Login with Google
                    </button>

                
                    <button
                        type="submit"
                        className="
                            w-full bg-gradient-to-r from-pink-400 to-purple-500
                            text-white font-semibold py-2 rounded-full
                            hover:opacity-90 shadow-lg shadow-purple-900/40
                            transition
                        "
                    >
                        Log In
                    </button>

                    <p className="text-center text-white/80 text-sm">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-pink-300 font-medium hover:underline">
                            Register
                        </Link>
                    </p>
                </form>
            </div>

            <Toaster position="top-center" />
        </div>
    );
};

export default Login;
