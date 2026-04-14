import { NavLink, useNavigate } from "react-router-dom";
import Logo from "/logo/mainLogo.png"; 

const HeaderLogo = ({ portal = "Excellence in Education ✨" }) => {
  // Removed unused variable
  return (
    <NavLink
      to="/"
      className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
    >
      {/* Logo Container */}
      <div className="w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 
                     bg-white/10 backdrop-blur-md rounded-2xl 
                     flex items-center justify-center shadow-lg 
                     hover:scale-105 transform transition-transform duration-300">
        <img
          src={Logo}
          alt="Pawan Sir Math's Classes Logo" // Improved alt text
          className="w-8 sm:w-10 md:w-12 lg:w-14 object-contain"
        />
      </div>

      {/* Branding Text */}
      <div className="flex flex-col">
        <h1 className="font-extrabold text-sm sm:text-base md:text-lg lg:text-xl 
                       bg-gradient-to-r from-orange-600 to-pink-600 
                       bg-clip-text text-transparent 
                       group-hover:from-orange-500 group-hover:to-pink-500 
                       transition-all leading-tight">
          Pawan Sir Math's Classes
        </h1>
        <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-300 font-semibold tracking-wide hidden sm:block">
          {portal}
        </p>
      </div>
    </NavLink>
  );
};

export default HeaderLogo;