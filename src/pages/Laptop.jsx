import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/LaptopServices/HeroSection'
import AboutServices from '../components/LaptopServices/AboutServices'
import ContactBanner from '../components/LaptopServices/ContactBanner'
import Services from '../components/LaptopServices/Services'
import ExtendedWarranty from '../components/LaptopServices/ExtendedWarranty'
import Faqs from '../components/LaptopServices/Faqs'

const Laptop = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutServices/>
      <Services/>
      <ExtendedWarranty/>
      <Faqs/>
      <ContactBanner/>
    </div>
  )
}

export default Laptop