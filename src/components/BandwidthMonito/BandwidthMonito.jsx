import React, { useState, useEffect, useRef } from 'react';
import { Download, Upload, Activity } from 'lucide-react';

const BandwidthMonitor = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const intervalRef = useRef(null);

  const simulateBandwidth = () => {
    setDownloadSpeed(Math.random() * 100);
    setUploadSpeed(Math.random() * 50);
  };

  const startMonitoring = () => {
    setIsMonitoring(true);
    simulateBandwidth();
    intervalRef.current = setInterval(simulateBandwidth, 2000);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDownloadSpeed(0);
    setUploadSpeed(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getSpeedColor = (speed) => {
    if (speed > 70) return 'text-red-600';
    if (speed > 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Bandwidth Monitor</h3>
      
      <div className="space-y-6">
        <div className="flex space-x-4">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isMonitoring 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Download className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">Download Speed</span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className={`text-2xl font-bold ${getSpeedColor(downloadSpeed)}`}>
                {downloadSpeed.toFixed(1)}
              </span>
              <span className="text-gray-600">Mbps</span>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Upload className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-700">Upload Speed</span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className={`text-2xl font-bold ${getSpeedColor(uploadSpeed)}`}>
                {uploadSpeed.toFixed(1)}
              </span>
              <span className="text-gray-600">Mbps</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Download Progress</span>
            <span>{downloadSpeed.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(downloadSpeed, 100)}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Upload Progress</span>
            <span>{uploadSpeed.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(uploadSpeed, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandwidthMonitor;