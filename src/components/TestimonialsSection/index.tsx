'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '../elements/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Олена Петренко',
    age: 24,
    course: 'Механічна КПП',
    rating: 5,
    text: 'Дуже задоволена навчанням! Інструктор Ігор терпляво пояснював всі нюанси. Склала іспит з першого разу завдяки якісній підготовці.',
    image: '/images/alex.jpg',
    date: '2 місяці тому'
  },
  {
    id: 2,
    name: 'Максим Коваленко',
    age: 19,
    course: 'Автоматична КПП',
    rating: 5,
    text: 'Автошкола "Формула водіння" - найкращий вибір! Сучасні автомобілі, професійні інструктори. Рекомендую всім!',
    image: '/images/artem.jpg',
    date: '1 місяць тому'
  },
  {
    id: 3,
    name: 'Анна Мельник',
    age: 28,
    course: 'Відновлення навичок',
    rating: 5,
    text: 'Після 5 років перерви боялась сідати за кермо. Інструктори допомогли відновити впевненість. Дякую за терпіння!',
    image: '/images/instructor01.jpg',
    date: '3 тижні тому'
  },
  {
    id: 4,
    name: 'Дмитро Шевченко',
    age: 22,
    course: 'Механічна КПП',
    rating: 4,
    text: 'Гарна автошкола з досвідченими інструкторами. Єдине - хотілося б більше практичних годин у вартості курсу.',
    image: '/images/instructor02.jpg',
    date: '2 тижні тому'
  },
  {
    id: 5,
    name: 'Марія Іваненко',
    age: 31,
    course: 'Автоматична КПП',
    rating: 5,
    text: 'Швидко та якісно! Онлайн-теорія дуже зручна, а практика на новеньких автомобілях - просто супер. Рекомендую!',
    image: '/images/instructor03.jpg',
    date: '1 тиждень тому'
  },
  {
    id: 6,
    name: 'Віктор Бондаренко',
    age: 35,
    course: 'Персональні заняття',
    rating: 5,
    text: 'Індивідуальний підхід - це те, що мені було потрібно. Гнучкий графік, уважний інструктор. Дуже задоволений!',
    image: '/images/instructor04.jpg',
    date: '4 дні тому'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Определяем количество карточек на экране
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // desktop
      if (window.innerWidth >= 640) return 2; // tablet
      return 1; // mobile
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(3);
  const maxSlides = Math.max(0, testimonials.length - cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" data-bg="white" className="py-16 md:py-24 px-4 bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Що кажуть наші учні
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Відгуки наших
            <span className="block bg-gradient-to-r from-red-200 to-white bg-clip-text text-transparent">
              випускників
            </span>
          </h2>
          
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Реальні історії успіху людей, які довірили нам своє навчання водінню
          </p>
        </div>

        {/* Beautiful Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9</div>
            <div className="flex justify-center mb-2">{renderStars(5)}</div>
            <div className="text-red-200 text-sm">Середній рейтинг</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-red-200 text-sm">Задоволених клієнтів</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-red-200 text-sm">Склали з 1-го разу</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-white mb-2">15</div>
            <div className="text-red-200 text-sm">Років досвіду</div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-gray-600 hover:text-red-500 hover:border-red-200 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-gray-600 hover:text-red-500 hover:border-red-200 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-red-200 transform hover:scale-105 h-full">
                    {/* Quote icon */}
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168s.223-.458.394-.928c.09-.33.16-.656.222-.953.069-.298.115-.579.115-.579.414-.96.97-1.708 1.606-2.188.635-.479 1.35-.718 2.064-.718 1.382 0 2.5 1.118 2.5 2.5s-1.118 2.5-2.5 2.5z" />
                        <path d="M13 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168s.223-.458.394-.928c.09-.33.16-.656.222-.953.069-.298.115-.579.115-.579.414-.96.97-1.708 1.606-2.188.635-.479 1.35-.718 2.064-.718 1.382 0 2.5 1.118 2.5 2.5s-1.118 2.5-2.5 2.5z" />
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-gray-600 text-sm">({testimonial.rating}/5)</span>
                    </div>

                    {/* Review text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* User info */}
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.age} років • {testimonial.course}</p>
                        <p className="text-xs text-gray-500">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-300 hover:bg-red-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play control */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
                  </svg>
                  <span>Пауза</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Автопрокрутка</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Готові приєднатися до наших
                <span className="block text-red-200">випускників?</span>
              </h3>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Запишіться на курси та станьте впевненим водієм разом з нами. 
                Приєднуйтесь до сотень задоволених клієнтів!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-white to-gray-100 text-red-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                  Записатися на курси
                </button>
                <button className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-400/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-red-500/30 transition-all duration-300">
                  Безкоштовна консультація
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
