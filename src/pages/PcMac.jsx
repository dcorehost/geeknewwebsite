import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { pcMac } from '../assets/Data/headerdata'
import FaqSection from '../components/FaqSection/FaqSection'
import { pcMacServiceFaqData } from '../assets/Data/faq'

const PcMac = () => {
  return (
    <div>
      <Navbar/>
      <Header {...pcMac} />
      <FaqSection {...pcMacServiceFaqData} />
      <Footer/>
    </div>
  )
}

export default PcMac