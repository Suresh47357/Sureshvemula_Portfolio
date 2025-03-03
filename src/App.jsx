import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Aboutme from './components/Aboutme.jsx'
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Certificates from './components/Certificates.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
      <div className=" overflow-x-hidden flex-nowrap absolute top-0 z-[-2] h-max  px-16 bg-neutral-950 bg-radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="lg:px-4">
        <Navbar />
        <Hero />
        <Certificates />
        <Projects />
        <Technologies />
         <Aboutme />
         < Contact />
        </div>
    </div>
    
  )
}

export default App
