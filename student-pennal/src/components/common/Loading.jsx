import React from "react";
import logo from "/logo/logo1.png"; // apna logo path

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      
      {/* Logo */}
      <img
        src={logo}
        alt="Loading Logo"
        className="w-20 h-20 mb-6 animate-pulse"
      />

      {/* Skeleton Lines */}
      <div className="w-48 space-y-3">
        <div className="h-3 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-3 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-3 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-sm text-gray-500 tracking-wider">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
