'use client';

import React, { useState } from 'react';
import CallbackPopup from '../CallbackPopup';
import { useCallbackPopup } from '@/hooks/useCallbackPopup';

const ProductivitySection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { isCallbackPopupOpen, openCallbackPopup, closeCallbackPopup } = useCallbackPopup();

  return (
    <section id="about" data-bg="red" className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center">
      {/* Фоновое видео */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
        src="/video/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-40">
        <div className="text-center max-w-4xl mx-auto">

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Формула
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              водіння
            </span>
          </h1>

          {/* Rating */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-lg font-semibold">4.9/5</span>
            <span className="text-gray-400">• 500+ відгуків</span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
            Ми — твій партнер на шляху до впевненості за кермом.
            <span className="text-white font-semibold"> Наша місія</span> — навчити тебе водити з безпекою та відповідальністю.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={openCallbackPopup}
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              type="button"
              aria-label="Розпочати навчання"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Розпочати навчання
              </div>
            </button>
            
            <button
              className="group flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              onClick={() => setShowVideo(true)}
              type="button"
              aria-label="Переглянути відео"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              Переглянути відео
            </button>
          </div>

          {/* Simple stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Випускників</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">15+</div>
              <div className="text-gray-400 text-sm">Років досвіду</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Успішність</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Modal video */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-5xl mx-4">
            <button
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors z-50 focus:outline-none group"
              onClick={() => setShowVideo(false)}
              aria-label="Закрити відео"
              type="button"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
            <video
              className="w-full max-h-[80vh] object-contain bg-black rounded-2xl shadow-2xl"
              src="/video/background.mp4"
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}

      {/* Callback Popup */}
      <CallbackPopup isOpen={isCallbackPopupOpen} onClose={closeCallbackPopup} />
    </section>
  );
};

export default ProductivitySection; 