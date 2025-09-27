import React from 'react'
import AntivirusSection from '../components/Antivirus/AntivirusSection'
import Navbar from "../components/Navbar/Navbar"
import AntivirusIntro from '../components/Antivirus/AntivirusIntro'
import MalwareDefense from '../components/Antivirus/MalwareDefense'
import Benefits from '../components/Antivirus/Benefits'
import WhySecuritySuite from '../components/Antivirus/WhySecuritySuite'
import Footer from '../components/Footer/Footer'
const Antivirus = () => {
  return (
    <div>
      <Navbar/>
      <AntivirusSection/>
      <AntivirusIntro/>
      <MalwareDefense/>
      <Benefits/>
      {/* <WhySecuritySuite/> */}
      <Footer/>
    </div>
  )
}

export default Antivirus