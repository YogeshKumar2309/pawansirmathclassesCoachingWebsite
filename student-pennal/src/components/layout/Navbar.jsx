import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp, MoreHorizontal, Phone, Mail, Home, Users, BookOpen, Info, Calendar, Star, Image as ImageIcon, MessageCircle, HelpCircle, FileText } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import HeaderLogo from "../common/HeaderLogo";
import { useLogoutHandler } from "../../hooks/handler/useLogoutHandler";


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef(null);
  const { auth } = useAuth();
const handleLogout = useLogoutHandler();





  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainMenuItems = [
    { title: "HOME", link: "/", icon: <Home size={20} />, emoji: "🏠" },
    { title: "ADMISSION", link: "/admission", icon: <FileText size={20} />, emoji: "📝" },
    { title: "FACULTY", link: "/faculty", icon: <Users size={20} />, emoji: "👨‍🏫" },
    { title: "ABOUT", link: "/aboutUs", icon: <Info size={20} />, emoji: "ℹ️" },
    {
      title: "COURSES",
      icon: <BookOpen size={20} />,
      emoji: "📚",
      submenu: [
        { title: "Courses", link: "/courses", icon: "📚" },
        { title: "Class 6-8", link: "/course/6-8", icon: "🎓" },
        { title: "Class 9-10", link: "/course/9-10", icon: "📖" },
        { title: "Class 11-12", link: "/course/11-12", icon: "🏆" },
      ],
    },
  ];

  const moreMenuItems = [
    { title: "SCHEDULE", link: "/schedule", icon: <Calendar size={20} />, emoji: "📅" },
    { title: "TESTIMONIALS", link: "/testimonials", icon: <Star size={20} />, emoji: "⭐" },
    { title: "GALLERY", link: "/gallery", icon: <ImageIcon size={20} />, emoji: "🖼️" },
    { title: "CONTACT", link: "/contactUs", icon: <MessageCircle size={20} />, emoji: "📞" },
    { title: "FAQ", link: "/faq", icon: <HelpCircle size={20} />, emoji: "❓" },
  ];

  const toggleMenu = (path) => {
    setOpenMenus((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const isPathActive = (item) => {
    if (item.link && location.pathname === item.link) return true;
    if (item.submenu) {
      return item.submenu.some(subItem => isPathActive(subItem));
    }
    return false;
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setMoreOpen(false);
    setMobileSubmenuOpen(false);
  };

  const renderSubMenu = (submenu, parentPath) =>
    submenu.map((subItem, subIdx) => {
      const currentPath = `${parentPath}-${subIdx}`;
      const isOpen = openMenus[currentPath];
      const isActive = isPathActive(subItem);

      return (
        <li key={currentPath} className="w-full">
          {subItem.submenu?.length > 0 ? (
            <>
              <div
                className={`flex justify-between items-center py-2.5 px-3 cursor-pointer rounded-lg transition-all ${isActive ? "text-orange-500 bg-orange-50 font-semibold" : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
                onClick={() => toggleMenu(currentPath)}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{subItem.icon}</span>
                  {subItem.title}
                </span>
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </div>
              {isOpen && (
                <ul className="pl-6 mt-1 space-y-1">{renderSubMenu(subItem.submenu, currentPath)}</ul>
              )}
            </>
          ) : (
            <NavLink
              to={subItem.link}
              onClick={handleMenuClose}
              className={({ isActive }) =>
                `w-full flex items-center gap-2 py-2.5 px-3 rounded-lg transition-all ${isActive
                  ? "text-orange-500 bg-orange-50 font-semibold shadow-sm"
                  : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                }`
              }
            >
              <span className="text-lg">{subItem.icon}</span>
              {subItem.title}
            </NavLink>
          )}
        </li>
      );
    });

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-500 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 shadow-md ${isSticky ? "md:shadow-xl" : ""
          }`}
      >
        {/* Premium Top Bar - Hidden on mobile and tablet */}
        <div
          className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm transition-all duration-500 overflow-hidden ${isSticky ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
            }`}
        >
          <div className="hidden lg:flex justify-between items-center px-4 lg:px-8 py-2">
            <div className="flex items-center gap-6 text-xs font-medium">
              <span className="flex items-center gap-2 opacity-90">
                <Phone size={13} />
                +91 79062 54588
              </span>
              <span className="flex items-center gap-2 opacity-90">
                <Mail size={13} />
                pawansirmathsclasses1@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              {!auth.loggedIn && (
                <>
                  <NavLink
                    to="/login"
                    className="px-4 py-1 rounded-full border-2 border-white/40 hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-xs backdrop-blur-sm"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 font-bold text-xs shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Register Free
                  </NavLink>
                </>
              )}
              {auth.loggedIn && (
                <>
                  <NavLink
                    to="/profile"
                    className="px-4 py-1 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-xs transition-all"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/logout"
                    onClick={handleLogout}
                    className="px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-xs transition-all"
                  >
                    Logout
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between py-2 lg:py-2.5">
            {/* Premium Logo - Responsive sizing */}
          
            <HeaderLogo/>

            {/* Desktop Menu - Hidden on mobile and tablet */}
            <ul className="hidden lg:flex items-center gap-1.5 font-bold text-gray-800 uppercase text-sm">
              {mainMenuItems.map((item, i) => {
                const isActive = isPathActive(item);
                return (
                  <li key={i} className="relative group">
                    {item.link ? (
                      <>
                        <NavLink
                          to={item.link}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-300 ${isActive
                              ? "text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30"
                              : "hover:text-orange-600 hover:bg-white/80"
                            }`
                          }
                        >
                          <span className="text-base">{item.emoji}</span>
                          {item.title}
                        </NavLink>

                      </>
                    ) : (
                      <div
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-300 cursor-default ${isActive
                          ? "text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30"
                          : "hover:text-orange-600 hover:bg-white/80"
                          }`}
                      >
                        <span className="text-base">{item.emoji}</span>
                        {item.title}
                        {item.submenu && (
                          <ChevronDown
                            size={14}
                            className="group-hover:rotate-180 transition-transform duration-300"
                          />
                        )}
                      </div>
                    )}
                    {item.submenu && (
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-2xl rounded-2xl py-3 min-w-[16rem] border border-gray-100 mt-1 animate-fadeIn">
                        {item.submenu.map((sub, j) => (
                          <li key={j}>
                            <NavLink
                              to={sub.link}
                              className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition ${isActive
                                  ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 border-l-4 border-orange-500"
                                  : "text-gray-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:border-l-4 hover:border-orange-300"
                                }`
                              }
                            >
                              <span className="text-base">{sub.icon}</span>
                              {sub.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* More Menu */}
              <li className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-300 ${moreMenuItems.some(item => location.pathname === item.link)
                    ? "text-white bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30"
                    : "hover:text-purple-600 hover:bg-white/80"
                    }`}
                >
                  <MoreHorizontal size={18} />
                  MORE
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {moreOpen && (
                  <ul className="absolute right-0 top-full bg-white shadow-2xl rounded-2xl py-3 min-w-[14rem] border border-gray-100 mt-2 animate-fadeIn">
                    {moreMenuItems.map((item, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={item.link}
                          onClick={handleMenuClose}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition ${isActive
                              ? "text-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500"
                              : "text-gray-700 hover:text-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:border-l-4 hover:border-purple-300"
                            }`
                          }
                        >
                          <span className="text-base">{item.emoji}</span>
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            {/* Tablet Menu Button - Visible on tablet only */}
            <button
              className="hidden md:block lg:hidden text-gray-800 p-2 rounded-xl hover:bg-white/80 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {auth.loggedIn ? (
              <>
                <NavLink
                  to="/profile"
                  className="flex md:hidden flex-col items-center justify-center
                        min-w-[60px] sm:min-w-[70px]
                        px-2 py-2 rounded-xl
                        text-white font-semibold
                        bg-gradient-to-br from-orange-400 to-pink-500
                        shadow-md hover:shadow-lg
                        hover:scale-105 active:scale-95
                        transition-all duration-300"
                >
                  <Users size={18} />
                  <span className="text-[9px] sm:text-[10px] mt-0.5 uppercase">
                    Profile
                  </span>
                </NavLink>
              </>) : (
              <div className="flex md:hidden">
                <NavLink
                  to="/login"
                  className="px-4 py-1 rounded-full border-2 border-white/40 hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-xs backdrop-blur-sm"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 font-bold text-xs shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Register Free
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Tablet Dropdown Menu */}
        {menuOpen && (
          <div className="hidden md:block lg:hidden bg-white shadow-2xl rounded-b-3xl border-t border-gray-100">
            <ul className="flex flex-col px-6 py-4 gap-1 max-h-[70vh] overflow-y-auto">
              {[...mainMenuItems, ...moreMenuItems].map((item, idx) => {
                const currentPath = `${idx}`;
                const hasSubmenu = item.submenu?.length > 0;
                const isOpen = openMenus[currentPath];
                const isActive = isPathActive(item);

                return (
                  <li key={idx} className="w-full">
                    {hasSubmenu ? (
                      <>
                        <div
                          className={`flex justify-between items-center py-3 px-4 cursor-pointer rounded-xl transition-all font-bold ${isActive
                            ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-sm"
                            : "text-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                            }`}
                          onClick={() => toggleMenu(currentPath)}
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-xl">{item.emoji}</span>
                            {item.title}
                          </span>
                          {isOpen ? (
                            <ChevronUp size={16} className="text-orange-500" />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </div>
                        {isOpen && (
                          <ul className="pl-4 mt-1 space-y-1">
                            {renderSubMenu(item.submenu, currentPath)}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={item.link}
                        onClick={handleMenuClose}
                        className={({ isActive }) =>
                          `flex items-center gap-3 py-3 px-4 rounded-xl transition-all font-bold ${isActive
                            ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 shadow-sm border-l-4 border-orange-500"
                            : "text-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-orange-500"
                          }`
                        }
                      >
                        <span className="text-xl">{item.emoji}</span>
                        {item.title}
                      </NavLink>
                    )}
                  </li>
                );
              })}

              {/* Tablet Auth Buttons */}
              <li className="mt-4 pt-4 border-t-2 border-gray-100 flex gap-3">
                {!auth.loggedIn && (
                  <>
                    <NavLink
                      to="/login"
                      onClick={handleMenuClose}
                      className="flex-1 py-3 px-4 text-center border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-all font-bold shadow-md hover:shadow-lg"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      onClick={handleMenuClose}
                      className="flex-1 py-3 px-4 text-center bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all font-bold shadow-lg hover:shadow-xl"
                    >
                      Register Free
                    </NavLink>
                  </>
                )}

                {auth.loggedIn && (
                  <>
                    <NavLink
                      to="/profile"
                      onClick={handleMenuClose}
                      className="flex-1 py-2 text-center rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/logout"
                      onClick={handleLogout}
                      className="flex-1 py-2 text-center rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-all"
                    >
                      Logout
                    </NavLink>
                  </>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation Bar - Visible on mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-t border-purple-400/30 shadow-2xl z-50 safe-bottom">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex items-center px-1 py-2 gap-0.5">
            {/* Main Menu Items */}
            {mainMenuItems.map((item, idx) => {
              const isActive = location.pathname === item.link;
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              if (hasSubmenu) {
                return (
                  <div key={idx} className="relative">
                    <button
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      className={`flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px] px-1.5 sm:px-2 py-2 rounded-xl transition-all ${isActive || mobileSubmenuOpen
                        ? "bg-white/20 backdrop-blur-sm text-white shadow-lg"
                        : "text-white/90 active:bg-white/10"
                        }`}
                    >
                      <div className={`${isActive || mobileSubmenuOpen ? "scale-110" : ""} transition-transform`}>
                        {item.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase leading-tight text-center">
                        {item.title}
                      </span>
                      <ChevronDown
                        size={10}
                        className={`mt-0.5 transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mobile Submenu Popup */}
                    {mobileSubmenuOpen && (
                      <>
                        {/* Backdrop */}
                        <div
                          className="fixed inset-0 bg-black/20 z-40"
                          onClick={handleMenuClose}
                        />

                        {/* Submenu */}
                        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl py-2 w-[90vw] max-w-[280px] border border-gray-100 animate-fadeIn z-50">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <h3 className="font-bold text-gray-800 text-sm">Select Class</h3>
                          </div>
                          {item.submenu.map((sub, subIdx) => (
                            <NavLink
                              key={subIdx}
                              to={sub.link}
                              onClick={handleMenuClose}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 text-sm font-semibold transition ${isActive
                                  ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 border-l-4 border-orange-500"
                                  : "text-gray-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 active:bg-orange-50"
                                }`
                              }
                            >
                              <span className="text-xl">{sub.icon}</span>
                              <span className="font-bold">{sub.title}</span>
                            </NavLink>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={idx}
                  to={item.link}
                  className={`flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px] px-1.5 sm:px-2 py-2 rounded-xl transition-all ${isActive
                    ? "bg-white/20 backdrop-blur-sm text-white shadow-lg"
                    : "text-white/90 active:bg-white/10"
                    }`}
                >
                  <div className={`${isActive ? "scale-110" : ""} transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase leading-tight text-center">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}

            {/* More Menu Items */}
            {moreMenuItems.map((item, idx) => {
              const isActive = location.pathname === item.link;
              return (
                <NavLink
                  key={idx}
                  to={item.link}
                  className={`flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px] px-1.5 sm:px-2 py-2 rounded-xl transition-all ${isActive
                    ? "bg-white/20 backdrop-blur-sm text-white shadow-lg"
                    : "text-white/90 active:bg-white/10"
                    }`}
                >
                  <div className={`${isActive ? "scale-110" : ""} transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase leading-tight text-center">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}

            {/* Auth Buttons */}
            {!auth.loggedIn && (
              <>
                <NavLink
                  to="/login"
                  className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px] px-1.5 sm:px-2 py-2 rounded-xl transition-all text-white/90 active:bg-white/10"
                >
                  <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-current">
                    <span className="text-xs font-bold">→</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase">Login</span>
                </NavLink>
                <NavLink
                  to="/register"
                  className="flex flex-col items-center justify-center min-w-[65px] sm:min-w-[80px] px-1.5 sm:px-2 py-2 rounded-xl transition-all bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg active:shadow-xl"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-base font-bold">+</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase">Register</span>
                </NavLink>
              </>
            )}

            {auth.loggedIn && (
              <>
                <NavLink
                  to="/profile"
                  className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px] px-1.5 sm:px-2 py-2 rounded-xl transition-all bg-green-500 text-white shadow-md active:shadow-lg"
                >
                  <Users size={18} />
                  <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase">Profile</span>
                </NavLink>
                <NavLink
                  to="/logout"
                  onClick={handleLogout}
                  className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px] px-1.5 sm:px-2 py-2 rounded-xl transition-all bg-red-500 text-white shadow-md active:shadow-lg"
                >
                  <X size={18} />
                  <span className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase">Logout</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .safe-bottom {
          padding-bottom: env(safe-area-inset-bottom);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        /* Prevent body scroll when submenu is open on mobile */
        body:has(.fixed.inset-0) {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Navbar;