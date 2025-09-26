import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WIFIService from '../components/WIFIService/WIFIService'

import OurwifiServices from '../components/OurwifiServices/OurwifiServices'
import OurWifiProcess from '../components/Ourwifiprocess/Ourwifiprocess'
import Whychooseuswifi from '../components/Whychooseuswifi/Whychooseuswifi'
import footer from '../components/Footer/Footer'


const Wifi = () => {
  return (
    <div>
      <Navbar/>
      <WIFIService/>
     
      <OurwifiServices />
      <OurWifiProcess />
       <Whychooseuswifi />
       <footer />
    </div>
  )
}

export default Wifi