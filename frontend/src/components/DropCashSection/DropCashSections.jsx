import React from "react";
import styled from "styled-components";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as ATM_drop_cash } from "../../assets/ATM_drop_cash_full.svg";
import { ReactComponent as DropCash_en } from "../../assets/ATM_drop_cash_en.svg";
import { ReactComponent as DropCash } from "../../assets/drop_cash_text.svg";
import { ReactComponent as KassicornButton } from "../../assets/Kassicorn_logo.svg";
import { ReactComponent as BangkokButton } from "../../assets/Bangkok_bank_logo.svg";
import { ReactComponent as KrungthaiButton } from "../../assets/Krungthai.svg";
import { useLanguage } from "../../helpers/LanguageContext";

const DropContainer = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  padding-top: 4rem;
`;

const Wrapper = styled(Box)`
  max-width: 1440px; /* или 1920px, если хотите шире */
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3rem;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
    margin-left: 0; /* Чтобы кнопки на мобильном были по центру */
  }
`;

const BankButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: scale(1.1);

  &:hover {
    transform: scale(1.2);
  }
`;

const DropCashSection = ({ setOpenNestedModal }) => {
  const { language } = useLanguage()
  return (
    <DropContainer>
      <Wrapper>
        <Grid
          container
          spacing={4}
          alignItems="center"
          /* Измените на { xs: "column-reverse", md: "row" }, если хотите, чтобы на мобильном текст был выше */
          direction={{ xs: "column", md: "row" }}
          textAlign={{ xs: "center", md: "inherit" }}
        >
          {/* Левая колонка (банкомат) */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              pl: { xs: 0, md: "2rem" },
              mb: { xs: "20px", md: 0 },
            }}
          >
            <ATM_drop_cash
              style={{
                width: "100%",
                maxWidth: "450px", // Меняйте при необходимости
                height: "auto",
              }}
            />
          </Grid>

          {/* Правая колонка (текст и кнопки) */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              alignSelf: { xs: "center", md: "flex-start" },
              width: { xs: "100%", md: "auto" },
              px: { xs: "10px", md: 0 },
            }}
          >
            <Box>
              {/* Заголовок SVG */}
              <Box
                sx={{
                  mb: { xs: "1.5rem", md: "2.5rem" },
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  width: "100%",
                }}
              >
                {language === 'ru' ?
                  <DropCash
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                    }}
                  />
                  : <DropCash_en
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "auto",
                    }}
                  />}

              </Box>

              {/* Основной текст */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: "400",
                  lineHeight: { xs: "22px", md: "32px" },
                  color: "#0E1111",
                  mb: { xs: "20px", md: "30px" },
                  width: "100%",
                  textAlign: { xs: "left", md: "inherit" },
                }}
              >
                {language === 'ru' ? "Обмен валюты через банкомат в первый раз у многих вызывает затруднение. Но, на самом деле, это самый быстрый и удобный способ обменять деньги" : "Withdrawing cash via an ATM might seem complicated at first, but it’s actually the fastest and most convenient way to exchange money"}

                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "16px", md: "24px" },
                    display: "block",
                    lineHeight: { xs: "22px", md: "32px" },
                    mt: "1rem",
                    color: "#F87000", // Если хотите выделить оранжевым
                  }}
                >
                  {language === 'ru' ? " по выгодному курсу!" : " and at the best rate!"}

                </Typography>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "22px" },
                  fontWeight: "300",
                  lineHeight: { xs: "22px", md: "30px" },
                  color: "#0E1111",
                  mb: { xs: "30px", md: "3rem" },
                  width: "95%",
                  textAlign: { xs: "left", md: "inherit" },
                }}
              >
                {language === 'ru' ? "Просто найдите ближайший банкомат банков из списка и следуйте инструкциям:" : "Find the nearest ATM from the list below and follow the instructions:"}

              </Typography>

              {/* Кнопки банков */}
              <ButtonContainer>
                <BankButton onClick={() => setOpenNestedModal("Kassicorn")}>
                  <KassicornButton />
                </BankButton>
                <BankButton onClick={() => setOpenNestedModal("Bangkok")}>
                  <BangkokButton />
                </BankButton>
                <BankButton onClick={() => setOpenNestedModal("Krungthai")}>
                  <KrungthaiButton />
                </BankButton>
              </ButtonContainer>
            </Box>
          </Grid>
        </Grid>
      </Wrapper>
    </DropContainer>
  );
};

export default DropCashSection;
