import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

const Edit = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [services, setServices] = useState()
    const [category, setCategory] = useState(services?.category)
    const navigation = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(res => {
                setServices(res.data)
                setCategory(res.data.category)
            })
    }, [id])

    console.log(services)

    const handleUpdate = (e) => {
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
        }
        console.log(formData)



        axios.put(`http://localhost:3000/update/${id}`, formData).then(res => {
            console.log(res.data);
            navigation('/myListing')

        })

    }




    return (
        <div>
            <div className="max-w-xl mx-auto bg-white shadow-lg p-8 mt-10 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">
                    Update Your Product
                </h2>

                <form onSubmit={handleUpdate} className="space-y-5">

                    {/* Product Name */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Product Name
                        </label>
                        <input
                            defaultValue={services?.name}
                            type="text"
                            name="name"
                            placeholder="Enter product name"


                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Category
                        </label>
                        <select
                            defaultValue={services?.category}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}

                            name="category"

                            className="mt-1 w-full px-4 py-2 border rounded-lg bg-white focus:ring focus:ring-blue-300"
                        >
                            <option value="">Select a category</option>
                            <option value="pets">Pets</option>
                            <option value="food">Food</option>
                            <option value="accessories">Accessories</option>
                            <option value="care-products">Care Products</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Price (Taka)
                        </label>
                        <input
                            defaultValue={services?.price}
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            // value={formData.price}

                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Image URL
                        </label>
                        <input
                            defaultValue={services?.
                                image}
                            type="text"
                            name="image"
                            placeholder="Enter image URL"
                            // value={formData.image}

                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Location
                        </label>
                        <input
                            defaultValue={services?.location}
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            // value={formData.location}

                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            defaultValue={services?.description}
                            name="description"
                            placeholder="Enter product description"
                            // value={formData.description}

                            className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Date */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"


                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-left text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            value={user?.email}
                            type="email"
                            name="email"
                            readOnly
                            placeholder="Enter email address"


                            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-md font-semibold"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;