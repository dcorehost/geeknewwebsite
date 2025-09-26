import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ElectronicsHero from '../components/ElectronicsHero/ElectronicsHero'
import AboutGeek from '../components/AboutGeek/AboutGeek'
import OurServicesGeek from '../components/OurServicesGeek/OurServicesGeek'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <ElectronicsHero />
      <AboutGeek />
      <OurServicesGeek />
      <WhyChooseUs />
      <Footer/>
    </div>
  )
}

export default Home
