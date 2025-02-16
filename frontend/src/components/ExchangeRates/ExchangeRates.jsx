import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const ExchangeRates = ({ currencyRates }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        p: 3,
        maxWidth: 700, 
        width: "98%", 
        mx: "auto",
        height: "521px",

        display: "flex",
        flexDirection: "column",
        "@media (max-width: 768px)": {
          maxWidth: "95%", 
        },
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
          fontSize: { xs: 16, md: 32 },
        }}
      >
        Курс валют
      </Typography>

      {/* Таблица с прокруткой */}
      <TableContainer className="custom-scrollbar"
      >

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1.2rem" }}>Валюта</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1.2rem" }} align="right">Покупка</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1.2rem" }} align="right">Продажа</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyRates.map((currency) => (
              <TableRow
                key={currency.code}
                sx={{ "&:last-child td, &:last-child th": { border: 0, paddingBottom: "8px" } }}
              >
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

                    <img
                      src={
                        currency.country_code
                          ? `https://flagicons.lipis.dev/flags/4x3/${currency.country_code}.svg`
                          : "/images/usdt.jpg" 
                      }
                      alt={currency.code || "USDT"}
                      style={{ width: "24px", height: "18px", borderRadius: "3px" }}
                    />

                    <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      {currency.code}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "1.2rem" }}>
                  {currency.sell.toFixed(2)}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "1.2rem" }}>
                  {currency.buy.toFixed(2)}
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
