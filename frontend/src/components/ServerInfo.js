import React from "react";
import ServerStatus from "./ServerStatus";

const ServerInfo = () => {
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
      </div>
    </div>
  );
};

export default ServerInfo;
