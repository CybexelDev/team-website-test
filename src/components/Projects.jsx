// src/components/Projects.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import cyberanalytics from "../assets/projects/cyberanalytics.jpg";
import ecodrive from "../assets/projects/ecodrive.jpg";
import neocms from "../assets/projects/neocms.jpg";
import neocommerce from "../assets/projects/neocommerce.jpg";
import virtualportfolio from "../assets/projects/virtualportfolio.webp";

const projects = [
  {
    title: "Cyber Analytics",
    description: "Next-gen analytics platform with real-time data rendering.",
    image: cyberanalytics,
  },
  {
    title: "Neo Commerce",
    description: "A futuristic e-commerce store built with AI & VR preview.",
    image: neocommerce,
  },
  {
    title: "Virtual Portfolio",
    description: "Interactive 3D portfolio with parallax and physics scroll.",
    image: virtualportfolio,
  },
  {
    title: "EcoDrive App",
    description: "Sustainable driving tracker for electric vehicles.",
    image: ecodrive,
  },
  {
    title: "Neo CMS",
    description: "Headless CMS powered by GraphQL and 3D previews.",
    image: neocms,
  },
];


export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
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
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-900 via-purple-900 to-black h-screen snap-start text-white"
    >
      {/* Left: carousel display */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -100, scale:0.9 }}
            animate={{ opacity: 1, x: 0, scale:1 }}
            exit={{ opacity: 0, x: 100, scale:0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-xl text-center shadow-xl border border-white/10"
          >
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-md border border-white/10"
            />
            <h2 className="text-3xl font-bold text-blue-400 mb-2">
              {projects[activeIndex].title}
            </h2>
            <p className="text-lg text-gray-200">
              {projects[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: scrollable service list */}
      <div className="w-full md:w-1/4 p-4 flex items-center justify-center">
        <div className="relative h-[400px] w-full overflow-hidden group">
          <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="overflow-y-auto max-h-[400px] pr-2 group-hover:overflow-scroll 
              scroll-smooth scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent"
          >
            <motion.div className="space-y-3">
              {projects.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleManualSelect(index)}
                  className={`p-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer ${
                    index === activeIndex
                      ? "bg-white/20 text-white border border-white/20"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <h3 className="text-md font-semibold">{service.title}</h3>
                  <p className="text-sm mt-1 line-clamp-2 text-gray-300">
                    {service.description.slice(0, 60)}...
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
