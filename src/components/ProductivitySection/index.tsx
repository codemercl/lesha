'use client'

import React, { useState } from 'react';

const ProductivitySection = () => {
  const [showVideo, setShowVideo] = useState(false);

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text & CTA */}
          <div className="space-y-8">

            {/* Title */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="text-red-500">Формула</span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  водіння
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6" />
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Ми — твій партнер на шляху до впевненості за кермом.
              <span className="text-white font-semibold"> Наша місія</span> — навчити тебе водити з безпекою та відповідальністю.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Випускників</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Років досвіду</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">98%</div>
                <div className="text-gray-400 text-sm">Успішність</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
                type="button"
                aria-label="Розпочати навчання"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Розпочати навчання
              </button>
              
              <button
                className="group flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
                onClick={() => setShowVideo(true)}
                type="button"
                aria-label="Переглянути відео"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-red-500 transition-colors">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                Переглянути відео
              </button>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Чому обирають нас?</h3>
              <div className="space-y-4">
                {[
                  { icon: '🚗', title: 'Сучасні автомобілі', desc: 'Новий автопарк з механічною та автоматичною КПП' },
                  { icon: '👨‍🏫', title: 'Досвідчені інструктори', desc: 'Професіонали з багаторічним стажем' },
                  { icon: '📚', title: 'Повний курс навчання', desc: 'Теорія + практика + підготовка до іспитів' },
                  { icon: '⭐', title: 'Гарантія результату', desc: '98% наших учнів складають іспит з першого разу' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
    </section>
  );
};

export default ProductivitySection; 