import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../data/team";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const total = teamMembers.length;

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleManualSelect = (index) => {
    setActiveIndex(index);
    startAutoRotate();
  };

  const current = teamMembers[activeIndex];

  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-tr from-blue-900 via-purple-900 to-black text-white flex px-5 md:px-10 md:py-10 py-5 pb-20  box-border"
    >
      {/* LEFT: Main Card */}
      <div className="flex-1 h-full flex items-center md:p-20  justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-full max-w-4xl h-full flex flex-col md:flex-row gap-6 border border-white/10 shadow-xl"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 text-white">
              <h2 className="text-3xl font-bold">{current.name}</h2>
              <h3 className="text-lg text-purple-300">{current.position}</h3>
              <p className="text-sm text-gray-200">
                Experience: {current.experience}
              </p>
              <p className="text-sm text-gray-300">
                {current.bio || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut."}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT: Sticky Vertical List */}
      <div className="w-[80px] sm:w-[60px] md:w-[280px] h-full overflow-y-auto flex flex-col items-center py-24 gap-4  md:pr-2 z-10">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleManualSelect(idx)}
            className={`cursor-pointer transition-all duration-300 ${
              idx === activeIndex ? "scale-110" : ""
            }`}
          >
            {/* Small screen: only avatar */}
            <div className="block md:hidden">
              <img
                src={member.image}
                alt={member.name}
                className={`w-12 h-12 rounded-full object-cover border- ${
                  idx === activeIndex ? "border-purple-400" : "border-white/30"
                }`}
              />
            </div>

            {/* md+ screen: full info */}
            <div
              className={`hidden md:flex items-center gap-3 p-3 rounded-xl w-[240px] ${
                idx === activeIndex
                  ? "bg-white/20 border border-white/30"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover border border-white"
              />
              <div>
                <h4 className="text-sm font-semibold">{member.name}</h4>
                <p className="text-xs text-purple-300">{member.position}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
