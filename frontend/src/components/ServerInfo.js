import React, { useState, useEffect } from "react";
import axios from "axios";
import ServerStatus from "./ServerStatus";
import { getApiBase } from "../lib/api";

const ServerInfo = () => {
  const [serverStatus, setServerStatus] = useState({
    version: "1.21.5",
    support: "Java Dan Bedrock",
    status: "Offline",
    playersOnline: 0
  });

  const API_BASE = getApiBase();

  const fetchServerStatus = async () => {
    try {
      const response = await axios.get(`${API_BASE}/server-status`);
      setServerStatus({
        version: response.data.version || "1.21.5",
        support: "Java Dan Bedrock",
        status: response.data.status === 'online' ? 'Online' : 'Offline',
        playersOnline: response.data.players_online || 0
      });
    } catch (error) {
      console.error('Failed to fetch server status:', error);
      console.info('API base attempted:', API_BASE);
      if (!process.env.REACT_APP_BACKEND_URL) {
        console.warn(
          'REACT_APP_BACKEND_URL is not set. Attempted to reach backend via:',
          API_BASE
        );
      }
    }
  };

  useEffect(() => {
    fetchServerStatus();
    // Refresh every 30 seconds
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);
  const infoCards = [
    {
      icon: "🎯",
      label: "Versi",
      value: serverStatus.version,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚙️", 
      label: "Support",
      value: serverStatus.support,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔹",
      label: "Status",
      value: serverStatus.status,
      color: serverStatus.status === "Online" ? "from-green-500 to-emerald-500" : "from-red-500 to-rose-500"
    },
    {
      icon: "👥",
      label: "Pemain Online", 
      value: `${serverStatus.playersOnline} Pemain`,
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🎮 Mannuruki Server
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Real-time Server Status Widget */}
        <div className="mb-12">
          <ServerStatus />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 text-center">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-gray-600 mb-2 text-sm uppercase tracking-wider">
                  {card.label}
                </h3>
                <p className="text-xl font-bold text-gray-800">
                  {card.value}
                </p>
                
                {/* Status Indicator */}
                {card.label === "Status" && (
                  <div className="flex items-center justify-center mt-2">
                    <div className={`w-2 h-2 rounded-full ${card.value === "Online" ? "bg-green-500 animate-pulse" : "bg-red-500"} mr-2`}></div>
                    <span className={`text-sm font-medium ${card.value === "Online" ? "text-green-600" : "text-red-600"}`}>
                      {card.value === "Online" ? "Aktif" : "❌"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;