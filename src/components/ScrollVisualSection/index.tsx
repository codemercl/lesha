'use client';

import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../elements/SectionTitle';

const features = [
  {
    title: 'Крок перший',
    description:
      'Вивчай Правила дорожнього руху та готуйся до іспиту.',
  },
  {
    title: 'Крок другий',
    description:
      'Складай теорію в ТСЦ МВС та отримуй допуск до практичних занять.',
  },
  {
    title: 'Крок третій',
    description:
      'Обери інструктора, тип КПП та навчайся в зручний час.',
  },
  {
    title: 'Крок четвертий',
    description:
      'Реєструйся в чергу МВС, щоб скласти іспити та отримати посвідчення водія.',
  },
];

const ScrollVisualSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = cardRefs.current.map(ref => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        return Math.abs(rect.top - window.innerHeight / 2);
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      setActiveIdx(minIdx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contacts" data-bg="light" className="w-full bg-white py-12 md:py-20">
      <div className="relative max-w-5xl mx-auto px-4 md:px-4 flex flex-col items-center">
        {/* Timeline + Steps + Cards */}
        <div className="relative w-full grid grid-cols-[32px_1fr] md:grid-cols-9 gap-8 gap-y-12">
          {/* Timeline vertical line */}
          <div
            ref={timelineRef}
            className="absolute left-3 top-0 w-2 bg-red-200 h-full z-0 rounded md:left-1/2 md:-translate-x-1/2 md:w-2 md:block"
            style={{ minHeight: '100%' }}
            aria-hidden="true"
          />
          {features.map((feature, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <>
                {/* Step Dot */}
                <div
                  key={`dot-${idx}`}
                  className="relative z-20 flex flex-col items-center col-start-1 col-end-2 md:col-start-5 md:col-end-6 mx-2 md:mx-0"
                  style={{ gridRow: idx + 1 }}
                  aria-hidden="true"
                >
                  <span
                    className={`w-12 h-12 flex items-center justify-center rounded-full border-4 text-xl font-bold transition-colors duration-300
                      ${activeIdx === idx ? 'bg-red-500 border-red-500 text-white shadow-lg' : 'bg-white border-red-300 text-red-500'}`}
                  >
                    {idx + 1}
                  </span>
                  {/* Линия между точками (на мобильных) */}
                  {idx < features.length - 1 && (
                    <span className="block md:hidden w-1 h-12 bg-red-200" />
                  )}
                </div>
                {/* Card */}
                <div
                  key={`card-${idx}`}
                  ref={el => { cardRefs.current[idx] = el; }}
                  className={`relative z-10 mb-0 md:mb-0 col-start-2 col-end-3 md:col-auto pl-0
                    ${isLeft
                      ? 'md:col-start-1 md:col-end-5 md:justify-self-end md:text-left pr-0 md:pr-8'
                      : 'md:col-start-6 md:col-end-10 md:justify-self-start md:text-left pl-0 md:pl-8'
                    }`}
                  style={{ gridRow: idx + 1 }}
                >
                  <div className="bg-white rounded-xl shadow-lg px-6 py-6 md:px-8 md:py-7 border-2 max-w-md w-full">
                    <SectionTitle as="h3" className="text-2xl text-black mb-2">{feature.title}</SectionTitle>
                    <p className="text-lg text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollVisualSection;
