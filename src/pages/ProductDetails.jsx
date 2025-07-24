// src/pages/ProductDetailsPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/NavBar";
import BookingModal from "../components/BookingModal";

const testimonials = [
  {
    name: "Kwame A.",
    comment: "Very helpful tool. Booking was easy and delivery was smooth!",
  },
  {
    name: "Akosua M.",
    comment: "Excellent service. The tractor arrived in good condition.",
  },
  {
    name: "Yaw K.",
    comment: "User-friendly platform. Great experience overall!",
  },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://agriconnect-api-aa28.onrender.com/createProduct/viewOneEquipment/${id}`
        );
        setProduct(res.data.item);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-white">
        <Navbar textColor="text-green-800" />
        <div className="pt-32 text-center text-lg font-medium text-gray-600">
          Loading details...
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-white">
        <Navbar textColor="text-green-800" />
        <div className="pt-32 text-center text-red-500 font-medium">
          Product not found.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-100 to-white min-h-screen text-gray-800">
      <Navbar textColor="text-green-800" />

      <div className="max-w-5xl mx-auto pt-32 px-6 pb-16 grid md:grid-cols-2 gap-12">
        <img
          src={product.image?.url || "https://via.placeholder.com/500"}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-green-900">{product.name}</h1>
          <p className="text-xl text-green-700 font-semibold">
            GH₵ {product.price}
          </p>

          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-700">Owner ID:</span>{" "}
            {product.owner || "Unknown"}
          </p>

          <p className="text-gray-700">
            {product.description || "No description provided."}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md mt-4"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white px-6 py-12 md:px-24">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm"
            >
              <p className="text-gray-700 italic">"{t.comment}"</p>
              <p className="mt-4 text-sm text-green-800 font-medium">
                – {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-green-950 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} AgriTech. All rights reserved.
      </footer>

      <BookingModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProductDetailsPage;
