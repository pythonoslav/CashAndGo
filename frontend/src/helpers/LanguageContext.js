import React, { createContext, useState, useContext, useEffect } from "react";

// Создаём сам контекст
const LanguageContext = createContext();

// Провайдер, который будет оборачивать наше приложение
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");

  // Пример чтения языка из localStorage при монтировании
  useEffect(() => {
    const storedLang = localStorage.getItem("cashAndGoAppLanguage");
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  // Функция для изменения языка
  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("cashAndGoAppLanguage", newLang);
  };

  // Передаём в контекст объект со значением языка и функцией смены
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для удобного доступа к контексту
export const useLanguage = () => useContext(LanguageContext);
