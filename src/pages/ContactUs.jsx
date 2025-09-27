import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ContactUsForm from '../components/ContactUs/ContactUsForm'

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <ContactUsForm/>
      <Footer/>
    </div>
  )
}

export default ContactUs