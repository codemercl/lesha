'use client';

import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../elements/SectionTitle';
import CallbackPopup from '../CallbackPopup';
import { useCallbackPopup } from '@/hooks/useCallbackPopup';

const features = [
  {
    title: 'Крок перший',
    subtitle: 'Теорія',
    description: 'Вивчай Правила дорожнього руху та готуйся до іспиту.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Крок другий',
    subtitle: 'Іспит',
    description: 'Складай теорію в ТСЦ МВС та отримуй допуск до практичних занять.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Крок третій',
    subtitle: 'Практика',
    description: 'Обери інструктора, тип КПП та навчайся в зручний час.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Крок четвертий',
    subtitle: 'Права',
    description: 'Реєструйся в чергу МВС, щоб скласти іспити та отримати посвідчення водія.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const ScrollVisualSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { isCallbackPopupOpen, openCallbackPopup, closeCallbackPopup } = useCallbackPopup();

  useEffect(() => {
    const handleScroll = () => {
      const offsets = cardRefs.current?.map(ref => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        const center = window.innerHeight / 2;
        return Math.abs(rect.top + rect.height / 2 - center);
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      if (minIdx !== -1) setActiveIdx(minIdx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section data-bg="light" className="w-full bg-gradient-to-br from-gray-50 to-white py-16 md:pb-24 pt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <SectionTitle as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Як отримати водійське?
          </SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простий процес з чотирьох кроків, який приведе вас до водійського посвідчення
          </p>
        </div>

        {/* Этапы */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-300 to-red-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {features.map((feature, idx) => (
              <div
                key={`step-${idx}`}
                ref={el => { cardRefs.current[idx] = el; }}
                className={`group relative transform transition-all duration-500 hover:scale-105 ${
                  activeIdx === idx ? 'scale-105' : ''
                }`}
              >
                {/* Card */}
                <div className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-500 hover:shadow-2xl ${
                  activeIdx === idx 
                    ? 'border-red-500 shadow-red-100' 
                    : 'border-gray-100 hover:border-red-200'
                }`}>
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${
                      activeIdx === idx 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 scale-110' 
                        : 'bg-gradient-to-r from-red-400 to-red-500'
                    }`}>
                      {idx + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeIdx === idx 
                      ? 'bg-red-500 text-white' 
                      : 'bg-red-50 text-red-500 group-hover:bg-red-100'
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${
                        activeIdx === idx 
                          ? 'bg-red-500 text-white' 
                          : 'bg-red-50 text-red-600'
                      }`}>
                        {feature.subtitle}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-b-2xl transition-all duration-500 ${
                    activeIdx === idx ? 'w-full' : 'w-0'
                  }`} />
                </div>

                {/* Connecting arrow (desktop only) */}
                {idx < features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className={`w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center shadow-md transition-all duration-300 ${
                      activeIdx >= idx 
                        ? 'border-red-500 text-red-500' 
                        : 'border-gray-300 text-gray-400'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button 
            onClick={openCallbackPopup}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Почати навчання</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Callback Popup */}
      <CallbackPopup isOpen={isCallbackPopupOpen} onClose={closeCallbackPopup} />
    </section>
  );
};

export default ScrollVisualSection;
