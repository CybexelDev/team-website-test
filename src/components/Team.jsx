import React, { useState } from "react";
import TeamCarousel from "./TeamCarousel";
import TeamGrid from "./TeamGrid";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      {/* Desktop: Horizontal layout */}
      <div className="hidden md:flex h-screen overflow-hidden">
        <div className="w-3/4 flex items-center justify-center">
          <TeamCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
        <div className="w-1/4 overflow-y-auto pr-3 py-8 no-scrollbar">
          <TeamGrid activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </div>

      {/* Mobile: Vertical stacked layout */}
      <div className="md:hidden flex flex-col h-screen">
        <div className="h-[60%]">
          <TeamCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
        <div className="  px-4 py-4 no-scrollbar no-scrollbar overflow-y-auto h-screen">
          <TeamGrid activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </div>
    </div>
  );
}
