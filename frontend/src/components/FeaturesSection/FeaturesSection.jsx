import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import { ReactComponent as WaysToGetCashSVGru } from "../../assets/ways_to_get_cash.svg";
import { ReactComponent as WaysToGetCashSVGen } from "../../assets/ways_to_get_cash_en.svg";
import ATMIcon from "../../assets/via_ATM.svg";
import CashInOffice from "../../assets/cash_in_office.svg";
import CourierDelivery from "../../assets/courier_delivery.svg";
import OnCheck from "../../assets/on_check.svg";
import Vector from "../../assets/vector_button.svg";
import PaymentSection from "./PaymentSection";
import { Link } from "react-scroll";
import { useLanguage } from "../../helpers/LanguageContext";


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

const FeatureCard = ({ icon, title, description, id_name, onClick }) => {
  return (
    <Box
      onClick={() => onClick(id_name)} // Вызываем openModal с id_name
      sx={{
        width: "330px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)", // Немного увеличиваем карточку при наведении
        },
      }}
    >
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

      {icon}

      <Box sx={{ position: "relative", width: "100%", mt: 7, mb: -2 }}>
        <IconButton
          component={Link}
          to={id_name}
          smooth={true}
          duration={500}
          offset={-90}
          spy={true}
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
            position: "absolute",
            right: "10px",
            bottom: "20px",
          }}
        >
          <img
            src={Vector}
            alt="Стрелка"
            style={{ width: "20px", height: "20px" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};


const FeaturesSection = ({ openModal }) => {
  const { language } = useLanguage()
  const features = [
    {
      icon: <img src={ATMIcon} alt="Через банкомат" style={{ width: "120px", height: "120px" }} />,
      title: ["Через", "банкомат"],
      description: ["Банковская карта", "не требуется"],
      id_name: "atm"
    },
    {
      icon: <img src={CashInOffice} alt="Наличные" style={{ width: "120px", height: "120px" }} />,
      title: ["Наличные", "в офисе"],
      description: ["Получите наличные", "у кассира"],
      id_name: "cash"
    },
    {
      icon: <img src={CourierDelivery} alt="Курьер" style={{ width: "120px", height: "120px" }} />,
      title: ["Курьерская", "доставка"],
      description: ["Курьер выдаст", "Вам наличные"],
      id_name: "courier"
    },
    {
      icon: <img src={OnCheck} alt="Счет" style={{ width: "120px", height: "120px" }} />,
      title: ["На тайский", "счет"],
      description: ["Получите перевод", "на Ваш счет"],
      id_name: "check"
    },
  ];

  const featuresEN = [
    {
      icon: <img src={ATMIcon} alt="Via ATM" style={{ width: "120px", height: "120px" }} />,
      title: ["Via ATM", "by QR "],
      description: ["No bank card", "required"],
      id_name: "atm"
    },
    {
      icon: <img src={CashInOffice} alt="Cash" style={{ width: "120px", height: "120px" }} />,
      title: ["Cash pickup", "At office"],
      description: ["Receive cash", "from the cashier "],
      id_name: "cash"
    },
    {
      icon: <img src={CourierDelivery} alt="Courier" style={{ width: "120px", height: "120px" }} />,
      title: ["Cash ", "Delivery "],
      description: ["Get cash delivered", "by our courier "],
      id_name: "courier"
    },
    {
      icon: <img src={OnCheck} alt="Счет" style={{ width: "120px", height: "120px" }} />,
      title: ["Thai bank", "account"],
      description: ["Transfer to ", "any Thai account"],
      id_name: "check"
    },
  ];

  return (
    <FeaturesContainer>
      <Wrapper>
        <TitleContainer>
          { language === 'ru' ?<WaysToGetCashSVGru /> : <WaysToGetCashSVGen />}
        </TitleContainer>

        <Grid container spacing={3} marginTop={2}>
          {language === 'ru'
            ? features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  id_name={feature.id_name}
                  onClick={openModal}
                />
              </Grid>
            ))
            : featuresEN.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  id_name={feature.id_name}
                  onClick={openModal}
                />
              </Grid>
            ))
          }
        </Grid>
        <Typography variant="h6" sx={{ fontSize: "30px", fontWeight: "700", lineHeight: "31px", color: "#004DB4", textTransform: "uppercase", mt: "4rem" }}>
          {language === 'ru' ? "принимаем оплату с любых российских банков" : "We accept payments from any russian bank"}
        </Typography>
        <PaymentSection />
      </Wrapper>
    </FeaturesContainer>
  );
};


export default FeaturesSection;
