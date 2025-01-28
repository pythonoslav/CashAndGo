import React from "react";
import { Box, Typography } from "@mui/material";
import license1 from "../../assets/license1.jpg";
import license2 from "../../assets/license2.jpg";


const AboutUs = () => {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // Для адаптивного расположения содержимого
        padding: "40px 20px",
        backgroundColor: "#ffffff",
        borderRadius: "70px",
        margin: "20px auto",
        maxWidth: "1400px",
        boxShadow: "0px 0px 21.6px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1250px",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#000",
            marginBottom: "20px",
          }}
        >
          О НАС
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "#0E1111",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          <strong style={{ color: "#004DB4", fontSize: "32px" }}>
            Cash <strong style={{ color: "#F87000" }}>&</strong> Go
          </strong>{" "}
          - the way you EX change - лицензированный сервис обмена валюты в Таиланде. Наш сервис - это быстрый и простой способ обменять валюту в любой части Таиланда. Понятные методы получения наличных делают процедуру обмена прозрачной и доступной для каждого.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "#0E1111",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Наша цель - не только предоставить удобный и качественный сервис, но и сохранить индивидуальный подход к каждому из наших клиентов. Благодаря этому со многими из них удается выстраивать долгосрочные партнерские отношения.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "#0E1111",
            lineHeight: "1.6",
          }}
        >
          Мы дорожим нашей репутацией и гарантируем полную безопасность сделки! Все операции осуществляются в срок и сопровождаются необходимыми юридическими документами.
        </Typography>
      </Box>

     
    </Box>

     {/* Добавляем изображения лицензий */}
     <Box
     sx={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       flexWrap: "wrap", // Адаптивное расположение изображений
       gap: "90px", // Отступы между изображениями
       marginTop: "40px",
     }}
   >
     <img
       src={license1}
       alt="Лицензия 1"
       style={{
         maxWidth: "100%",
         height: "auto",
         maxHeight: "460px", // Ограничение высоты для мобильных устройств
         borderRadius: "10px",
         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
       }}
     />
     <img
       src={license2}
       alt="Лицензия 2"
       style={{
         maxWidth: "100%",
         height: "auto",
         maxHeight: "460px", // Ограничение высоты для мобильных устройств
         borderRadius: "10px",
         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
       }}
     />
   </Box>
   </>
  );
};

export default AboutUs;
