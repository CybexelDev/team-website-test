import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Team from "./components/Team"; 
// import other components like Projects, Contact, Team if needed

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        
        {/* Add more animated pages */}
        {/*  */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/*  */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      {/* Fixed Vertical Navbar */}
      <Navbar />

      {/* Add left margin to content to account for sidebar width */}
      <div className="">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
