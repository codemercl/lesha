'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../elements/SectionTitle';

const cars = [
  {
    src: '/images/auto1.jpg',
    model: 'Toyota Camry',
    transmission: 'АКПП',
  },
  {
    src: '/images/auto2.jpg',
    model: 'Honda Accord',
    transmission: 'АКПП',
  },
  {
    src: '/images/auto3.jpg',
    model: 'Volkswagen Polo',
    transmission: 'МКПП',
  },
  {
    src: '/images/auto1.jpg',
    model: 'Hyundai Solaris',
    transmission: 'АКПП',
  },
];

const CARD_WIDTH = 420; // px
const CARD_GAP = 32; // px

const TransmissionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 inline-block mr-2 align-middle"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

const ArrowButton = ({ direction, onClick, ariaLabel }: { direction: 'left' | 'right'; onClick: () => void; ariaLabel: string }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    tabIndex={0}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition hover:bg-red-700 mx-2"
  >
    {direction === 'left' ? (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.5 19l-7-7 7-7" /></svg>
    ) : (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.5 5l7 7-7 7" /></svg>
    )}
  </button>
);

const CarsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cars.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalCards]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  return (
    <section id="cars" data-bg="red" className="relative w-full py-16">
      {/* Фоновое изображение и overlay на всю ширину и высоту секции */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/background-cars.png"
          alt="background cars"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-red-600 opacity-60" />
      </div>
      {/* Контент секции */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Левая колонка: sticky текст + стрелки */}
        <div className="md:top-24 self-start z-10 flex flex-col items-start">
          <span className="inline-block bg-gray-100 text-gray-900 text-base font-semibold px-6 py-2 rounded-full mb-6">
            Наші автомобілі
          </span>
          <SectionTitle as="h2" className="mb-6 text-white">Автомобілі для навчання</SectionTitle>
          <p className="text-lg mb-8">
            Всі авто школи — сучасні, доглянуті та повністю підготовлені для комфортного навчання. Обирайте авто з АКПП чи МКПП — як вам зручно!
          </p>
          <div className="flex mt-2">
            <ArrowButton direction="left" onClick={handlePrev} ariaLabel="Попереднє авто" />
            <ArrowButton direction="right" onClick={handleNext} ariaLabel="Наступне авто" />
          </div>
        </div>
        {/* Правая колонка: горизонтальный слайдер с двумя полными и одной обрезанной карточкой */}
        <div
          className="relative overflow-hidden flex items-center"
          style={{
            width: '100%',
            maxWidth: `${CARD_WIDTH * 2.5 + CARD_GAP * 1.5}px`,
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px)`,
              gap: `${CARD_GAP}px`,
            }}
          >
            {cars.concat(cars.slice(0, 3)).map((car, idx) => (
              <div
                key={car.model + idx}
                className="bg-[#fb2c36] rounded-xl overflow-hidden flex flex-col"
                style={{ minWidth: `${CARD_WIDTH}px`, maxWidth: `${CARD_WIDTH}px` }}
              >
                <Image
                  src={car.src}
                  alt={car.model}
                  width={900}
                  height={500}
                  className="object-cover w-full h-[340px]"
                />
                <div className="flex flex-col py-4 px-6">
                  <div className="flex items-center mb-1">
                    <TransmissionIcon />
                    <span className="font-bold text-lg text-white">{car.transmission}</span>
                  </div>
                  <span className="text-base text-white">{car.model}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;