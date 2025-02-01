import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

// Массив данных для курсов валют


const ExchangeRates = ({ currencyRates }) => {
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
                  pl: 30, 
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
                  pl: 4,
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
                    <span style={{ fontSize: "1.2rem" }}>{currency.flag}</span> 
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
