import React from "react";

const GameModes = () => {
  const modes = [
    {
      title: "Survival",
      icon: "⚔️",
      image: "https://bintanglima.my.id/images/survival.png",
      description: "Minecraft Survival adalah mode permainan di Minecraft di mana pemain harus bertahan hidup dengan mengumpulkan sumber daya, membangun tempat tinggal, dan melawan monster (mobs). Pemain memulai dengan tanpa perlengkapan dan harus mencari makanan, kayu, serta bahan lainnya untuk bertahan.",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Creative",
      icon: "🎨",
      image: "https://bintanglima.my.id/images/creative.png", 
      description: "Minecraft Creative adalah mode permainan di Minecraft yang berfokus pada kebebasan membangun tanpa batasan sumber daya atau ancaman musuh. Pemain memiliki akses ke semua blok dan item serta bisa terbang untuk membangun dengan lebih mudah.",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Minigames",
      icon: "🏆",
      image: "https://bintanglima.my.id/images/minigames.png",
      description: "Minecraft Minigames adalah mode permainan di Minecraft yang berisi berbagai game kecil (mini-games) dengan aturan unik, biasanya dimainkan di server multiplayer. Mode ini lebih kompetitif dan sering kali memiliki sistem skor atau eliminasi.",
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mode Permainan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi berbagai mode permainan yang tersedia di server kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="space-y-12">
          {modes.map((mode, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${mode.gradient} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300">
                  <img 
                    src={mode.image} 
                    alt={mode.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1697479670670-d2a299df749c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxtaW5lY3JhZnR8ZW58MHx8fHwxNzU5MzIwNTYyfDA&ixlib=rb-4.1.0&q=85";
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${mode.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${mode.bgColor} rounded-2xl mb-6 text-2xl transform hover:scale-110 transition-transform duration-300`}>
                  {mode.icon}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {mode.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {mode.description}
                </p>
                
                <button className={`px-8 py-3 bg-gradient-to-r ${mode.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameModes;