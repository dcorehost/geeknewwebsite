import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [latency, setLatency] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkNetworkStatus = async () => {
    setIsChecking(true);
    const startTime = Date.now();
    
    try {
      const response = await fetch('https://www.google.com/favicon.ico', {
        method: 'HEAD',
        cache: 'no-cache'
      });
      const endTime = Date.now();
      setLatency(endTime - startTime);
      setIsOnline(true);
    } catch (error) {
      setIsOnline(false);
      setLatency(null);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkNetworkStatus();
    const interval = setInterval(checkNetworkStatus, 30000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-blue-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Network Status</h3>
        <button
          onClick={checkNetworkStatus}
          disabled={isChecking}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-full ${isOnline ? 'bg-green-100' : 'bg-red-100'}`}>
          {isOnline ? (
            <Wifi className="w-6 h-6 text-green-600" />
          ) : (
            <WifiOff className="w-6 h-6 text-red-600" />
          )}
        </div>
        
        <div>
          <p className={`font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
            {isOnline ? 'Connected' : 'Disconnected'}
          </p>
          <p className="text-sm text-gray-600">
            {isOnline ? (
              latency ? `Latency: ${latency}ms` : 'Measuring...'
            ) : (
              'No internet connection'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkStatus;