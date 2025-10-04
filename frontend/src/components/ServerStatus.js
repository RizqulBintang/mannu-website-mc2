import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getApiBase } from '../lib/api';

const ServerStatus = () => {
  const [serverStatus, setServerStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const API_BASE = getApiBase();

  const fetchServerStatus = async () => {
    try {
      const response = await axios.get(`${API_BASE}/server-status`);
      setServerStatus(response.data);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError('Failed to fetch server status');
      console.error('Server status error:', err);
      console.info('API base attempted:', API_BASE);
      if (!process.env.REACT_APP_BACKEND_URL) {
        console.warn(
          'REACT_APP_BACKEND_URL is not set. Attempted to reach backend via:',
          API_BASE
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchServerStatus();

    // Set up auto-refresh every 30 seconds
    const interval = setInterval(fetchServerStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'text-green-600 bg-green-100';
      case 'offline':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online':
        return '🟢';
      case 'offline':
        return '🔴';
      default:
        return '🟡';
    }
  };

  const formatLastUpdated = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
        <div className="animate-pulse">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="h-6 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-20"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getStatusIcon(serverStatus?.status)}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Server Status</h3>
              <span 
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(serverStatus?.status)}`}
              >
                {serverStatus?.status === 'online' ? 'ONLINE' : 'OFFLINE'}
              </span>
            </div>
          </div>
          
          {/* Refresh Button */}
          <button
            onClick={fetchServerStatus}
            disabled={loading}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
            title="Refresh Status"
          >
            <svg 
              className={`w-5 h-5 text-gray-600 ${loading ? 'animate-spin' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
          </button>
        </div>

        {/* Status Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {serverStatus?.players_online || 0}
            </div>
            <div className="text-sm text-blue-600 font-medium">
              Pemain Online
            </div>
          </div>

          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {serverStatus?.max_players || 100}
            </div>
            <div className="text-sm text-purple-600 font-medium">
              Max Players
            </div>
          </div>

          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">
              {serverStatus?.ping || 0}ms
            </div>
            <div className="text-sm text-green-600 font-medium">
              Ping
            </div>
          </div>

          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-lg font-bold text-orange-600">
              {serverStatus?.version || '1.21.5'}
            </div>
            <div className="text-sm text-orange-600 font-medium">
              Versi
            </div>
          </div>
        </div>

        {/* MOTD */}
        {serverStatus?.motd && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 font-medium mb-1">Message of the Day:</div>
            <div className="text-sm text-gray-800">{serverStatus.motd}</div>
          </div>
        )}

        {/* Server Info */}
        <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
          <span>
            {serverStatus?.server_type && `${serverStatus.server_type} • `}
            Last updated: {formatLastUpdated(lastUpdated)}
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Auto-refresh: 30s</span>
          </span>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="text-sm text-red-600">
              ⚠️ {error}
            </div>
          </div>
        )}

        {/* Offline Message */}
        {serverStatus?.status === 'offline' && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="text-sm text-yellow-800">
              🔧 Server sedang maintenance atau offline. Silakan coba lagi nanti!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServerStatus;