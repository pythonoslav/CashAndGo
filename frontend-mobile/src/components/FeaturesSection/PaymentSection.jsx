import React from 'react';
import alfa_bankLogo from '../../assets/payment_logo/alfa_bank.svg';
import mirLogo from '../../assets/payment_logo/mir.svg';
import sbpLogo from '../../assets/payment_logo/sbp.svg';
import sberbankLogo from '../../assets/payment_logo/sberbank.svg';
import tbankLogo from '../../assets/payment_logo/tinkoff.svg';
import sovkombankLogo from '../../assets/payment_logo/sovkombank.svg';
import raiffeisenbankLogo from '../../assets/payment_logo/raiffeisen.svg';
import RSXBbankLogo from '../../assets/payment_logo/RSXB.svg'; 
import otkritiebankLogo from '../../assets/payment_logo/otkritie.svg'; 
import vtbbankLogo from '../../assets/payment_logo/vtb_bank.svg';
import { Box } from "@mui/material";


const logos = [
    {
      src: mirLogo,
      alt: "Mir",
      sizes: { xs: "50px", sm: "60px", md: "70px", lg: "134px" },
    },
    {
      src: sbpLogo,
      alt: "SBP",
      sizes: { xs: "50px", sm: "60px", md: "80px", lg: "164px" },
    },
    {
      src: sberbankLogo,
      alt: "Sberbank",
      sizes: { xs: "60px", sm: "80px", md: "100px", lg: "259px" },
    },
    {
      src: tbankLogo,
      alt: "T Bank",
      sizes: { xs: "40px", sm: "50px", md: "60px", lg: "129px" },
    },
    {
      src: alfa_bankLogo,
      alt: "Alfa Bank",
      sizes: { xs: "50px", sm: "70px", md: "90px", lg: "181px" },
    },
    {
      src: sovkombankLogo,
      alt: "Sovkombank",
      sizes: { xs: "80px", sm: "100px", md: "120px", lg: "327px" },
    },
    {
      src: raiffeisenbankLogo,
      alt: "Raiffeisen Bank",
      sizes: { xs: "50px", sm: "70px", md: "90px", lg: "170px" },
    },
    {
      src: RSXBbankLogo,
      alt: "RSXB",
      sizes: { xs: "50px", sm: "60px", md: "70px", lg: "157px" },
    },
    {
      src: otkritiebankLogo,
      alt: "Otkritie Bank",
      sizes: { xs: "60px", sm: "80px", md: "100px", lg: "225px" },
    },
    {
      src: vtbbankLogo,
      alt: "VTB Bank",
      sizes: { xs: "40px", sm: "50px", md: "60px", lg: "104px" },
    },
  ];
  
  const PaymentSection = () => {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(5, 1fr)", // 2 в строке для мобильных
            sm: "repeat(3, 1fr)", // 3 в строке для планшетов
            md: "repeat(4, 1fr)", // 4 в строке для больших экранов
            lg: "repeat(5, 1fr)", // 5 в строке для десктопа
          },
          gap: 3,
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: { xs: logo.sizes.xs, sm: logo.sizes.sm, md: logo.sizes.md, lg: logo.sizes.lg },
              height: "auto",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            {/* Основной логотип */}
            <Box
              component="img"
              src={logo.src}
              alt={logo.alt}
              sx={{
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Box>
        ))}
      </Box>
    );
  };
  
  export default PaymentSection;