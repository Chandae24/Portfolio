import React from 'react'
import Header from './components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
// import Certificates from './components/Certificates'
import AboutSection from './components/AboutSection'
import Experience from './components/Experience'
import ProjectsSection from './components/ProjectSections'
import Skills from './components/Skills'
import Contact from './components/Contact'
const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 120, // Offset (in px) from the original trigger point
    })
  }, []);
  return (
    <div className='bg-[#111111] min-h-screen '>
      <Header />
      <HeroSection />
      <Education />
      <Experience />
      <ProjectsSection/>
      {/* <Certificates /> */}
      <Skills/>
      <AboutSection />
      <Contact/>
    </div>
  )
}

export default App
