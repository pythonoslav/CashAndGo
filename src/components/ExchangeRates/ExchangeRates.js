import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

// Массив данных для курсов валют
const currencyRates = [
  { flag: "🇺🇸", code: "USD", buy: 34.21516, sell: 34.96113 },
  { flag: "🇨🇳", code: "CNY", buy: 4.44117, sell: 4.93564 },
  { flag: "🇪🇺", code: "EUR", buy: 35.62406, sell: 3.678481 },
  { flag: "🇯🇵", code: "JPY", buy: 0.21873, sell: 0.23002 },
  { flag: "🇭🇰", code: "HKD", buy: 4.33562, sell: 4.53643 },
  { flag: "🇪🇺", code: "ONE", buy: 35.62406, sell: 3.678481 },
];

const ExchangeRates = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 6, 
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
        p: 3, 
        maxWidth: 700, 
        mx: "auto",
        transformOrigin: "center", 
      }}
    >
      {/* Заголовок */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: 'black', ml: 2 }}> 
        Курс валют
      </Typography>

      {/* Таблица */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1.5rem" }}>
                Валюта
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "1.5rem",
                  pl: 30, // Увеличиваем отступ слева
                }}
                align="right"
              >
                Покупка
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "1.5rem",
                  pl: 4, // Увеличиваем отступ слева
                }}
                align="right"
              >
                Продажа
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyRates.map((currency) => (
              <TableRow key={currency.code}  
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0, 
                  paddingBottom: "8px",
                  
                },
              }}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span style={{ fontSize: "1.2rem" }}>{currency.flag}</span> {/* Увеличиваем флаг */}
                    <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      {currency.code}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "1.2rem", pl: 4 }}>
                  {currency.buy.toFixed(5)}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "1.2rem", pl: 4 }}>
                  {currency.sell.toFixed(5)}
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
