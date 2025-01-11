import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/main_logo.svg";

import Calculator from "../Calculator/Calculator";
import { Typography } from "@mui/material";
import ExchangeRates from "../ExchangeRates/ExchangeRates";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 1800px; /* Задаем минимальную высоту */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Поднимаем содержимое вверх */
  padding: 20px 0;

  @media(max-width: 900px) {
    max-height: 101vh;
  }
`;

const LogoContainer = styled.div`
  flex: 0 0 auto; /* Логотип занимает фиксированное пространство */
  display: flex;
  align-items: center;

  svg {
    width: 700px; /* Настройка размера логотипа */
    height: auto;
  }

  @media (max-width: 768px) {
    svg {
      width: 200px; /* Уменьшаем размер логотипа на мобильных устройствах */
    }
  }
`;
const TextContainer = styled.div`
  // flex: 1; /* Текст занимает оставшееся пространство */
  margin-left: 20px;
  text-align: left;
  align-self: right;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    margin: 0;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
    color: white;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: inline; /* Размещение элементов в колонках */
  gap: 50px; /* Расстояние между элементами */
  align-items: flex-start; /* Выравнивание по левому краю */
  justify-content: flex-start; /* Располагаем элементы сверху вниз */
  width: fit-content; /* Ширина зависит от содержимого */
  margin-top: -100px; /* Отступ сверху */

  @media (max-width: 768px) {
    gap: 10px; /* Уменьшаем расстояние для мобильных устройств */
    margin-left: 5%; /* Сохраняем отступ слева */
    align-items: center; /* Центрируем элементы на мобильных устройствах */
  }
`;

const Wrapper = styled.div`
  max-width: 1440px; 
  width: 100%; 
  height: 100%; 
  margin: 0 auto; 
  position: relative; 
  display: flex;
  flex-direction: column; 
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  width: 100%;
  max-width: 1440px; 
  margin: 0 auto; 
  padding: 0 20px; 

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
    margin-top: 40px;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Wrapper>
        {/* Header Content */}
        <HeaderContent>
          {/* Логотип */}
          <LogoContainer>
            <LogoSVG />
          </LogoContainer>

          {/* Текст рядом с логотипом */}
          <TextContainer>
            <Typography variant="h4" sx={{fontSize: "46px",  fontWeight: "900",}}>БЫСТРЫЙ И НАДЕЖНЫЙ</Typography>
            <Typography variant="h6" sx={{fontSize: "30px",  fontWeight: "600", lineHeight: "31px", }}>
              ОБМЕН ВАЛЮТЫ И КРИПТОВАЛЮТЫ<br/>НА БАТЫ ПО САМОМУ ВЫГОДНОМУ<br/> КУРСУ ПО ВСЕМУ ТАЙЛАНДУ
              </Typography>
          </TextContainer>
        </HeaderContent>

        {/* Контент: Калькулятор и Курс валют */}
        <Content>
          <Calculator />
          <ExchangeRates />
        </Content>
      </Wrapper>
    </HeroContainer>
  );
};

export default HeroSection;
