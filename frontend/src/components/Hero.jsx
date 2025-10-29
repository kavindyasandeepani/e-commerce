//Hero.jsx
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets'; // ← import your local images from assets.js

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "",
      subtitle: "",
      cta: "SHOP NOW!",
      brand: "",
      image: assets.heroimg1
    },
    {
      id: 2,
      title: "Genabelle",
      subtitle: "Experience the skin-boosting benefits of Salmon DNA with this K-Derma Brand!",
      cta: "SHOP NOW!",
      brand: "",
      image: assets.heroimg2
    },
    {
      id: 3,
      title: "",
      cta: "Shop Now!",
      brand: "",
      image: assets.heroimg3
    },
    {
      id: 4,
      title: "",
      subtitle: "",
      cta: "SHOP ANUA NOW",
      brand: "",
      image: assets.heroimg4
    },
    {
      id: 5,
      title: "",
      subtitle: "",
      cta: "SHOP NOW!",
      brand: "",
      image: assets.heroimg5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="relative z-10 overflow-hidden h-[85vh] sm:h-[85vh] md:h-[85vh] lg:h-[85vh] xl:h-[85vh] max-sm:h-[55vh]">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover max-sm:h-[55vh] max-sm:object-center"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-4xl mx-auto px-6">
                {slide.id === 1 && (
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-300 text-xl mx-1">★</span>
                    ))}
                  </div>
                )}

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                  {slide.title.split(' ').map((word, index) => (
                    <span key={index} className={word === "EQQUALBERRY" ? "text-pink-200" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>

                <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto text-white">
                  {slide.subtitle}
                </p>

                <button className="bg-white text-gray-900 cursor-pointer px-6 py-8 sm:py-3 rounded-md font-bold text-sm sm:text-base transition duration-300 transform hover:scale-105 hover:bg-gray-100 absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
                  {slide.cta}
                </button>

                {slide.brand && (
                  <div className="text-xl md:text-2xl font-light tracking-widest mt-4 text-white">
                    {slide.brand}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition duration-300 z-20 backdrop-blur-sm cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition duration-300 z-20 backdrop-blur-sm cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 rounded-full'
                : 'bg-white/50 w-4 rounded-full hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 z-20">
        <div
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
