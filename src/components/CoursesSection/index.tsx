'use client';

import React from 'react';
import SectionTitle from '../elements/SectionTitle';
import CallbackPopup from '../CallbackPopup';
import { useCallbackPopup } from '@/hooks/useCallbackPopup';

// SVG-иконки (Heroicons, минималистичные)
const IconCar = (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-5.5A2 2 0 017 6h10a2 2 0 011.9 1.5L21 13M5 13h14M5 13v5a2 2 0 002 2h10a2 2 0 002-2v-5M7 18v2m10-2v2" /></svg>
);
const IconMoney = (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V6m0 10v-2m8-2a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
);
const IconTime = (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const IconOnline = (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M12 4h9m-9 8h9m-9 8v-8m0 0V4m0 8H3m9 0H3" /></svg>
);

const courses = [
  {
    type: 'Теоретичні Заняття',
    title: 'Онлайн-курс ПДР',
    list: [
      'Живе спілкування з викладачем у Zoom',
      'Доступ до матеріалів 24/7',
    ],
    details: [
      { icon: IconOnline, text: 'Заняття онлайн' },
      { icon: IconMoney, text: '3000 грн за курс' },
      { icon: IconTime, text: 'Тривалість — 1 місяць' },
    ],
  },
  {
    type: 'Практичні Заняття',
    title: 'Механічна КПП',
    list: [
      'Навчання з нуля — мінімум 20 занять',
      'Поновлення навичок водіння — необмежена кількість занять',
    ],
    details: [
      { icon: IconCar, text: 'Механічна КПП' },
      { icon: IconMoney, text: '600 грн за годину' },
      { icon: IconTime, text: 'Тривалість — 2 години' },
    ],
  },
  {
    type: 'Практичні Заняття',
    title: 'Автоматична КПП',
    list: [
      'Навчання з нуля — мінімум 20 занять',
      'Поновлення навичок водіння — необмежена кількість занять',
    ],
    details: [
      { icon: IconCar, text: 'Автоматична КПП' },
      { icon: IconMoney, text: '650 грн за годину' },
      { icon: IconTime, text: 'Тривалість — 2 години' },
    ],
  }
];

const CoursesSection: React.FC = () => {
  const { isCallbackPopupOpen, openCallbackPopup, closeCallbackPopup } = useCallbackPopup();

  return (
    <section id="courses" data-bg="white" className="md:pb-24 pt-10 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-l from-red-50/20 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наші послуги
          </SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Оберіть підходящий курс навчання та розпочніть свій шлях до водійського посвідчення
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 transform hover:scale-105"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Header with type badge */}
              <div className="relative p-8 pb-0">
                <div className="absolute top-5 left-8">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {course.type}
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 pt-0 flex-grow">
                {/* Features list */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {course.list.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details cards */}
                <div className="space-y-3 mb-8">
                  {course.details.map((detail, i) => (
                    <div key={i} className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl p-4 border border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          {detail.icon}
                        </div>
                        <div className="flex-grow">
                          <span className="text-lg font-semibold text-gray-900">{detail.text}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <button
                  onClick={openCallbackPopup}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
                  tabIndex={0}
                  aria-label={`Дізнатись більше для ${course.title}`}
                >
                  Дізнатись більше
                </button>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-b-3xl transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Contact Manager Block */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-red-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Маєте запитання?
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Можете задати їх нашому менеджеру зручним для вас способом
              </p>
            </div>

            {/* Contact options - Mobile horizontal scroll, Desktop grid */}
            <div className="lg:grid lg:grid-cols-5 lg:gap-4 flex lg:flex-none overflow-x-auto gap-4 pb-4 lg:pb-0 scrollbar-hide">
              {/* Telegram */}
              <a
                href="https://t.me/formulamessage_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 flex-shrink-0 w-48 lg:w-auto"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1 text-center">Telegram</h4>
                <p className="text-gray-600 text-xs text-center">Швидкі відповіді</p>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/formula_vodinya?igsh=ZGx6YXFoZ3JkbGc1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 hover:border-pink-200 transition-all duration-300 transform hover:scale-105 flex-shrink-0 w-48 lg:w-auto"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1 text-center">Instagram</h4>
                <p className="text-gray-600 text-xs text-center">Фото та новини</p>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@formula_vodinya?_t=ZM-8zOXGlgP1pl&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 transform hover:scale-105 flex-shrink-0 w-48 lg:w-auto"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.35 3.12-5.15 3.61-1.8.49-3.63.31-5.24-.5-1.62-.81-2.96-2.21-3.84-3.96-.88-1.75-.96-3.71-.25-5.56.71-1.85 2.07-3.19 3.95-4.09 1.88-.9 3.96-1.26 6.03-.84 0-.01-.01-.01-.01-.02zm-3.95 16.92c.19-.03.37-.09.56-.14.18-.05.35-.12.52-.2.17-.08.33-.18.48-.28.15-.1.3-.22.44-.35.14-.13.27-.27.39-.42.12-.15.23-.31.33-.47.1-.16.19-.33.27-.5.08-.17.15-.35.21-.53.06-.18.11-.37.15-.56.04-.19.07-.38.09-.57.02-.19.03-.39.03-.58 0-.19-.01-.38-.03-.57-.02-.19-.05-.38-.09-.57-.04-.19-.09-.38-.15-.56-.06-.18-.13-.36-.21-.53-.08-.17-.17-.34-.27-.5-.1-.16-.21-.32-.33-.47-.12-.15-.25-.29-.39-.42-.14-.13-.29-.25-.44-.35-.15-.1-.31-.2-.48-.28-.17-.08-.34-.15-.52-.2-.18-.05-.37-.11-.56-.14-.19-.03-.38-.05-.57-.06-.19-.01-.39-.02-.58-.02-.19 0-.38.01-.57.02-.19.01-.38.03-.57.06-.19.03-.37.09-.56.14-.18.05-.35.12-.52.2-.17.08-.33.18-.48.28-.15.1-.3.22-.44.35-.14.13-.27.27-.39.42-.12.15-.23.31-.33.47-.1.16-.19.33-.27.5-.08.17-.15.35-.21.53-.06.18-.11.37-.15.56-.04.19-.07.38-.09.57-.02.19-.03.39-.03.58 0 .19.01.38.03.57.02.19.05.38.09.57.04.19.09.38.15.56.06.18.13.36.21.53.08.17.17.34.27.5.1.16.21.32.33.47.12.15.25.29.39.42.14.13.29.25.44.35.15.1.31.2.48.28.17.08.34.15.52.2.18.05.37.11.56.14.19.03.38.05.57.06.19.01.39.02.58.02.19 0 .38-.01.57-.02.19-.01.38-.03.57-.06z"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1 text-center">TikTok</h4>
                <p className="text-gray-600 text-xs text-center">Відео та тренди</p>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@formula_vodinya?si=07-UPsf52GNgi-mf"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300 transform hover:scale-105 flex-shrink-0 w-48 lg:w-auto"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1 text-center">YouTube</h4>
                <p className="text-gray-600 text-xs text-center">Навчальні відео</p>
              </a>

              {/* Phone */}
              <a
                href="tel:+380992011683"
                className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:scale-105 flex-shrink-0 w-48 lg:w-auto"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1 text-center">Телефон</h4>
                <p className="text-gray-600 text-xs text-center">099-201-16-83</p>
              </a>
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm mb-4">Або залиште заявку, і ми самі вам зателефонуємо</p>
              <button 
                onClick={openCallbackPopup}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Замовити дзвінок
              </button>
            </div>
          </div>
        </div>
      </div>

    {/* Callback Popup */}
    <CallbackPopup isOpen={isCallbackPopupOpen} onClose={closeCallbackPopup} />
    </section>
  );
};

export default CoursesSection; 