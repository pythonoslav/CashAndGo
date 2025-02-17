import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ReactComponent as TransferSVG } from "../TransferComponent/assets/TransferSVG.svg";
import { ReactComponent as TitleSVG } from "../TransferComponent/assets/TitleSVG.svg";
import { ReactComponent as TelegramIcon } from "../TransferComponent/assets/TelegramIcon.svg";
import { ReactComponent as WhatsAppIcon } from "../TransferComponent/assets/WhatsupIcon.svg";

const telegramLink = "https://t.me/";
const whatsappLink = "https://wa.me/message/FTPE4X4MDBSWA1";

const TransferToThaiAccount = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
        <TitleSVG style={{ width: "100%", height: "auto" }} />
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
          Обменивайте валюту с зачислением на Ваш тайский счет любого банка Таиланда!
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
          Выгодный курс и быстрый обмен. Удобный вариант для оплаты жилья и крупных покупок.
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
          Свяжитесь с нами в мессенджере и узнайте актуальный курс.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#0E1111",
            mb: 2,
          }}
        >
          Рассчитайте <br /> курс индивидуально!
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
