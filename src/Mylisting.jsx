import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const Mylisting = () => {
    const { user } = useContext(AuthContext);
    const [myListing, setMyListing] = useState([]);
    const [loading, setLoading] = useState(true); // <-- loading state

    useEffect(() => {
        if (!user?.email) return;

        const fetchListings = async () => {
            try {
                setLoading(true); // start loading
                const res = await fetch(`http://localhost:3000/MyListing?email=${user.email}`);
                const data = await res.json();
                setMyListing(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false); // stop loading
            }
        };

        fetchListings();
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:3000/delete/${id}`)
                    .then(() => {
                        setMyListing((prev) => prev.filter((item) => item._id !== id));
                        Swal.fire("Deleted!", "Your item has been deleted.", "success");
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Delete failed.", "error");
                    });
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-6">

            
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    My Listings
                </h2>

                
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-gray-200"></div>
                    </div>
                ) : (
            
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {myListing.length > 0 ? (
                                    myListing.map((list) => (
                                        <tr key={list._id} className="hover:bg-gray-50 transition">
                                            <td>
                                                <div className="flex items-center gap-4">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img src={list?.image} alt={list?.name} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-800">
                                                            {list?.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-gray-600 max-w-sm truncate">{list?.description}</td>
                                            <td className="font-semibold text-green-600">৳{list?.price}</td>
                                            <td className="text-center">
                                                <div className="flex justify-center gap-3">
                                                    <button
                                                        onClick={() => handleDelete(list._id)}
                                                        className="btn btn-sm btn-outline btn-error"
                                                    >
                                                        Delete
                                                    </button>
                                                    <Link to={`/edit/${list._id}`}>
                                                        <button className="btn btn-sm btn-outline btn-primary">
                                                            Edit
                                                        </button>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-10 text-gray-500">
                                            No listings found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Mylisting;
