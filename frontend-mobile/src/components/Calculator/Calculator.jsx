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
import telegramIcon from "../Calculator/telegram-icon.svg";

// Стили для переключения вкладок с помощью styled-components
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

  // Функция для поиска курса по коду валюты
  const getCurrencyRate = (code) => {
    let searchCode = code;
    // Для RUB подставляем нужную версию (например, "RUB(онлайн перевод)")
    if (code === "RUB") {
      searchCode = "RUB(онлайн перевод)";
    }
    return currenciesRates.find((c) => c.code === searchCode);
  };

  const currencies = [
    { code: "RUB", flag: "https://flagicons.lipis.dev/flags/4x3/ru.svg" },
    { code: "USD", flag: "https://flagicons.lipis.dev/flags/4x3/us.svg" },
    { code: "EUR", flag: "https://flagicons.lipis.dev/flags/4x3/eu.svg" },
    { code: "USDT", flag: "/images/usdt.jpg" },
    { code: "THB", flag: "https://flagicons.lipis.dev/flags/4x3/th.svg" },
  ];

// Функция конвертации принимает дополнительно режим (mode),
// по умолчанию mode равен значению activeTab
const handleConvert = (value, fromCurrency, toCurrency, mode = activeTab) => {
  setAmount(value);
  if (!value) {
    setConvertedAmount("");
    return;
  }

  // Если валюты одинаковые — возвращаем исходное значение
  if (fromCurrency === toCurrency) {
    setConvertedAmount(value);
    return;
  }

 // 1. Особенная пара USD ↔ USDT:
// Конвертация идёт 1:1, затем комиссия применяется от конечной суммы:
// Если mode === "buy" — к сумме прибавляется 1,9% (умножаем на 1.019),
// если mode === "sell" — из суммы вычитается 1,9% (умножаем на 0.981).
if (
  (fromCurrency === "USD" && toCurrency === "USDT") ||
  (fromCurrency === "USDT" && toCurrency === "USD")
) {
  const rawResult = value; // 1:1 конвертация
  let result;
  if (mode === "buy") {
    result = rawResult * 1.019; // прибавляем 1,9%
  } else {
    result = rawResult * 0.981; // отнимаем 1,9%
  }
  setConvertedAmount(result.toFixed(2));
  return;
}


  // 2. Прямые конвертации с участием THB:
  // Если конвертируем из любой валюты (не THB) в THB,
  // итог = сумма * курс покупки исходной валюты
  if (toCurrency === "THB" && fromCurrency !== "THB") {
    const sourceRate = getCurrencyRate(fromCurrency);
    if (!sourceRate) {
      setConvertedAmount("");
      return;
    }
    const result = value * sourceRate.buy;
    setConvertedAmount(result.toFixed(2));
    return;
  }
  // Если конвертируем из THB в любую валюту (не THB),
  // итог = сумма / курс продажи целевой валюты
  if (fromCurrency === "THB" && toCurrency !== "THB") {
    const targetRate = getCurrencyRate(toCurrency);
    if (!targetRate) {
      setConvertedAmount("");
      return;
    }
    const result = value / targetRate.sell;
    setConvertedAmount(result.toFixed(2));
    return;
  }

  // 3. Для остальных пар (без THB и без пары USD/USDT)
  // конвертация идёт через THB как промежуточную валюту
  const fromRate = getCurrencyRate(fromCurrency);
  const toRate = getCurrencyRate(toCurrency);
  if (!fromRate || !toRate) {
    setConvertedAmount("");
    return;
  }
  if (mode === "buy") {
    // Режим покупки: переводим исходную валюту в THB по курсу покупки,
    // затем из THB получаем целевую валюту по курсу покупки
    const valueInTHB = value * fromRate.buy;
    const result = valueInTHB / toRate.buy;
    setConvertedAmount(result.toFixed(2));
  } else {
    // Режим продажи: переводим исходную валюту в THB по курсу продажи,
    // затем из THB получаем целевую валюту по курсу продажи
    const valueInTHB = value * fromRate.sell;
    const result = valueInTHB / toRate.sell;
    setConvertedAmount(result.toFixed(2));
  }
};



  // Обработчик переключения вкладок, передаёт новый режим явно в функцию конвертации
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    handleConvert(amount, currencyFrom, currencyTo, tab);
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
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: "black",
          ml: 2,
          fontSize: "16px", // Только мобильные значения
        }}
      >
        Калькулятор обмена
      </Typography>

      {/* Переключение вкладок */}
      <Tabs>
        <Tab
          active={activeTab === "buy"}
          onClick={() => handleTabChange("buy")}
        >
          Покупка
        </Tab>
        <Tab
          active={activeTab === "sell"}
          onClick={() => handleTabChange("sell")}
        >
          Продажа
        </Tab>
        <ActiveTabIndicator activeTab={activeTab} />
      </Tabs>

      {/* Блок с полями ввода */}
      <Grid
        container
        spacing={2}
        sx={{
          mt: 0,
          backgroundColor: "#f5f5f5",
          borderRadius: 5,
          p: 1,
        }}
      >
        {/* Поле ввода суммы */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: "5px 10px",
              height: 40,
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Сумма"
              value={amount}
              onChange={(e) =>
                handleConvert(e.target.value, currencyFrom, currencyTo)
              }
              InputProps={{
                disableUnderline: true,
                sx: {
                  ml: 0,
                  "&::placeholder": {
                    color: "#D8D8D8",
                    fontSize: "15px",
                    lineHeight: "24px",
                  },
                },
                style: {
                  color: "#000",
                  fontSize: "15px",
                  lineHeight: "1.5",
                },
              }}
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
                fontSize: "12px",
              }}
            >
              {currencies.map((currency) => (
                <MenuItem
                  key={currency.code}
                  value={currency.code}
                  sx={{
                    fontSize: "12px",
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

        {/* Текущий курс */}
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#0E0E0E",
            mt: 1,
            ml: "50%",
            transform: "translateX(-50%)",
            mb: 1,
          }}
        >
          Текущий курс:{" "}
          {activeTab === "buy"
            ? getCurrencyRate(currencyFrom)?.buy.toFixed(2)
            : getCurrencyRate(currencyFrom)?.sell.toFixed(2)}
        </Box>

        {/* Поле вывода результата */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: "5px 10px",
              height: 40,
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
                  ml: 0,
                  "&::placeholder": {
                    color: "#D8D8D8",
                    fontSize: "15px",
                    lineHeight: "24px",
                  },
                },
                style: {
                  color: "#000",
                  fontSize: "15px",
                  lineHeight: "1.5",
                },
              }}
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
                fontSize: "12px",
              }}
            >
              {currencies.map((currency) => (
                <MenuItem
                  key={currency.code}
                  value={currency.code}
                  sx={{
                    fontSize: "12px",
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

      {/* Кнопки */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          mt: "0.4rem",
          mb: "0.4rem",
        }}
      >
        <Button
          variant="contained"
          fullWidth={false}
          sx={{
            backgroundColor: "#f87000",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "24px",
            textTransform: "none",
            letterSpacing: "0",
            padding: "12px 24px",
            minWidth: "300px",
            height: "45px",
            fontSize: "1.05rem",
            lineHeight: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          onClick={() => window.open("https://t.me/cashandgo_th", "_blank")}
          sx={{
            backgroundColor: "#27a7e7",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "24px",
            textTransform: "none",
            letterSpacing: "0",
            padding: "12px 24px",
            minWidth: "300px",
            height: "45px",
            fontSize: "1.05rem",
            lineHeight: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#2baaff",
            },
          }}
          endIcon={
            <Box
              component="img"
              src={telegramIcon}
              sx={{ width: 20, height: 20 }}
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
