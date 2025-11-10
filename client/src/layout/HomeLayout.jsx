import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";


const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
       <Navbar/>
      </header>

      {/* Main Content */}
      <main className="flex-1 ">
        <Outlet /> {/* Render child routes here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 Coaching Center. All rights reserved.
      </footer>
    </div>
  );
};

export default HomeLayout;
