import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useLanguage } from "../../helpers/LanguageContext";
const ExchangeRates = ({ currencyRates }) => {
  const {language} = useLanguage()
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        p: 2,
        width: "100%",
        maxWidth: "100%",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        height: "521px",  // Фиксируем высоту под мобильный дизайн
      }}
    >
      {/* Заголовок */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "black",
          textAlign: "left",
          fontSize: "16px", // Только мобильное значение
        }}
      >
       {language === 'ru' ? "Курс валют" : "Exchange rates"} 
      </Typography>

      {/* Таблица с прокруткой */}
      <TableContainer
        sx={{
          flex: 1,          // Занимает всё доступное пространство
          overflowY: "auto",
          overflowX: 'hidden' // Вертикальная прокрутка
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "14px"
                }}
              >
                {language === 'ru' ? "Валюта" : "Currency"}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "14px"
                }}
              >
               {language === 'ru' ? "Покупка" : "Buy"}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "14px"
                }}
              >
                {language === 'ru' ? "Продажа" : "Sell"}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currencyRates.map((currency) => (
              <TableRow
                key={currency.code}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    paddingBottom: "8px",
                  },
                }}
              >
                <TableCell sx={{ fontSize: "14px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      src={
                        currency.country_code
                          ? `https://flagicons.lipis.dev/flags/4x3/${currency.country_code}.svg`
                          : "/images/usdt.jpg"
                      }
                      alt={currency.code || "USDT"}
                      style={{
                        width: "20px",
                        height: "15px",
                        borderRadius: "3px",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      {currency.code}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "14px" }}>
                  {currency.buy.toFixed(2)}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "14px" }}>
                  {currency.sell.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExchangeRates;
