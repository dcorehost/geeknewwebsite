import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WIFIService from '../components/WIFIService/WIFIService'
import OurwifiServices from '../components/OurwifiServices/OurwifiServices'
import OurWifiProcess from '../components/Ourwifiprocess/Ourwifiprocess'
import Whychooseuswifi from '../components/Whychooseuswifi/Whychooseuswifi'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { wifi } from '../assets/Data/headerdata'


const Wifi = () => {
  return (
    <div>
      <Navbar />
      <Header {...wifi}/>
      <WIFIService />
      <OurwifiServices />
      <Whychooseuswifi />
      <OurWifiProcess />

      <Footer />
    </div>
  )
}

export default Wifi