import React from "react";
import { useForm } from "react-hook-form";
import { apiCreateAdvert } from "../service/adtverts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";

const CreateAd = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const payload = new FormData();
    payload.append("name", data.name);
    payload.append("category", data.category);
    payload.append("price", data.price);
    payload.append("description", data.description);
    payload.append("file", data.file[0]);
    setIsSubmitting(true);
    try {
      const response = await apiCreateAdvert(payload);
      console.log(response.data);
      toast.success("Product added successfully");
      navigate("/dashboard/all-adverts");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4] py-10 px-4 flex justify-center items-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#214538] p-6 sm:p-10 rounded-2xl shadow-2xl text-white w-full max-w-4xl space-y-6"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-green-400">
          Create New Ad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. MTZ Tractor 90hp"
              {...register("name", { required: "Name is required" })}
              className="bg-[#F0FDF4] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-black placeholder-gray-600 transition"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Upload Image
            </label>
            <input
              type="file"
              {...register("file", {
                required: "Image file is required",
              })}
              className="bg-[#F0FDF4] border border-gray-600 file:bg-green-700 file:text-white file:border-none file:px-4 file:py-2 file:rounded-lg px-5 py-3 w-full rounded-xl text-black transition"
            />
            {errors.file && (
              <p className="text-red-400 text-sm mt-1">{errors.file.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="bg-[#F0FDF4] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-black transition"
            >
              <option value="">Select a category</option>
              <option value="caterpillar">Caterpillar</option>
              <option value="tractor">Tractor</option>
              <option value="planter">Mechanical Planter</option>
              <option value="leveller">Land Leveller</option>
              <option value="harvester">Harvester</option>
            </select>
            {errors.category && (
              <p className="text-red-400 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Price
            </label>
            <input
              type="number"
              placeholder="₵0.00"
              {...register("price", { required: "Price is required" })}
              className="bg-[#F0FDF4] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-black placeholder-gray-600 transition"
            />
            {errors.price && (
              <p className="text-red-400 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
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
            {...register("description", {
              required: "Description is required",
            })}
            className="bg-[#F0FDF4] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-black placeholder-gray-600 resize-none transition"
          ></textarea>
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            } bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-semibold rounded-xl transition duration-300`}
          >
            {isSubmitting ? "Posting..." : "Post Ad"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAd;
