import React from 'react';
import styled from "styled-components";
import { Box, Typography, Grid } from "@mui/material";
import { ReactComponent as ATM_drop_cash } from "../../assets/ATM_drop_cash_full.svg";
import { ReactComponent as DropCash } from "../../assets/drop_cash_text.svg";
import { scroller } from "react-scroll";
import { ReactComponent as KassicornButton } from "../../assets/Kassicorn_logo.svg"
import { ReactComponent as BangkokButton } from "../../assets/Bangkok_bank_logo.svg"
import { ReactComponent as KrungthaiButton } from "../../assets/Krungthai.svg"

const DropContainer = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center; /* Центрируем содержимое */
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
  justify-content: flex-start; /* Центрируем по горизонтали */
  gap: 12px; /* Добавляем промежутки между кнопками */
  margin-top: 20px;
`;

const BankButton = styled.div`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const DropCashSection = ({ setOpenIndex }) => {

    const handleScroll = (index) => {
        setOpenIndex(index);
        scroller.scrollTo("faq", {
            smooth: true,
            duration: 500,
            offset: -90, // Отступ для учета фиксированного хедера
        });

    }

    return (
        <DropContainer>
            <Wrapper>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    sx={{
                        '@media (max-width: 768px)': { // Адаптивность для мобильных устройств
                            flexDirection: "column-reverse", // Меняем порядок колонок
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
                            paddingLeft: '3.2rem',
                            '@media (max-width: 768px)': {
                                marginBottom: "20px", // Отступ для мобильных устройств
                            },
                        }}
                    >
                        <ATM_drop_cash
                            style={{
                                maxWidth: "80%", // Ограничиваем размер для мобильных
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
                                alignSelf: "center", // Центрируем содержимое на мобильных
                                width: "100%",
                                padding: "0 10px",
                            },
                        }}
                    >
                        <Box>
                            {/* Заголовок SVG */}
                            <Box
                                sx={{
                                    marginBottom: "20px",
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
                                    fontSize: "18px",
                                    fontWeight: "300",
                                    lineHeight: "24px",
                                    color: "#0E1111",
                                    marginBottom: "16px",
                                    width: "70%",
                                    '@media (max-width: 768px)': {
                                        fontSize: "16px", // Уменьшаем шрифт на мобильных
                                        lineHeight: "22px",
                                        textAlign: "left"
                                    },
                                }}
                            >
                                Обмен валюты через банкомат в первый раз у многих вызывает затруднение. Но, на самом деле, это самый быстрый и удобный способ обменять деньги
                                <Typography
                                    component="span"
                                    sx={{
                                        fontWeight: "bold",
                                        display: "block",
                                        lineHeight: "31px",
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
                                    fontSize: "18px",
                                    fontWeight: "300",
                                    lineHeight: "24px",
                                    color: "#0E1111",
                                    marginBottom: "16px",
                                    width: "68%",
                                    '@media (max-width: 768px)': {
                                        fontSize: "16px",
                                        lineHeight: "22px",
                                        textAlign: "left"
                                    },
                                }}>
                                Просто найдите ближайший банкомат банков из списка
                                и следуйте инструкциям:
                            </Typography>
                            <ButtonContainer>
                                <BankButton><KassicornButton /></BankButton>
                                <BankButton><BangkokButton /></BankButton>
                                <BankButton><KrungthaiButton /></BankButton>
                            </ButtonContainer>


                        </Box>
                    </Grid>
                </Grid>
            </Wrapper>
        </DropContainer>
    );
};

export default DropCashSection;
