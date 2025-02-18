import React, { useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import { ReactComponent as WaysToGetCashSVG } from "../../assets/ways_to_get_cash.svg";
import ATMIcon from "../../assets/via_ATM.svg";
import CashInOffice from "../../assets/cash_in_office.svg";
import CourierDelivery from "../../assets/courier_delivery.svg";
import OnCheck from "../../assets/on_check.svg";
import Vector from "../../assets/vector_button.svg";
import PaymentSection from "./PaymentSection";
import { Link } from "react-scroll";

// Стили для переключения вкладок с помощью styled-components
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  border-bottom: 2px solid #ddd;
`;

const Tab = styled.button`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  border: none;
  background: none;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => (props.active ? "#0033a0" : "#888")};
  cursor: pointer;
  position: relative;

  &:hover {
    color: #0055d4;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 6px 0;
  }
`;

const ActiveTabIndicator = styled.div`
  position: absolute;
  bottom: -3px;
  left: ${(props) => (props.activeTab === "buy" ? "0%" : "50%")};
  width: 50%;
  height: 3px;
  background: #0033a0;
  transition: left 0.3s ease;
`;

const FeaturesContainer = styled(Box)`
  position: relative;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Поднимаем содержимое вверх */
  padding: 20px 0;
  padding-top: 4rem;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: ${(props) => props.containerHeight};
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const FeatureIcon = styled.div`
  width: 64px; /* Установите размер для иконки */
  height: 64px;
  margin-bottom: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const FeatureCard = ({ icon, title, description, id_name, onClick }) => {
  return (
    <Box
      onClick={() => onClick(id_name)}
      sx={{
        width: "100%", // Почти вся ширина экрана
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        margin: "0 auto",
        cursor: "pointer",
        position: "relative", // Для абсолютного позиционирования стрелки
        display: "flex",
        flexDirection: "row", // Размещаем текст и иконку в ряд
        alignItems: "flex-start", // Выравниваем по верхней границе
        justifyContent: "space-between",
        transition: "transform 0.2s",
        minHeight: "140px", // Минимальная ширина карточки
        mb: 3, // Отступ между карточками
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      {/* Левая часть: Заголовок + описание */}
      <Box sx={{ flex: 1, textAlign: "left" }}>
        {/* Заголовок карточки */}
        <Typography
          variant="h6"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#000",
            lineHeight: "18px",
          }}
        >
          {Array.isArray(title)
            ? title.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : title}
        </Typography>

        {/* Описание карточки */}
        <Typography
          variant="body2"
          sx={{
            mt: 1,
            fontSize: "14px",
            fontWeight: 300,
            color: "#555",
            lineHeight: "17px",
          }}
        >
          {Array.isArray(description)
            ? description.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : description}
        </Typography>
      </Box>

      {/* Правая часть: Иконка */}
      <Box
        sx={{
          transform: "translateX(-50px)", // сдвиг влево, настраивайте по необходимости
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90px",
          height: "90px",
        }}
      >
        {React.cloneElement(icon, { style: { width: "100%", height: "100%" } })}
      </Box>

      {/* Кнопка-стрелка в правом нижнем углу карточки */}
      <IconButton
        sx={{
          backgroundColor: "#0055D4",
          color: "#fff",
          width: "20px",
          height: "20px",
          marginTop: 5,
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#0033A0",
          },
          position: "absolute", // Абсолютное позиционирование
          right: "16px",
          bottom: "16px",
        }}
      >
        <img
          src={Vector}
          alt="Стрелка"
          style={{ width: "14px", height: "14px" }}
        />
      </IconButton>
    </Box>
  );
};

const FeaturesSection = ({ openModal, closeModal }) => {
  const [containerHeight, setContainerHeight] = useState("auto");

  const features = [
    {
      icon: <img src={ATMIcon} alt="Через банкомат" style={{ width: "120px", height: "120px" }} />,
      title: ["Через", "банкомат"],
      description: ["Банковская карта", "не требуется"],
      id_name: "atm",
    },
    {
      icon: <img src={CashInOffice} alt="Наличные" style={{ width: "120px", height: "120px" }} />,
      title: ["Наличные", "в офисе"],
      description: ["Получите наличные", "у кассира"],
      id_name: "cash",
    },
    {
      icon: <img src={CourierDelivery} alt="Курьер" style={{ width: "120px", height: "120px" }} />,
      title: ["Курьерская", "доставка"],
      description: ["Курьер выдаст", "Вам наличные"],
      id_name: "courier",
    },
    {
      icon: <img src={OnCheck} alt="Счет" style={{ width: "120px", height: "120px" }} />,
      title: ["На тайский", "счет"],
      description: ["Получите перевод", "на Ваш счет"],
      id_name: "check",
    },
  ];

  const handleCardClick = (id_name) => {
    // Увеличиваем высоту контейнера на 20px при клике
    setContainerHeight("calc(100% + 20px)");
    openModal(id_name); // открытие модального окна
  };

  return (
    <FeaturesContainer>
      <Wrapper containerHeight={containerHeight}>
        <TitleContainer>
          <WaysToGetCashSVG />
        </TitleContainer>

        {/* Список карточек: одна колонка */}
        <Grid container spacing={2} sx={{ width: "100%", margin: 0 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                id_name={feature.id_name}
                onClick={handleCardClick}
              />
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h6"
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "31px",
            color: "#004DB4",
            textTransform: "uppercase",
            mt: "4rem",
          }}
        >
          принимаем оплату с любых российских банков
        </Typography>
        <PaymentSection />
      </Wrapper>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
