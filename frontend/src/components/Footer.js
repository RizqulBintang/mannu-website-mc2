import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Server Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Mannuruki Server
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Server Minecraft terbaik dengan komunitas yang ramah dan berbagai mode permainan yang seru!
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Status: Offline</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  🏠 Beranda
                </a>
              </li>
              <li>
                <a href="#server-info" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  📊 Info Server
                </a>
              </li>
              <li>
                <a href="#game-modes" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  🎮 Mode Permainan
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  📸 Galeri
                </a>
              </li>
            </ul>
          </div>
          
          {/* Game Modes */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Mode Permainan</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 flex items-center">
                ⚔️ Survival Mode
              </li>
              <li className="text-gray-300 flex items-center">
                🎨 Creative Mode
              </li>
              <li className="text-gray-300 flex items-center">
                🏆 Minigames
              </li>
              <li className="text-gray-300 flex items-center">
                🗺️ Adventure Maps
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <div className="space-y-3">
              <a 
                href="https://map.bintanglima.my.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                🗺️ Live Map
              </a>
              <div className="text-gray-300">
                🌐 bintanglima.my.id
              </div>
              <div className="text-gray-300">
                📧 Versi: 1.21.5
              </div>
            </div>
            
            {/* Join Button */}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              🚀 Bergabung Sekarang
            </button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Mannuruki Server. Semua hak cipta dilindungi.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Dibuat dengan ❤️ untuk komunitas Minecraft Indonesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;