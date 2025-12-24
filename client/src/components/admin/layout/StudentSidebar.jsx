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
  const [showFullMenu, setShowFullMenu] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, to: "/profile/dashboard" },
    {
      name: "My Courses",
      icon: BookOpen,
      children: [
        { name: "Enrolled Courses", to: "/profile/courses" },
        { name: "Study Material", to: "/profile/material" },
      ],
    },
    { name: "Marks & History", icon: BarChart, to: "/profile/marks" },
    { name: "Notices", icon: Bell, to: "/profile/notices" },
    { name: "Profile", icon: User, to: "/profile/user" },
  ];

  // Mobile Bottom Navigation
  if (isMobile) {
    const mainNavItems = [
      { name: "Home", icon: Home, to: "/profile/dashboard" },
      { name: "Marks", icon: BarChart, to: "/profile/marks" },
      { name: "Courses", icon: BookOpen, action: "menu" },
      { name: "Notices", icon: Bell, to: "/profile/notices" },
      { name: "Profile", icon: User, to: "/profile/user" },
    ];
    
    return (
      <>
        {/* Courses Popup - Appears Above Bottom Nav */}
        {expandedMenu === "My Courses" && (
          <div className="fixed inset-0 z-45 md:hidden pointer-events-none">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
              onClick={() => setExpandedMenu(null)}
            />
            
            {/* Popup Menu Above Bottom Nav */}
            <div className="absolute bottom-20 left-4 right-4 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-2xl p-4 space-y-2 animate-slideUp pointer-events-auto">
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-yellow-300" />
                  <span className="text-white font-bold">My Courses</span>
                </div>
                <button 
                  onClick={() => setExpandedMenu(null)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {navItems.find(item => item.name === "My Courses")?.children.map((sub) => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  onClick={() => {
                    setExpandedMenu(null);
                    onClose();
                  }}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                        : "bg-white/10 text-white/90 hover:bg-white/20"
                    }`
                  }
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/50"></span>
                    {sub.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        )}

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
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.name}>
                      {/* Parent Menu */}
                      <button
                        onClick={() =>
                          setExpandedMenu(
                            expandedMenu === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between w-full p-4 rounded-xl font-semibold transition-all duration-200 bg-white/5 hover:bg-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white">{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-white transition-transform duration-300 ${
                            expandedMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMenu === item.name
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 space-y-2">
                          {item.children.map((sub) => (
                            <NavLink
                              key={sub.to}
                              to={sub.to}
                              onClick={() => {
                                setShowFullMenu(false);
                                onClose();
                              }}
                              className={({ isActive }) =>
                                `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                  isActive
                                    ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                                    : "bg-white/5 text-white/90 hover:bg-white/10"
                                }`
                              }
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white/50"></span>
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
                  )
                )}
              </nav>
            </div>
          </div>
        )}

        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 shadow-2xl safe-area-bottom">
          <div className="flex justify-around items-center px-2 py-2">
            {mainNavItems.map((item) => 
              item.action === "menu" ? (
                <button
                  key="menu"
                  onClick={() => setExpandedMenu(expandedMenu === "My Courses" ? null : "My Courses")}
                  className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 min-w-[65px] ${
                    expandedMenu === "My Courses" ? "bg-white/20 scale-110" : "hover:bg-white/10"
                  }`}
                >
                  <div className="relative">
                    <item.icon 
                      className={`w-6 h-6 ${expandedMenu === "My Courses" ? "text-yellow-300" : "text-white"}`}
                      strokeWidth={expandedMenu === "My Courses" ? 2.5 : 2}
                    />
                    {expandedMenu === "My Courses" && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <span className={`text-xs font-semibold ${
                    expandedMenu === "My Courses" ? "text-yellow-300" : "text-white/90"
                  }`}>
                    {item.name}
                  </span>
                </button>
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

export default StudentSidebar;