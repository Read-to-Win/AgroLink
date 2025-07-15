import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-12 pb-6 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
        
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-green-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-green-300">Equipment Place</Link></li>
            <li><Link to="/farmer" className="hover:text-green-300">Become an Agri Partner</Link></li>
            <li><Link to="/join" className="hover:text-green-300">Sign Up</Link></li>
            <li><Link to="/sign-in" className="hover:text-green-300">Log In</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@agritech.com</li>
            <li>Phone: +233 20 123 4567</li>
            <li>Location: Accra, Ghana</li>
          </ul>
        </div>

        {/* Follow Us & Logo */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition">
              <FaInstagram />
            </a>
          </div>

        </div>

    
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2 text-white">About AgriTech</h4>
          <p className="text-sm leading-relaxed text-gray-300">
            AgriTech empowers farmers with seamless equipment access, training, and tools to grow sustainably.
          </p>
        </div>
      </div>


      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} AgriTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
