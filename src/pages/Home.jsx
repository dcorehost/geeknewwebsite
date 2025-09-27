import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

import FaqSection from '../components/FaqSection/FaqSection'
import { homeFaqData } from '../assets/Data/faq'
import TechProblemFinder from '../components/TechProblemFinder/TechProblemFinder'
import GeekServices from '../components/GeekServices/GeekServices'


const Home = () => {
  return (
    <div>
      <Navbar />
      <TechProblemFinder />
      <GeekServices />
     
      
      
      <FaqSection {...homeFaqData} />
      <Footer />
    </div>
  )
}

export default Home
