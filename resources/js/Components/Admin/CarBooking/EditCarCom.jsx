import React from "react";
import { useForm } from "@inertiajs/react";

const EditCarCom = ({ car, brands, models, fuels, transmissions }) => {
    
    const { data, setData, put, processing, errors } = useForm({
        car_name: car.car_name || "",
        brand: car.brand || "",
        model: car.model || "",
        fuel: car.fuel || "",
        car_number: car.car_number || "",
        transmission: car.transmission || "",
        capacity: car.capacity || "",
        status: car.status || "",
        price: car.price || "",
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("cars.update", car.id)); 
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Car</h2>
            <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-2 gap-4 ">
                {/* Car Name */}
                <div className="mt-4">
                    <label htmlFor="car_name" className="block text-sm font-medium text-gray-700">
                        Car Name
                    </label>
                    <input
                        id="car_name"
                        type="text"
                        value={data.car_name}
                        onChange={(e) => setData("car_name", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.car_name && <p className="text-sm text-red-600">{errors.car_name}</p>}
                </div>

                {/* Brand */}
                <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Brand
                    </label>
                    <select
                        id="brand"
                        value={data.brand}
                        onChange={(e) => setData("brand", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select a brand</option>
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.name}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    {errors.brand && <p className="text-sm text-red-600">{errors.brand}</p>}
                </div>

                {/* Model */}
                <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                        Model
                    </label>
                    <select
                        id="model"
                        value={data.model}
                        onChange={(e) => setData("model", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select a model</option>
                        {models.map((model) => (
                            <option key={model.id} value={model.name}>
                                {model.name}
                            </option>
                        ))}
                    </select>
                    {errors.model && <p className="text-sm text-red-600">{errors.model}</p>}
                </div>

                {/* Fuel */}
                <div>
                    <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
                        Fuel Type
                    </label>
                    <select
                        id="fuel"
                        value={data.fuel}
                        onChange={(e) => setData("fuel", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select a fuel type</option>
                        {fuels.map((fuel) => (
                            <option key={fuel.id} value={fuel.name}>
                                {fuel.name}
                            </option>
                        ))}
                    </select>
                    {errors.fuel && <p className="text-sm text-red-600">{errors.fuel}</p>}
                </div>

                {/* Car Number */}
                <div>
                    <label htmlFor="car_number" className="block text-sm font-medium text-gray-700">
                        Car Number
                    </label>
                    <input
                        id="car_number"
                        type="text"
                        value={data.car_number}
                        onChange={(e) => setData("car_number", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.car_number && <p className="text-sm text-red-600">{errors.car_number}</p>}
                </div>

                {/* Transmission */}
                <div>
                    <label htmlFor="transmission" className="block text-sm font-medium text-gray-700">
                        Transmission
                    </label>
                    <select
                        id="transmission"
                        value={data.transmission}
                        onChange={(e) => setData("transmission", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select a transmission</option>
                        {transmissions.map((transmission) => (
                            <option key={transmission.id} value={transmission.name}>
                                {transmission.name}
                            </option>
                        ))}
                    </select>
                    {errors.transmission && <p className="text-sm text-red-600">{errors.transmission}</p>}
                </div>

                {/* Capacity */}
                <div>
                    <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                        Seating Capacity
                    </label>
                    <input
                        id="capacity"
                        type="number"
                        value={data.capacity}
                        onChange={(e) => setData("capacity", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.capacity && <p className="text-sm text-red-600">{errors.capacity}</p>}
                </div>

                {/* Price */}
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.price && <p className="text-sm text-red-600">{errors.price}</p>}
                </div>

                {/* Status */}
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <select
                        id="status"
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                    {errors.status && <p className="text-sm text-red-600">{errors.status}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {processing ? "Updating..." : "Update Car"}
                </button>
            </form>
        </div>
    );
};

export default EditCarCom;