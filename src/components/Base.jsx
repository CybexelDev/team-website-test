import { useState, useEffect, useRef } from 'react';

import Home from './Home';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Team from './Team';
import Navbar from './Navbar';

function Base() {
  const [scrollCount,setScrollCount] = useState();

  return (
    <div>
        <Navbar />
         <div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'> 
            <Home />
            <Services />
            <Projects />
            <Team />
            <Contact /> 
        </div> 
    </div>
  )
}

export default Base;
