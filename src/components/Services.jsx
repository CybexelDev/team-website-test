import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import wedmt from "../assets/webdevelopment.jpg"; // Adjust the import path as needed
import uiux from "../assets/uiux.avif"; // Adjust the import path as needed
import mobapps from "../assets/mobapps.webp";
import seos from "../assets/seo.webp";
import cloud from "../assets/cloud.avif";
import api from "../assets/api.webp";

const services = [
  {
    title: "UI/UX Design",
    description: "We create modern, user-friendly interfaces with smooth user flows.",
    image: uiux,
  },
  {
    title: "Web Development",
    description: "High-performance web apps using React, Django, and more.",
    image: wedmt
  },
  {
    title: "Mobile App Development",
    description: "Native and hybrid mobile apps for iOS and Android.",
    image: mobapps,
  },
  {
    title: "SEO Optimization",
    description: "Rank higher in Google with smart keyword strategies and fast performance.",
    image: seos,
  },
  {
    title: "Cloud Deployment",
    description: "Deploy apps on AWS, Azure, and Google Cloud.",
    image: cloud,
  },
  {
    title: "API Integration",
    description: "Seamlessly connect third-party APIs into your system.",
    image: api,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
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
      id="services"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row bg-gradient-to-tr from-blue-900 via-purple-900 to-black h-screen snap-start text-white"
    >
      {/* Left: carousel display */}
      <div className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl max-w-xl text-center shadow-xl border border-white/10"
          >
            <img
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-md border border-white/10"
            />
            <h2 className="text-3xl font-bold text-blue-400 mb-2">
              {services[activeIndex].title}
            </h2>
            <p className="text-lg text-gray-200">
              {services[activeIndex].description}
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
              {services.map((service, index) => (
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
