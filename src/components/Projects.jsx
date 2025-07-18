import { useEffect, useRef, useState } from "react";
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
    clearInterval(intervalRef.current);
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
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white"
    >
      {/* Small screen layout */}
      <div className="md:hidden w-full h-screen pt-[10px] px-[10px] box-border flex flex-col justify-start">
        {/* Top Carousel Card */}
        <div className="w-full h-[66vh] bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/10 mb-3">
          <img
            src={projects[activeIndex].image}
            alt={projects[activeIndex].title}
            className="w-full h-[200px] object-cover rounded-xl mb-3 shadow-md border border-white/10"
          />
          <h2 className="text-xl font-bold text-blue-400 mb-1">
            {projects[activeIndex].title}
          </h2>
          <p className="text-sm text-gray-200">{projects[activeIndex].description}</p>
        </div>

        {/* Scrollable image list */}
        <div className="w-full -mt-[5px] px-[5px] pt-10 flex overflow-x-auto gap-3 scrollbar-hide pb-[7%]">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleManualSelect(index)}
              className={`flex-shrink-0 w-[70px] h-[60px] rounded-xl cursor-pointer overflow-hidden border transition-transform duration-300
                ${index === activeIndex ? "border-blue-400 scale-105" : "border-white/20"}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Medium and Large screen layout */}
      <div className="hidden md:flex flex-row w-full min-h-screen pt-5">
        {/* Carousel section */}
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
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="w-full h-[240px] object-cover rounded-xl mb-4 shadow-md border border-white/10"
              />
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                {projects[activeIndex].title}
              </h2>
              <p className="text-base text-gray-200">{projects[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrollable list */}
        <div className="hidden md:flex w-1/4 items-center justify-center md:p-6">
          <div className="w-full h-[400px] overflow-y-auto scrollbar-hide px-2">
            <div className="flex flex-col gap-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => handleManualSelect(index)}
                  className={`cursor-pointer flex items-start gap-4 p-4 rounded-xl w-full transition-all duration-300 min-h-[100px]
                    ${index === activeIndex
                      ? "bg-white/20 border border-white/30 scale-[1.02] shadow-md"
                      : "bg-white/10 hover:bg-white/20"}`}
                >
                  <div className="flex flex-col">
                    <h3 className="text-md font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.description.slice(0, 50)}...</p>
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
