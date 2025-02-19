import { Box, Typography, Container } from "@mui/material";
import { ReactComponent as LogoSVG } from "../../assets/main_logo.svg";
import Calculator from "../Calculator/Calculator";
import ExchangeRates from "../ExchangeRates/ExchangeRates";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";

const HeroSection = () => {
  const [currencyRates, setCurrencyRates] = useState([
    { country_code: "us", code: "USD", buy: 34.21516, sell: 34.96113 },
    { country_code: "eu", code: "EUR", buy: 35.62406, sell: 36.78481 },
    { country_code: "ru", code: "RUB", buy: 0.3825, sell: 0.3901 },
    { country_code: "jp", code: "JPY", buy: 0.21873, sell: 0.23002 },
    { country_code: "my", code: "MYR", buy: 7.904, sell: 8.102 },
    { country_code: "in", code: "INR", buy: 0.415, sell: 0.428 },
    { country_code: "ae", code: "AED", buy: 9.32, sell: 9.51 },
    { country_code: "gb", code: "GBP", buy: 41.57, sell: 42.89 },
    { country_code: "sg", code: "SGD", buy: 25.32, sell: 25.99 },
    { country_code: "ch", code: "CHF", buy: 38.74, sell: 39.66 },
    { country_code: "au", code: "AUD", buy: 22.34, sell: 22.99 },
    { country_code: "hk", code: "HKD", buy: 4.33562, sell: 4.53643 },
    { country_code: "ca", code: "CAD", buy: 24.19, sell: 24.78 },
    { country_code: "tw", code: "TWD", buy: 1.15, sell: 1.21 },
    { country_code: "kr", code: "KRW", buy: 0.026, sell: 0.028 },
    { country_code: "ph", code: "PHP", buy: 0.61, sell: 0.64 },
    { country_code: "nz", code: "NZD", buy: 20.99, sell: 21.55 },
    { country_code: "cn", code: "CNY", buy: 4.44117, sell: 4.93564 },
    { country_code: "sa", code: "SAR", buy: 9.12, sell: 9.28 },
    { country_code: "qa", code: "QAR", buy: 9.45, sell: 9.68 },
    { country_code: "bh", code: "BHD", buy: 91.25, sell: 93.49 },
  ]);
  
    useEffect(() => {
      const fetchCurrencyRates = async () => {
        try {
          const response = await fetch("/api/get_currencies_data");
          const data = await response.json();
  
          // Фильтруем массив, убираем USDT и заменяем RUB-значения
          const updatedRates = data.result
            .map((currency) => {
              switch (currency.code) {
                case "RUB(cash)":
                  return { ...currency, code: "RUB(наличные)" };
                case "RUB(online transfer)":
                  return { ...currency, code: "RUB(онлайн перевод)" };
                case "RUB(cash settlement)":
                  return { ...currency, code: "RUB(безналичный расчет)" };
                default:
                  return currency;
              }
            });
  
          setCurrencyRates(updatedRates);
        } catch (error) {
          console.error("Ошибка загрузки данных о курсах валют:", error);
        }
      };
  
      // Первый запрос при загрузке компонента
      fetchCurrencyRates();
  
      // Интервал обновления каждые 10 минут (600000 мс)
      const intervalId = setInterval(fetchCurrencyRates, 600000);
  
      // Очистка интервала при размонтировании компонента
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        py: "20px",
        backgroundImage: "url('/background_top2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: "-2rem", // Поднимаем весь блок вверх
          }}
        >
          {/* Логотип */}
          <Box
            sx={{
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              svg: {
                width: "400px",  
                height: "auto",
              },
            }}
          >
            <LogoSVG />
          </Box>

          {/* Текст */}
          <Box
            sx={{
              mt: "-5rem", // Уменьшаем расстояние от логотипа до текста
              textAlign: "left",
              maxWidth: "700px",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "24px",
                fontWeight: "900",
                color: "white",
                lineHeight: "1.3",
              }}
            >
              БЫСТРЫЙ И НАДЕЖНЫЙ
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "1.4",
                color: "white",
                mt: 1, // Поднимаем текст, уменьшая отступ сверху
              }}
            >
              ОБМЕН ВАЛЮТЫ И КРИПТОВАЛЮТЫ <br />
              НА БАТЫ ПО САМОМУ ВЫГОДНОМУ <br />
              КУРСУ ПО ВСЕМУ ТАЙЛАНДУ
            </Typography>
          </Box>
        </Box>

        {/* Блок с калькулятором и курсом валют */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: 2,
          }}
        >
          {/* Калькулятор */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            <Calculator currenciesRates={currencyRates} />
          </Box>

          <Element name="kurs"></Element>

          {/* Курс валют */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            <ExchangeRates currencyRates={currencyRates.filter((currency) => currency.code !== "USDT")} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
