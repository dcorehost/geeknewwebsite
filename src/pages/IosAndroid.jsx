import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { mobile } from '../assets/Data/headerdata'

const iOSAndroid = () => {
  return (
    <div>
       <Navbar />
       <Header {...mobile} />
       <
       <Footer />
    </div>
  )
}

export default iOSAndroid