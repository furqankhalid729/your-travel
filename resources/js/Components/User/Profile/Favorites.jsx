import { useState } from "react";
import { Link } from "@inertiajs/react";
import Cookies from "js-cookie";
export default function Favourites() {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(Cookies.get("favorites") || "[]");
    });
    console.log(favorites)
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 sm:p-5 ">
                {favorites.map((favorite, index) => {
                    return (
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                            <img
                                src={`/storage/${favorite.image}`}
                                alt={favorite.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800">{favorite.name}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}