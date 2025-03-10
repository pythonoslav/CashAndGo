import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ReactComponent as TransferSVG } from "../TransferComponent/assets/TransferSVG.svg";
import { ReactComponent as TitleSVG } from "../TransferComponent/assets/TitleSVG.svg";
import { ReactComponent as TitleSVG_en } from "../TransferComponent/assets/TitleSVG_en.svg"; 
import { ReactComponent as TelegramIcon } from "../TransferComponent/assets/TelegramIcon.svg";
import { ReactComponent as WhatsAppIcon } from "../TransferComponent/assets/WhatsupIcon.svg";
import { useLanguage } from "../../helpers/LanguageContext";

const telegramLink = "https://t.me/cashandgo_th";
const whatsappLink = "https://wa.me/message/FTPE4X4MDBSWA1";

const TransferToThaiAccount = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const {language} = useLanguage()

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        textAlign: "left",
        position: "relative",
        overflow: "hidden", // скрывает выступающее содержимое
      }}
    >
      {/* Заголовок (SVG) */}
      <Box sx={{ width: "100%", maxWidth: 300, mb: 2, position: "relative", zIndex: 2 }}>
         {language === 'ru' ?  <TitleSVG style={{ marginBottom: "2rem", width: "100%", maxWidth: "400px" }} /> :  <TitleSVG_en style={{ marginBottom: "2rem", width: "100%", maxWidth: "450px" }} />}
      </Box>

      {/* Текстовый блок */}
      <Box sx={{ position: "relative", zIndex: 2, pr: "20px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "18px",
            color: "#0E1111",
            mb: '2rem',
            width: "95%",
          }}
        >
         {language === 'ru' ? "Обменивайте валюту с зачислением на Ваш тайский счет любого банка Таиланда!" : "Exchange currency with a direct deposit to any Thai bank account!"}
         
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: "20px",
            color: "#0E1111",
            mb: 1,
            width: "65%"
          }}
        >
           {language === 'ru' ? "Выгодный курс и быстрый обмен. Удобный вариант для оплаты жилья и крупных покупок." : "Great rates & fast transactions"}
           
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: "20px",
            color: "#0E1111",
            mb: 1,
            width: "65%"
          }}
        >
          {language === 'ru' ? "Свяжитесь с нами в мессенджере и узнайте актуальный курс." : "Contact us via messenger to get the latest exchange rate."}
            
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#0E1111",
            mb: 2,
          }}
        >
         {language === 'ru' ? "Рассчитайте" : "Calculate "}
         <br /> {language === 'ru' ? "курс индивидуально!" : "your rate individually! "}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button
            variant="contained"
            disableRipple
            startIcon={<TelegramIcon />}
            onClick={() => openLink(telegramLink)}
            sx={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              minWidth: "40px",
              p: 0,
              backgroundColor: "transparent", // убираем фон
              boxShadow: "none",              // убираем тень
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.1)", // или прозрачное изменение
              },
            }}
          />
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={() => openLink(whatsappLink)}
            sx={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              minWidth: "40px",
              p: 0,
              backgroundColor: "transparent", // убираем фон
              boxShadow: "none",              // убираем тень
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.1)", // или прозрачное изменение
              },
            }}
          />
        </Stack>
      </Box>

      {/* Абсолютно позиционированное изображение справа, фиксированной ширины */}
      <Box
        sx={{
          position: "absolute",
          right: "-40px", // Отрицательный отступ для выхода за правый край
          top: "40%",
          width: "230px", // Фиксированная ширина, которая не изменяется
          zIndex: 1,
        }}
      >
        <TransferSVG style={{ width: "100%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default TransferToThaiAccount;
