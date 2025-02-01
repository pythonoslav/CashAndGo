import React from "react";
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
  height: 100%; 
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


const FeatureCard = ({ icon, title, description, id_name }) => {
  return (
    <Box
      sx={{
        width: "330px", // Фиксированная ширина
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "left", // Выравнивание текста по левому краю
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Выровнять содержимое по левому краю
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Заголовок */}
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          fontSize: "30px",
          fontWeight: "600",
          color: "#000",
          textAlign: "left",
          width: "75%",
          lineHeight: 1.2,
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

      {/* Описание */}
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          fontSize: "22px",
          fontWeight: "300",
          color: "#555",
          marginBottom: "20px",
          textAlign: "left",
          width: "75%",

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

      {/* Иконка */}
      {icon}

      {/* Кнопка стрелки */}
      <Box sx={{ position: "relative", width: "100%", mt: 7, mb: -2 }}>
        <IconButton
           component={Link}
           to={id_name} // Должно совпадать с name="features"
           smooth={true}
           duration={500}
           offset={-90} // Если есть фиксированный header
           spy={true} // Следит за активной секцией (необязательно)
          sx={{

            backgroundColor: "#0055D4",
            color: "#fff",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            paddingTop: "5px",
            "&:hover": {
              backgroundColor: "#0033A0",
            },
            position: "absolute", // Абсолютное позиционирование
            right: "10px", // Расположить кнопку в 10px от правого края
            bottom: "20px",
          }}
        >
          <img
            src={Vector}
            alt="Через банкомат"
            style={{ width: "20px", height: "20px" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <img
          src={ATMIcon}
          alt="Через банкомат"
          style={{ width: "120px", height: "120px" }}
        />
      ),
      title: ["Через", "банкомат"],
      description: ["Банковская карта", "не требуется"],
      id_name: "atm"
    },
    {
      icon: (
        <img
          src={CashInOffice}
          alt="Наличные"
          style={{ width: "120px", height: "120px" }}
        />
      ),
      title: ["Наличные", "в офисе"],
      description: ["Получите наличные", "у кассира"],
      id_name: "cash"
    },
    {
      icon: (
        <img
          src={CourierDelivery}
          alt="Курьер"
          style={{ width: "120px", height: "120px" }}
        />
      ),
      title: ["Курьерская", "доставка"],
      description: ["Курьер выдаст", "Вам наличные"],
      id_name: "courier"
    },
    {
      icon: (
        <img
          src={OnCheck}
          alt="Счет"
          style={{ width: "120px", height: "120px" }}
        />
      ),
      title: ["На тайский", "счет"],
      description: ["Получите перевод", "на Ваш счет"],
      id_name: "check"
    },
  ];
  //Массивы исполоьзуются для возможности переноса строки в заголовке и описании

  return (
    <FeaturesContainer>
      <Wrapper>
        {/* Заголовок в виде SVG */}
        <TitleContainer>
          <WaysToGetCashSVG />
        </TitleContainer>

        {/* Сетка с карточками */}
        <Grid container spacing={3} marginTop={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} id_name={feature.id_name}/>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" sx={{ fontSize: "30px", fontWeight: "700", lineHeight: "31px", color: "#004DB4", textTransform: 'uppercase', mt: '4rem' }}>принимаем оплату с любых российских банков</Typography>
        <PaymentSection />
      </Wrapper>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
