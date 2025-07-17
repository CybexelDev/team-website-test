import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const sectionRefs = useRef([]);
  const sectionIds = ["home", "services", "projects", "team", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) {
              setActiveItem(index);
            }
          }
        }
      },
      { threshold: 1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div
    className={`relative h-screen scroll-smooth scrollbar-hide ${
  isScrollLocked ? "overflow-hidden" : "overflow-y-scroll"
} md:snap-y md:snap-mandatory`} >

      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />

      {sectionIds.map((id, index) => (
        <section
          key={id}
          id={id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="min-h-screen md:h-screen w-full snap-start"
        >
          {{
            home: <Home />,
            services: <Services />,
            projects: <Projects />,
            team: (
              <Team
                isActive={activeItem === index}
                setIsScrollLocked={setIsScrollLocked}
              />
            ),
            contact: <Contact />,
          }[id]}
        </section>
      ))}
    </div>
  );
}

export default App;
