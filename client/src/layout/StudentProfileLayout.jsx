import { Outlet, useNavigate } from "react-router-dom";
import { LogOut, Menu, X, Bell } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import StudentSidebar from "../components/admin/layout/StudentSidebar";

const StudentProfileLayout = () => {
  const { auth, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!auth.loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <LogOut className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-6">Please login to continue</p>
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 text-white px-8 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 shadow-xl">
        <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Mobile menu - REMOVED since we have bottom nav now */}

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <div>
                <h1
                  onClick={() => navigate("/")}
                  className="text-xl sm:text-2xl font-extrabold text-white cursor-pointer hover:opacity-90 transition-opacity leading-tight"
                >
                  pawansirmathClasses
                </h1>
                <p className="text-xs text-white/80 hidden sm:block">Student Portal</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-white/20 rounded-xl transition-all duration-200 hover:scale-110 hidden sm:block">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* User Info */}
            <div className="hidden sm:flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                {auth.user?.name?.charAt(0).toUpperCase() || "S"}
              </div>
              <span className="text-white text-sm font-medium truncate max-w-[120px]">
                {auth.user?.name || "Student"}
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Logout"
            >
              <LogOut className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE NAVIGATION ===== */}
      <div className="md:hidden">
        <StudentSidebar onClose={() => setOpen(false)} isMobile={true} />
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="flex">
        {/* Desktop Sidebar - NO MARGIN, LEFT ALIGNED */}
        <div className="hidden md:block sticky top-[89px] h-[calc(100vh-89px)] overflow-y-auto">
          <StudentSidebar isMobile={false} />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full min-w-0 pb-20 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentProfileLayout;