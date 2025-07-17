import { useState, useEffect } from "react";

const AnimatedParagraph = () => {
  const words = ["Make", "your", "Business", "next", "Gen", "With", "Us."];
  const [displayedWords, setDisplayedWords] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (wordIndex < words.length) {
          setDisplayedWords((prev) => [...prev, words[wordIndex]]);
          setWordIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (wordIndex > 0) {
          setDisplayedWords((prev) => prev.slice(0, -1));
          setWordIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, 400); // Change speed here

    return () => clearInterval(interval);
  }, [wordIndex, isDeleting]);

  return (
    <p className="text-xl md:text-xl text-white   drop-shadow-[0_0_20px_rgba(252,211,77,0.9)] mb-8 
     rounded px-4 py-2 "
     style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
  {displayedWords.join(" ")}
  <span className="animate-pulse"></span>
</p>
  );
};

export default AnimatedParagraph;
