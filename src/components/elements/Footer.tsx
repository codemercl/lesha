'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CallbackPopup from '../CallbackPopup';
import { useCallbackPopup } from '@/hooks/useCallbackPopup';

const navLinks = [
  { label: 'Про нас', href: 'about', ariaLabel: 'Перейти до секції Про нас' },
  { label: 'Автомобілі', href: 'cars', ariaLabel: 'Перейти до секції Автомобілі' },
  { label: 'Інструктори', href: 'instructors', ariaLabel: 'Перейти до секції Інструктори' },
  { label: 'Відгуки', href: 'testimonials', ariaLabel: 'Перейти до секції Відгуки' },
  { label: 'Контакти', href: 'contacts', ariaLabel: 'Перейти до секції Контакти' },
] as const;

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', ariaLabel: 'Перейти до нашого Instagram' },
  { label: 'Facebook', href: 'https://facebook.com', ariaLabel: 'Перейти до нашого Facebook' },
  { label: 'Telegram', href: 'https://telegram.org', ariaLabel: 'Перейти до нашого Telegram' },
] as const;

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer: React.FC = () => {
  const { isCallbackPopupOpen, openCallbackPopup, closeCallbackPopup } = useCallbackPopup();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const handleNavKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <>
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-20 relative overflow-hidden" aria-label="Site footer">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <Link 
              href="/" 
              aria-label="Перейти на головну сторінку" 
              tabIndex={0} 
              className="inline-block mb-6 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            >
              <Image 
                src="/logo/logo-white.png" 
                alt="Logo" 
                width={180} 
                height={56} 
                className="h-16 w-auto mx-auto lg:mx-0"
              />
            </Link>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
              Професійна автошкола з досвідченими інструкторами та сучасними автомобілями. 
              Ми допоможемо вам отримати права швидко та якісно.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  tabIndex={0}
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-110"
                >
                  <span className="sr-only">{link.label}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {link.label === 'Instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    )}
                    {link.label === 'Facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    )}
                    {link.label === 'Telegram' && (
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Навігація */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-white font-bold text-xl mb-6 font-inter">Навігація</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={`#${link.href}`}
                      aria-label={link.ariaLabel}
                      tabIndex={0}
                      className="text-gray-300 hover:text-white hover:bg-red-500/20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 font-inter text-base inline-block"
                      onClick={e => handleNavClick(e, link.href)}
                      onKeyDown={e => handleNavKeyDown(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Контактна інформація */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-white font-bold text-xl mb-6 font-inter">Контакти</h3>
            <div className="space-y-5">
              <div className="flex items-start justify-center lg:justify-start space-x-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-base font-inter leading-relaxed">
                    вул. Прикладна, 123<br />
                    м. Київ, 01001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a 
                  href="tel:+380992011683" 
                  className="text-gray-300 hover:text-white hover:bg-red-500/20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 font-inter text-base"
                  aria-label="Зателефонувати нам"
                >
                  +38 (099) 201-16-83
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a 
                  href="mailto:info@formula-vodinnya.com" 
                  className="text-gray-300 hover:text-white hover:bg-red-500/20 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 font-inter text-base"
                  aria-label="Написати нам email"
                >
                  info@formula-vodinnya.com
                </a>
              </div>
            </div>
          </div>

          {/* Робочі години */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-white font-bold text-xl mb-6 font-inter">Робочі години</h3>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-base font-inter">Пн-Пт:</span>
                  <span className="text-white text-base font-semibold font-inter">8:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-base font-inter">Субота:</span>
                  <span className="text-white text-base font-semibold font-inter">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-base font-inter">Неділя:</span>
                  <span className="text-white text-base font-semibold font-inter">10:00 - 16:00</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-inter">Зараз працюємо</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижня частина футера */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-base font-inter mb-2">
                © {new Date().getFullYear()} Автошкола &quot;Формула водіння&quot;. Всі права захищені.
              </p>
              <p className="text-gray-500 text-sm font-inter">
                Ліцензія на освітню діяльність №123456
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={openCallbackPopup}
                className="bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer transform hover:scale-105"
                tabIndex={0}
                aria-label="Зв'язатися з нами"
              >
                Зв&apos;язатися з нами
              </button>
              <button 
                onClick={openCallbackPopup}
                className="bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer transform hover:scale-105"
                tabIndex={0}
                aria-label="Замовити дзвінок"
              >
                Замовити дзвінок
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Callback Popup */}
    <CallbackPopup isOpen={isCallbackPopupOpen} onClose={closeCallbackPopup} />
  </>
  );
};

export default Footer;
