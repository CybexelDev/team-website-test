// src/components/TeamGrid.jsx
import { motion } from "framer-motion";
import { teamMembers } from "../data/team";

export default function TeamGrid() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white w-full">
      <div className="flex overflow-x-auto gap-6 px-4 scrollbar-hide">
        {teamMembers.map(m => (
          <motion.div
            key={m.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="min-w-[180px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300"
          >
            <img
              src={m.image}
              alt={m.name}
              className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-white mb-3 shadow"
            />
            <h4 className="text-lg font-medium text-white">{m.name}</h4>
            <p className="text-sm text-gray-400">{m.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
