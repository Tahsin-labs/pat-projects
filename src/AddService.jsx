import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const image = form.image.value;
        const location = form.location.value;
        const description = form.description.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            image,
            location,
            description,
            date,
            email,
        };

        axios.post("http://localhost:3000/services", formData).then((res) => {
            if (res.data.acknowledged) {
                Swal.fire({
                    title: "Product Added!",
                    icon: "success",
                    draggable: true,
                });
                form.reset();
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7FAF7] px-4">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden">

            
                <div className="p-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Add New Product
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
                        />

                        <select
                            name="category"
                            className="w-full px-4 py-2 border rounded-lg bg-white focus:ring focus:ring-green-300"
                        >
                            <option value="">Select Category</option>
                            <option value="pets">Pets</option>
                            <option value="food">Food</option>
                            <option value="accessories">Accessories</option>
                            <option value="care-products">Care Products</option>
                        </select>

                        <input
                            required
                            type="number"
                            name="price"
                            placeholder="Price (Taka)"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
                        />

                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
                        />

                        <input
                            required
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
                        />

                        <textarea
                            name="description"
                            placeholder="Product Description"
                            rows="4"
                            className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-green-300"
                        ></textarea>

                        <input
                            type="date"
                            name="date"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
                        />

                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            readOnly
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                        />

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                        >
                            Add Product
                        </button>
                    </form>
                </div>

            
                <div className="hidden md:flex items-center justify-center bg-[#E8F5E9] p-6">
                    <img
                        src="https://img.freepik.com/premium-vector/employee-sharing-abstract-concept-vector-illustration_107173-24834.jpg"
                        alt="Add Product Illustration"
                        className="max-w-md w-full"
                    />
                </div>

            </div>
        </div>
    );
};

export default AddService;
