'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Про нас', href: 'about', ariaLabel: 'Перейти до секції Про нас' },
  { label: 'Автомобілі', href: 'cars', ariaLabel: 'Перейти до секції Автомобілі' },
  { label: 'Інструктори', href: 'instructors', ariaLabel: 'Перейти до секції Інструктори' },
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
    <footer className="bg-[#252020] text-white py-16" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              aria-label="Перейти на головну сторінку" 
              tabIndex={0} 
              className="inline-block mb-1 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            >
              <Image 
                src="/logo/logo-white.png" 
                alt="Logo" 
                width={150} 
                height={48} 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Професійна автошкола з досвідченими інструкторами та сучасними автомобілями. 
              Ми допоможемо вам отримати права швидко та якісно.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  tabIndex={0}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded p-1"
                >
                  <span className="sr-only">{link.label}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {link.label === 'Instagram' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.897 3.708 13.746 3.708 12.449s.49-2.448 1.42-3.321c.873-.807 2.024-1.297 3.321-1.297s2.448.49 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.242c-.873.807-2.024 1.297-3.321 1.297zm7.598-8.094c-.315 0-.595-.118-.807-.315-.212-.196-.315-.476-.315-.791 0-.315.103-.595.315-.807.212-.212.492-.315.807-.315.315 0 .595.103.807.315.212.212.315.492.315.807 0 .315-.103.595-.315.791-.212.197-.492.315-.807.315zm-3.598 2.555c-1.297 0-2.345 1.048-2.345 2.345s1.048 2.345 2.345 2.345 2.345-1.048 2.345-2.345-1.048-2.345-2.345-2.345z"/>
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
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4 font-inter">Навігація</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={`#${link.href}`}
                      aria-label={link.ariaLabel}
                      tabIndex={0}
                      className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded font-inter"
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
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4 font-inter">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm font-inter">
                    вул. Прикладна, 123<br />
                    м. Київ, 01001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+380671234567" 
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded font-inter text-sm"
                  aria-label="Зателефонувати нам"
                >
                  +38 (067) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:info@autoschool.com" 
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded font-inter text-sm"
                  aria-label="Написати нам email"
                >
                  info@autoschool.com
                </a>
              </div>
            </div>
          </div>

          {/* Робочі години */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4 font-inter">Робочі години</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm font-inter">Пн-Пт:</span>
                <span className="text-white text-sm font-inter">8:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm font-inter">Сб:</span>
                <span className="text-white text-sm font-inter">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm font-inter">Нд:</span>
                <span className="text-white text-sm font-inter">10:00 - 16:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижня частина футера */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-inter mb-4 md:mb-0">
            © {new Date().getFullYear()} Автошкола. Всі права захищені.
          </p>
          <div className="flex space-x-6">
            <button 
              onClick={() => alert('Політика конфіденційності буде доступна незабаром')}
              className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              tabIndex={0}
              aria-label="Політика конфіденційності"
            >
              Політика конфіденційності
            </button>
            <button 
              onClick={() => alert('Умови використання будуть доступні незабаром')}
              className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              tabIndex={0}
              aria-label="Умови використання"
            >
              Умови використання
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
