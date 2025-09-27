import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ManageServices from '../components/ManageServices/ManageServices'
import QuickSupport from '../components/QuickSupport/QuickSupport'
import ServiceCards from '../components/ServiceCards/ServiceCards'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import FaqSection from '../components/FaqSection/FaqSection'
import { networkServiceFaqData } from '../assets/Data/faq'
import { network } from '../assets/Data/headerdata'



const Network = () => {
  return (
    <>
    <div>
     <Navbar />
     <Header {...network} />
     <ManageServices />
     <ServiceCards />
     <QuickSupport />
     <FaqSection {...networkServiceFaqData} />
     <Footer />
     
   </div>
   </>
  )
}

export default Network