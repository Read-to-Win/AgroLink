import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-15 px-8 md:px-16 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-lg border-b border-white/30 shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link to="/">
        <img src={logo} alt="Logo" className="h-30" />
      </Link>

      <ul className={`flex items-center gap-8 md:gap-10 font-normal text-white text-base md:text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] ${
            scrolled ? "text-green-800 hover:text-green-600" : "text-white hover:text-green-300"
          }`}>
        <li className={`hover:text-green-300 transition duration-200 ${
            scrolled ? "text-green-800 hover:text-green-600" : "text-white hover:text-green-300"
          }`}>
          <Link to="/products">Hire Tools</Link>
        </li>
        <li className={`hover:text-green-300 transition duration-200 ${
            scrolled ? "text-green-800 hover:text-green-600" : "text-white hover:text-green-300"
          }`}>
          <Link to="/farmer">Rent Out</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Link
          to="/log-in"
          className={`transition duration-200 border border-white/50 px-4 py-2 rounded-full text-sm md:text-base ${
            scrolled ? "text-green-800 hover:text-green-600" : "text-white hover:text-green-300"
          }`}
        >
          Log in
        </Link>
        <Link to="/join">
          <button className="bg-gray-100/90 text-green-950 font-semibold text-sm md:text-base px-5 py-2 rounded-full hover:bg-white transition duration-300">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
