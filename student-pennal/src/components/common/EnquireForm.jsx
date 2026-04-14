import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

const EnquireForm = ({msgTitle, submitText}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onBlur", // Validation on blur
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form Data:", data);
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50 px-4 py-16">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 animate-bounce">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Your enquiry has been submitted successfully.
          </p>
          <p className="text-gray-500">
            We will contact you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-white px-4 py-16">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mb-4">
            <MessageSquare className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Enquire Now
          </h2>
          <p className="text-gray-600 mt-2">
            Fill out the form and we'll get back to you soon
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name can only contain letters",
                  },
                })}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                  errors.name
                    ? "border-red-500 focus:border-red-600"
                    : "border-gray-200 focus:border-orange-500"
                } focus:outline-none`}
              />
            </div>
            {errors.name && (
              <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>{errors.name.message}</span>
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Please enter a valid 10-digit Indian mobile number",
                  },
                })}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                  errors.phone
                    ? "border-red-500 focus:border-red-600"
                    : "border-gray-200 focus:border-orange-500"
                } focus:outline-none`}
              />
            </div>
            {errors.phone && (
              <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>{errors.phone.message}</span>
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                  errors.email
                    ? "border-red-500 focus:border-red-600"
                    : "border-gray-200 focus:border-orange-500"
                } focus:outline-none`}
              />
            </div>
            {errors.email && (
              <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>{errors.email.message}</span>
              </div>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
             {msgTitle}<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Tell us about your requirements..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: 500,
                  message: "Message must not exceed 500 characters",
                },
              })}
              rows="4"
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                errors.message
                  ? "border-red-500 focus:border-red-600"
                  : "border-gray-200 focus:border-orange-500"
              } focus:outline-none`}
            />
            {errors.message && (
              <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>{errors.message.message}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:scale-105"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              `Submit ${submitText}`
            )}
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-6">
          🔒 Your information is safe with us
        </p>
      </div>
    </div>
  );
};

export default EnquireForm;