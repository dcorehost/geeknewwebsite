import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WIFIService from '../components/WIFIService/WIFIService'
import OurwifiServices from '../components/OurwifiServices/OurwifiServices'
import OurWifiProcess from '../components/Ourwifiprocess/Ourwifiprocess'
import Whychooseuswifi from '../components/Whychooseuswifi/Whychooseuswifi'
import Footer from '../components/Footer/Footer'


const Wifi = () => {
  return (
    <div>
      <Navbar/>
      <WIFIService/>
      <OurwifiServices />
       <Whychooseuswifi />
      <OurWifiProcess />
      
       <Footer />
    </div>
  )
}

export default Wifi