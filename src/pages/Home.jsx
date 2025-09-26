import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ElectronicsHero from '../components/ElectronicsHero/ElectronicsHero'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <ElectronicsHero />
      <Footer/>
    </div>
  )
}

export default Home
