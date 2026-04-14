import { LogOut, Menu, X } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import StudentSidebar from "./StudentSidebar";
import { useState } from "react";

const COLORS = {
  SidebarBg: "bg-indigo-900",
  GradientHeader: "bg-gradient-to-r from-pink-600 to-orange-500",
};

export default function StudentDashboard() {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);

  if (auth.loading) return <p className="p-4">Loading...</p>;
  if (!auth.loggedIn) return <p className="p-4">Please login first</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔝 Top Navbar */}
      <header
        className={`sticky top-0 z-50 p-3 sm:p-4 flex justify-between items-center ${COLORS.GradientHeader} shadow-lg`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
            Student Dashboard
          </h1>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-white text-xs sm:text-sm hidden sm:block truncate max-w-[150px] lg:max-w-none">
            Welcome, {auth.user?.name}
          </span>
          {/* <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 sm:px-4 rounded-full transition-colors text-sm sm:text-base">
            <LogOut className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </button> */}
        </div>
      </header>

      {/* 📱 Mobile Sidebar Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Sidebar */}
          <div className="relative">
            <StudentSidebar
              COLORS={COLORS}
              onClose={() => setOpen(false)}
            />
          </div>
          
          {/* Backdrop */}
          <button
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="absolute top-5 right-5 text-white w-8 h-8 bg-red-600 rounded-full p-1.5 hover:bg-red-700 transition-colors" />
          </button>
        </div>
      )}

      {/* 🖥 Desktop Layout */}
      <div className="flex max-w-7xl mx-auto">
        {/* Desktop Sidebar */}
        <div className="hidden md:block sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          <StudentSidebar COLORS={COLORS} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 w-full min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}