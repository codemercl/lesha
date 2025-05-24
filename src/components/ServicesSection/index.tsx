'use client'

import React from 'react';

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#F3F4F6" />
        <path d="M20 12v16M12 20h16" stroke="#fb2c36" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Персональні заняття',
    description: 'Персональний підхід до кожного учня для досягнення найкращого результату.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#F3F4F6" />
        <rect x="14" y="14" width="12" height="12" rx="3" stroke="#fb2c36" strokeWidth="2.5" />
      </svg>
    ),
    title: 'Підготовка до іспиту',
    description: 'Комплексна підготовка до складання теоретичного та практичного іспиту.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#F3F4F6" />
        <path d="M16 24l8-8M16 16h8v8" stroke="#fb2c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Відновлення навичок',
    description: 'Заняття для тих, хто давно не керував авто або хоче впевнено повернутись на дорогу.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#F3F4F6" />
        <path d="M20 14v12M14 20h12" stroke="#fb2c36" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Додаткові години',
    description: 'Можливість замовити додаткові години практики з інструктором.'
  },
];

const ServicesSection: React.FC = () => (
  <section id="services" data-bg="light" className="w-full py-10 md:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex gap-8 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:overflow-visible scrollbar-hide scroll-smooth">
        {services.map((service) => (
          <div
            key={service.title}
            tabIndex={0}
            aria-label={service.title}
            className="min-w-[300px] max-w-xs bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col items-center focus:outline-none transition-all duration-200"
          >
            <div className="mb-6">{service.icon}</div>
            <div className="text-[24px] font-bold text-black mb-2 text-center">{service.title}</div>
            <div className="text-[18px] text-gray-500 text-base text-center">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
    <style jsx global>{`
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  </section>
);

export default ServicesSection; 