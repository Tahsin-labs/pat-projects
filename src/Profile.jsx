import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
// import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const { user, setUser, updateUser } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;

        updateUser({ displayName: name, photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL });
                alert("Profile Updated!");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#0b0e14] px-4 py-12">
            <section className="w-full max-w-5xl bg-[#11141c] rounded-3xl shadow-xl border border-gray-800 text-gray-200 overflow-hidden">

                
                <div className="p-10 md:flex md:items-center md:gap-10 bg-gradient-to-br from-[#171b24] to-[#0f1218]">

            
                    <div className="flex flex-col items-center text-center md:text-left w-full md:w-1/3">
                        <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-blue-600 shadow-xl">
                            <img
                                src={user?.photoURL}
                                alt="User avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h2 className="text-2xl font-bold mt-5 tracking-wide">
                            {user?.displayName || "Unknown User"}
                        </h2>
                        <p className="text-gray-400 text-sm">{user?.email}</p>
                        <p className="text-xs text-gray-500 mt-2">
                            Member since <span className="font-medium text-blue-400">November 30, 2025</span>
                        </p>
                    </div>

            
                    <form
                        onSubmit={handleUpdate}
                        className="flex-1 mt-10 md:mt-0 bg-[#0d1016] p-8 rounded-2xl border border-gray-700 shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-center mb-6 text-blue-400">
                            Update Profile
                        </h3>

                        <label className="text-sm text-gray-400">Name</label>
                        <input
                            defaultValue={user?.displayName}
                            name="name"
                            type="text"
                            className="input input-bordered w-full mt-1 mb-5 bg-[#1b1f29] text-gray-200 border-gray-600"
                        />

                        <label className="text-sm text-gray-400">Photo URL</label>
                        <input
                            defaultValue={user?.photoURL}
                            name="photo"
                            type="text"
                            className="input input-bordered w-full mt-1 mb-5 bg-[#1b1f29] text-gray-200 border-gray-600"
                        />

                        <button
                            type="submit"
                            className="btn w-full bg-blue-600 text-white hover:bg-blue-700 border-none"
                        >
                            Save Changes
                        </button>
                    </form>

                </div>

        
                <div className="px-10 py-8 bg-[#0d1016] border-t border-gray-700">
                    <h4 className="text-lg font-semibold mb-6 text-blue-400">Account Details</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">

                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Full Name</p>
                            <p className="mt-1 font-medium text-gray-300">{user?.displayName}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Email</p>
                            <p className="mt-1 font-medium text-gray-300">{user?.email}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Phone</p>
                            <p className="mt-1 font-medium text-gray-300">01634904690</p>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Location</p>
                            <p className="mt-1 font-medium text-gray-300">Chittagong, Bangladesh</p>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default Profile;
