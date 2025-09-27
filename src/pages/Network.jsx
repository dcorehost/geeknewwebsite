import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ManageServices from '../components/ManageServices/ManageServices'
import QuickSupport from '../components/QuickSupport/QuickSupport'
import ServiceCards from '../components/ServiceCards/ServiceCards'
import Footer from '../components/Footer/Footer'



const Network = () => {
  return (
    <>
    <div>
     <Navbar />
     <ManageServices />
     <ServiceCards />
     <QuickSupport />
     <Footer />
     
   </div>
   </>
  )
}

export default Network