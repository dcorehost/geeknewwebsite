// src/components/ManageServices.jsx
import React from 'react';

const ManageServices = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-[#062B7E]/10">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#062B7E] to-[#02C9B7] bg-clip-text text-transparent mb-3">
            Manage Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#062B7E] to-[#02C9B7] rounded-full"></div>
        </div>
        <div className="bg-gradient-to-r from-[#062B7E] to-[#02C9B7] text-white px-4 py-2 rounded-full text-sm font-medium">
          Active • 24/7 Monitoring
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Everyone can create an ownership for the unique network with the different definitions of 
            Google Business and Marketing relationships. This includes revenue, content and value to 
            help users understand their own product characteristics.
          </p>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            The company has a number of business activities that are built through our current 
            performance domains. With all these insights, we help them build on a new and real-world 
            environment.
          </p>

          <div className="bg-gradient-to-r from-[#062B7E]/5 to-[#02C9B7]/5 p-6 rounded-xl border border-[#062B7E]/10">
            <h4 className="font-semibold text-[#062B7E] mb-3 flex items-center">
              <span className="w-2 h-2 bg-[#02C9B7] rounded-full mr-2"></span>
              Key Features
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-[#02C9B7] mr-2">✓</span>
                Unique network ownership
              </li>
              <li className="flex items-center">
                <span className="text-[#02C9B7] mr-2">✓</span>
                Google Business integration
              </li>
              <li className="flex items-center">
                <span className="text-[#02C9B7] mr-2">✓</span>
                Revenue optimization
              </li>
              <li className="flex items-center">
                <span className="text-[#02C9B7] mr-2">✓</span>
                Real-world environment building
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#062B7E] to-[#02C9B7] rounded-2xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Service Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
              <span>Network Uptime</span>
              <span className="font-bold">99.99%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
              <span>Active Networks</span>
              <span className="font-bold">247</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
              <span>Response Time</span>
              <span className="font-bold"> 50ms</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
              <span>Security Level</span>
              <span className="font-bold">Enterprise</span>
            </div>
          </div>
          
          <button className="w-full mt-6 bg-white text-[#062B7E] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Configure Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;