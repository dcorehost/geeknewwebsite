import React from 'react'
import AntivirusSection from '../components/Antivirus/AntivirusSection'
import Navbar from "../components/Navbar/Navbar"
import AntivirusIntro from '../components/Antivirus/AntivirusIntro'
import MalwareDefense from '../components/Antivirus/MalwareDefense'
import Benefits from '../components/Antivirus/Benefits'
import WhySecuritySuite from '../components/Antivirus/WhySecuritySuite'
import Header from '../components/Header/Header'
import { antivirus } from '../assets/Data/headerdata'
import Footer from '../components/Footer/Footer'
import FaqSection from '../components/FaqSection/FaqSection'
import { antivirusServiceFaqData } from '../assets/Data/faq'
const Antivirus = () => {
  return (
    <div>
      <Navbar/>
      <Header {...antivirus} />
      <AntivirusSection/>
      <AntivirusIntro/>
      <MalwareDefense/>
      <Benefits/>
      {/* <WhySecuritySuite/> */}
      <FaqSection {...antivirusServiceFaqData} />
      <Footer/>
    </div>
  )
}

export default Antivirus