import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import TabletBanner from '../components/Tabletbanner/Tabletbanner'
import Tabletabout from '../components/Tabletabout/Tabletabout'
import Tabletservice from '../components/Tabletservice/Tabletservice'
import Tabletchoose from '../components/Tabletchoose/Tabletchoose'
import Tabtestimonial from '../components/Tabtestimonial/Tabtestimonial'
import CTAbutton from '../components/CTAbutton/CTAbutton'





const Tablets = () => {
  return (
    <div>
      <Navbar />
      <TabletBanner />
      <Tabletabout />
      <Tabletservice />
      <Tabletchoose />
      <Tabtestimonial />
      <CTAbutton />
      <Footer />
    </div>
  )
}

export default Tablets