import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../data/team"; // your team data file

export default function Team({ isActive, setIsScrollLocked }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  const isScrolling = useRef(false);
  const total = teamMembers.length;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (!isActive) return;

    const SCROLL_THRESHOLD = 20;
    const SCROLL_DELAY = 700;

    const handleWheel = (e) => {
      const currentIndex = activeIndexRef.current;
      const scrollUp = e.deltaY < 0;
      const scrollDown = e.deltaY > 0;
      const isAtFirst = currentIndex === 0;
      const isAtLast = currentIndex === total - 1;

      if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;

      if ((isAtFirst && scrollUp) || (isAtLast && scrollDown)) {
        setIsScrollLocked(false);
        return;
      }

      e.preventDefault();
      setIsScrollLocked(true);

      if (isScrolling.current) return;
      isScrolling.current = true;

      setActiveIndex((prev) => {
        if (scrollDown) return Math.min(prev + 1, total - 1);
        if (scrollUp) return Math.max(prev - 1, 0);
        return prev;
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, SCROLL_DELAY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      setIsScrollLocked(false);
    };
  }, [isActive, setIsScrollLocked]);

  const current = teamMembers[activeIndex];

  return (
    <section
      id="team"
      className="w-full min-h-screen bg-gradient-to-tr from-blue-900 via-purple-900 to-black p-4 lg:p-8 flex flex-col lg:flex-row overflow-hidden relative z-10"
    >
      {/* LEFT: Active Card */}
      <div className="flex-[3] w-full flex justify-center items-center px-4 mb-8 lg:mb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl bg-white/10 bg-gradient-to-tr from-blue-700 via-purple-700 to-black p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col sm:flex-row gap-6"
          >
            <div className="sm:w-1/2 w-full">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="sm:w-1/2 w-full flex flex-col justify-center space-y-2 text-white">
              <h2 className="text-2xl font-bold">{current.name}</h2>
              <h3 className="text-lg text-purple-300">{current.position}</h3>
              <p className="text-sm text-gray-200">
                Experience: {current.experience}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT: Selectable List */}
      <div className="flex-1 w-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-md max-h-[400px] overflow-y-auto scrollbar-hide">
          <div className="flex flex-col items-center justify-center gap-4">
            {teamMembers.map((member, idx) => (
              <div
                key={member.id}
                onClick={() => setActiveIndex(idx)}
                className={`w-full p-4 rounded-xl cursor-pointer transition-all duration-300 transform
                  ${
                    activeIndex === idx
                      ? "bg-white/20 scale-105 z-10"
                      : "bg-white/10 hover:bg-white/20 scale-95 opacity-50"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="text-white">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-purple-300">{member.position}</p>
                    <p className="text-xs text-gray-400">
                      Experience: {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
