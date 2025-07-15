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
      toast.error(error?.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isError = Object.keys(errors).length > 0;
  return (
    <div className="bg-[#112211] h-screen text-white p-10 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center  text-green-400 mb-2">Log into your account</h2>
       <p className="mb-6 text-center text-gray-400"> Don't have an account? <Link to="/admin"><span className="text-[#14B714] hover:underline cursor-pointer">Sign Up</span></Link> </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="rounded-full border px-3 py-2 w-full cursor-pointer"
            />
            {errors?.username && (
              <span className="text-red-500">{errors?.username?.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="rounded-full border px-3 py-2 w-full cursor-pointer"
            />
            {errors?.email && (
              <span className="text-red-500">{errors?.email?.message}</span>
            )}
          </div>
          <div className="mb-4">
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
              className="rounded-full border px-3 py-2 w-full cursor-pointer"
            />
            {errors?.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <button className="border mt-8 w-full px-3 py-2 rounded-full bg-[#14B714]">
            {isSubmitting ? "Submitting..." : " Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
