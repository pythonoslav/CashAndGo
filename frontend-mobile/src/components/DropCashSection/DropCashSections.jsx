import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { ReactComponent as ATM_drop_cash } from "../../assets/ATM_drop_cash_full.svg";
import { ReactComponent as DropCash } from "../../assets/drop_cash_text.svg";
import { ReactComponent as KassicornButton } from "../../assets/Kassicorn_logo.svg";
import { ReactComponent as BangkokButton } from "../../assets/Bangkok_bank_logo.svg";
import { ReactComponent as KrungthaiButton } from "../../assets/Krungthai.svg";

const DropContainer = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px;

  @media (max-width: 380px) {
    padding: 16px; /* Чуть уменьшаем отступы */
  }
`;

const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 2;
  text-align: left;
  max-width: 100%;
`;

const BankButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: scale(1.4);
`;

const DropCashSection = ({ setOpenNestedModal }) => {
  return (
    <DropContainer>
      {/* Иллюстрация (убирается на экранах < 380px) */}
      <Box
        className="atm-image"
        sx={{
          position: "absolute",
          left: "-5px",
          bottom: "-2px",
          zIndex: 1,
          width: "250px",
          height: "auto",
        }}
      >
        <ATM_drop_cash style={{ width: "100%", height: "auto" }} />
      </Box>

      {/* Контент */}
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
          className="second-text"
          sx={{
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "22px",
            color: "#0E1111",
            mb: 2,
            marginBottom: "2rem", // Обычное положение
          }}
        >
          Просто найдите ближайший банкомат банка из списка
          и следуйте инструкциям:
        </Typography>

        {/* Логотипы банков (столбик по умолчанию, строка при < 380px) */}
        <Box
          className="bank-buttons"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "8px",
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

      {/* Медиа-запросы */}
      <style>
        {`
          @media (max-width: 380px) {
            .atm-image {
              display: none; /* Убираем картинку */
            }

            .second-text {
              margin-left: 0 !important; /* Убираем отступ */
            }

            .bank-buttons {
              flex-direction: row !important;
              justify-content: center;
              gap: 10px;
            }
          }
        `}
      </style>
    </DropContainer>
  );
};

export default DropCashSection;
