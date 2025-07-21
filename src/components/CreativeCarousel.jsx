import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Linkedin } from 'lucide-react';

const images = [
  "fotos/foto10-min.png",
  "fotos/foto14-min.png",
  "fotos/foto15-min.png",
  "fotos/foto16-min.png",
  "fotos/foto17-min.png",
  "fotos/foto19-min.png",
  "fotos/foto21-min.png",
  "fotos/foto4.jpg",
];

// Puedes ajustar este valor para cambiar el tiempo entre transiciones automáticas (en milisegundos)
const AUTO_TRANSITION_INTERVAL = 14000; 

export default function CreativeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_TRANSITION_INTERVAL);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }

    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  };

  return (
   
    <div className="relative w-full max-w-[100%] sm:max-w-[600px] h-[400px] sm:h-[500px] overflow-hidden rounded-xl shadow-2xl">
      <div 
        ref={carouselRef}
        className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 transition-colors p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 bg-white/30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>

      <div className="absolute bottom-4 right-4 bg-white/50 backdrop-blur-sm rounded-lg p-2 flex space-x-4">
        <a href="https://pe.linkedin.com/company/aimaralab" target="_blank" rel="noopener noreferrer" className="text-celeste_aimara hover:text-celeste_aimara/80 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://www.facebook.com/aimaralab" target="_blank" rel="noopener noreferrer" className="text-celeste_aimara hover:text-celeste_aimara/80 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="https://www.instagram.com/aimaralab" target="_blank" rel="noopener noreferrer" className="text-celeste_aimara hover:text-celeste_aimara/80 transition-colors">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3A5.75 5.75 0 1 1 6.25 12 5.75 5.75 0 0 1 12 6.5zm0 1.5a4.25 4.25 0 1 0 4.25 4.25A4.25 4.25 0 0 0 12 8zm5.5-.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 7.75z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
