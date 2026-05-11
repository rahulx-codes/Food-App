import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import FoodCart from "./pages/FoodCart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

// 🔐 Protected Route
const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    return user ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <CartProvider>
            <Navbar />

            <Routes>
                {/* 🔓 Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* 🔐 Protected Routes */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/menu"
                    element={
                        <ProtectedRoute>
                            <Menu />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/food/:id"
                    element={
                        <ProtectedRoute>
                            <FoodCart />
                        </ProtectedRoute>
                    }
                />
            </Routes>

            <Footer />
        </CartProvider>
    );
}

export default App;