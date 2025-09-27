import React from 'react'
import AntivirusSection from '../components/Antivirus/AntivirusSection'
import Navbar from "../components/Navbar/Navbar"
import AntivirusIntro from '../components/Antivirus/AntivirusIntro'
import MalwareDefense from '../components/Antivirus/MalwareDefense'
import Benefits from '../components/Antivirus/Benefits'
import WhySecuritySuite from '../components/Antivirus/WhySecuritySuite'
import Header from '../components/Header/Header'
import { antivirus } from '../assets/Data/headerdata'
const Antivirus = () => {
  return (
    <div>
      <Navbar/>
      <Header {...antivirus} />
      <AntivirusSection/>
      <AntivirusIntro/>
      <MalwareDefense/>
      <Benefits/>
      <WhySecuritySuite/>
    </div>
  )
}

export default Antivirus