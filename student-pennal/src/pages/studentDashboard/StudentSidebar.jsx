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
        className={`fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 flex justify-between items-center ${COLORS.GradientHeader} shadow-lg`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Toggle Menu Button */}
          <button
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
            Student Dashboard
          </h1>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-white text-xs sm:text-sm hidden sm:block truncate max-w-[150px] lg:max-w-none">
            Welcome, {auth.user?.name}
          </span>
          <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 sm:px-4 rounded-full transition-colors text-sm sm:text-base">
            <LogOut className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-[57px] sm:pt-[73px]">
        {/* Sidebar - Slide from left */}
        <aside
          className={`fixed left-0 top-[57px] sm:top-[73px] bottom-0 z-40 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <StudentSidebar COLORS={COLORS} onClose={() => setOpen(false)} />
        </aside>

        {/* Backdrop overlay for mobile */}
        {open && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 top-[57px] sm:top-[73px]"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 w-full min-h-[calc(100vh-57px)] sm:min-h-[calc(100vh-73px)]">
          <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}