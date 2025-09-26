import React, { useState } from 'react';
import { Send, CheckCircle, XCircle, Loader } from 'lucide-react';

const ApiTeste = () => {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const testApi = async () => {
    if (!url) return;

    setLoading(true);
    setStatus(null);

    try {
      const startTime = Date.now();
      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const endTime = Date.now();

      const data = await res.json();
      
      setStatus({
        code: res.status,
        status: res.statusText,
        time: endTime - startTime,
        success: res.ok
      });

      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setStatus({
        code: 'Error',
        status: error.message,
        time: null,
        success: false
      });
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">API Tester</h3>
      
      <div className="space-y-4">
        <div className="flex space-x-2">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="border rounded-lg px-3 py-2 w-24"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter API URL"
            className="flex-1 border rounded-lg px-3 py-2"
          />
          
          <button
            onClick={testApi}
            disabled={loading || !url}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 flex items-center space-x-2"
          >
            {loading ? <Loader className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            <span>Test</span>
          </button>
        </div>

        {status && (
          <div className={`flex items-center space-x-2 p-3 rounded-lg ${
            status.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            {status.success ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className="font-medium">Status: {status.code}</span>
            <span className="text-sm text-gray-600">{status.status}</span>
            {status.time && <span className="text-sm text-gray-600 ml-auto">Time: {status.time}ms</span>}
          </div>
        )}

        {response && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Response:</label>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-64 text-sm">
              {response}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiTeste;