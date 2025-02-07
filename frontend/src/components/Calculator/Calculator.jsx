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
import flagTHB from "../../assets/flag-thb.svg";
import flagUSD from "../../assets/flag-usd.svg";
import flagEUR from "../../assets/flag-jpy.svg";




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
  const [currencyFrom, setCurrencyFrom] = useState("THB");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencies = [
    { code: "THB", flag: flagTHB },
    { code: "USD", flag: flagUSD },
    { code: "EUR", flag: flagEUR },
    { code: "USDT", flag: flagEUR },
    { code: "RUB", flag: flagEUR },
  ];




  const getCurrencyRate = (code) => currenciesRates.find((c) => c.code === code);

  const handleConvert = (value, fromCurrency) => {
    setAmount(value);
    const rate = getCurrencyRate(fromCurrency);
    if (!rate || !value) {
      setConvertedAmount("");
      return;
    }

    let result;
    if (activeTab === "buy") {
      result = value * rate.sell;
    } else {
      result = value / rate.buy;
    }
    setConvertedAmount(result.toFixed(5));
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
              type="number"
              value={amount}
              onChange={(e) => handleConvert(e.target.value, currencyFrom)}
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
            {activeTab === "buy" ? (
              <Select
                value={currencyFrom}
                onChange={(e) => {
                  setCurrencyFrom(e.target.value);
                  handleConvert(amount, e.target.value);
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
                      fontSize: { xs: 12, md: 18 },
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <img
                        src={currency.flag}
                        alt={currency.code}
                        style={{
                          width: { xs: 15, md: 30 }, // Увеличиваем ширину картинки
                          height: { xs: 15, md: 30 }, // Увеличиваем высоту картинки
                          borderRadius: "50%",
                        }}
                      />
                      {currency.code}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Select
                value={"THB"} 
                variant="standard"
                disableUnderline
                sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "18px" } }}
                disabled 
              >
                <MenuItem value="THB">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <img
                      src={flagTHB}
                      alt="THB"
                      style={{
                        width: { xs: 15, md: 30 }, 
                        height: { xs: 15, md: 30 }, 
                        borderRadius: "50%",
                      }}
                    />
                    THB
                  </Box>
                </MenuItem>
              </Select>
            )}

          </Box>
        </Grid>
        <div style={{ display: 'flex', justifyItems: 'center', margin: '20px' }}> <span> || </span>  </div>
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
            {activeTab !== "buy" ? (
              <Select
                value={currencyTo}
                onChange={(e) => setCurrencyTo(e.target.value)}
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
                      fontSize: { xs: 12, md: 18 },
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <img
                        src={currency.flag}
                        alt={currency.code}
                        style={{
                          width: { xs: 15, md: 30 }, // Увеличиваем ширину картинки
                          height: { xs: 15, md: 30 }, // Увеличиваем высоту картинки
                          borderRadius: "50%",
                        }}
                      />
                      {currency.code}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Select
                value={"THB"} // Зафиксировали значение на THB
                variant="standard"
                disableUnderline
                sx={{ fontWeight: "bold", fontSize: { xs: "14px", md: "18px" } }}
                disabled // Отключили возможность изменения
              >
                <MenuItem value="THB">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <img
                      src={flagTHB}
                      alt="THB"
                      style={{
                        width: { xs: 15, md: 30 }, // Увеличиваем ширину картинки
                        height: { xs: 15, md: 30 }, // Увеличиваем высоту картинки
                        borderRadius: "50%",
                      }}
                    />
                    THB
                  </Box>
                </MenuItem>
              </Select>
            )}


          </Box>
        </Grid>
      </Grid>

      {/* Button */}
      <Button
        variant="contained"
        fullWidth={false}
        sx={{
          backgroundColor: "#f87000",
          color: "#fff",
          fontWeight: "bold",
          mt: 3,
          borderRadius: "20px", // Закругление по краям кнопки
          display: "block",
          textTransform: "none",
          letterSpacing: "0",
          mx: "auto", // Горизонтальное центрирование
          "&:hover": {
            backgroundColor: "#ff9000",
          },
          transform: 'scale(1.2)'
        }}
      >
        Способы получения наличных
      </Button>
    </Box>
  );
};

export default Calculator;
