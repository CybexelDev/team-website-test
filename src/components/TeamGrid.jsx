import React from "react";
import { teamMembers } from "../data/team";

export default function TeamGrid({ activeIndex, setActiveIndex }) {
  return (
    <ul className="space-y-4 ">
      {teamMembers.map((member, idx) => (
        <li
          key={member.id}
          onClick={() => setActiveIndex(idx)}
          className={`flex items-center gap-4 cursor-pointer p-3 rounded-xl transition-all duration-300
            ${
              activeIndex === idx
                ? "bg-white/20 scale-[1.02]"
                : "bg-white/10 hover:bg-white/20"
            }`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white"
          />
          <div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-300">{member.position}</p>
            <p className="text-xs text-gray-400">Experience: {member.experience}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
