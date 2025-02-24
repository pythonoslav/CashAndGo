import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { ReactComponent as TransferSVG } from "../TransferComponent/assets/TransferSVG.svg"; // Замените на ваш SVG
import { ReactComponent as TitleSVG } from "../TransferComponent/assets/TitleSVG.svg"; // Замените на ваш SVG
import { ReactComponent as TelegramIcon } from "../TransferComponent/assets/TelegramIcon.svg"; // Замените на ваш SVG
import { ReactComponent as WhatsAppIcon } from "../TransferComponent/assets/WhatsupIcon.svg";

const telegramLink = "https://t.me/cashandgo_th"; 
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
        p: { xs: "16px", md: "20px" },
        gap: { xs: "20px", md: "20px" },
        width: "100%",
        mb: { xs: "2rem", md: "4rem" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        {/* Левый блок с изображением */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: { xs: 0, md: "20px" },
            mb: { xs: "2rem", md: 0 },
          }}
        >
          <TransferSVG style={{ width: "100%", maxWidth: { xs: "300px", sm: "500px", md: "700px" }, height: "auto" }} />
        </Box>

        {/* Правый блок с текстом и кнопками */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, px: { xs: 2, md: 0 } }}>
          {/* Заголовок */}
          <TitleSVG style={{ marginBottom: "2rem", width: "100%", maxWidth: "400px" }} />

          {/* Описание */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "20px", md: "28px" },
              color: "#0E1111",
              mb: { xs: "1.5rem", md: "2rem" },
              fontWeight: "600",
              width: { xs: "90%", md: "90%" },
              mx: { xs: "auto", md: "0" },
            }}
          >
            Обменивайте валюту с зачислением на Ваш тайский счет любого банка Таиланда!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              color: "#0E1111",
              mb: { xs: "1.5rem", md: "2rem" },
              fontWeight: "300",
              width: { xs: "90%", md: "80%" },
              mx: { xs: "auto", md: "0" },
            }}
          >
            Выгодный курс и быстрый обмен. Удобный вариант для оплаты жилья и крупных покупок.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              color: "#0E1111",
              mb: { xs: "2rem", md: "3.5rem" },
              fontWeight: "300",
              width: { xs: "90%", md: "80%" },
              mx: { xs: "auto", md: "0" },
            }}
          >
            Свяжитесь с нами в мессенджере и узнайте актуальный курс.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#0E1111",
              fontWeight: "bold",
              mb: { xs: "1.5rem", md: "2rem" },
              fontSize: { xs: "20px", md: "24px" },
              width: { xs: "90%", md: "70%" },
              mx: { xs: "auto", md: "0" },
            }}
          >
            Рассчитайте <br /> курс индивидуально!
          </Typography>

          <Stack direction="row" spacing={4} mt={4} justifyContent={{ xs: "center", md: "flex-start" }}>
            <Button
              variant="contained"
              color="inherit"
              startIcon={<TelegramIcon />}
              sx={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                minWidth: "30px",
                p: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => openLink(telegramLink)}
            />
            <Button
              variant="contained"
              color="inherit"
              startIcon={<WhatsAppIcon />}
              sx={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                minWidth: "30px",
                p: 0,
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
