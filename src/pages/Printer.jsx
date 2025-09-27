import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PrinterServices from '../components/PrinterServices/PrinterServices'
import OurPrinterServices from '../components/OurPrinterservices/OurPrinterservices'
import WhyChoosePrinter from '../components/WhyChoosePrinter/WhyChoosePrinter'
import OurPrinterProcess from '../components/OurPrinterProcess/OurPrinterProcess'
import Footer from '../components/Footer/Footer'

const Printer = () => {
  return (
    <div>
       <Navbar/>
      <PrinterServices />
      <OurPrinterServices />
      <WhyChoosePrinter />
      <OurPrinterProcess />
      <Footer />
    </div>
  )
}

export default Printer