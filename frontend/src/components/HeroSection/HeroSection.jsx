import { Box, Typography, Container } from "@mui/material";
import { ReactComponent as LogoSVG } from "../../assets/main_logo.svg";
import Calculator from "../Calculator/Calculator";
import ExchangeRates from "../ExchangeRates/ExchangeRates";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { useLanguage } from "../../helpers/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();
  const [fullCurrencyRates, setFullCurrencyRates] = useState([]); // Полный набор данных для калькулятора
  const [filteredCurrencyRates, setFilteredCurrencyRates] = useState([]); // Отфильтрованный для ExchangeRates

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch("/api/get_currencies_data");
        const data = await response.json();

        // Полный массив с заменами только по языку для калькулятора
        let updatedFullRates = data.result;
        if (language === "ru") {
          updatedFullRates = data.result.map((currency) => {
            switch (currency.code) {
              case "RUB(cash)":
                return { ...currency, code: "RUB(наличные)" };
              case "RUB(online transfer)":
                return { ...currency, code: "RUB(онлайн перевод)" };
              case "RUB(cash settlement)":
                return { ...currency, code: "RUB(наличные)" };
              default:
                return currency;
            }
          });
        }
        setFullCurrencyRates(updatedFullRates);

        // Отфильтрованный массив для ExchangeRates без USDT
        const filteredRates = data.result.filter(
          (currency) => currency.code !== "USDT"
        );
        
        // Дополнительная фильтрация и форматирование для ExchangeRates
        const formattedRates = filteredRates.map((currency) => {
          if (language === "ru") {
            switch (currency.code) {
              case "RUB(cash)":
                return { ...currency, code: "RUB (наличные)" };
              case "RUB(online transfer)":
                return { ...currency, code: "RUB (онлайн)" };
              case "RUB(cash settlement)":
                return { ...currency, code: "RUB (наличные)" };
              default:
                return currency;
            }
          } else {
            switch (currency.code) {
              case "RUB(cash)":
                return { ...currency, code: "RUB (cash)" };
              case "RUB(online transfer)":
                return { ...currency, code: "RUB (transfer)" };
              case "RUB(cash settlement)":
                return { ...currency, code: "RUB (cash)" };
              default:
                return currency;
            }
          }
        });
        
        setFilteredCurrencyRates(formattedRates);

      } catch (error) {
        console.error("Ошибка загрузки данных о курсах валют:", error);
      }
    };

    fetchCurrencyRates();
  }, [language]);

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
          maxWidth: "1440px",
          px: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Верхний блок: Логотип + Текст */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mt: { xs: 0, md: -8 },
          }}
        >
          {/* Логотип */}
          <Box
            sx={{
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", md: "auto" },
              svg: {
                width: { xs: "300px", md: "700px" },
                height: "auto",
              },
            }}
          >
            <LogoSVG />
          </Box>

          {/* Текст */}
          <Box
            sx={{
              mt: { xs: 2, md: -2 },
              textAlign: { xs: "center", md: "left" },
              maxWidth: "700px",
              width: "100%",
              ml: '2rem'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "20px", md: "42px" },
                fontWeight: "900",
                color: "white",
                lineHeight: { xs: "1.3", md: "1.3" },
              }}
            >
              {language === 'ru' ? "БЫСТРЫЙ И НАДЕЖНЫЙ" : "FAST AND SECURE"}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", md: "30px" },
                fontWeight: "600",
                lineHeight: { xs: "1.4", md: "31px" },
                color: "white",
                mt: 2,
              }}
            > 
              {language === 'ru' ? "ОБМЕН ВАЛЮТЫ И КРИПТОВАЛЮТЫ" : "CURRENCY AND CRYPTO EXCHANGE"} <br />
              {language === 'ru' ? "НА БАТЫ ПО САМОМУ ВЫГОДНОМУ" : "AT THE BEST RATES"}
              {language === 'ru' ? "КУРСУ ПО ВСЕМУ ТАЙЛАНДУ" : ""}
            </Typography>
          </Box>
        </Box>

        {/* Калькулятор и Курс валют */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "100px",
            alignItems: "stretch",
            justifyContent: "center",
            width: "100%",
            mt: { xs: 2, md: -10 },
          }}
        >
          {/* Калькулятор */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "calc((100% - 125px) / 2)" },
              width: { xs: "100%", md: "calc((100% - 125px) / 2)" },
            }}
          >
            <Calculator currenciesRates={fullCurrencyRates} />
          </Box>
          <Element name="kurs"></Element>
          {/* Курс валют */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "calc((100% - 100px) / 2)" },
              width: { xs: "100%", md: "calc((100% - 100px) / 2)" },
            }}
          >
            <ExchangeRates currencyRates={filteredCurrencyRates} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;