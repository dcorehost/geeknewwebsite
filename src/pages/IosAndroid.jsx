import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { mobile } from '../assets/Data/headerdata'
import FaqSection from '../components/FaqSection/FaqSection'
import { mobileServiceFaqData } from '../assets/Data/faq'

const iOSAndroid = () => {
  return (
    <div>
       <Navbar />
       <Header {...mobile} />
       <FaqSection {...mobileServiceFaqData} />
       <Footer />
    </div>
  )
}

export default iOSAndroid