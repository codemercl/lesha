'use client'

import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Персональні заняття',
    description: 'Персональний підхід до кожного учня для досягнення найкращого результату.',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100/50'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Підготовка до іспиту',
    description: 'Комплексна підготовка до складання теоретичного та практичного іспиту.',
    color: 'from-rose-500 to-rose-600',
    bgColor: 'from-rose-50 to-rose-100/50'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Відновлення навичок',
    description: 'Заняття для тих, хто давно не керував авто або хоче впевнено повернутись на дорогу.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100/50'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Додаткові години',
    description: 'Можливість замовити додаткові години практики з інструктором.',
    color: 'from-red-400 to-red-500',
    bgColor: 'from-red-50 to-red-100/30'
  },
];

const ServicesSection: React.FC = () => (
  <section id="services" data-bg="light" className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 to-transparent" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Додаткові послуги
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Широкий спектр послуг для комфортного та ефективного навчання водінню
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
        </div>
      </div>

      {/* Services Grid - Mobile horizontal scroll, Desktop grid */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-8 flex lg:flex-none overflow-x-auto gap-6 pb-10 scrollbar-hide">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative bg-white rounded-3xl shadow-lg transition-all duration-500 overflow-hidden transform hover:scale-105 flex-shrink-0 w-80 lg:w-auto"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            {/* Background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Content */}
            <div className="relative p-8 flex flex-col items-center text-center h-full">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Action button */}
              <button className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                Дізнатися більше
              </button>
            </div>

            {/* Progress indicator */}
            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl transition-all duration-500 w-0 group-hover:w-full`} />
          </div>
        ))}
      </div>
    </div>
    
    <style jsx>{`
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  </section>
);

export default ServicesSection; 