import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid email or password");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Login successful!");
        navigate("/"); // home pe bhej do
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded-xl shadow w-80"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>

                <p className="text-sm mt-3 text-center">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-500">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;