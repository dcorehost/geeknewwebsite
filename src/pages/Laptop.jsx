import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/LaptopServices/HeroSection'
import AboutServices from '../components/LaptopServices/AboutServices'
import ContactBanner from '../components/LaptopServices/ContactBanner'
import Services from '../components/LaptopServices/Services'
import ExtendedWarranty from '../components/LaptopServices/ExtendedWarranty'
import Faqs from '../components/LaptopServices/Faqs'
import Header from '../components/Header/Header'
import { laptop } from '../assets/Data/headerdata'
import FaqSection from '../components/FaqSection/FaqSection'
import { laptopServiceFaqData } from '../assets/Data/faq'

const Laptop = () => {
  return (
    <div>
      <Navbar/>
     <Header {...laptop} />
      <HeroSection/>
      <AboutServices/>
      <Services/>
      <ExtendedWarranty/>
      <Faqs/>
      <ContactBanner/>
      <FaqSection {...laptopServiceFaqData} /> 
      <Footer/>
    </div>
  )
}

export default Laptop