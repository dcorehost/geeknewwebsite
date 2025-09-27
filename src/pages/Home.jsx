import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

import FaqSection from '../components/FaqSection/FaqSection'
import { homeFaqData } from '../assets/Data/faq'
import TechProblemFinder from '../components/TechProblemFinder/TechProblemFinder'
import GeekServices from '../components/GeekServices/GeekServices'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import PricingPlans from '../components/PricingPlans/PricingPlans'


const Home = () => {
  return (
    <div>
      <Navbar />
      <TechProblemFinder />
      <GeekServices />
      <WhyChooseUs />
      <HowItWorks />
      <PricingPlans />
     
      
      
      <FaqSection {...homeFaqData} />
      <Footer />
    </div>
  )
}

export default Home
