import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  const [activeItem, setActiveItem] = useState(0);
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
      { threshold: 0.5 } // Use threshold: 0.6 or 0.5 for smoother active detection
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
    <div className=" md:pb-0 relative h-screen scroll-smooth scrollbar-hide overflow-y-scroll snap-y snap-mandatory">
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
            team: <Team />,
            contact: <Contact />,
          }[id]}
        </section>
      ))}
    </div>
  );
}

export default App;
