import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useRegister } from "../../hooks/api/useRegister.js"
import { useAuth } from "../../context/AuthContext.jsx";
import { useAuthMe } from "../../hooks/api/useAuthMe.js";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser, loading, error } = useRegister();

  const navigate = useNavigate();
  const { getMe } = useAuthMe();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (formData) => {
    try {
      const response = await registerUser(formData);
      if (response) {

        // 2️⃣ /me call → real auth data
        const meData = await getMe();


        // 3️⃣ AuthContext update
        setAuth({
          user: meData.user,
          loggedIn: true,
          loading: false,
        });

        // 4️⃣ Redirect to home
        navigate("/", { replace: true });
      }


    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 px-5">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("phone", { required: "Phone is required" })}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
            />

            {/* Eye Icon */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 cursor-pointer text-gray-600 hover:text-black"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </span>

            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-5 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-600 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
