import React from 'react';
import Image from 'next/image';
import SectionTitle from '../elements/SectionTitle';

const SignupSection: React.FC = () => (
  <section data-bg="white" className="w-full py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Левая часть: фото */}
      <div className="relative flex justify-center md:justify-start w-full min-h-[340px] md:min-h-[420px]">
        <div className="relative w-[390px] h-[360px] md:w-[420px] md:h-[570px]">
          <Image
            src="/images/document.png"
            alt="Ученица за рулём"
            fill
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>
      {/* Правая часть: форма */}
      <div className="flex flex-col items-start w-full max-w-xl mx-auto md:mx-0">
        <span className="uppercase text-[#FFC727] font-bold text-sm mb-2 tracking-wider">Записатися на автокурси</span>
        <SectionTitle as="h2">
          Ми допомагаємо студентам скласти іспит і отримати посвідчення з першої спроби
        </SectionTitle>
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Твоє ім'я"
              className="flex-1 px-5 py-4 rounded-lg bg-[#F5F7FA] text-[#163651] text-base font-medium placeholder-[#AEB5BF] focus:outline-none"
              aria-label="Твоє ім'я"
            />
            <input
              type="text"
              placeholder="Яка категорія"
              className="flex-1 px-5 py-4 rounded-lg bg-[#F5F7FA] text-[#163651] text-base font-medium placeholder-[#AEB5BF] focus:outline-none"
              aria-label="Яка категорія"
            />
          </div>
          <input
            type="tel"
            placeholder="Твій номер телефону"
            className="px-5 py-4 rounded-lg bg-[#F5F7FA] text-[#163651] text-base font-medium placeholder-[#AEB5BF] focus:outline-none"
            aria-label="Твій номер телефону"
          />
          <button
            type="submit"
            className="w-full block bg-red-500 cursor-pointer text-white font-semibold px-6 py-5 rounded-md shadow hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition"
            aria-label="Записатися"
          >
            Записатися
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default SignupSection; 