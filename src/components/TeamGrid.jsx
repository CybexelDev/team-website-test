import React, { useState } from "react";
import { teamMembers } from "../data/team";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0); // 0-based index

  const currentMember = teamMembers[activeIndex];

  return (
    <section
      id="team"
      className="w-screen min-h-screen flex flex-col lg:flex-row bg-gradient-to-tr from-blue-900 via-purple-900 to-black p-8"
    >
      {/* LEFT: Active Member Info */}
      <div className="flex-[3] flex justify-center gap-8 items-center ml-10 px-10">
        <div className="w-full max-w-xl bg-white/10 p-7 rounded-2xl shadow-xl backdrop-blur-md flex gap-6">
          <div className="w-1/2">
            <img
              src={currentMember.image}
              alt={currentMember.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center space-y-2 text-white">
            <h2 className="text-2xl font-bold">{currentMember.name}</h2>
            <h3 className="text-lg text-purple-300">{currentMember.position}</h3>
            <p className="text-sm text-gray-200">Experience: {currentMember.experience}</p>
          </div>
        </div>
      </div>

      {/* RIGHT: Selectable Grid List */}
      <div className="flex-1 flex items-start justify-center pt-9 px-8">
        <ul className="space-y-4 w-full">
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
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-purple-300">{member.position}</p>
                <p className="text-xs text-gray-400">Experience: {member.experience}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
