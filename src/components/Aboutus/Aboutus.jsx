import React from "react";
import AboutBanner from "../AboutBanner/AboutBanner";
import CompanyStory from "../CompanyStory/CompanyStory";
import AboutCTC from "../AboutCTC/AboutCTC";
import ServicesSection from "../ServicesSection/ServicesSection";
import CoreValues from "../CoreValues/CoreValues";
import MilestonesSection from "../MilestonesSection/MilestonesSection";
import Testimonials from "../Testimonials/Testimonials";
import Newsletter from "../Newsletter/Newsletter";

const Aboutus = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <AboutBanner />

      {/* Company Story */}
      <CompanyStory />

      
      {/* Services Section */}
      <ServicesSection />

      {/* Core Values Section */}
      <CoreValues />

      {/* Milestones / Achievements */}
      <MilestonesSection />
      
      {/* About CTC / Company Metrics */}
      <AboutCTC />


      {/* Testimonials / Clients Feedback */}
      <Testimonials />

      {/* Newsletter / Subscription */}
      <Newsletter />
    </div>
  );
};

export default Aboutus;
