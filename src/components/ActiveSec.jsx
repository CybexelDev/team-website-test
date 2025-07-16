// src/components/ActiveSectionTracker.jsx
import { useEffect, useState } from "react";

function ActiveSectionTracker() {
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [activeSectionHeight, setActiveSectionHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      let currentId = null;
      let maxVisible = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisible && visibleHeight > 0) {
          maxVisible = visibleHeight;
          currentId = section.id;
        }
      });

      if (currentId && currentId !== activeSectionId) {
        const activeElement = document.getElementById(currentId);
        const scrollHeight = activeElement.scrollHeight;

        setActiveSectionId(currentId);
        setActiveSectionHeight(scrollHeight);

        console.log("✅ Active Section:", currentId);
        console.log("📏 Scroll Height:", scrollHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSectionId]);

  return (
    <div className="fixed top-4 left-4 bg-black text-white px-4 py-2 rounded z-50 shadow-md">
      <p><strong>Active Section:</strong> {activeSectionId}</p>
      <p><strong>Scroll Height:</strong> {activeSectionHeight}px</p>
    </div>
  );
}

export default ActiveSectionTracker;
