import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp, MoreHorizontal, GraduationCap, Phone, Mail } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef(null);

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
    { title: "HOME", link: "/", icon: "🏠" },
    { title: "ADMISSION", link: "/admission", icon: "📝" },
    { title: "ABOUT US", link: "/aboutUs", icon: "ℹ️" },
    {
      title: "COURSES",
      icon: "📚",
      submenu: [
        { title: "Class 6-10", link: "/courses/6-10", icon: "🎓" },
        { title: "Class 11-12", link: "/courses/11-12", icon: "📖" },
        { title: "Competitive Exams", link: "/courses/competitive", icon: "🏆" },
      ],
    },
    { title: "FACULTY", link: "/faculty", icon: "👨‍🏫" },
  ];

  const moreMenuItems = [
    { title: "SCHEDULE", link: "/schedule", icon: "📅" },
    { title: "TESTIMONIALS", link: "/testimonials", icon: "⭐" },
    { title: "GALLERY", link: "/gallery", icon: "🖼️" },
    { title: "CONTACT US", link: "/contactUs", icon: "📞" },
    { title: "FAQ", link: "/faq", icon: "❓" },
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
                className={`flex justify-between items-center py-2.5 px-3 cursor-pointer rounded-lg transition-all ${
                  isActive ? "text-orange-500 bg-orange-50 font-semibold" : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
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
                `w-full flex items-center gap-2 py-2.5 px-3 rounded-lg transition-all ${
                  isActive
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
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        isSticky ? "bg-white shadow-xl" : "bg-white/98 backdrop-blur-md shadow-lg"
      }`}
    >
      {/* Premium Top Bar */}
      <div
        className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm transition-all duration-500 overflow-hidden ${
          isSticky ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="hidden lg:flex justify-between items-center px-4 lg:px-8 py-2.5">
          <div className="flex items-center gap-6 text-xs">
            <span className="flex items-center gap-2 opacity-90">
              <Phone size={14} />
              +91 98765 43210
            </span>
            <span className="flex items-center gap-2 opacity-90">
              <Mail size={14} />
              info@pawansirmath.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="px-5 py-1.5 rounded-full border-2 border-white/40 hover:bg-white hover:text-purple-600 transition-all duration-300 font-medium text-sm backdrop-blur-sm"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="px-5 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Register Free
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Premium Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:scale-110 transition-all duration-300">
                <GraduationCap size={28} strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                Pawan Sir Math's Classes
              </h1>
              <p className="text-xs text-gray-500 font-semibold tracking-wide">Excellence in Education ✨</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2 font-semibold text-gray-700 uppercase text-sm">
            {mainMenuItems.map((item, i) => {
              const isActive = isPathActive(item);
              return (
                <li key={i} className="relative group">
                  {item.link ? (
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30"
                            : "hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50"
                        }`
                      }
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.title}
                    </NavLink>
                  ) : (
                    <div
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 cursor-default ${
                        isActive
                          ? "text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30"
                          : "hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50"
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
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
                    <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-2xl rounded-2xl py-3 min-w-[16rem] border border-gray-100 mt-1 animate-fadeIn before:content-[''] before:absolute before:-top-1 before:left-0 before:right-0 before:h-1 before:bg-transparent">
                      {item.submenu.map((sub, j) => {
                        const subActive = isPathActive(sub);
                        return (
                          <li key={j}>
                            {sub.submenu?.length > 0 ? (
                              <div className="relative group/sub">
                                <div
                                  className={`flex items-center justify-between px-4 py-2.5 text-sm transition cursor-pointer ${
                                    subActive
                                      ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 font-semibold"
                                      : "text-gray-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50"
                                  }`}
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="text-base">{sub.icon}</span>
                                    {sub.title}
                                  </span>
                                  <ChevronDown size={12} className="-rotate-90" />
                                </div>
                                <ul className="absolute left-full top-0 hidden group-hover/sub:block bg-white shadow-2xl rounded-2xl py-3 min-w-[14rem] ml-1 border border-gray-100 before:content-[''] before:absolute before:top-0 before:-left-1 before:bottom-0 before:w-1 before:bg-transparent">
                                  {sub.submenu.map((subsub, k) => (
                                    <li key={k}>
                                      <NavLink
                                        to={subsub.link}
                                        className={({ isActive }) =>
                                          `w-full flex items-center gap-2 px-4 py-2.5 text-sm transition ${
                                            isActive
                                              ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 font-semibold"
                                              : "text-gray-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50"
                                          }`
                                        }
                                      >
                                        <span className="text-base">{subsub.icon}</span>
                                        {subsub.title}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <NavLink
                                to={sub.link}
                                className={({ isActive }) =>
                                  `flex items-center gap-2 px-4 py-2.5 text-sm transition ${
                                    isActive
                                      ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 font-semibold border-l-4 border-orange-500"
                                      : "text-gray-700 hover:text-orange-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:border-l-4 hover:border-orange-300"
                                  }`
                                }
                              >
                                <span className="text-base">{sub.icon}</span>
                                {sub.title}
                              </NavLink>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}

            {/* More Menu */}
            <li className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                  moreMenuItems.some(item => location.pathname === item.link)
                    ? "text-white bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg shadow-purple-500/30"
                    : "hover:text-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50"
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
                          `flex items-center gap-2 px-4 py-2.5 text-sm transition ${
                            isActive
                              ? "text-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 font-semibold border-l-4 border-purple-500"
                              : "text-gray-700 hover:text-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:border-l-4 hover:border-purple-300"
                          }`
                        }
                      >
                        <span className="text-base">{item.icon}</span>
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 p-2 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-2xl rounded-b-3xl border-t border-gray-100">
          <ul className="flex flex-col px-6 py-4 gap-1 max-h-[75vh] overflow-y-auto">
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
                        className={`flex justify-between items-center py-3 px-4 cursor-pointer rounded-xl transition-all ${
                          isActive
                            ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 font-semibold shadow-sm"
                            : "text-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                        }`}
                        onClick={() => toggleMenu(currentPath)}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xl">{item.icon}</span>
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
                        `flex items-center gap-3 py-3 px-4 rounded-xl transition-all ${
                          isActive
                            ? "text-orange-500 bg-gradient-to-r from-orange-50 to-pink-50 font-semibold shadow-sm border-l-4 border-orange-500"
                            : "text-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-orange-500"
                        }`
                      }
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.title}
                    </NavLink>
                  )}
                </li>
              );
            })}

            {/* Mobile Login/Register */}
            <li className="mt-4 pt-4 border-t-2 border-gray-100 flex gap-3">
              <NavLink
                to="/login"
                onClick={handleMenuClose}
                className="flex-1 py-3 px-4 text-center border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-all font-semibold shadow-md hover:shadow-lg"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={handleMenuClose}
                className="flex-1 py-3 px-4 text-center bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                Register Free
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;