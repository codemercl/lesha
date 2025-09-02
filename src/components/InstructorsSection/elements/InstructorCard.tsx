import React from 'react';
import Image from 'next/image';
import { Instructor } from '../types';

const InstructorCard: React.FC<{ 
  instructor: Instructor;
  onSelectInstructor?: () => void;
}> = ({ instructor, onSelectInstructor }) => (
  <article
    className="group relative flex flex-col w-full bg-white rounded-3xl shadow-xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-red-100 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200"
    aria-label={`Карточка інструктора ${instructor.name}`}
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Фото */}
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
      <Image
        src={instructor.logoSrc}
        alt={`Фото інструктора ${instructor.name}`}
        width={400}
        height={256}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        style={{ objectPosition: '50% 10%' }}
        priority={false}
        draggable={false}
      />
      
      {/* Status badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {instructor.status}
        </div>
      </div>
      
      {/* Location badge */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-xl text-sm font-medium shadow-lg flex items-center">
          <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{instructor.location}</span>
        </div>
      </div>
    </div>
    
    {/* Контент */}
    <div className="relative p-6 flex flex-col items-center flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-red-600 transition-colors duration-300">
        {instructor.name}
      </h3>
      
      {/* Experience cards */}
      <div className="w-full space-y-3 mt-4">
        <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-2xl p-4 border border-red-100 group-hover:border-red-200 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium">Стаж водіння</div>
                <div className="text-lg text-gray-900 font-bold">{instructor.drivingExperience}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl p-4 border border-green-100 group-hover:border-green-200 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium">Навчає інших</div>
                <div className="text-lg text-gray-900 font-bold">{instructor.teachingExperience}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action button */}
      <button 
        onClick={onSelectInstructor}
        className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-700 cursor-pointer"
      >
        Обрати інструктора
      </button>
    </div>
  </article>
);

export default InstructorCard; 