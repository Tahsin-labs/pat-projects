import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const Mylisting = () => {
    const { user } = useContext(AuthContext);
    const [myListing, setMyListing] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/MyListing?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyListing(data))
            .catch((err) => console.log(err));
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
                        setMyListing((prev) =>
                            prev.filter((item) => item._id !== id)
                        );

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

                {/* Header */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    My Listings
                </h2>

                {/* Table */}
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
                                    <tr
                                        key={list._id}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        {/* Product */}
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

                                        {/* Description */}
                                        <td className="text-gray-600 max-w-sm truncate">
                                            {list?.description}
                                        </td>

                                        {/* Price */}
                                        <td className="font-semibold text-green-600">
                                            ৳{list?.price}
                                        </td>

                                        {/* Actions */}
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

            </div>
        </div>
    );
};

export default Mylisting;
