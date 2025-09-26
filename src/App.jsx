import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Antivirus from './pages/Antivirus'
import IOSAndroid from "./pages/IosAndroid"
import Laptop from './pages/Laptop'
import Network from './pages/Network'
import PcMac from './pages/PcMac'
import Printer from './pages/Printer'
import Tablets from './pages/Tablets'
import Wifi from './pages/Wifi'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'


const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about-us" element={<About />} />
         <Route path="/antivirus" element={< Antivirus/>} />
         <Route path="/iosandroid" element={<IOSAndroid/>} />
         <Route path="/laptop" element={<Laptop />} />
         <Route path="/network" element={<Network />} />
         <Route path="/pcmac" element={<PcMac />} />
         <Route path="/printer" element={<Printer />} />
         <Route path="/tablets" element={<Tablets/>} />
         <Route path="/wifi" element={<Wifi />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         
      </Routes>
    </div>
  )
}

export default App