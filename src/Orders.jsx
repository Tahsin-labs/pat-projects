import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true); // <-- loading state

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true); // start loading
                const res = await axios.get("http://localhost:3000/orders");
                setMyOrders(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false); // stop loading
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen bg-[#F9FAFB] p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-6">

                {/* Header */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    My Orders
                </h2>

                {/* Loading Spinner */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-gray-200"></div>
                    </div>
                ) : (
                    /* Table */
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {myOrders.length > 0 ? (
                                    myOrders.map((order, index) => (
                                        <tr key={order?._id || index} className="hover:bg-gray-50 transition">
                                            <td className="font-medium">{index + 1}</td>
                                            <td className="font-semibold text-gray-800">{order?.productName}</td>
                                            <td className="text-green-600 font-semibold">৳{order?.price}</td>
                                            <td>{order?.phone}</td>
                                            <td>{order?.address}</td>
                                            <td className="text-center font-medium">{order?.quantity}</td>
                                            <td className="text-sm text-gray-600">
                                                {order?.date
                                                    ? new Date(order.date).toLocaleString("en-US", {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "2-digit",
                                                        hour: "numeric",
                                                        minute: "2-digit",
                                                        hour12: true,
                                                    })
                                                    : ""}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-10 text-gray-500">
                                            No orders found
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

export default Orders;
