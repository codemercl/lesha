'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Про нас', href: 'about', ariaLabel: 'Перейти до секції Про нас' },
  { label: 'Автомобілі', href: 'cars', ariaLabel: 'Перейти до секції Автомобілі' },
  { label: 'Інструктори', href: 'instructors', ariaLabel: 'Перейти до секції Інструктори' },
  { label: 'Контакти', href: 'contacts', ariaLabel: 'Перейти до секції Контакти' },
] as const;

type NavLink = typeof navLinks[number];

type BgType = 'red' | 'light' | 'white';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].href);
  const [currentBg, setCurrentBg] = useState<BgType>('red');

  useEffect(() => {
    const handleScroll = () => {
      // Определяем, над какой секцией находится хедер
      const headerHeight = 64; // min-h-16 = 4rem = 64px
      const sections = Array.from(document.querySelectorAll('section[data-bg]')) as HTMLElement[];
      const scrollY = window.scrollY;
      const found = sections.find(section => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;
        return scrollY + headerHeight >= top && scrollY + headerHeight < bottom;
      });
      setCurrentBg((found?.dataset.bg as BgType) || 'red');
      // Обновляем активную секцию
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.href);
        if (!el) return { href: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: Math.abs(rect.top) };
      });
      const min = offsets.reduce((prev, curr) => (curr.top < prev.top ? curr : prev), offsets[0]);
      setActiveSection(min.href);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBurgerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setMenuOpen(true);
    }
  };

  const handleCloseMenu = () => setMenuOpen(false);
  const handleCloseKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setActiveSection(href);
    setMenuOpen(false);
  };

  const handleNavKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(href);
      setActiveSection(href);
      setMenuOpen(false);
    }
  };

  const isRed = currentBg === 'red';

  return (
    <nav className="fixed top-0 left-0 w-full z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-16">
        {/* Лого */}
        <Link href="/" aria-label="Go to main page" tabIndex={0} className="flex items-center focus:outline-none">
          <Image src={isRed ? "/logo/logo-white.png" : "/logo/logo-red.png"} alt="Logo" width={150} height={48} />
        </Link>
        {/* Десктоп-меню */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              aria-label={link.ariaLabel}
              tabIndex={0}
              className={isRed
                ? activeSection === link.href
                  ? 'text-white font-bold text-[18px] font-inter underline decoration-2 focus:underline focus:outline-none transition-colors duration-150'
                  : 'text-white font-bold text-[18px] font-inter focus:underline focus:outline-none transition-colors duration-150'
                : activeSection === link.href
                  ? 'text-red-500 font-bold text-[18px] font-inter underline decoration-2 focus:underline focus:outline-none transition-colors duration-150'
                  : 'text-red-400 font-bold text-[18px] font-inter focus:underline focus:outline-none transition-colors duration-150'
              }
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={e => handleNavClick(e, link.href)}
              onKeyDown={e => handleNavKeyDown(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Бургер-меню для мобильных */}
        <button
          className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
          aria-label="Відкрити меню"
          tabIndex={0}
          onClick={() => setMenuOpen(true)}
          onKeyDown={handleBurgerKeyDown}
          type="button"
        >
          <span className="sr-only">Відкрити меню</span>
          <svg className={`w-8 h-8 ${isRed ? 'text-white' : 'text-red-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Мобильное меню (overlay) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="flex justify-end p-4">
            <button
              className="text-[#54BD95] text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
              aria-label="Закрити меню"
              tabIndex={0}
              onClick={handleCloseMenu}
              onKeyDown={handleCloseKeyDown}
              type="button"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                aria-label={link.ariaLabel}
                tabIndex={0}
                className={
                  activeSection === link.href
                    ? 'text-white font-bold text-2xl font-inter underline underline-offset-8 decoration-2 bg-white/10 px-6 py-2 rounded focus:underline focus:outline-none transition-colors duration-150'
                    : 'text-white/60 font-bold text-2xl font-inter bg-white/10 px-6 py-2 rounded focus:underline focus:outline-none transition-colors duration-150'
                }
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={e => handleNavClick(e, link.href)}
                onKeyDown={e => handleNavKeyDown(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header; 