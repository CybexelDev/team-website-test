import { motion } from "framer-motion";
import AnimatedParagraph from "./AnimatedParagraph";
import { FiMail } from 'react-icons/fi';

function Home() {

  return (
    <motion.section
     id="home"
     className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black 
  text-white flex items-center justify-center px-5 pb-16   md:pl-20 md:h-screen md:snap-start"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div className="text-center max-w-2xl bg-white/10  backdrop-blur-lg p-10 rounded-2xl shadow-xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-purple-400 leading-tight mb-6"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
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
          href="mailto:developerscbe.cybexel@gmail.com"
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 
          text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
        >
          Let's Connect <FiMail className="inline ml-2" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Home;
