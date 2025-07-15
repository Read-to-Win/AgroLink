import React, { useEffect, useState } from "react";
import { apiDeleteAdvert } from "../service/adtverts";
import { Link } from "react-router";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const Products = () => {
  const [adverts, setAdvert] = useState([]);
  const [loading, SetLoading] = useState(false);
  const fetchAds = async () => {
    SetLoading(true);
    try {
      const responseData = await apiGetAllAdvertVendor();
      console.log(responseData.data.items);
      setAdvert(responseData.data.items);
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
      const res = await apiDeleteAdvert(_id);
      fetchAds();
    } catch (error) {
      toast.error("Failed to delete advert");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
  {/* Navbar */}
  <nav className="w-full bg-[#1a2a1a] p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-md">
    <h1 className="text-white text-2xl font-extrabold tracking-wide">My Shop</h1>
    <div className="relative w-full max-w-md mx-auto sm:mx-0">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#223322] text-white placeholder:text-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <FiSearch className="absolute top-3 left-3 text-white text-lg" />
    </div>
  </nav>

  <div className="p-6">
    <h2 className="text-center text-gray-800 text-3xl font-semibold mb-8">
      All Products
    </h2>

    {loading ? (
      <div className="flex justify-center items-center mt-20 text-gray-500 text-lg">
        Loading...
      </div>
    ) : adverts.length === 0 ? (
      <div className="flex justify-center items-center mt-20 text-gray-500 text-lg">
        No products available.
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {adverts.map((advert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={advert.image.url}
              alt={advert.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-bold text-gray-900">{advert.title}</h3>
              <p className="bg-green-100 text-green-700 font-semibold inline-block px-3 py-1 rounded-full text-sm">
                ${advert.price}
              </p>
              <p className="text-sm text-gray-600 truncate">
                {advert.description || 'No description provided'}
              </p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/dashboard/edit/${advert._id}`}
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit"
                >
                  <CiEdit size={22} />
                </Link>
                <button
                  onClick={() => handleDelete(advert._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete"
                >
                  <MdOutlineDeleteForever size={22} />
                </button>
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
