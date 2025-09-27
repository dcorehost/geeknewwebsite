import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PrinterServices from '../components/PrinterServices/PrinterServices'
import OurPrinterServices from '../components/OurPrinterservices/OurPrinterservices'
import WhyChoosePrinter from '../components/WhyChoosePrinter/WhyChoosePrinter'
import OurPrinterProcess from '../components/OurPrinterProcess/OurPrinterProcess'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { printer } from '../assets/Data/headerdata'
import FaqSection from '../components/FaqSection/FaqSection'
import { printerServiceFaqData } from '../assets/Data/faq'

const Printer = () => {
  return (
    <div>
       <Navbar/>
       <Header {...printer} />
      <PrinterServices /> 
      <OurPrinterServices />
      <WhyChoosePrinter />
      <OurPrinterProcess />
      <FaqSection {...printerServiceFaqData} />
      <Footer />
    </div>
  )
}

export default Printer