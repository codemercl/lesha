import React from 'react';

const submissionItems = [
  {
    text: 'Копія паспорту',
  },
  {
    text: 'Копія індивідуального податкового номеру',
  },
  {
    text: 'Оригінал та копія медичної довідки водія',
  },
  {
    text: 'Подати документа можна через Telegram',
  },
];

const DocumentSubmissionSection: React.FC = () => (
  <section className="w-full py-16 flex justify-center items-center bg-[#fb2c36] min-h-[500px]">
    <div className="max-w-7xl w-full mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
      {/* Контент */}
      <div className="bg-white rounded-2xl shadow-lg p-10 md:p-14 flex flex-col justify-center min-w-[400px] max-w-xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-[#191A15] mb-10 font-inter text-left">Подача документів</h2>
        <ul className="flex flex-col gap-7 mb-0 w-full" aria-label="Список необхідних документів для подачі">
          {submissionItems.map((item, idx) => (
            <li key={idx} className="flex items-center gap-5" tabIndex={0} aria-label={item.text}>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#54BD95]">
                <svg width="22" height="22" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 6.5L6.5 11L16 2" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-xl md:text-2xl font-medium text-[#191A15]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Блок расписания */}
      <div className="flex items-center h-full">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex items-center gap-4 min-w-[340px] max-w-full">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#54BD95]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="10" cy="10" r="10" fill="#2B9B5B" />
              <path d="M6 10.5L9 13.5L14 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-lg md:text-xl font-bold text-[#191A15]">З понеділка до суботи з 08:00 до 17:00</span>
        </div>
      </div>
    </div>
  </section>
);

export default DocumentSubmissionSection; 