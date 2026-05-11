import { useEffect, useState, useContext } from "react";
import { getFoods } from "../api/foodApi";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function FoodCart() {
    const { id } = useParams();
    const [food, setFood] = useState(null);

    const { addToCart } = useContext(CartContext); // connect cart
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        getFoods().then(data => {
            const selectedFood = data.find(item => item.id === Number(id)); 
            setFood(selectedFood);
        });
    }, [id]);

    if (!food) return <p className="p-5">Loading...</p>;

    return (
        <div className="p-6 flex justify-center">
            <div className="bg-white rounded-xl shadow-md w-80 overflow-hidden">

                {/* Image */}
                <img
                    src={food.image || "https://via.placeholder.com/150"}
                    alt={food.name}
                    className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                    <h2 className="font-bold text-lg">{food.name}</h2>

                    <p className="text-gray-500 mt-2">
                        {food.description || "Delicious food item"}
                    </p>

                    {/* Prices */}
                    <p className="font-bold mt-3">Quarter: ₹{food.Quarter}</p>
                    <p className="font-bold mt-1">Half: ₹{food.Half}</p>
                    <p className="font-bold mt-1">Full: ₹{food.Full}</p>
                </div>

                {/* Add to Cart */}
                <div className="p-4">
                    <button
                        onClick={() => {
                            addToCart(food);
                            setShowPopup(true);

                            setTimeout(() => {
                                setShowPopup(false);
                            }, 2000);
                        }}
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        Add to Cart
                    </button>
                    {showPopup && (
                        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                             Item added to cart!
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}

export default FoodCart;