import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import FaqSection from '../components/FaqSection/FaqSection'
import { wifiServiceFaqData } from '../assets/Data/faq'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <FaqSection {...wifiServiceFaqData} />
      <Footer/>
    </div>
  )
}

export default Home
