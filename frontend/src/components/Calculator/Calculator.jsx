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
  IconButton,
} from "@mui/material";
import telegramIcon from "../Calculator/telegram-icon.svg";
import switch_icon from "../Calculator/switch_calculator.svg";
import { useLanguage } from "../../helpers/LanguageContext";
// Компонент-разделитель (черточка)
const DividerLine = styled.div`
  width: 100%;
  border-bottom: 2px solid #004db4;
  margin: 10px 0;
`;

const Calculator = ({ currenciesRates }) => {
  const [currencyFrom, setCurrencyFrom] = useState("RUB");
  const [currencyTo, setCurrencyTo] = useState("THB");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const { language } = useLanguage();

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

  // Основная функция конвертации
  const handleConvert = (value, fromCurrency, toCurrency) => {
    setAmount(value);

    // Если нет значения, очищаем результат
    if (!value) {
      setConvertedAmount("");
      return;
    }

    // Если валюты одинаковые — возвращаем исходное значение
    if (fromCurrency === toCurrency) {
      setConvertedAmount(value);
      return;
    }

    // 1. Особенная пара USD ↔ USDT: ±1.9%
    if (fromCurrency === "USDT" && toCurrency === "USD") {
      const result = parseFloat(value) * 1.019;
      setConvertedAmount(result.toFixed(2));
      return;
    }
    if (fromCurrency === "USD" && toCurrency === "USDT") {
      const result = parseFloat(value) * 0.981;
      setConvertedAmount(result.toFixed(2));
      return;
    }

    // 2. Прямые конвертации с участием THB
    if (toCurrency === "THB" && fromCurrency !== "THB") {
      const sourceRate = getCurrencyRate(fromCurrency);
      if (!sourceRate) {
        setConvertedAmount("");
        return;
      }
      let result = parseFloat(value) * sourceRate.buy;
      // Если исходная валюта RUB — делим ещё на 100
      if (fromCurrency === "RUB") {
        result = parseFloat(value) / sourceRate.buy;
      }
      setConvertedAmount(result.toFixed(2));
      return;
    }
    if (fromCurrency === "THB" && toCurrency !== "THB") {
      const targetRate = getCurrencyRate(toCurrency);
      if (!targetRate) {
        setConvertedAmount("");
        return;
      }
      let result = parseFloat(value) / targetRate.sell;
      if (toCurrency === "RUB") {
        result = parseFloat(value) * targetRate.sell;
      }
      setConvertedAmount(result.toFixed(2));
      return;
    }

    // 3. Остальные пары (не THB, не USD↔USDT) через THB
    const fromRate = getCurrencyRate(fromCurrency);
    const toRate = getCurrencyRate(toCurrency);
    if (!fromRate || !toRate) {
      setConvertedAmount("");
      return;
    }
    let valueInTHB = parseFloat(value) * fromRate.buy;
    if (fromCurrency === "RUB") {
      valueInTHB = parseFloat(value) / fromRate.buy;
    }
    const result = valueInTHB / toRate.buy;
    setConvertedAmount(result.toFixed(2));
  };

  // Получение «текущего курса» для отображения
  const getCurrentRateValue = () => {
    if (currencyFrom === currencyTo) return 1;
    if (
      (currencyFrom === "USD" && currencyTo === "USDT") ||
      (currencyFrom === "USDT" && currencyTo === "USD")
    ) {
      return 1.019;
    }
    if (currencyFrom === "THB" && currencyTo !== "THB") {
      const targetRate = getCurrencyRate(currencyTo);
      return targetRate ? targetRate.sell : null;
    }
    if (currencyTo === "THB" && currencyFrom !== "THB") {
      const sourceRate = getCurrencyRate(currencyFrom);
      return sourceRate ? sourceRate.buy : null;
    }
    const fromRate = getCurrencyRate(currencyFrom);
    const toRate = getCurrencyRate(currencyTo);
    if (fromRate && toRate) {
      return fromRate.buy / toRate.buy;
    }
    return null;
  };

  const currentRate = getCurrentRateValue();

  // Функция для переключения местами валют
  const handleSwitchCurrencies = () => {
    const oldFrom = currencyFrom;
    const oldTo = currencyTo;
    const oldConverted = convertedAmount;
    setCurrencyFrom(oldTo);
    setCurrencyTo(oldFrom);
    if (oldConverted) {
      handleConvert(oldConverted, oldTo, oldFrom);
    } else {
      handleConvert(amount, oldTo, oldFrom);
    }
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
          fontSize: { xs: 16, md: 32 },
        }}
      >
        {language === "ru" ? "Калькулятор обмена" : "Exchange rate calculator"}
      </Typography>

      <DividerLine />

      <Grid
        container
        spacing={2}
        sx={{
          mt: 0,
          backgroundColor: "#f5f5f5",
          borderRadius: 5,
          p: { xs: 1, md: 1 },
        }}
      >
        {/* "Вы отдаёте" */}
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "14px", md: "18px" },
              mb: 1,
              ml: 1,
              color: "black",
            }}
          >
            {language === "ru" ? "Вы отдаёте" : "Amount to exchange"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: "5px 10px",
              height: { xs: 40, md: 70 },
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder={language === "ru" ? "Сумма" : "Amount"}
              value={amount}
              onChange={(e) =>
                handleConvert(e.target.value, currencyFrom, currencyTo)
              }
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
                gap: { xs: 1, md: 2 },
                fontWeight: "bold",
                fontSize: { xs: "12px", md: "18px" },
              }}
            >
              {currencies.map((currency) => (
                <MenuItem
                  key={currency.code}
                  value={currency.code}
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
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

        {/* "Вы получаете" */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: { xs: 40, md: 70 },
              mb: '2px',
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "18px" },
                color: "black",
                ml: 1,
              }}
            >
               {language === "ru" ? "Вы получаете" : "Amount to receive"}
            </Typography>

            <IconButton
              onClick={handleSwitchCurrencies}
              sx={{
                mr: { xs: "1rem", md: "2rem" },
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                borderRadius: "50%",
                transition: "background-color 0.2s ease",
                "&:active": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <img
                src={switch_icon}
                alt="Поменять местами"
                style={{ width: 20, height: 20 }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 15,
              padding: "5px 10px",
              height: { xs: 40, md: 70 },
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder={language === "ru" ? "Результат" : "Amount"}
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
                gap: { xs: 1, md: 2 },
                fontWeight: "bold",
                fontSize: { xs: "12px", md: "18px" },
              }}
            >
              {currencies.map((currency) => (
                <MenuItem
                  key={currency.code}
                  value={currency.code}
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
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

          <Box
            sx={{
              textAlign: "center",
              mt: 2,
              fontSize: { xs: "14px", md: "18px" },
              color: "#0E0E0E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: 0 }}>
              {language === 'ru' ? "Текущий курс: " : "Curren rate: "  }
              {currentRate ? currentRate.toFixed(2) : "0"}
            </Typography>
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
          {language === 'ru' ? "Способы получения наличных" : "Ways to receive cash"}
          
        </Button>

        <Button
          variant="contained"
          onClick={() => window.open("https://t.me/cashandgo_th", "_blank")}
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
          {language === 'ru' ? "Обменять в Telegram" : "Exchange in Telegram"}
          
        </Button>
      </Box>

    </Box>
  );
};

export default Calculator;
