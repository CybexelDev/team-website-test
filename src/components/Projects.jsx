// src/components/Projects.jsx
import { motion } from "framer-motion";
import webdev from "../assets/webdev.jpg";

const projects = [
  {
    title: "Cyber Analytics",
    description: "Next-gen analytics platform with real-time data rendering.",
    image: webdev,
  },
  {
    title: "Neo Commerce",
    description: "A futuristic e-commerce store built with AI & VR preview.",
    image: webdev,
  },
  {
    title: "Virtual Portfolio",
    description: "Interactive 3D portfolio with parallax and physics scroll.",
    image: webdev,
  },
  {
    title: "EcoDrive App",
    description: "Sustainable driving tracker for electric vehicles.",
    image: webdev,
  },
  {
    title: "Neo Commerce",
    description: "A futuristic e-commerce store built with AI & VR preview.",
    image: webdev,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Featured Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariants}
            >
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6"
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
