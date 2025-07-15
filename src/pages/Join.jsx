import React, { useState } from "react";
import { apiFarmerSignUp } from "../service/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Join = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const payload = {
      username: data.username,
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      location: data.location,
      phoneNumber: data.phoneNumber,
      companyName: data.companyName,
      region: data.region,
    };
    setIsSubmitting(true);
    try {
      const response = await apiFarmerSignUp(payload);
      console.log(response);
      toast.success("User registered successfully.");
      navigate("/log-in");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Oops! An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isError = Object.keys(errors).length > 0;
  return (
    <div className="bg-[#112211] min-h-screen text-white flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-[#1a2a1a]/90 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center  text-green-400 mb-2">
          Create an account
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Already have an account?{" "}
          <Link to="/log-in">
            <span className="text-[#14B714] hover:underline cursor-pointer">
              Log in
            </span>
          </Link>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" grid grid-cols-2 gap-x-6 gap-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm">Fullname</label>
            <input
              type="text"
              placeholder="Jane Cue"
              {...register("fullName", { required: "Fullname  is required" })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.fullName && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm">Username</label>
            <input
              type="text"
              placeholder="jane24"
              {...register("username", { required: "Username is required" })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.username && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.username.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="janecue@gmail.com"
              {...register("email", { required: "Email is required" })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm">Location</label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.location && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.location.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm">Phone</label>
            <input
              type="number"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.phoneNumber && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          {/* Region */}
          <div>
            <label className="block mb-1 text-sm">Region</label>
            <input
              type="text"
              {...register("region", { required: "Region is required" })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.region && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.region.message}
              </span>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="block mb-1 text-sm">Company Name</label>
            <input
              type="text"
              {...register("companyName", {
                required: "Company name is required",
              })}
              className="rounded-full border border-gray-600 bg-[#202820] focus:outline-none focus:ring-2 focus:ring-[#14B714] px-4 py-2 w-full"
            />
            {errors?.companyName && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.companyName.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              className="w-full mt-2 px-4 py-2 rounded-full bg-[#14B714] hover:bg-[#119911] disabled:opacity-50 transition font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
