import { useEffect, useState, useContext } from "react";
import { getFoods } from "../api/foodApi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Menu() {
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        getFoods().then(data => setFoods(data));
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
            {foods.map(food => (
                <div
                    key={food.id}
                    onClick={() => navigate(`/food/${food.id}`)}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                >
                    {/* Image */}
                    <img
                        src={food.image || "https://via.placeholder.com/150"}
                        alt={food.name}
                        className="w-full h-32 object-cover"
                    />

                    {/* Content */}
                    <div className="p-3 text-center">
                        <h3 className="font-semibold">{food.name}</h3>

                        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                            {food.description || "Delicious food item"}
                        </p>

                        <p className="font-bold mt-2">₹{food.price}</p>

                        {/* Buttons */}
                        <div className="flex justify-center gap-2 mt-3">

                            {/* Add to Cart */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(food);
                                }}
                                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition cursor-pointer "


                            >
                                Add
                            </button>

                            {/*  View Details */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/food/${food.id}`);
                                }}
                                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition cursor-pointer"
                            >
                                View
                            </button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;