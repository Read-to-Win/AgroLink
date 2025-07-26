import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { apiLogin } from "../service/auth";
import { toast } from "react-toastify";

const LogIn = () => {
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
      email: data.email,
      password: data.password,
      username: data.username,
    };
    setIsSubmitting(true);
    try {
      const response = await apiLogin(payload);
      console.log(response);
      localStorage.setItem("accessToken", response.data.token);

      const userType = response.data.user.role;
      if (userType === "admin") {
        // route to dashboard
        navigate("/dashboard");
      } else {
        navigate("/");
      }
      toast.success("Logged in successfully.");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const isError = Object.keys(errors).length > 0;
  return (
    <div className="bg-[#214538] min-h-screen text-white flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-[#1a2a1a]/90 border border-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-2">
          Log into your account
        </h2>
        <p className="mb-6 text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/admin">
            <span className="text-[#14B714] hover:underline cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="rounded-xl border border-gray-600 bg-[#202820] text-white px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#14B714]"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="rounded-xl border border-gray-600 bg-[#202820] text-white px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#14B714]"
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            className="w-full mt-4 px-4 py-2 rounded-full bg-[#14B714] hover:bg-[#119911] transition font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;























