// components/student/StudentSidebar.jsx
import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  BarChart,
  Bell,
  User,
  FileText,
  GraduationCap,
  X,
} from "lucide-react";
import { useState } from "react";

const COLORS = {
  SidebarBg: "bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900",
  ActiveBg: "bg-gradient-to-r from-purple-600 to-pink-600",
  HoverBg: "hover:bg-white/10",
  IconGradient: "bg-gradient-to-br from-pink-500 to-orange-500",
};

const StudentSidebar = ({ onClose, isMobile }) => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, to: "/profile/dashboard" },
    { name: "My Courses", icon: BookOpen, to: "/profile/courses" },
    { name: "Study Material", icon: FileText, to: "/profile/material" },
    { name: "Marks & History", icon: BarChart, to: "/profile/marks" },
    { name: "Notices", icon: Bell, to: "/profile/notices" },
    { name: "Profile", icon: User, to: "/profile/user" },
  ];

  // Mobile Bottom Navigation
  if (isMobile) {
    const mainNavItems = [
      { name: "Home", icon: Home, to: "/profile/dashboard" },
      { name: "Courses", icon: BookOpen, to: "/profile/courses" },
      { name: "Marks", icon: BarChart, to: "/profile/marks" },
      { name: "Notices", icon: Bell, to: "/profile/notices" },
      { name: "Profile", icon: User, to: "/profile/user" },
    ];
    
    return (
      <>
        {/* Full Menu Modal */}
        {showFullMenu && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowFullMenu(false)}
            />
            
            {/* Menu Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900 rounded-t-3xl shadow-2xl animate-slideUp max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-indigo-900/95 backdrop-blur-sm px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-lg">Menu</h2>
                    <p className="text-xs text-gray-300">Student Portal</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowFullMenu(false)}
                  className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="p-4 space-y-2 pb-24">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => {
                      setShowFullMenu(false);
                      onClose();
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-4 rounded-xl font-semibold transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
                          : "bg-white/5 hover:bg-white/10"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-md ${
                            isActive
                              ? "bg-white/20"
                              : "bg-gradient-to-br from-pink-500 to-orange-500"
                          }`}
                        >
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white">{item.name}</span>
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 shadow-2xl safe-area-bottom">
          <div className="flex justify-around items-center px-2 py-2">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 min-w-[65px] ${
                    isActive
                      ? "bg-white/20 scale-110"
                      : "hover:bg-white/10"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className={`relative ${isActive ? "animate-bounce-slow" : ""}`}>
                      <item.icon 
                        className={`w-6 h-6 ${isActive ? "text-yellow-300" : "text-white"}`}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <span className={`text-xs font-semibold ${
                      isActive ? "text-yellow-300" : "text-white/90"
                    }`}>
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </>
    );
  }

  // Desktop Sidebar
  return (
    <aside className="w-64 min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-2xl">
      {/* ===== HEADER SECTION ===== */}
      <div className="p-6 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${COLORS.IconGradient} rounded-xl flex items-center justify-center shadow-lg`}>
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Student Portal</h2>
            <p className="text-xs text-gray-300">Learning Dashboard</p>
          </div>
        </div>
      </div>

      {/* ===== SCROLLABLE NAVIGATION ===== */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-all duration-200 group ${
                isActive
                  ? `${COLORS.ActiveBg} shadow-lg transform scale-105`
                  : `${COLORS.HoverBg} hover:translate-x-1`
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 shadow-md ${
                    isActive
                      ? "bg-white/20"
                      : `${COLORS.IconGradient} group-hover:scale-110`
                  }`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span>{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* ===== STICKY BOTTOM SECTION ===== */}
      <div className="flex-shrink-0 p-4 border-t border-white/10 bg-indigo-950/50 backdrop-blur-sm">
        <div className="bg-white/10 rounded-xl p-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
              S
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Student Name</p>
              <p className="text-xs text-gray-300">Class 10th</p>
            </div>
          </div>
          <button className="w-full mt-2 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md">
            Need Help?
          </button>
        </div>
      </div>
    </aside>
  );
};

export default StudentSidebar;