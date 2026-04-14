import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "../../hooks/api/useLogin";
import { useAuthMe } from "../../hooks/api/useAuthMe";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loading } = useLogin();
  const { getMe } = useAuthMe();
  const { setAuth } = useAuth();


  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    const toastId = toast.loading("Logging in... ⏳");

    try {
      const res = await loginUser(formData); // ✅ API response

      console.log("res", res);

      toast.success(res.message || "Login successful 🎉", {
        id: toastId,
      });

      const meData = await getMe();

      setAuth({
        user: meData.user,
        loggedIn: true,
        loading: false,
      });

      navigate("/", { replace: true });

    } catch (err) {
      toast.error(
        err?.response?.data?.message || err.message || "Login failed ❌",
        { id: toastId }
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-700 px-5">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

          {/* Email / Phone */}
          <div>
            <label className="font-medium text-gray-700">
              Email / Phone Number
            </label>
            <input
              type="text"
              {...register("email", { required: "Email or phone is required" })}
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

            {/* Eye Button */}
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
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-600
  text-white font-bold rounded-xl shadow-lg
  hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-5 text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-600 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
