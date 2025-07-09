import { useState, useEffect } from 'react';

const DEFAULT_LANGUAGE = 'ru';
const STORAGE_KEY = 'cashAndGoLanguage';

export const useLanguage = () => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    // Проверяем наличие localStorage и получаем сохранённый язык, если он есть
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem(STORAGE_KEY);
      if (storedLanguage) {
        setLanguage(storedLanguage);
      } else {
        // Если языка нет, определяем системный язык
        const systemLanguage = navigator.language || navigator.userLanguage;
        const newLanguage = systemLanguage ? systemLanguage.split('-')[0] : DEFAULT_LANGUAGE;
        setLanguage(newLanguage);
        localStorage.setItem(STORAGE_KEY, newLanguage);
      }
    }
  }, []);

  // Функция для смены языка пользователем
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLanguage);
    }
  };

  return [ language, changeLanguage ];
};
