'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../elements/SectionTitle';

const ProductivitySection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="about" data-bg="red" className="w-full bg-gray-500 pt-35 py-40 md:py-40 relative overflow-hidden">
      {/* Фоновое видео */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
        src="/video/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Контент секции */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text & CTA */}
        <div>
          <SectionTitle as="h1" className="mb-4 leading-tight">
            <b className="text-gray-100 text-[25px]">Автошкола</b>
            <p className="text-white">Формула водіння</p>
          </SectionTitle>
          <div className="mb-6">
            <Image src="/images/line.svg" alt="line" width={96} height={8} />
          </div>
          <p className="text-lg md:text-xl text-white-600 mb-8 max-w-xl">
          Ми — твій партнер на шляху до впевненості за кермом.
          Наша місія — навчити тебе водити з безпекою та відповідальністю.
          </p>
          <div className="flex gap-4">
            <button
              className="flex items-center bg-white border border-gray-300 text-gray-900 px-4 py-4 rounded-full font-semibold shadow hover:bg-gray-100 transition cursor-pointer"
              onClick={() => setShowVideo(true)}
              type="button"
              aria-label="View Demo"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              Переглянути відео
            </button>
          </div>
        </div>
      </div>
      {/* Модальное окно с видео */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-600 bg-opacity-500">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50 focus:outline-none"
            onClick={() => setShowVideo(false)}
            aria-label="Close video"
            type="button"
          >
            &times;
          </button>
          <video
            className="w-full h-full max-w-3xl max-h-[90vh] object-contain bg-black"
            src="/video/background.mp4"
            autoPlay
            controls
            playsInline
          />
        </div>
      )}
    </section>
  );
};

export default ProductivitySection; 