import { Box, Typography, Container } from "@mui/material";
import { ReactComponent as LogoSVG } from "../../assets/main_logo.svg";
import Calculator from "../Calculator/Calculator";
import ExchangeRates from "../ExchangeRates/ExchangeRates";
import { useEffect, useState } from "react";


const HeroSection = () => {
  const [currencyRates, setCurrencyRates] = useState([
    { code: "USD", buy: 34.21516, sell: 34.96113 },
    { code: "CNY", buy: 4.44117, sell: 4.93564 },
    { code: "EUR", buy: 35.62406, sell: 3.678481 },
    { code: "JPY", buy: 0.21873, sell: 0.23002 },
    { code: "HKD", buy: 4.33562, sell: 4.53643 },
    { code: "ONE", buy: 35.62406, sell: 3.678481 },
    
  ]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch("/api/get_currencies_data");
        const data = await response.json();
        debugger
        setCurrencyRates(data);
      } catch (error) {
        console.error("Ошибка загрузки данных о курсах валют:", error);
      }
    };

    fetchCurrencyRates();
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
        padding: "20px 0",
        backgroundImage: "url('/background_top2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1440px', width: "90%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Header Content */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", width: "100%", mt: { xs: 0, md: -4 } }}>
          {/* Логотип */}
          <Box sx={{ flexShrink: 0, display: "flex", justifyContent: "center", svg: { width: "700px", height: "auto" }, "@media (max-width: 768px)": { svg: { width: "350px" } } }}>
            <LogoSVG />
          </Box>

          {/* Текст */}
          <Box sx={{ textAlign: "left", mt: { xs: -8, md: 0 }, maxWidth: "600px"}}>
            <Typography variant="h4" sx={{ fontSize: { xs: "22px", md: "46px" }, fontWeight: "900", color: "white" }}>
              БЫСТРЫЙ И НАДЕЖНЫЙ
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: "16px", md: "30px" }, fontWeight: "600", lineHeight: "31px", color: "white", mt: 2 }}>
              ОБМЕН ВАЛЮТЫ И КРИПТОВАЛЮТЫ<br />НА БАТЫ ПО САМОМУ ВЫГОДНОМУ<br />КУРСУ ПО ВСЕМУ ТАЙЛАНДУ
            </Typography>
          </Box>
        </Box>

        {/* Контент: Калькулятор и Курс валют */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "50px", alignItems: "center", justifyContent: "center", width: "100%", mt: { xs: 4, md: 4 } }}>
          <Calculator currenciesRates={currencyRates}/>
          <ExchangeRates currencyRates={currencyRates}/>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
