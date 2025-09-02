'use client';

import React, { useState } from 'react';

interface CallbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackPopup: React.FC<CallbackPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Будь ласка, заповніть всі поля');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Будь ласка, дайте згоду на обробку персональних даних');
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsLoading(true);
    setShowError(false);

    try {
      const message = `🚗 Нова заявка з сайту автошколи!\n\n👤 Ім'я: ${formData.name}\n📞 Телефон: ${formData.phone}\n⏰ Час: ${new Date().toLocaleString('uk-UA')}`;
      
      const response = await fetch(`https://api.telegram.org/bot7760146350:AAHUN232KP5y9C57NUg9D96NXBmJha7GxxU/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '-1003067268789', // ID чата канала
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', phone: '', consent: true });
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Помилка відправки');
      }
    } catch {
      setErrorMessage('Помилка відправки. Спробуйте ще раз або зателефонуйте нам');
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Замовити дзвінок</h3>
              <p className="text-red-100">Ми зателефонуємо вам протягом 15 хвилин</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-200 transition-colors p-2"
              aria-label="Закрити"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Ваше ім&apos;я *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-black"
                placeholder="Введіть ваше ім'я"
                disabled={isLoading}
              />
            </div>

            {/* Phone field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Номер телефону *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-black"
                placeholder="+38 (067) 123-45-67"
                disabled={isLoading}
              />
            </div>

            {/* Consent checkbox */}
            <div className="flex items-start space-x-4">
              <div className="relative mt-1">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="sr-only"
                  disabled={isLoading}
                />
                <label 
                  htmlFor="consent" 
                  className={`flex items-center justify-center w-7 h-7 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    formData.consent 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-500 shadow-lg' 
                      : 'bg-white border-gray-300 hover:border-red-300'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {formData.consent && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </label>
              </div>
              <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                Я даю згоду на обробку моїх персональних даних відповідно до 
                <span className="text-red-500 font-semibold"> політики конфіденційності</span>
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Відправляємо...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Замовити дзвінок
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Success message */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Дякуємо!</h4>
              <p className="text-gray-600">Ваша заявка успішно відправлена. Ми зателефонуємо вам найближчим часом.</p>
            </div>
          </div>
        )}

        {/* Error message */}
        {showError && (
          <div className="absolute top-4 left-4 right-4 bg-red-50 border border-red-200 rounded-xl p-4 shadow-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallbackPopup;
