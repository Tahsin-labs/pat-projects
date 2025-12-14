import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { Mail, MapPin, Tag, Calendar, DollarSign } from "lucide-react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const Details = () => {
    const app = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(app)


    const handleOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const yourName = form.yourName.value
        const quantity = form.quantity.value
        const price = form.price.value
        const address = form.address.value
        const productName = form.productName.value
        const phone = form.phone.value
        const note = form.note.value

        const formData = {
            // productId: myId,
            yourName,
            quantity,
            price,
            address,
            productName,
            phone,
            note,
            date: new Date()
        }

        axios.post('http://localhost:3000/orders', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

        console.log(formData)


    }

    return (
        <>
            {app && (
                <div className="relative w-full min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 py-10 px-6 flex justify-center text-gray-800">
                    <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-6 p-6">
                            {/* Image */}
                            <div className="flex justify-center items-center">
                                <img
                                    src={app.image}
                                    alt={app.name}
                                    className="rounded-xl shadow-md w-full h-[330px] object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="space-y-4 py-2">
                                <h1 className="text-4xl font-bold capitalize">{app.name}</h1>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {app.description}
                                </p>

                                <div className="space-y-3 pt-2">
                                    <p className="flex items-center gap-2 text-gray-700">
                                        <Tag className="w-5 h-5" /> Category:
                                        <span className="font-semibold capitalize">{app.category}</span>
                                    </p>

                                    <p className="flex items-center gap-2 text-gray-700">
                                        <DollarSign className="w-5 h-5" /> Price:
                                        <span className="font-semibold">${app.price}</span>
                                    </p>

                                    <p className="flex items-center gap-2 text-gray-700">
                                        <MapPin className="w-5 h-5" /> Location:
                                        <span className="font-semibold">{app.location}</span>
                                    </p>

                                    <p className="flex items-center gap-2 text-gray-700">
                                        <Calendar className="w-5 h-5" /> Date:
                                        <span className="font-semibold">{app.date}</span>
                                    </p>

                                    <p className="flex items-center gap-2 text-gray-700 break-all">
                                        <Mail className="w-5 h-5" /> Email:
                                        <span className="font-semibold">{app.email}</span>
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-4 mt-6">
                                    <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transititext-lg font-semibold shadow-md" onClick={() => document.getElementById('my_modal_3').showModal()}>Buy Now</button>


                                    <dialog id="my_modal_3" className="modal w-full max-w-lg p-0 rounded-xl overflow-hidden  modal-middle">
                                        <div className="modal-box p-6 relative bg-white shadow-lg rounded-xl ">
                                            {/* Close Button */}
                                            <button
                                                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500 hover:text-gray-800"
                                                onClick={() => document.getElementById('my_modal_3').close()}
                                            >
                                                ✕
                                            </button>

                                            <h3 className="text-2xl font-bold mb-4 text-center text-purple-600">Place Your Order</h3>

                                            <form onSubmit={handleOrder} className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
                                                {/* Product Name */}
                                                <div className="flex flex-col">
                                                    <label className="label text-sm font-semibold">Product Name</label>
                                                    <input
                                                        readOnly
                                                        defaultValue={app?.name}
                                                        name="productName"
                                                        type="text"
                                                        className="input input-bordered w-full"
                                                    />
                                                </div>

                                                {/* Your Name */}
                                                <div className="flex flex-col">
                                                    <label className="label text-sm font-semibold">Your Name</label>
                                                    <input
                                                        defaultValue={user?.displayName}
                                                        name="yourName"
                                                        type="text"
                                                        className="input input-bordered w-full"
                                                    />
                                                </div>

                                                {/* Email */}
                                                <div className="flex flex-col">
                                                    <label className="label text-sm font-semibold">Email</label>
                                                    <input
                                                        readOnly
                                                        defaultValue={user?.email}
                                                        type="text"
                                                        name="email"
                                                        className="input input-bordered w-full"
                                                    />
                                                </div>

                                                {/* Quantity & Price */}
                                                <div className="flex gap-4">
                                                    <div className="flex-1 flex flex-col">
                                                        <label className="label text-sm font-semibold">Quantity</label>
                                                        <input
                                                            type="number"
                                                            name="quantity"
                                                            className="input input-bordered w-full"
                                                            placeholder="Quantity"
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col">
                                                        <label className="label text-sm font-semibold">Price</label>
                                                        <input
                                                            readOnly
                                                            defaultValue={app?.price}
                                                            type="text"
                                                            name="price"
                                                            className="input input-bordered w-full"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Address */}
                                                <div className="flex flex-col">
                                                    <label className="label text-sm font-semibold">Address</label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        className="input input-bordered w-full"
                                                        placeholder="Address"
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div className="flex flex-col">
                                                    <label className="label text-sm font-semibold">Phone</label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="input input-bordered w-full"
                                                        placeholder="Phone"
                                                    />
                                                </div>

                                                {/* Additional Note */}
                                                <div className="flex flex-col">
                                                    <label className="label text-sm font-semibold">Additional Note</label>
                                                    <input
                                                        type="text"
                                                        name="note"
                                                        className="input input-bordered w-full"
                                                        placeholder="Additional Note"
                                                    />
                                                </div>

                                                {/* Submit Button */}
                                                <button type="submit" className="btn btn-primary w-full mt-2">
                                                    Order Now
                                                </button>
                                            </form>
                                        </div>
                                    </dialog>


                                    <button className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition text-lg font-semibold shadow-sm">
                                        Contact Seller
                                    </button>






                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Details;
