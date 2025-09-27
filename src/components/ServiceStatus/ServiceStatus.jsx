import React, { useState, useEffect } from 'react';
import { Server, CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react';

const ServiceStatus = () => {
  const [services, setServices] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const serviceEndpoints = [
    { name: 'API Gateway', url: 'https://jsonplaceholder.typicode.com/posts/1' },
    { name: 'Database', url: 'https://jsonplaceholder.typicode.com/posts/1' },
    { name: 'Authentication', url: 'https://jsonplaceholder.typicode.com/posts/1' },
    { name: 'File Storage', url: 'https://jsonplaceholder.typicode.com/posts/1' },
    { name: 'Cache Service', url: 'https://jsonplaceholder.typicode.com/posts/1' },
    { name: 'Message Queue', url: 'https://jsonplaceholder.typicode.com/posts/1' },
  ];

  const checkServiceStatus = async () => {
    const statusPromises = serviceEndpoints.map(async (service) => {
      const startTime = Date.now();
      try {
        const response = await fetch(service.url, { method: 'HEAD' });
        const endTime = Date.now();
        return {
          ...service,
          status: response.ok ? 'operational' : 'degraded',
          responseTime: endTime - startTime,
          lastChecked: new Date().toISOString(),
        };
      } catch (error) {
        return {
          ...service,
          status: 'down',
          responseTime: null,
          lastChecked: new Date().toISOString(),
        };
      }
    });

    const results = await Promise.all(statusPromises);
    setServices(results);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    checkServiceStatus();
    const interval = setInterval(checkServiceStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'degraded': return 'text-yellow-600 bg-yellow-100';
      case 'down': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />;
      case 'degraded': return <Clock className="w-5 h-5" />;
      case 'down': return <XCircle className="w-5 h-5" />;
      default: return <Server className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Service Status</h3>
        <div className="flex items-center space-x-4">
          {lastUpdated && (
            <span className="text-sm text-gray-500">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
          <button
            onClick={checkServiceStatus}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Server className="w-4 h-4 text-gray-500" />
                <span className="font-medium text-gray-700">{service.name}</span>
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getStatusColor(service.status)}`}>
                {getStatusIcon(service.status)}
                <span className="capitalize">{service.status}</span>
              </div>
            </div>
            
            {service.responseTime && (
              <div className="text-sm text-gray-600">
                Response time: <span className="font-medium">{service.responseTime}ms</span>
              </div>
            )}
            
            <div className="text-xs text-gray-500 mt-2">
              Last checked: {new Date(service.lastChecked).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Operational</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Degraded</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Down</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatus;