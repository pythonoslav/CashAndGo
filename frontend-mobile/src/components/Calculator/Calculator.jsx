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

// Компонент-разделитель (черточка)
const DividerLine = styled.div`
  width: 100%;
  border-bottom: 2px solid #004db4;
  margin: 20px 0;
`;

const Calculator = ({ currenciesRates }) => {
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
  // USDT → USD: +1.9%
  if (fromCurrency === "USDT" && toCurrency === "USD") {
    const result = parseFloat(value) * 1.019;
    setConvertedAmount(result.toFixed(2));
    return;
  }
  // USD → USDT: -1.9%
  if (fromCurrency === "USD" && toCurrency === "USDT") {
    const result = parseFloat(value) * 0.981;
    setConvertedAmount(result.toFixed(2));
    return;
  }

  // 2. Прямые конвертации с участием THB
  // Любая валюта (не THB) -> THB: умножаем на buy
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

  // THB -> любая валюта (не THB): делим на sell
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
  // Сначала переводим из fromCurrency в THB (умножаем на buy)
  // Затем из THB в toCurrency, деля на buy целевой
  const fromRate = getCurrencyRate(fromCurrency);
  const toRate = getCurrencyRate(toCurrency);
  if (!fromRate || !toRate) {
    setConvertedAmount("");
    return;
  }

  let valueInTHB = parseFloat(value) * fromRate.buy;

  // Если исходная валюта RUB — делим на 100 
  if (fromCurrency === "RUB") {
    valueInTHB = parseFloat(value) / fromRate.buy;
  }

  const result = valueInTHB / toRate.buy;
  setConvertedAmount(result.toFixed(2));
};





  // Получение «текущего курса» для отображения
const getCurrentRateValue = () => {
  // Если валюты совпадают, курс = 1
  if (currencyFrom === currencyTo) return 1;

  // USD ↔ USDT (просто пример — всегда 1.019)
  if (
    (currencyFrom === "USD" && currencyTo === "USDT") ||
    (currencyFrom === "USDT" && currencyTo === "USD")
  ) {
    return 1.019; // возвращаем число
  }

  // Из THB в любую валюту (не THB) => sell целевой
  if (currencyFrom === "THB" && currencyTo !== "THB") {
    const targetRate = getCurrencyRate(currencyTo);
    return targetRate ? targetRate.sell : null; // возвращаем число или null
  }
  // Из любой валюты (не THB) в THB => buy исходной
  if (currencyTo === "THB" && currencyFrom !== "THB") {
    const sourceRate = getCurrencyRate(currencyFrom);
    return sourceRate ? sourceRate.buy : null;
  }

  // Для остальных пар — отношение buy одной валюты к buy другой
  const fromRate = getCurrencyRate(currencyFrom);
  const toRate = getCurrencyRate(currencyTo);
  if (fromRate && toRate) {
    // Возвращаем чистое число (без toFixed)
    return fromRate.buy / toRate.buy;
  }

  return null;
};


  const currentRate = getCurrentRateValue();

  // Функция для переключения местами валют
  const handleSwitchCurrencies = () => {
    // Запоминаем старые значения
    const oldFrom = currencyFrom;
    const oldTo = currencyTo;
    const oldConverted = convertedAmount;

    // Меняем местами
    setCurrencyFrom(oldTo);
    setCurrencyTo(oldFrom);

    // Пересчитываем
    if (oldConverted) {
      // Если есть уже посчитанная сумма, используем её как "новую исходную"
      handleConvert(oldConverted, oldTo, oldFrom);
    } else {
      // Если поля были пусты или не было результата — просто пересчитываем со старым amount
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
          fontSize: "16px", // Только мобильные значения
        }}
      >
        Калькулятор обмена
      </Typography>

      {/* Разделительная черточка */}
      <DividerLine />

      {/* Поля ввода */}
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
        {/* "Вы отдаёте" */}
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              mb: 1,
              ml: 1,
              color: "black",
            }}
          >
            Вы отдаёте
          </Typography>
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

        {/* "Вы получаете" */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",       // Центрируем по вертикали
              justifyContent: "space-between",
              height: 40,                 // Фиксированная высота строки (при необходимости)
              mb: 2,                     // Горизонтальные отступы
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "black",
                ml: 1,                   // Отступ слева
              }}
            >
              Вы получаете
            </Typography>

            <IconButton
              onClick={handleSwitchCurrencies}
              sx={{
                mr: '2rem',
                // Начальный фон
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                borderRadius: "50%",
                transition: "background-color 0.2s ease",
                // При нажатии
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

          <Box
            sx={{
              textAlign: "center",
              mt: 2,
              fontSize: "14px",
              color: "#0E0E0E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: 0 }}>
               Текущий курс: {currentRate ? currentRate.toFixed(2) : "0"}
            </Typography>

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
