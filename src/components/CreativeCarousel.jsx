import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Linkedin } from 'lucide-react';

const images = [
  "fotos/foto10.jpg",
  "fotos/foto16.png",
  "fotos/foto9.jpg",
  "fotos/foto8.jpg",
  "fotos/foto18.png",
  "fotos/foto14.png",
  "fotos/foto5.jpg",
  "fotos/foto2.jpg",
];

// Puedes ajustar este valor para cambiar el tiempo entre transiciones automáticas (en milisegundos)
const AUTO_TRANSITION_INTERVAL = 4000; 

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
    <div className="relative w-[600px] h-[500px] overflow-hidden rounded-xl shadow-2xl">
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
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-celeste_aimara hover:text-celeste_aimara/80 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-celeste_aimara hover:text-celeste_aimara/80 transition-colors">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}