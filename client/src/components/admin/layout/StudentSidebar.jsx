// components/student/StudentSidebar.jsx
import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  BarChart,
  Bell,
  User,
  ChevronDown,
  GraduationCap,
  X,
} from "lucide-react";
import { useState } from "react";

const COLORS = {
  SidebarBg: "bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900",
  ActiveBg: "bg-gradient-to-r from-purple-600 to-pink-600",
  HoverBg: "hover:bg-white/10",
  Accent: "text-yellow-400",
  IconGradient: "bg-gradient-to-br from-pink-500 to-orange-500",
};

const StudentSidebar = ({ onClose, isMobile }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, to: "/profile/dashboard" },
    {
      name: "My Courses",
      icon: BookOpen,
      children: [
        { name: "Enrolled Courses", to: "/profile/courses", icon: "📚" },
        { name: "Study Material", to: "/profile/material", icon: "📖" },
      ],
    },
    { name: "Marks & History", icon: BarChart, to: "/profile/marks" },
    { name: "Notices", icon: Bell, to: "/profile/notices" },
    { name: "Profile", icon: User, to: "/profile/user" },
  ];

  const handleMenuClose = () => {
    setMobileSubmenuOpen(false);
    onClose();
  };

  // Mobile Bottom Navigation
  if (isMobile) {
    const mainNavItems = [
      { name: "Home", icon: Home, to: "/profile/dashboard" },
      { name: "Marks", icon: BarChart, to: "/profile/marks" },
      { name: "Courses", icon: BookOpen, action: "submenu" },
      { name: "Notices", icon: Bell, to: "/profile/notices" },
      { name: "Profile", icon: User, to: "/profile/user" },
    ];
    
    return (
      <>
        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 shadow-2xl safe-area-bottom">
          <div className="flex justify-around items-center px-2 py-2">
            {mainNavItems.map((item) => 
              item.action === "submenu" ? (
                <div key="courses" className="relative">
                  <button
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 min-w-[65px] ${
                      mobileSubmenuOpen ? "bg-white/20 scale-110" : "hover:bg-white/10"
                    }`}
                  >
                    <div className={`relative ${mobileSubmenuOpen ? "animate-bounce-slow" : ""}`}>
                      <item.icon 
                        className={`w-6 h-6 ${mobileSubmenuOpen ? "text-yellow-300" : "text-white"}`}
                        strokeWidth={mobileSubmenuOpen ? 2.5 : 2}
                      />
                      {mobileSubmenuOpen && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <span className={`text-xs font-semibold ${
                      mobileSubmenuOpen ? "text-yellow-300" : "text-white/90"
                    }`}>
                      {item.name}
                    </span>
                    <ChevronDown
                      size={10}
                      className={`transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mobile Submenu Popup - Same as Navbar style */}
                  {mobileSubmenuOpen && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        onClick={handleMenuClose}
                      />

                      {/* Submenu Popup */}
                      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-2xl py-3 w-[90vw] max-w-[280px] border border-white/20 animate-fadeIn z-50">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 pb-3 border-b border-white/20">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-yellow-300" />
                            <span className="text-white font-bold text-sm">My Courses</span>
                          </div>
                          <button 
                            onClick={handleMenuClose}
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Submenu Items */}
                        <div className="px-2 pt-2 space-y-1">
                          {navItems.find(item => item.name === "My Courses")?.children.map((sub) => (
                            <NavLink
                              key={sub.to}
                              to={sub.to}
                              onClick={handleMenuClose}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                                  isActive
                                    ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                                    : "bg-white/10 text-white/90 hover:bg-white/20 active:bg-white/25"
                                }`
                              }
                            >
                              <span className="text-xl">{sub.icon}</span>
                              <span>{sub.name}</span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
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
              )
            )}
          </div>
        </nav>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translate(-50%, 10px);
            }
            to {
              opacity: 1;
              transform: translate(-50%, 0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
        `}</style>
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
        {navItems.map((item) =>
          item.children ? (
            <div key={item.name}>
              <button
                onClick={() =>
                  setExpandedMenu(
                    expandedMenu === item.name ? null : item.name
                  )
                }
                className={`flex items-center justify-between w-full p-3 rounded-xl font-semibold transition-all duration-200 group ${COLORS.HoverBg}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${COLORS.IconGradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm">{item.name}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedMenu === item.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMenu === item.name
                    ? "max-h-40 opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-12 space-y-1">
                  {item.children.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                          isActive
                            ? `${COLORS.ActiveBg} text-white font-semibold shadow-lg transform scale-105`
                            : `${COLORS.HoverBg} text-gray-200 hover:text-white hover:translate-x-1`
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        {sub.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ) : (
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
          )
        )}
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

export default StudentSidebar