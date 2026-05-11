import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQty,
        decreaseQty
    } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2 className="p-5 text-center text-xl">Cart is empty !!!</h2>;
    }

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);

    return (
        <div className="max-w-4xl mx-auto p-5">

            <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

            {cart.map(item => (
                <div
                    key={item.id}
                    className="flex justify-between items-center bg-white p-4 mb-4 shadow rounded-lg"
                >
                    {/* Left */}
                    <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-gray-600">₹{item.price}</p>
                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => decreaseQty(item.id)}
                            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                        >
                            -
                        </button>

                        <span className="font-semibold">{item.qty}</span>

                        <button
                            onClick={() => increaseQty(item.id)}
                            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>

                    {/* Remove */}
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:underline"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* Bottom Section */}
            <div className="mt-8 border-t pt-5 flex justify-between items-center">

                {/* Total */}
                <h2 className="text-xl font-bold">
                    Total: ₹{total}
                </h2>

                {/* Order Button */}
                <button
                    onClick={() => alert("Order Placed Successfully! 🎉")}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                >
                    Place Order
                </button>

            </div>
        </div>
    );
}

export default Cart;