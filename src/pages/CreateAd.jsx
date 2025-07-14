import React from "react";
import { useForm } from "react-hook-form";
import { apiCreateAdvert } from "../service/adtverts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";

const CreateAd = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const payload = new FormData();
    payload.append("title", data.title);
    payload.append("category", data.category);
    payload.append("price", data.price);
    payload.append("file", data.file[0]);
    setIsSubmitting(true);
    try {
      const response = await apiCreateAdvert(payload);
      console.log(response.data);
      toast.success("Product added successfully");
      navigate("/dashboard/adverts");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#1c2b1c] p-4">
      <form className="bg-[#1a2a1a] p-10 rounded-2xl shadow-2xl text-white w-full max-w-3xl h-[90vh] overflow-y-auto space-y-10">
        <h2 className="text-4xl font-bold text-center text-green-400">
          Create New Ad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. MTZ Tractor 90hp"
              className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white placeholder-gray-400 transition"
            />
          </div>

          {/* File */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Upload Image
            </label>
            <input
              type="file"
              className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white file:text-white file:bg-green-700 file:border-none transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Category
            </label>
            <select className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white transition">
              <option value="">Select a category</option>
              <option value="caterpillar">Caterpillar</option>
              <option value="tractor">Tractor</option>
              <option value="planter">Mechanical Planter</option>
              <option value="leveller">Land Leveller</option>
              <option value="harvester">Harvester</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Price
            </label>
            <input
              type="number"
              placeholder="₵0.00"
              className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white placeholder-gray-400 transition"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-200">
            Description
          </label>
          <textarea
            rows="5"
            placeholder="Write a short description..."
            className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white placeholder-gray-400 resize-none transition"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-semibold rounded-xl transition duration-300"
          >
            Post Ad
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAd;
