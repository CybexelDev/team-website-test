import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "../data/team";

const variants = {
  enter: (i) => ({
    opacity: 0,
    x: i > 0 ? 300 : -300,
    rotateY: i > 0 ? 30 : -30,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.6 },
  },
  exit: (i) => ({
    opacity: 0,
    x: i > 0 ? -300 : 300,
    rotateY: i > 0 ? -30 : 30,
  }),
};

export default function TeamCarousel({ autoPlay = true }) {
  const [idx, setIdx] = useState(0);
  const dir = useState(0)[1];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => next(), 7000);
    return () => clearTimeout(timer);
  }, [idx]);

  const next = () => {
    dir(1);
    setIdx((i) => (i + 1) % teamMembers.length);
  };

  const prev = () => {
    dir(-1);
    setIdx((i) => (i - 1 + teamMembers.length) % teamMembers.length);
  };

  const member = teamMembers[idx];

  return (
    <section className="h-[65vh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white relative overflow-hidden px-4">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={member.id}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full max-w-md"
        >
          <TiltCard member={member} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-1 flex gap-1">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/0 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/0 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}

// ✅ Separated TiltCard Component – Stable across carousel transitions
function TiltCard({ member }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    setTilt({ x: rotateX, y: rotateY });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovering ? 1.1 : 1,
        boxShadow: isHovering
          ? "0px 30px 80px rgba(0, 0, 0, 0.6), 0px 0px 40px rgba(0, 162, 255, 0.3)"
          : "0px 10px 30px rgba(0,0,0,0.4)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="w-full bg-white/10 backdrop-blur-md rounded-xl p-8 text-center"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-4 shadow-md object-cover"
      />
      <h2 className="text-2xl font-semibold text-white">{member.name}</h2>
      <p className="mt-1 text-gray-300">{member.position}</p>
      <p className="mt-1 text-gray-400">Experience: {member.experience}</p>
    </motion.div>
  );
}
