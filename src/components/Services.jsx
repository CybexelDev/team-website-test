import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import wedmt from "../assets/webdevelopment.jpg";
import uiux from "../assets/uiux.avif";
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
    image: wedmt,
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
    clearInterval(intervalRef.current);
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
      className="min-h-screen bg-gradient-to-tr from-blue-900 via-purple-900 to-black text-white"
    >
      {/* ----------------- Small Screen Layout ----------------- */}
      <div className="md:hidden w-full h-screen pt-[10px] px-[10px]  box-border flex flex-col justify-start">
        {/* Top Carousel Card with Details */}
        <div className="w-full h-[66vh] bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/10 mb-3">
          <img
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            className="w-full h-[200px] object-cover rounded-xl mb-3 shadow-md border border-white/10"
          />
          <h2 className="text-xl font-bold text-blue-400 mb-1">
            {services[activeIndex].title}
          </h2>
          <p className="text-sm text-gray-200">{services[activeIndex].description}</p>
        </div>

        {/* Bottom Scrollable Image List Only */}
        <div className="w-full  -mt-[5px] px-[5px] pt-10 flex overflow-x-auto gap-3 scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleManualSelect(index)}
              className={`flex-shrink-0 w-[70px] h-[60px] rounded-xl cursor-pointer overflow-hidden border
                ${index === activeIndex ? "border-blue-400 scale-105" : "border-white/20"}
                transition-transform duration-300`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- Medium & Large Screens Layout ----------------- */}
      <div className="hidden md:flex flex-row w-full min-h-screen pt-5">
        {/* Left Carousel */}
        <div className="w-full md:flex-1 p-4 flex items-center justify-center md:min-w-[600px] md:h-auto md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 w-full max-w-lg text-center h-[66vh]"
            >
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="w-full h-[240px] object-cover rounded-xl mb-4 shadow-md border border-white/10"
              />
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                {services[activeIndex].title}
              </h2>
              <p className="text-base text-gray-200">{services[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right List */}
        <div className="hidden md:flex w-1/4 items-center justify-center md:p-6">
          <div className="w-full h-[400px] overflow-y-auto scrollbar-hide px-2">
            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleManualSelect(index)}
                  className={`cursor-pointer flex items-start gap-4 p-4 rounded-xl w-full transition-all duration-300 min-h-[100px]
                    ${index === activeIndex
                      ? "bg-white/20 border border-white/30 scale-[1.02] shadow-md"
                      : "bg-white/10 hover:bg-white/20"
                    }`}
                >
                  <div className="flex flex-col">
                    <h3 className="text-md font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-300">{service.description.slice(0, 50)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
