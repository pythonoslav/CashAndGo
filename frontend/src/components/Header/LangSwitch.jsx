import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../../helpers/LanguageContext";

const LangSwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
  color: #0033a0;
  padding-left: 10px;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 2000;
  overflow: hidden;
  min-width: 75px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 10px 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;

      &:hover {
        background-color: #f0f0f0;
      }

      &.active {
        font-weight: bold;
        color: #0033a0;
      }
    }
  }
`;

const ArrowIcon = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-right: 2px solid #0033a0;
  border-bottom: 2px solid #0033a0;
  transform: rotate(45deg);
  transition: transform 0.2s ease;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(-135deg);
  `}
`;

const LangSwitch = () => {
  // Используем значение языка из контекста
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (lang) => {
    setIsOpen(false);
    changeLanguage(lang.toLowerCase());
  };

  return (
    <LangSwitchContainer onClick={toggleDropdown}>
      <span>
        {language.toUpperCase()} <ArrowIcon isOpen={isOpen} />
      </span>
      {isOpen && (
        <Dropdown>
          <ul>
            <li
              className={language === "ru" ? "active" : ""}
              onClick={() => handleChangeLanguage("ru")}
            >
              RU {language === "ru" && "✔"}
            </li>
            <li
              className={language === "en" ? "active" : ""}
              onClick={() => handleChangeLanguage("en")}
            >
              EN {language === "en" && "✔"}
            </li>
          </ul>
        </Dropdown>
      )}
    </LangSwitchContainer>
  );
};

export default LangSwitch;
