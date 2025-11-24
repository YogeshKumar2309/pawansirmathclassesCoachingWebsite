import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <Navbar />
      </header>
      {/* Main Content */}
      <main className="flex-1 mt-[114px] lg:mt-[130px]">
        <Outlet /> {/* Render child routes here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
