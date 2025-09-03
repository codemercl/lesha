'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../elements/SectionTitle';
import { useCallbackPopup } from '../../hooks/useCallbackPopup';
import CallbackPopup from '../CallbackPopup';

// Расширенные данные об автомобилях с привязкой к инструкторам
const cars = [
  {
    id: '1',
    src: '/images/auto01.JPG',
    model: 'Toyota Camry',
    transmission: 'АКПП',
    year: '2020',
    fuelType: 'Бензин',
    engine: '2.5L',
    instructor: {
      id: '1',
      name: 'Ігор',
      photo: '/images/instructor01.jpg',
      experience: 'з 1989 року'
    },
    features: ['Кондиціонер', 'Підігрів сидінь', 'Камера заднього виду']
  },
  {
    id: '2',
    src: '/images/auto02.jpg',
    model: 'Honda Accord',
    transmission: 'АКПП',
    year: '2019',
    fuelType: 'Бензин',
    engine: '2.0L',
    instructor: {
      id: '2',
      name: 'Євген',
      photo: '/images/instructor02.jpg',
      experience: 'з 1995 року'
    },
    features: ['Круїз-контроль', 'Bluetooth', 'Електросклопідйомники']
  },
  {
    id: '3',
    src: '/images/auto03.jpg',
    model: 'Volkswagen Polo',
    transmission: 'МКПП',
    year: '2021',
    fuelType: 'Бензин',
    engine: '1.6L',
    instructor: {
      id: '3',
      name: 'Олексій',
      photo: '/images/instructor03.jpg',
      experience: 'з 2014 року'
    },
    features: ['ABS', 'ESP', 'Підушки безпеки']
  },
  {
    id: '4',
    src: '/images/auto04.JPG',
    model: 'Hyundai Solaris',
    transmission: 'АКПП',
    year: '2022',
    fuelType: 'Бензин',
    engine: '1.6L',
    instructor: {
      id: '4',
      name: 'Олександр',
      photo: '/images/instructor04.jpg',
      experience: 'з 2005 року'
    },
    features: ['Мультимедіа система', 'Парктроніки', 'Денні ходові вогні']
  },
  {
    id: '5',
    src: '/images/auto05.jpg',
    model: 'Hyundai Solaris',
    transmission: 'АКПП',
    year: '2021',
    fuelType: 'Бензин',
    engine: '1.6L',
    instructor: {
      id: '5',
      name: 'Миколай',
      photo: '/images/instructor05.jpg',
      experience: 'з 2010 року'
    },
    features: ['Кондиціонер', 'ABS', 'Підушки безпеки']
  },
];

const CarsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isCallbackPopupOpen, openCallbackPopup, closeCallbackPopup } = useCallbackPopup();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cars.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const currentCar = cars[currentIndex];

  return (
    <>
      <section id="cars" className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-red-900 to-black overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>

        {/* Фоновое изображение */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/background-cars.png"
            alt="Фон автомобілів"
            fill
            className="object-cover opacity-5"
            priority
          />
        </div>

        {/* Контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-500/20 text-red-300 text-sm font-semibold px-6 py-3 rounded-full mb-6 border border-red-500/30">
              🚗 Наші автомобілі
            </span>
            <SectionTitle as="h2" className="mb-6 text-white">
              Автомобілі для навчання
            </SectionTitle>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Всі авто школи — сучасні, доглянуті та повністю підготовлені для комфортного навчання. 
              Обирайте авто з АКПП чи МКПП — як вам зручно!
            </p>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Левая колонка - Информация об автомобиле */}
            <div className="space-y-8">
              {/* Карточка автомобиля */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-white">{currentCar.model}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      currentCar.transmission === 'АКПП' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {currentCar.transmission}
                    </span>
                  </div>
                </div>

                {/* Характеристики */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Рік: {currentCar.year}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Двигун: {currentCar.engine}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Паливо: {currentCar.fuelType}</span>
                  </div>
                </div>

                {/* Особенности */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Особливості:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCar.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Инструктор */}
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-4 border border-red-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Ваш інструктор:</h4>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={currentCar.instructor.photo}
                        alt={currentCar.instructor.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover h-20 w-20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{currentCar.instructor.name}</h5>
                      <p className="text-sm text-gray-300">Досвід водіння: {currentCar.instructor.experience}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопка записи */}
              <button
                onClick={openCallbackPopup}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Записатися на навчання
              </button>
            </div>

            {/* Правая колонка - Слайдер изображений */}
            <div className="relative">
              {/* Основное изображение */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={currentCar.src}
                  alt={currentCar.model}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Номер автомобиля */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  {currentIndex + 1}/{cars.length}
                </div>
              </div>

              {/* Навигация */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Попереднє авто"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Точки навигации */}
                <div className="flex space-x-2">
                  {cars.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'bg-red-500 w-8' : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                      aria-label={`Перейти до авто ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Наступне авто"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Миниатюры всех автомобилей */}
              <div className="flex space-x-3 mt-6 justify-center">
                {cars.map((car, idx) => (
                  <button
                    key={car.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'ring-2 ring-red-500 scale-110' 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={car.src}
                      alt={car.model}
                      width={80}
                      height={60}
                      className="w-20 h-15 object-cover"
                    />
                    {idx === currentIndex && (
                      <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callback Popup */}
      <CallbackPopup isOpen={isCallbackPopupOpen} onClose={closeCallbackPopup} />
    </>
  );
};

export default CarsSection;