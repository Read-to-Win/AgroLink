import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/NavBar";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://agriconnect-api-aa28.onrender.com/createProduct/getOne/${id}`);
        setProduct(res.data.item);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar textColor="text-green-950" />
        <div className="pt-32 text-center text-lg font-medium text-gray-600">
          Loading details...
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar textColor="text-green-950" />
        <div className="pt-32 text-center text-red-500 font-medium">
          Product not found.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar textColor="text-green-950" />

      <div className="max-w-5xl mx-auto pt-32 px-6 pb-16 grid md:grid-cols-2 gap-12">
        <img
          src={product.image?.url || "https://via.placeholder.com/500"}
          alt={product.title}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-green-950">{product.title}</h1>
          <p className="text-xl text-green-700 font-semibold">
            GH₵ {product.price}
          </p>

          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-700">Owner:</span>{" "}
            {product.owner?.name || "Unknown"}
          </p>

          {product.description && (
            <p className="text-gray-700">{product.description}</p>
          )}

          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md mt-4">
            Hire Equipment
          </button>
        </div>
      </div>

      <footer className="bg-green-950 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} AgriTech. All rights reserved.
      </footer>
    </div>
  );
};

export default ProductDetailsPage;
