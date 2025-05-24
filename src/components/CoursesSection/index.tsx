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
    type: 'Практичні Заняття',
    title: 'Механічна КП',
    list: [
      'Навчання з нуля — мінімум 20 занять',
      'Поновлення навичок водіння — необмежена кількість занять',
    ],
    details: [
      { icon: IconCar, text: 'Механічна КП' },
      { icon: IconMoney, text: '600 грн за заняття' },
      { icon: IconTime, text: 'Тривалість — 2 години' },
    ],
  },
  {
    type: 'Практичні Заняття',
    title: 'Автоматична КП',
    list: [
      'Навчання з нуля — мінімум 20 занять',
      'Поновлення навичок водіння — необмежена кількість занять',
    ],
    details: [
      { icon: IconCar, text: 'Автоматична КП' },
      { icon: IconMoney, text: '650 грн за заняття' },
      { icon: IconTime, text: 'Тривалість — 2 години' },
    ],
  },
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
];

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" data-bg="white" className="w-full py-10 md:py-0 md:pb-20 md:pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle as="h2" className="md:text-center mb-4">Наші заняття</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="flex flex-col w-full bg-white rounded-2xl shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-red-100 transition p-5 md:p-10 border-2 border-[#fb2c36]"
            >
              <div className="mb-3">
                <span className="inline-block bg-red-50 text-red-800 text-[16px] md:text-md font-semibold px-3 py-3 rounded mt-5">
                  {course.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-2">{course.title}</h3>
              <ul className="mb-8 text-gray-700 text-base text-[18px] space-y-1">
                {course.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center mb-8 gap-2">
                {course.details.map((detail, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <span className="mb-1" aria-hidden="true">{detail.icon}</span>
                    <span className="text-[16px] text-gray-600 text-center">{detail.text}</span>
                  </div>
                ))}
              </div>
              <button
                className="w-full block bg-red-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition"
                tabIndex={0}
                aria-label="Переглянути Розклад"
              >
                Переглянути Розклад
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection; 