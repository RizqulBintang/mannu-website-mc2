import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524685794168-52985e79c1f8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnR8ZW58MHx8fHwxNzU5MzIwNTYyfDA&ixlib=rb-4.1.0&q=85')`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full animate-ping"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Selamat Datang di
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Mannuruki Server
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up delay-300 leading-relaxed">
          Tempat terbaik untuk berpetualang, berkreasi, dan bertahan hidup bersama komunitas yang ramah! 🚀 
          <br className="hidden md:block" />
          Dari Survival yang seru hingga Minigames yang menantang, semuanya ada di sini!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            🎮 Bergabung Sekarang
          </button>
          
          <a 
            href="https://map.bintanglima.my.id/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            🗺️ Lihat Map Server
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;