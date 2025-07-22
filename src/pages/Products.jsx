import React, { useEffect, useState } from "react";
import { apiDeleteAdvert, apiGetAllAdvertVendor } from "../service/adtverts";
import { Link } from "react-router";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const Products = () => {
  const [adverts, setAdvert] = useState([]);
  const [allAdverts, setAllAdverts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, SetLoading] = useState(false);

  const fetchAds = async () => {
    SetLoading(true);
    try {
      const responseData = await apiGetAllAdvertVendor();
      const items = responseData.data.items;
      setAllAdverts(items);
      setAdvert(items);
    } catch (error) {
      console.log(error);
    } finally {
      SetLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    const confirm = window.confirm("Are you sure you want to delete this ad?");
    if (!confirm) return;

    try {
      await apiDeleteAdvert(_id);
      fetchAds();
    } catch (error) {
      toast.error("Failed to delete advert");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  // Debounced filtering
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setAdvert(allAdverts);
      } else {
        const term = searchTerm.toLowerCase();
        const filtered = allAdverts.filter(
          (ad) =>
            ad.name.toLowerCase().includes(term) ||
            ad.category?.toLowerCase().includes(term) ||
            ad.price?.toString().includes(term)
        );
        setAdvert(filtered);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, allAdverts]);

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Navbar */}
      <nav className="w-full bg-[#214538] p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-md">
        <h1 className="text-white text-2xl font-extrabold tracking-wide">
          My Shop
        </h1>
        <div className="relative w-full sm:w-auto max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, category, or price..."
            className="w-full sm:w-80 pl-10 pr-4 font-medium py-2 rounded-full bg-[#1a2a1a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <FiSearch className="absolute top-2.5 left-3 text-white text-lg" />
        </div>
      </nav>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4">
          <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold">
            All Products
          </h2>
          <Link
            to="/dashboard/post-adverts"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 text-center"
          >
            + Create Product
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-60 text-gray-500 text-lg">
            Loading...
          </div>
        ) : adverts.length === 0 ? (
          <div className="flex justify-center items-center h-60 text-gray-500 text-lg">
            {searchTerm ? "No results found." : "No products available."}
          </div>
        ) : (
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {adverts.map((advert) => (
              <div
                key={advert._id}
                className="bg-white border border-gray-100 overflow-hidden shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-lg"
              >
                <img
                  src={advert.image.url}
                  alt={advert.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {advert.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-3">
                    <p className="bg-green-100 text-green-700 font-semibold inline-block px-3 py-1 rounded-full text-sm">
                      ₵{advert.price}
                    </p>
                    <div className="flex gap-4 items-center">
                      <Link
                        to={`/dashboard/edit/${advert._id}`}
                        className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                        title="Edit"
                      >
                        <CiEdit size={22} />
                      </Link>
                      <button
                        onClick={() => handleDelete(advert._id)}
                        className="p-1 text-red-600 hover:text-red-800 transition-colors"
                        title="Delete"
                      >
                        <MdOutlineDeleteForever size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
