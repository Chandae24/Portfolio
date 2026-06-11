import React from 'react'
import Header from './components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    </div>
  )
}

export default App
