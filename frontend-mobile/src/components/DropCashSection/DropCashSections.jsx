import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { ReactComponent as ATM_drop_cash } from "../../assets/ATM_drop_cash_full.svg";
import { ReactComponent as DropCash } from "../../assets/drop_cash_text.svg";
import { ReactComponent as KassicornButton } from "../../assets/Kassicorn_logo.svg";
import { ReactComponent as BangkokButton } from "../../assets/Bangkok_bank_logo.svg";
import { ReactComponent as KrungthaiButton } from "../../assets/Krungthai.svg";

const DropContainer = styled(Box)`
  position: relative; /* Ключевой момент — родитель для абсолютного позиционирования */
  width: 100%;
  overflow: hidden;   /* Чтобы скрыть часть иллюстрации, выходящую за пределы */
  padding: 20px;
`;

// Контейнер для текстов и логотипов
const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 2;         /* Выше иллюстрации */
 /* Отодвигаем контент вправо, чтобы освободить место слева под иллюстрацию */
  text-align: left;
  max-width: 100%;   /* При необходимости задайте ширину контента */
`;

// Кнопка-логотип банка
const BankButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: scale(1.1);

  &:hover {
    transform: scale(1.1);
  }
`;

const DropCashSection = ({ setOpenNestedModal }) => {
  return (
    <DropContainer>
      {/* Абсолютно позиционированная иллюстрация */}
      <Box
        sx={{
          position: "absolute",
          left: "-5px",  
          bottom: "-2px",    
          zIndex: 1
        }}
      >
        <ATM_drop_cash style={{ width: "270px", height: "auto" }} />
      </Box>

      {/* Основной контент (заголовок, текст, кнопки) */}
      <ContentWrapper>
        {/* Заголовок (SVG) */}
        <Box sx={{ mb: 2 }}>
          <DropCash style={{ width: "100%", height: "auto" }} />
        </Box>

        {/* Первый абзац */}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "22px",
            color: "#0E1111",
            mb: 2,
          }}
        >
          Обмен валюты через банкомат в первый раз у многих вызывает затруднение. 
          Но на самом деле это самый быстрый и удобный способ обналичить деньги 
          <Typography
            component="span"
            sx={{
              display: "block",
              mt: 1,
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            по выгодному курсу!
          </Typography>
        </Typography>

        {/* Второй абзац */}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 300,
            marginLeft: '5rem',
            lineHeight: "22px",
            color: "#0E1111",
            mb: 2,
          }}
        >
          Просто найдите ближайший банкомат банка из списка 
          и следуйте инструкциям:
        </Typography>

        {/* Логотипы банков в столбик, выравнивание по правому краю */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            ml: '1rem',
            mb: 2,
          }}
        >
          <BankButton onClick={() => setOpenNestedModal("Kassicorn")}>
            <KassicornButton width="100px" />
          </BankButton>
          <BankButton onClick={() => setOpenNestedModal("Bangkok")}>
            <BangkokButton width="100px" />
          </BankButton>
          <BankButton onClick={() => setOpenNestedModal("Krungthai")}>
            <KrungthaiButton width="100px" />
          </BankButton>
        </Box>
      </ContentWrapper>
    </DropContainer>
  );
};

export default DropCashSection;
