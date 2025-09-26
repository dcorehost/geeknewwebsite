import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer"
import PrivacyBanner from "../components/PrivacyBanner/PrivacyBanner";
import PrivacySection from "../components/PrivacySection/PrivacySection";

const sections = [
  { title: "1. Information We Collect", content: "We may collect personal details such as your name, email, billing information, and technical data like IP address or device type. This helps us deliver secure IT services." },
  { title: "2. How We Use Your Information", content: "Your data is used to provide services, improve user experience, and ensure security. We may also use anonymized data for analysis and business growth." },
  { title: "3. Data Protection & Security", content: "We follow industry best practices with encryption, firewalls, and system monitoring to safeguard your personal and business information." },
  { title: "4. Sharing of Information", content: "Your data is never sold. It is only shared with trusted partners and providers essential for delivering our services (e.g., payment processors)." },
  { title: "5. Your Rights", content: "You can request access, updates, or deletion of your personal information anytime. You can also opt out of marketing communications." },
  { title: "6. Updates to This Policy", content: "We may revise this Privacy Policy to reflect legal, technical, or business changes. The latest version will always be available here." },
  { title: "7. Contact Us", content: "For privacy concerns, reach out at support@geekcare.com. Our team will assist you promptly." },
];

const PrivacyPolicy = () => (
  <div className="bg-gray-50">
    {/* Navbar */}
    <Navbar />

    {/* Banner */}
    <PrivacyBanner />

    {/* Sections */}
    <section className="max-w-5xl mx-auto mt-16 px-6 grid gap-10">
      {sections.map((sec, idx) => (
        <PrivacySection key={idx} title={sec.title} content={sec.content} />
      ))}
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default PrivacyPolicy;
