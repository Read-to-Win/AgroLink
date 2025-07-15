import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/NavBar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://agriconnect-api-aa28.onrender.com/createProduct/getAllByUser");
      setProducts(res.data.items || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!search.trim()) return fetchProducts();
    setLoading(true);
    try {
      const res = await axios.get(
        `https://agriconnect-api-aa28.onrender.com/createProductsearchItemByUser?search=${encodeURIComponent(search)}`
      );
      setProducts(res.data.items || []);
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar textColor="text-green-950" />

      <div className="pt-32 max-w-7xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-950">
          Hire an Equipment
        </h1>

        <div className="max-w-md mx-auto mb-10 flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search equipment..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md"
          >
            Search
          </button>
        </div>

        {loading ? (
          <div className="text-center text-lg font-medium">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-red-500">No products found.</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image?.url || "https://via.placeholder.com/300"}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-52">
                  <h3 className="text-lg font-semibold truncate mb-1 text-green-950">
                    {item.title}
                  </h3>
                  <p className="text-green-700 font-bold text-xl mb-1">
                    GH₵ {item.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Owner:{" "}
                    <span className="font-medium text-gray-700">
                      {item.owner?.name || "Unknown"}
                    </span>
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={handlePopup}
                      className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm w-full transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold text-green-950 mb-3">Please Sign In or Join</h2>
            <p className="text-gray-600 mb-6">You need to sign in or create an account to rent equipment.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/sign-in")}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/join")}
                className="border border-green-600 text-green-700 px-4 py-2 rounded-md hover:bg-green-50"
              >
                Join
              </button>
            </div>
            <button
              onClick={closePopup}
              className="mt-4 text-sm text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <footer className="bg-green-950 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} AgriTech. All rights reserved.
      </footer>
    </div>
  );
};

export default ProductsPage;
