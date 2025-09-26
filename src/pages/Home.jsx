import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
<<<<<<< HEAD
import FaqSection from '../components/FaqSection/FaqSection'
import { wifiServiceFaqData } from '../assets/Data/faq'

=======
import ElectronicsHero from '../components/ElectronicsHero/ElectronicsHero'
import AboutGeek from '../components/AboutGeek/AboutGeek'
import OurServicesGeek from '../components/OurServicesGeek/OurServicesGeek'
>>>>>>> 11901523ced6dc4d8fe73bdd611a6ac60a0e4bd2

const Home = () => {
  return (
    <div>
      <Navbar/>
<<<<<<< HEAD
      <FaqSection {...wifiServiceFaqData} />
=======
      <ElectronicsHero />
      <AboutGeek />
      <OurServicesGeek />
>>>>>>> 11901523ced6dc4d8fe73bdd611a6ac60a0e4bd2
      <Footer/>
    </div>
  )
}

export default Home
