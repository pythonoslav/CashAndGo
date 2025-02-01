import React from 'react';
import styled from "styled-components";
import { Box, Typography, Link, List, ListItem, Grid } from "@mui/material";
import { ReactComponent as ATM_drop_cash } from "../../assets/ATM_drop_cash_full.svg";
import { ReactComponent as DropCash } from "../../assets/drop_cash_text.svg";

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

const DropCashSection = () => {
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
                                        fontSize: "16px", // Уменьшаем шрифт на мобильных
                                        lineHeight: "22px",
                                        textAlign: "left"
                                    },
                                }}>
                                Просто найдите ближайший банкомат банков из списка
                                и следуйте инструкциям:
                            </Typography>
                            <List
                                sx={{
                                    paddingLeft: "16px",
                                    listStyleType: "disc",
                                    margin: 0,
                                    '@media (max-width: 768px)': {
                                        paddingLeft: "0",
                                    },
                                }}
                            >
                                <ListItem
                                    sx={{
                                        display: "list-item",
                                        padding: 0,
                                        position: "relative",
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            left: "-20px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: "5px",
                                            height: "5px",
                                            backgroundColor: "green",
                                            borderRadius: "50%",
                                            '@media (max-width: 768px)': {
                                                left: "0",
                                            },
                                        },
                                    }}
                                >
                                    <Link
                                        href="#"
                                        underline="hover"
                                        sx={{
                                            color: "green",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            '@media (max-width: 768px)': {
                                                marginLeft: "10px",
                                            },
                                        }}
                                    >
                                        Kasikorn bank
                                    </Link>
                                </ListItem>
                                <ListItem
                                    sx={{
                                        display: "list-item",
                                        padding: 0,
                                        position: "relative",
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            left: "-20px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: "5px",
                                            height: "5px",
                                            backgroundColor: "blue",
                                            borderRadius: "50%",
                                            '@media (max-width: 768px)': {
                                                left: "0",
                                            },
                                        },
                                    }}
                                >
                                    <Link
                                        href="#"
                                        underline="hover"
                                        sx={{
                                            color: "blue",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            '@media (max-width: 768px)': {
                                                marginLeft: "10px",
                                            },
                                        }}
                                    >
                                        Bangkok bank
                                    </Link>
                                </ListItem>
                                <ListItem
                                    sx={{
                                        display: "list-item",
                                        padding: 0,
                                        position: "relative",
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            left: "-20px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: "5px",
                                            height: "5px",
                                            backgroundColor: "#06C3FF",
                                            borderRadius: "50%",
                                            '@media (max-width: 768px)': {
                                                left: "0",
                                            },
                                        },
                                    }}
                                >
                                    <Link
                                        href="#"
                                        underline="hover"
                                        sx={{
                                            color: "#06C3FF",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            '@media (max-width: 768px)': {
                                                marginLeft: "10px",
                                            },
                                        }}
                                    >
                                        KrungThai bank
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Wrapper>
        </DropContainer>
    );
};

export default DropCashSection;
