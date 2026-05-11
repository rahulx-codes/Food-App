import { useEffect, useState } from "react";
import { getFoods } from "../api/foodApi";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        getFoods().then(data => setFoods(data));
    }, []);

    // Toggle every 3 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>

            {/* 🎥 Hero Section */}
            <section className="relative w-full h-[300px] overflow-hidden">
                <video
                    src="/foodVid.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text */}
                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                        Welcome to Foodie 🍴
                    </h1>

                    <p className="mt-2 text-sm md:text-lg">
                        India’s #1 food delivery app
                    </p>

                    <p className="text-sm md:text-lg">
                        Fast & easy online ordering
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                        on the <span className="text-orange-400">Foodie</span> app
                    </p>
                </div>
            </section>

            {/* Food Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {foods.slice(0, 6).map(food => (
                    <div
                        key={food.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        {/* Image */}
                        <img
                            src={food.image || "https://via.placeholder.com/150"}
                            alt={food.name}
                            className="w-full h-40 object-cover"
                        />

                        {/* Content */}
                        <div className="p-4">
                            <h4 className="font-semibold text-lg">
                                {food.name}
                            </h4>

                            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                                {food.description || "Delicious food item"}
                            </p>

                            <p className="font-bold mt-2 text-orange-500">
                                ₹{food.price}
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => navigate("/menu")}
                                className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;