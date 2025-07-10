import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedParagraph from "./AnimatedParagraph";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black 
      text-white flex items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div className="text-center max-w-2xl bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          whileHover={{ scale: 1.1, y: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          We Are{" "}
          <motion.span
            whileHover={{ scale: 1.1, color: "#60A5FA" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-blue-400 inline-block"
          >
            Cybexel Developers
          </motion.span>
        </motion.h1>
        <AnimatedParagraph />

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:yahyatp.cybexel@gmail.com"
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 
          text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
        >
          Let's Connect
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Home;
