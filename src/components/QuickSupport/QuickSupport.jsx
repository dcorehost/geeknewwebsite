// src/components/QuickSupport.jsx
import React, { useState } from 'react';

const QuickSupport = () => {
  const [activeTab, setActiveTab] = useState('remote');

  const supportOptions = {
    remote: {
      icon: 'https://img.icons8.com/fluency/48/remote-desktop.png',
      title: 'Remote Support',
      steps: [
        'Download our remote support tool',
        'Share your access code with technician',
        'Get instant help in real-time',
        'Issue resolved within minutes'
      ]
    },
    onSite: {
      icon: 'https://img.icons8.com/fluency/48/visit.png',
      title: 'On-Site Support',
      steps: [
        'Schedule appointment online or call',
        'Technician arrives at your location',
        'Comprehensive diagnosis and repair',
        'Quality check and follow-up'
      ]
    },
    chat: {
      icon: 'https://img.icons8.com/fluency/48/chat.png',
      title: 'Live Chat Support',
      steps: [
        'Start chat with our support team',
        'Describe your technical issue',
        'Get step-by-step guidance',
        'Instant solution or escalation'
      ]
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-[#062B7E]/20">
      <h2 className="text-2xl font-bold text-[#062B7E] mb-6 flex items-center">
        <img 
          src="https://img.icons8.com/fluency/48/headset.png" 
          alt="Support" 
          className="w-8 h-8 mr-3"
          style={{ filter: 'invert(15%) sepia(70%) saturate(2000%) hue-rotate(220deg) brightness(50%) contrast(150%)' }}
        />
        Quick Support Options
      </h2>
      
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-[#062B7E]/10 p-1 rounded-lg mb-6">
        {Object.keys(supportOptions).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 ${
              activeTab === tab
                ? 'bg-white shadow-lg text-[#062B7E] font-semibold'
                : 'text-[#062B7E]/70 hover:text-[#062B7E] hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <img 
                src={supportOptions[tab].icon} 
                alt={supportOptions[tab].title}
                className="w-5 h-5"
                style={{ 
                  filter: activeTab === tab 
                    ? 'invert(15%) sepia(70%) saturate(2000%) hue-rotate(220deg) brightness(50%) contrast(150%)'
                    : 'invert(30%) sepia(40%) saturate(500%) hue-rotate(220deg) brightness(80%) contrast(100%)'
                }}
              />
              <span className="font-medium">{supportOptions[tab].title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-gradient-to-r from-[#062B7E] to-[#02C9B7] rounded-xl p-6">
        <div className="flex items-center mb-4">
          <img 
            src={supportOptions[activeTab].icon} 
            alt={supportOptions[activeTab].title}
            className="w-10 h-10 mr-3"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <h3 className="text-xl font-bold text-white">{supportOptions[activeTab].title}</h3>
        </div>
        
        <div className="space-y-3">
          {supportOptions[activeTab].steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="bg-white text-[#062B7E] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                {index + 1}
              </div>
              <p className="text-white/90 flex-1">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-white text-[#062B7E] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium hover:shadow-lg">
            Start {supportOptions[activeTab].title}
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium">
            Schedule Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickSupport;