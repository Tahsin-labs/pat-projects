import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider';
// import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { creatUser, setUser, updateUser, handleGoogleIn } = use(AuthContext);
    const [passError, setPassError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/[A-Z]/.test(password)) {
            setPassError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPassError("Password must contain at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            setPassError("Password must be at least 6 characters long.");
            return;
        }

        setPassError("");

        creatUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signGoogleRag = () => {
        handleGoogleIn()
            .then(result => setUser(result.user))
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
            ">
                <h2 className="text-white text-3xl font-semibold text-center mb-6 tracking-wide">
                    Create Your Account
                </h2>

                <form onSubmit={handleRegister} className="space-y-4">

                
                    <div>
                        <label className="text-white/80 text-sm">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="
                                w-full px-4 py-2 rounded-lg bg-white/20 text-white
                                placeholder-white/60 border border-white/30
                                focus:outline-none focus:ring-2 focus:ring-pink-300
                            "
                            placeholder="Full Name"
                            required
                        />
                    </div>

                
                    <div>
                        <label className="text-white/80 text-sm">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="
                                w-full px-4 py-2 rounded-lg bg-white/20 text-white
                                placeholder-white/60 border border-white/30
                                focus:outline-none focus:ring-2 focus:ring-pink-300
                            "
                            placeholder="Photo URL"
                            required
                        />
                    </div>

        
                    <div>
                        <label className="text-white/80 text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="
                                w-full px-4 py-2 rounded-lg bg-white/20 text-white
                                placeholder-white/60 border border-white/30
                                focus:outline-none focus:ring-2 focus:ring-pink-300
                            "
                            placeholder="Email"
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="text-white/80 text-sm">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="
                                w-full px-4 py-2 rounded-lg bg-white/20 text-white
                                placeholder-white/60 border border-white/30
                                focus:outline-none focus:ring-2 focus:ring-pink-300
                            "
                            placeholder="Password"
                            required
                        />
                        {passError && (
                            <p className="text-red-400 text-sm mt-1">{passError}</p>
                        )}
                    </div>

                    
                    <button
                        type="button"
                        onClick={signGoogleRag}
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
                        Register with Google
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
                        Register
                    </button>

                    <p className="text-center text-white/80 text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-pink-300 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
