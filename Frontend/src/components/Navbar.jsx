import { NavLink } from "react-router-dom";

function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "Cart", path: "/cart" }
    ];

    const logout = () => {
        localStorage.removeItem("currentUser");
        window.location.href = "/login";
    };

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white">

            {/* Logo */}
            <h1 className="text-2xl font-bold">
                <span className="text-orange-500">Food</span>ie
            </h1>

            {/* Nav Links */}
            <ul className="flex gap-8 font-medium">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `cursor-pointer transition ${isActive
                                    ? "text-orange-500"
                                    : "hover:text-orange-500"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

        </nav>
    );
}

export default Navbar;