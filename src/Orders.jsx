import axios from "axios";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Orders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const res = await axios.get("http://localhost:3000/orders");
                setMyOrders(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        
        doc.setFontSize(18);
        doc.text("My Orders Report - PawMart", 14, 15);

    
        const tableColumn = [
            "#",
            "Product Name",
            "Price",
            "Phone",
            "Address",
            "Quantity",
            "Date",
        ];

    
        const tableRows = [];

        myOrders.forEach((order, index) => {
            const rowData = [
                index + 1,
                order?.productName,
                `৳${order?.price}`,
                order?.phone,
                order?.address,
                order?.quantity,
                order?.date
                    ? new Date(order.date).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                    })
                    : "",
            ];
            tableRows.push(rowData);
        });

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 25,
            styles: { fontSize: 10 },
            headStyles: { fillColor: [124, 58, 237] }, // purple
        });

        doc.save("my-orders-report.pdf");
    };
    

    return (
        <div className="min-h-screen bg-[#F9FAFB] p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-6">

                
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        My Orders
                    </h2>

                    <button
                        onClick={handleDownloadPDF}
                        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        Download Report (PDF)
                    </button>
                </div>

                
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500 border-b-4 border-gray-200"></div>
                    </div>
                ) : (
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
                                        <tr
                                            key={order?._id || index}
                                            className="hover:bg-gray-50 transition"
                                        >
                                            <td className="font-medium">
                                                {index + 1}
                                            </td>
                                            <td className="font-semibold text-gray-800">
                                                {order?.productName}
                                            </td>
                                            <td className="text-green-600 font-semibold">
                                                ৳{order?.price}
                                            </td>
                                            <td>{order?.phone}</td>
                                            <td>{order?.address}</td>
                                            <td className="text-center font-medium">
                                                {order?.quantity}
                                            </td>
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
                                        <td
                                            colSpan="7"
                                            className="text-center py-10 text-gray-500"
                                        >
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
