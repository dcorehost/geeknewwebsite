// src/components/ServiceCards.jsx
import React from 'react';

// SVG Icons Component
const ServiceIcon = ({ type, className = "w-6 h-6" }) => {
  const icons = {
    network: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M7.5 7.5L16.5 16.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M16.5 7.5L7.5 16.5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    security: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    performance: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L13 7L11 7L11 2L13 2Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 5L15 8L13.5 6.5L16.5 3.5L18 5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M19 11L19 13L21 13L21 11L19 11Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M16.5 19.5L13.5 16.5L15 15L18 18L16.5 19.5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 19L11 22L13 22L13 19L11 19Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 18L8 15L6.5 13.5L3.5 16.5L5 18Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 11L3 13L5 13L5 11L3 11Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M6.5 3.5L9.5 6.5L8 8L5 5L6.5 3.5Z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    support: (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 17H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  };

  return icons[type] || icons.network;
};

const ServiceCards = () => {
  const services = [
    {
      icon: 'network',
      title: 'Network Management',
      description: 'Complete ownership and management of unique network infrastructures',
      features: ['Google Business Integration', 'Revenue Optimization', 'Real-time Analytics'],
      status: 'Active',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'security',
      title: 'Security Services',
      description: 'Enterprise-grade security monitoring and threat protection',
      features: ['24/7 Monitoring', 'Threat Detection', 'Data Protection'],
      status: 'Secure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'performance',
      title: 'Performance Optimization',
      description: 'Real-time performance monitoring and optimization solutions',
      features: ['Load Balancing', 'Speed Optimization', 'Uptime Management'],
      status: 'Optimized',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'support',
      title: 'Maintenance & Support',
      description: 'Proactive maintenance and 24/7 technical support',
      features: ['Automated Updates', 'Technical Support', 'System Maintenance'],
      status: 'Available',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#062B7E] to-[#02C9B7] bg-clip-text text-transparent mb-2">
          Our Network Services
        </h2>
        <p className="text-gray-600">Comprehensive solutions for all your network needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#062B7E] to-[#02C9B7] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#062B7E] to-[#02C9B7] p-0.5">
                    <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-[#062B7E]">
                      <ServiceIcon type={service.icon} />
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.color} text-white`}>
                  {service.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#062B7E] to-[#02C9B7] rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:from-gray-100 hover:to-gray-200 transition-all duration-200 border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;