import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../data/team";

export default function TeamCarousel({ activeIndex, setActiveIndex }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef(null);

  const isAtFirst = activeIndex === 0;
  const isAtLast = activeIndex === teamMembers.length - 1;

  useEffect(() => {
    if (!isAtFirst && !isAtLast) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  const scrollToNextPage = () => {
    const next = sectionRef.current?.nextElementSibling;
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPreviousPage = () => {
    const prev = sectionRef.current?.previousElementSibling;
    if (prev) prev.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (e) => {
    if (isScrolling) return;
    const delta = e.deltaY;

    if (delta > 0) {
      if (!isAtLast) {
        e.preventDefault();
        setIsScrolling(true);
        setActiveIndex((prev) => prev + 1);
      } else {
        scrollToNextPage();
      }
    } else if (delta < 0) {
      if (!isAtFirst) {
        e.preventDefault();
        setIsScrolling(true);
        setActiveIndex((prev) => prev - 1);
      } else {
        scrollToPreviousPage();
      }
    }
  };

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    const wheelHandler = (e) => handleScroll(e);
    ref.addEventListener("wheel", wheelHandler, { passive: false });
    return () => ref.removeEventListener("wheel", wheelHandler);
  }, [activeIndex, isScrolling]);

  useEffect(() => {
    if (!isScrolling) return;
    const timeout = setTimeout(() => setIsScrolling(false), 800);
    return () => clearTimeout(timeout);
  }, [isScrolling]);

  const member = teamMembers[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-2xl p-8 w-[90%] max-w-xl text-black cursor-pointer"
        >
          <div className="absolute inset-0 rounded-3xl bg-purple-500 opacity-20 blur-3xl z-[-1]" />
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg border-4 border-purple-500"
          />
          <div className="text-center mt-6">
            <h2 className="text-3xl font-bold text-purple-700">{member.name}</h2>
            <p className="text-lg">{member.position}</p>
            <p className="text-sm text-gray-600 mt-2">
              Experience: {member.experience}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
