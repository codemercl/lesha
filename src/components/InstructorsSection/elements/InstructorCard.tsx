import React from 'react';
import Image from 'next/image';
import { Instructor } from '../types';

const InstructorCard: React.FC<{ instructor: Instructor }> = ({ instructor }) => (
  <article
    className="flex flex-col w-full md:max-w-sm bg-white rounded-2xl shadow-lg focus-within:ring-2 focus-within:ring-red-100 transition overflow-hidden"
    aria-label={`Карточка інструктора ${instructor.name}`}
  >
    {/* Фото */}
    <div className="w-full h-48 md:h-75 rounded-t-2xl overflow-hidden">
      <Image
        src={instructor.logoSrc}
        alt={`Фото інструктора ${instructor.name}`}
        width={400}
        height={224}
        className="w-full h-full object-cover"
        priority={false}
        draggable={false}
      />
    </div>
    {/* Контент */}
    <div className="p-4 flex flex-col items-center">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 text-center">{instructor.name}</h3>
      <span className="text-sm md:text-base text-gray-500 mb-4 text-center">{instructor.status}</span>
      <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-2 gap-2 w-full mt-2 text-center">
        <div className="text-gray-500 font-medium">Стаж водіння</div>
        <div className="text-gray-900 font-semibold">{instructor.drivingExperience} </div>
        <div className="text-gray-500 font-medium">Навчає інших</div>
        <div className="text-gray-900 font-semibold">{instructor.teachingExperience} </div>
      </div>
    </div>
  </article>
);

export default InstructorCard; 