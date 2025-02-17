import React from 'react';
import styled from "styled-components";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as ATM_drop_cash } from "../../assets/ATM_drop_cash_full.svg";
import { ReactComponent as DropCash } from "../../assets/drop_cash_text.svg";
import { ReactComponent as KassicornButton } from "../../assets/Kassicorn_logo.svg";
import { ReactComponent as BangkokButton } from "../../assets/Bangkok_bank_logo.svg";
import { ReactComponent as KrungthaiButton } from "../../assets/Krungthai.svg";

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
  max-width: 1440px; 
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
  return (
    <DropContainer>
      <Wrapper>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            '@media (max-width: 768px)': {
              flexDirection: "column-reverse",
              textAlign: "center",
            },
          }}
        >
          {/* Левая колонка */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              paddingLeft: '2rem',
              '@media (max-width: 768px)': {
                marginBottom: "20px",
              },
            }}
          >
            <ATM_drop_cash
              style={{
                maxWidth: "80%",
                height: "auto",
              }}
            />
          </Grid>

          {/* Правая колонка */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              alignSelf: "flex-start",
              '@media (max-width: 768px)': {
                alignSelf: "center",
                width: "100%",
                padding: "0 10px",
              },
            }}
          >
            <Box>
              {/* Заголовок SVG */}
              <Box
                sx={{
                  marginBottom: "2.5rem",
                  '@media (max-width: 768px)': {
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                  },
                }}
              >
                <DropCash width="500" height="auto" />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "25px",
                  color: "#0E1111",
                  marginBottom: "50px",
                  width: "100%",
                  '@media (max-width: 768px)': {
                    fontSize: "16px",
                    lineHeight: "22px",
                    textAlign: "left"
                  },
                }}
              >
                Обмен валюты через банкомат в первый раз у многих вызывает затруднение. 
                Но, на самом деле, это самый быстрый и удобный способ обменять деньги
                <Typography
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    display: "block",
                    lineHeight: "31px",
                    marginTop: '1rem',  
                    '@media (max-width: 768px)': {
                      lineHeight: "26px",
                    },
                  }}
                >
                  по выгодному курсу!
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "22px",
                  fontWeight: "300",
                  lineHeight: "24px",
                  color: "#0E1111",
                  marginBottom: "4rem",
                  width: "95%",
                  '@media (max-width: 768px)': {
                    fontSize: "16px",
                    lineHeight: "22px",
                    textAlign: "left"
                  },
                }}>
                Просто найдите ближайший банкомат банков из списка
                и следуйте инструкциям:
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
