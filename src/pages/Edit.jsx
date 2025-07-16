import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { apiEditAdvert, apiGetSingleVendorAdvert } from "../service/adtverts";
import { toast } from "react-toastify";

const Edit = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: product?.name,
      category: product?.category,
      price: product?.price,
      description: product?.description,
    },
  });

  const getSingleAdvert = async () => {
    try {
      const res = await apiGetSingleVendorAdvert(params.id);

      setProduct(res.data.item);
    } catch (error) {}
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    try {
      const response = await apiEditAdvert(params.id, data);
      console.log(response.data);
      toast.success(response.data.message);
      navigate("/dashboard/all-adverts");
    } catch (error) {
      toast.error("Oops! An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getSingleAdvert();
  }, []);
  return (
    <div className="h-screen flex items-center justify-center bg-[#F0FDF4]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1a2a1a] p-10 rounded-2xl shadow-2xl text-white w-full max-w-3xl h-[90vh] space-y-4"
      >
        <h2 className="text-4xl font-bold text-center text-green-400">
          Edit Ad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Title */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="e.g. MTZ Tractor 90hp"
              {...register("name", { required: "Title is required" })}
              className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white placeholder-gray-400 transition"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* File */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-200">
              Upload Image
            </label>
            <input
              type="file"
              {...register("file", {
                required: "Image file is required",
              })}
              className="bg-[#223322] border border-gray-600 file:bg-green-700 file:text-white file:border-none file:px-4 file:py-2 file:rounded-lg px-5 py-3 w-full rounded-xl text-white transition"
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
              className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white transition"
              value={product.category}
            >
              <option>{product.category}</option>
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
              className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white placeholder-gray-400 transition"
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
            className="bg-[#223322] border border-gray-600 focus:border-green-500 focus:ring-green-500 px-5 py-3 w-full rounded-xl text-white placeholder-gray-400 resize-none transition"
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
            {isSubmitting ? "Submitting..." : "Submit Changes"}
          </button>
        </div>
      </form>
      <div className="">
        <img
          className="object-contain max-w-[600px]"
          src={product?.file?.url}
        />
      </div>
    </div>
  );
};

export default Edit;
