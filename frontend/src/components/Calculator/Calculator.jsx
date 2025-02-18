import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import telegramIcon from "../../assets/telegram-icon.svg";




// Стили для переключения с помощью styled-components
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  border-bottom: 2px solid #ddd;
`;

const Tab = styled.button`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  border: none;
  background: none;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => (props.active ? "#0033a0" : "#888")};
  cursor: pointer;
  position: relative;

  &:hover {
    color: #0055d4;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;  
    padding: 8px 0;     
  }

  @media (max-width: 480px) {
    font-size: 1rem;    
    padding: 6px 0;     
  }
  
`;

const ActiveTabIndicator = styled.div`
  position: absolute;
  bottom: -3px;
  left: ${(props) => (props.activeTab === "buy" ? "0%" : "50%")};
  width: 50%;
  height: 3px;
  background: #0033a0;
  transition: left 0.3s ease;
`;

const Calculator = ({ currenciesRates }) => {
  const [activeTab, setActiveTab] = useState("buy");
  const [currencyFrom, setCurrencyFrom] = useState("RUB");
  const [currencyTo, setCurrencyTo] = useState("THB");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencies = [
    { code: "RUB", flag: 'https://flagicons.lipis.dev/flags/4x3/ru.svg' },
    { code: "USD", flag: 'https://flagicons.lipis.dev/flags/4x3/us.svg' },
    { code: "EUR", flag: 'https://flagicons.lipis.dev/flags/4x3/eu.svg' },
    { code: "USDT", flag: "/images/usdt.jpg" },
    { code: "THB", flag: 'https://flagicons.lipis.dev/flags/4x3/th.svg' }
  ];




   // Функция для поиска курса по коду валюты
   const getCurrencyRate = (code) => {
    let searchCode = code;
  
    // Подставляем нужную версию RUB
    if (code === "RUB") {
      searchCode = "RUB(безналичный расчет)"; // Или RUB(онлайн перевод), если надо
    }
  
    return currenciesRates.find((c) => c.code === searchCode);
  };

  const handleConvert = (value, fromCurrency, toCurrency) => {
    setAmount(value);

    if (!value) {
      setConvertedAmount("");
      return;
    }

    const fromRate = getCurrencyRate(fromCurrency);
    const toRate = getCurrencyRate(toCurrency);

    if (!fromRate || !toRate) {
      setConvertedAmount("");
      return;
    }

    let result;

    if (fromCurrency === "THB") {
      // Если конвертируем из THB в другую валюту
      result = value / toRate.buy;
    } else if (toCurrency === "THB") {
      // Если конвертируем в THB
      result = value * fromRate.sell;
    } else {
      // Если конвертируем между двумя валютами через THB
      const valueInTHB = value * fromRate.sell; // Конвертируем в THB
      result = valueInTHB / toRate.buy; // Конвертируем в целевую валюту
    }

    setConvertedAmount(result.toFixed(2));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        p: 3,
        maxWidth: 700,
        mx: "auto",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'black', ml: 2, fontSize: { xs: 16, md: 32 } }}> Калькулятор обмена </Typography>
      {/* Styled-components Tabs */}
      <Tabs>
        <Tab active={activeTab === "buy"} onClick={() => setActiveTab("buy")}>
          Покупка
        </Tab>
        <Tab active={activeTab === "sell"} onClick={() => setActiveTab("sell")}
        >
          Продажа
        </Tab>
        <ActiveTabIndicator activeTab={activeTab} />
      </Tabs>

      {/* Input Fields */}
      <Grid container spacing={2} sx={{ mt: { xs: 0, md: 2 }, backgroundColor: '#f5f5f5', borderRadius: 5, padding: { xs: 1, md: 3 } }}>
        {/* From Amount */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: "5px 10px",
              height: { xs: 40, md: 70 },
              //boxShadow: "inside 0 2px 4px rgba(0, 0, 0, 0.05)",
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Сумма"
              value={amount}
              onChange={(e) => handleConvert(e.target.value, currencyFrom, currencyTo)}
              InputProps={{
                disableUnderline: true,
                sx: {
                  ml: { xs: 0, md: 2 },
                  "&::placeholder": {
                    color: "#D8D8D8",
                    fontSize: { xs: 15, md: 25 },
                    lineHeight: "24px",

                  },
                },
                style: {
                  color: "#000",
                  fontSize: { xs: 15, md: 25 },
                  lineHeight: "1.5",
                },
              }}
              sx={{ flex: 1, t: '#D8D8D8' }}
            />
            <Box
              sx={{
                width: "1px",
                height: "24px",
                backgroundColor: "#ddd",
                margin: "0 15px",
              }}
            />
            <Select
              value={currencyFrom}
              onChange={(e) => {
                setCurrencyFrom(e.target.value);
                handleConvert(amount, e.target.value, currencyTo);
              }}
              variant="standard"
              disableUnderline
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "bold",
                fontSize: { xs: 12, md: 18 },
              }}
            >
              {currencies.map((currency) => (
                <MenuItem
                  key={currency.code}
                  value={currency.code}
                  sx={{
                    fontSize: { xs: 12, md: 16 },
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img
                      src={currency.flag}
                      alt={currency.code}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid #ccc",
                      }}
                    />
                    {currency.code}
                  </Box>
                </MenuItem>
              ))}
            </Select>

          </Box>
        </Grid>
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "#0E0E0E",
            mt: { xs: 1, md: 2 },
            ml: "50%",
            transform: "translateX(-50%)",
            mb: 1
          }}
        >
          Текущий курс: {activeTab === "buy"
            ? getCurrencyRate(currencyFrom)?.sell.toFixed(2)
            : getCurrencyRate(currencyFrom)?.buy.toFixed(2)}
        </Box>
        {/* To Amount */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: "5px 10px",
              height: { xs: 40, md: 70 },
              //boxShadow: "inside 0 2px 4px rgba(0, 0, 0, 0.05)",
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Результат"
              value={convertedAmount}
              InputProps={{
                disableUnderline: true,
                sx: {
                  ml: { xs: 0, md: 2 },
                  "&::placeholder": {
                    color: "#D8D8D8",
                    fontSize: { xs: 15, md: 25 },
                    lineHeight: "24px",

                  },
                },
                style: {
                  color: "#000",
                  fontSize: { xs: 15, md: 25 },
                  lineHeight: "1.5",
                },
              }}
              sx={{ flex: 1, t: '#D8D8D8' }}
            />
            <Box
              sx={{
                width: "1px",
                height: "24px",
                backgroundColor: "#ddd",
                margin: "0 15px",
              }}
            />
            <Select
              value={currencyTo}
              onChange={(e) => {
                setCurrencyTo(e.target.value);
                handleConvert(amount, currencyFrom, e.target.value);
              }}
              variant="standard"
              disableUnderline
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "bold",
                fontSize: { xs: 12, md: 18 },
              }}
            >
              {currencies.map((currency) => (
                <MenuItem
                  key={currency.code}
                  value={currency.code}
                  sx={{
                    fontSize: { xs: 12, md: 16 },
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >

                    <img
                      src={currency.flag}
                      alt={currency.code}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid #ccc",
                      }}
                    />
                    {currency.code}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
      </Grid>

      {/* Button */}
      <Box
        sx={{
          display: "flex",
          gap: 2, // расстояние между кнопками
          justifyContent: "center",
          mt: '0.4rem',
          mb: '0.4rem'
        }}
      >
        <Button
          variant="contained"
          fullWidth={false}
          sx={{
            backgroundColor: "#f87000",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "24px", // Чуть больше радиус для пропорций
            textTransform: "none",
            letterSpacing: "0",
            padding: "12px 24px", // Делаем больше внутренние отступы
            minWidth: "220px", // Минимальная ширина для равномерности
            "&:hover": {
              backgroundColor: "#ff9000",
            },
          }}
        >
          Способы получения наличных
        </Button>

        <Button
          variant="contained"
          fullWidth={false}
          sx={{
            backgroundColor: "#27a7e7",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "24px",
            textTransform: "none",
            letterSpacing: "0",

            padding: "12px 24px",
            minWidth: "220px",
            "&:hover": {
              backgroundColor: "#2baaff",
            },
          }}
          endIcon={
            <Box
              component="img"
              src={telegramIcon}
              sx={{ width: 24, height: 24 }} // Чуть увеличиваем иконку
            />
          }
        >
          Обменять в Telegram
        </Button>
      </Box>

    </Box>
  );
};

export default Calculator;
