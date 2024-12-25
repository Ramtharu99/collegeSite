// import React from 'react'
import { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/header/hero'
import Navbar from './Components/Navbar/Navbar'
import Program from './Components/Programs/Program'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='my Program' title='What I learn'/>
        <Program />
        <About setPlayState = {setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials />
        <Title subTitle='Contact' title='get in touch'/>
        <Contact />
        <Footer />
        <VideoPlayer playState = {playState} setPlayState = {setPlayState} />
      </div>
    </div>
  )
}

export default App
