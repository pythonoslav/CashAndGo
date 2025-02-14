import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ReactComponent as TransferSVG } from "../TransferComponent/assets/TransferSVG.svg"; // Замените на ваш SVG
import { ReactComponent as TitleSVG } from "../TransferComponent/assets/TitleSVG.svg"; // Замените на ваш SVG
import { ReactComponent as TelegramIcon } from "../TransferComponent/assets/TelegramIcon.svg"; // Замените на ваш SVG
import { ReactComponent as WhatsAppIcon } from "../TransferComponent/assets/WhatsupIcon.svg";


const telegramLink = "https://t.me/"; // Телеги пока что нет
const whatsappLink = "https://wa.me/message/FTPE4X4MDBSWA1";


const TransferToThaiAccount = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        padding: "20px",
        gap: "20px",
        width: "100%",
        marginBottom: "4rem"
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Левый блок */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: { xs: "0", md: "20px" },
          }}
        >
          <TransferSVG style={{ height: "auto" }} />
        </Box>

        {/* Правый блок */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          {/* Заголовок */}
          <TitleSVG style={{marginBottom: '2rem'}}/>

          {/* Описание */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "28px",
              color: "#0E1111",
              marginBottom: "2rem",
              fontWeight: "600",
              width: "90%",
            }}
          >
            Обменивайте валюту с зачислением на Ваш тайский счет любого банка Таиланда!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "22px",
              color: "#0E1111",
              marginBottom: "2rem",
              fontWeight: "300",
              width: "80%",
            }}
          >
            Выгодный курс и быстрый обмен. Удобный вариант для оплаты жилья и крупных покупок.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "22px",
              color: "#0E1111",
              marginBottom: "3.5rem",
              fontWeight: "300",
              width: "80%",
            }}
          >
            Свяжитесь с нами в мессенджере и узнайте актуальный курс.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#0E1111",
              fontWeight: "bold",
              marginBottom: "2rem",
              fontSize: "24px",
              width: "70%",
            }}
          >
            Рассчитайте <br /> курс индивидуально!
          </Typography>

          <Stack direction="row" spacing={4} mt={4} ml={2}>
            <Button
              variant="contained"
              color="none"
              startIcon={<TelegramIcon />}
              sx={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                minWidth: "30px",
                padding: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => openLink(telegramLink)}
            />
            <Button
              variant="contained"
              color="none"
              startIcon={<WhatsAppIcon />}
              sx={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                minWidth: "30px",
                padding: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => openLink(whatsappLink)}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TransferToThaiAccount;
