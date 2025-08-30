import React from 'react';
import SectionTitle from '../elements/SectionTitle';

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
  return (
    <section id="courses" data-bg="white" className="md:pb-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  tabIndex={0}
                  aria-label={`Переглянути розклад для ${course.title}`}
                >
                  Переглянути Розклад
                </button>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-b-3xl transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Маєте запитання?
              </h3>
              <p className="text-gray-600">
                Зв&apos;яжіться з нами для консультації та запису на курси
              </p>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Зв&apos;язатися з нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection; 