import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import logo from "../assets/bgfixed.png";

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const menuItems = [
    { label: "Home", href: "/", icon: <FiHome /> },
    { label: "Services", href: "/services", icon: <FiBriefcase /> },
    { label: "Projects", href: "/projects", icon: <FiCode /> },
    { label: "Team", href: "/team", icon: <FiUser /> },
    { label: "Contact", href: "/contact", icon: <FiMail /> },
  ];

  return (
    <nav
      className="fixed top-1/2 left-4 transform -translate-y-1/2 
        w-14 md:w-16 h-[80vh] rounded-3xl 
        bg-white/10 backdrop-blur-lg border border-white/10 
        shadow-2xl z-50 flex flex-col items-center justify-between py-6 px-2"
    >
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-8 h-8"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      {/* Menu Items */}
      <div className="flex flex-col items-center gap-6 mt-4 flex-grow justify-center">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="relative group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full 
                transition-all duration-300
                ${
                  location.pathname === item.href
                    ? "bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-gradient-to-br hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white"
                }`}
            >
              {item.icon}
            </motion.div>

            {/* Hover Label (optional) */}
            <AnimatePresence>
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 60 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 
                    bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 
                    text-white text-sm px-3 py-1 rounded-xl shadow-xl whitespace-nowrap backdrop-blur-sm bg-opacity-90"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>

      {/* Spacer or Footer Item if needed */}
      <div className="h-8" /> {/* Optional spacer */}
    </nav>
  );
}

export default Navbar;
