'use client';

import React, { useState, useEffect } from 'react';
import { instructors } from './static/instructors';
import InstructorCard from './elements/InstructorCard';
import SectionTitle from '../elements/SectionTitle';

const InstructorsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Определяем количество карточек на экране: мобайл — 1, десктоп — 3
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // desktop and up
      return 1; // mobile/tablet
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(3);
  const maxSlides = Math.max(0, instructors.length - cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Следим за изменением cardsPerView и корректируем текущий слайд
  useEffect(() => {
    if (currentSlide > maxSlides) {
      setCurrentSlide(maxSlides);
    }
  }, [cardsPerView, maxSlides, currentSlide]);



  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  // Листаем по одной карточке стрелками — логика уже реализована выше

  return (
    <section
      id="instructors"
      data-bg="white"
      className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наші інструктори
          </SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Досвідчені професіонали, які допоможуть вам впевнено почуватися за кермом
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-gray-600 hover:text-red-500 hover:border-red-200 transition-all duration-300 hover:scale-110"
            aria-label="Previous instructor"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-gray-600 hover:text-red-500 hover:border-red-200 transition-all duration-300 hover:scale-110"
            aria-label="Next instructor"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out pb-10"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`
              }}
            >
              {instructors.map((instructor) => (
                <div 
                  key={instructor.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <InstructorCard instructor={instructor} />
                </div>
              ))}
            </div>
          </div>





        </div>
      </div>
    </section>
  );
};

export default InstructorsSection; 