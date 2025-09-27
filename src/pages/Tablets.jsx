import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import TabletBanner from '../components/Tabletbanner/Tabletbanner'
import Tabletabout from '../components/Tabletabout/Tabletabout'
import Tabletservice from '../components/Tabletservice/Tabletservice'
import Tabletchoose from '../components/Tabletchoose/Tabletchoose'
import Tabtestimonial from '../components/Tabtestimonial/Tabtestimonial'
import CTAbutton from '../components/CTAbutton/CTAbutton'
import Header from '../components/Header/Header'
import { tablets } from '../assets/Data/headerdata'
import FaqSection from '../components/FaqSection/FaqSection'
import { tabletServiceFaqData } from '../assets/Data/faq'






const Tablets = () => {
  return (
    <div>
      <Navbar />
      <Header {...tablets} />
      <TabletBanner />
      <Tabletabout />
      <Tabletservice />
      <Tabletchoose />
      <Tabtestimonial />
      <CTAbutton />
      <FaqSection {...tabletServiceFaqData} />
      <Footer />
    </div>
  )
}

export default Tablets