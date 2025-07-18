import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar({ activeItem, setActiveItem }) {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "Home", id: "home", icon: <FiHome /> },
    { label: "Services", id: "services", icon: <FiBriefcase /> },
    { label: "Projects", id: "projects", icon: <FiCode /> },
    { label: "Team", id: "team", icon: <FiUser /> },
    { label: "Contact", id: "contact", icon: <FiMail /> },
  ];

  const scrollToSection = (id, index) => {
    setActiveItem(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        z-50 fixed
        ${isMobile ? "bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-14 flex-row" : "top-1/2 left-4 -translate-y-1/2 w-14 h-[80vh] flex-col"}
        bg-white/0 backdrop-blur-lg border border-white/10 shadow-2xl
        rounded-3xl px-3 py-4 flex items-center justify-between
      `}
    >
      {/* Logo for Desktop */}
      {!isMobile && (
        <motion.img
          src={logo}
          alt="Logo"
          className="w-8 h-8"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      )}

      {/* Menu Items */}
      <div className={`flex ${isMobile ? "flex-row gap-4" : "flex-col gap-6 mt-4"} items-center flex-grow justify-center`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollToSection(item.id, index)}
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full 
                transition-all duration-300 cursor-pointer
                ${
                  activeItem === index
                    ? "bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-gradient-to-br hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white"
                }`}
            >
              {item.icon}
            </motion.div>

            {/* Hover Label for Desktop */}
            <AnimatePresence>
              {hovered === index && !isMobile && (
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
          </div>
        ))}
      </div>

      {/* Spacer for desktop */}
      {!isMobile && <div className="h-8" />}
    </nav>
  );
}

export default Navbar;
