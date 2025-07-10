
import TeamGrid from "../components/TeamGrid";
import TeamCarousel from "./Teamcarousel";

export default function Team() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white overflow-x-hidden">
      <h2 className="text-4xl md:text-4xl font-bold text-center m-2 text-purple-500">
          Meet Our Team
        </h2>
      {/* Section 1: Carousel (Single Card View with Animation) */}
      <TeamCarousel />

      {/* Section 2: Horizontal Scroll Grid */}
      <TeamGrid />
    </div>
  );
}
