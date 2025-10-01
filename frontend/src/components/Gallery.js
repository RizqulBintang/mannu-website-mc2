import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const screenshots = [
    {
      id: 1,
      src: "https://bintanglima.my.id/images/ss1.webp",
      alt: "Screenshot 1 - Server Overview",
      title: "Server Overview"
    },
    {
      id: 2, 
      src: "https://bintanglima.my.id/images/ss2.webp",
      alt: "Screenshot 2 - Survival World",
      title: "Survival World"
    },
    {
      id: 3,
      src: "https://bintanglima.my.id/images/ss3.webp", 
      alt: "Screenshot 3 - Creative Builds",
      title: "Creative Builds"
    },
    {
      id: 4,
      src: "https://bintanglima.my.id/images/ss4.webp",
      alt: "Screenshot 4 - Minigames Arena", 
      title: "Minigames Arena"
    },
    {
      id: 5,
      src: "https://bintanglima.my.id/images/ss5.webp",
      alt: "Screenshot 5 - Community Area",
      title: "Community Area"
    },
    {
      id: 6,
      src: "https://bintanglima.my.id/images/ss6.webp",
      alt: "Screenshot 6 - Adventure Zone",
      title: "Adventure Zone"
    },
    {
      id: 7,
      src: "https://bintanglima.my.id/images/ss7.webp",
      alt: "Screenshot 7 - PvP Arena",
      title: "PvP Arena"
    },
    {
      id: 8,
      src: "https://bintanglima.my.id/images/ss8.webp",
      alt: "Screenshot 8 - Special Events",
      title: "Special Events"
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const currentIndex = screenshots.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % screenshots.length;
    setSelectedImage(screenshots[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = screenshots.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    setSelectedImage(screenshots[prevIndex]);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            📸 Galeri Server
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lihat berbagai area menarik dan pemandangan menakjubkan di server kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {screenshots.map((image) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1697479670670-d2a299df749c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxtaW5lY3JhZnR8ZW58MHx8fHwxNzU5MzIwNTYyfDA&ixlib=rb-4.1.0&q=85";
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm">Klik untuk memperbesar</p>
                  </div>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1697479670670-d2a299df749c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxtaW5lY3JhZnR8ZW58MHx8fHwxNzU5MzIwNTYyfDA&ixlib=rb-4.1.0&q=85";
              }}
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="text-white font-semibold text-xl">{selectedImage.title}</h3>
              <p className="text-white/80 text-sm mt-1">
                {screenshots.findIndex(img => img.id === selectedImage.id) + 1} dari {screenshots.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;