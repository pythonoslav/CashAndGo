import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import LangSwitch from "./LangSwitch";
import telegramIcon from "../../assets/telegram-icon.svg";
import whatsappIcon from "../../assets/whatsapp-icon.svg";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 108%; /* Увеличиваем ширину на 20% */
  max-width: 1440px; /* Увеличиваем максимум */
  height: 67.2px; /* Увеличиваем на 20% от 56px */
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin-top: 60px; /* Увеличено на 20% */

  @media (max-width: 1440px) {
    height: 60px; /* Увеличено на 20% от 50px */
    margin-top: 60px; /* Увеличено на 20% */
  }

  @media (max-width: 1024px) {
    height: 54px; /* Увеличено на 20% от 45px */
    margin-top: 60px; /* Увеличено на 20% */
  }

  @media (max-width: 768px) {
    height: 48px; /* Увеличено на 20% от 40px */
  }

  @media (max-width: 480px) {
    height: 42px; /* Увеличено на 20% от 35px */
  }
`;

// Верхний левый фон
const OverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 68%; /* Увеличено на 20% */
  height: 100%;
  background-color: #ffffff;
  z-index: 1;
  border-radius: 36px; /* Увеличено на 20% */
`;

// Нижний правый фон
const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%; /* Увеличено на 20% */
  height: 100%;
  background-color: #f87000;
  z-index: 0;
  border-radius: 36px; /* Увеличено на 20% */
`;

// Контент
const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px; /* Увеличено на 20% */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px 0; /* Увеличено на 20% */
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;


// Навигация
const Nav = styled.nav`
  display: flex;
  gap: 3.6vw; /* Увеличено на 20% */
  flex-grow: 1;
  justify-content: center;

  a {
    text-decoration: none;
    color: #0033a0;
    font-weight: 700;
    font-size: 1.2rem; /* Увеличено на 20% */

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px; /* Увеличено на 20% */
  }
`;


const ExchangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Переносим содержимое влево */
  background-color: #f87000;
  padding: 10px 20px;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Кнопка и иконки

const ActionSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 12px; /* Увеличено на 20% */
    flex-direction: column;
  }
`;

const ExchangeText = styled.div`
  color: #f9f9e5;
  font-weight: bold;
  font-size: 1.2rem; /* Увеличено на 20% */
  margin-right: 24px; /* Увеличено на 20% */

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 12px; /* Увеличено на 20% */
  }
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px; /* Увеличено на 20% */
  height: 42px; /* Увеличено на 20% */
  border-radius: 50%;
  border: none;
  background-color: #f87000;
  cursor: pointer;
  padding: 0;

  img {
    width: 36px; /* Увеличено на 20% */
    height: 36px; /* Увеличено на 20% */
  }

  img:hover {
    width: 42px; /* Увеличено на 20% */
    height: 42px; /* Увеличено на 20% */
  }

  @media (max-width: 768px) {
    width: 30px; /* Увеличено на 20% */
    height: 30px; /* Увеличено на 20% */

    img {
      width: 18px; /* Увеличено на 20% */
      height: 18px; /* Увеличено на 20% */
    }
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <OverlayTop />
      <OverlayBottom />
      <Content>
        <LogoSection>
          <HeaderLogo />
          <LangSwitch />
        </LogoSection>
        <Nav>
          <a href="#cash">НАЛИЧНЫЕ</a>
          <a href="#about">О НАС</a>
          <a href="#faq">FAQ</a>
        </Nav>
        <ActionSection>
          <ExchangeContainer>
          <ExchangeText>ОБМЕНЯТЬ ВАЛЮТУ</ExchangeText>
          <span>=====</span>
          </ExchangeContainer>
          <Icons>
          <IconButton>
              <img src={telegramIcon} alt="T" />
            </IconButton>
            <IconButton>
              <img src={whatsappIcon} alt="W" />
            </IconButton>
          </Icons>
        </ActionSection>
      </Content>
    </HeaderContainer>
  );
};

export default Header;
