import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProductsPage, setIsProductsPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsProductsPage(location?.pathname === "/products");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token, "login token");
    setIsLoggedIn(!!token);
  }, [location]);

  const getTextColor = (base = "") => {
    return `${
      isProductsPage || scrolled
        ? "text-green-800 hover:text-green-600"
        : "text-white hover:text-green-300"
    } ${base}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/log-in");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-15 px-8 md:px-16 flex justify-between items-center transition-all duration-300 ${
        scrolled || isProductsPage
          ? "bg-white/20 backdrop-blur-lg border-b border-white/30 shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="h-20" />
      </Link>

      <ul
        className={`flex items-center gap-8 md:gap-10 font-normal ${getTextColor(
          "text-base md:text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]"
        )}`}
      >
        {/* Always show Hire Tools */}
        <li className={`transition duration-200 ${getTextColor()}`}>
          <Link to="/products">Hire Tools</Link>
        </li>

        {/* Show Logout only when logged in */}
        {isLoggedIn && (
          <li
            onClick={handleLogout}
            className={`cursor-pointer transition duration-200 ${getTextColor()}`}
          >
            Logout
          </li>
        )}
      </ul>

      {/* Show Log in and Sign up only when NOT logged in */}
      {!isLoggedIn && (
        <div className="flex items-center gap-4">
          <Link
            to="/log-in"
            className={`transition duration-200 border border-white/50 px-4 py-2 rounded-full font-semibold text-sm md:text-base ${
              scrolled
                ? "text-green-800 hover:text-green-600"
                : "text-white hover:text-green-300"
            }`}
          >
            Log in
          </Link>

          <button className="bg-gray-100/90 text-green-950 cursor-pointer font-semibold text-sm md:text-base px-5 py-2 rounded-full hover:bg-white transition duration-300">
            <Link to="/join">Sign up</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
