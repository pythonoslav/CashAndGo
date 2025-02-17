import React from "react";
import { Box, Typography, Button, Stack, List, ListItem } from "@mui/material";
import { ReactComponent as ScooterIcon } from "../DeliveryComponent/assets/Scoter.svg";
import { ReactComponent as Title } from "../DeliveryComponent/assets/CourierDeleveryTEXT.svg";
import { ReactComponent as TelegramIcon } from "../../assets/telegram-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/whatsapp-icon.svg";
import { ReactComponent as Timer } from "../../assets/time_picture.svg";

const telegramLink = "https://t.me/";
const whatsappLink = "https://wa.me/message/FTPE4X4MDBSWA1";

const CourierDelivery = () => {
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
        mb: "2rem",
        position: "relative",
        overflow: "hidden", // Убираем горизонтальный скролл
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
        }}
      >
        {/* Левый блок */}
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            maxWidth: "600px", // Фиксированная ширина текста
          }}
        >
          <Title />
          <Typography
            variant="body1"
            sx={{
              fontSize: "24px",
              color: "#0E1111",
              marginBottom: "20px",
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            Курьерская служба Cash & Go осуществляет доставку тайских бат в любое место Пхукета, Бангкока, Паттайи.
          </Typography>

          {/* Шаги */}
          <List sx={{ marginBottom: "20px" }}>
            {["Договоритесь о месте встречи с менеджером сервиса в Telegram или WhatsApp", 
              "Дождитесь курьера", 
              "Переведите оплату по нашим реквизитам и получите наличные"].map((text, index) => (
              <ListItem key={index} sx={{ display: "flex", gap: "10px", alignItems: "center", padding: "8px 0" }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#004db4",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </Box>
                <Typography variant="body1" sx={{ color: "#0E1111", fontSize: "18px" }}>{text}</Typography>
              </ListItem>
            ))}
          </List>

          {/* Кнопки */}
          <Typography variant="body1" sx={{ fontWeight: "600", marginBottom: "10px", fontSize: "24px", color: "#0E1111" }}>
            Закажите доставку наличных прямо к себе в отель, домой или на работу!
          </Typography>

          <Stack direction="column" spacing={2} mt={4}>
            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              sx={{ borderRadius: "50px", padding: "15px 20px", maxWidth: "293px", backgroundColor: "#27a7e7" }}
              onClick={() => openLink(telegramLink)}
            >
              Обменять в Telegram
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              sx={{ borderRadius: "50px", padding: "15px 20px", maxWidth: "293px", backgroundColor: "#2cb742" }}
              onClick={() => openLink(whatsappLink)}
            >
              Обменять в WhatsApp
            </Button>
          </Stack>
        </Box>

        {/* Правый блок с мопедом */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          {/* Контейнер с мопедом */}
          <Box
            sx={{
              position: "absolute",
              right: "5%", // Чуть выдвигаем за границу, но не создаем скроллинг
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: "calc(100% + 100px)", // Даем мопеду пространство
              overflow: "visible", // Разрешаем выходить за границы
            }}
          >
            <ScooterIcon style={{ height: "650px", zIndex: 1 }} />
          </Box>

          {/* Блок с таймером поверх мопеда */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "absolute",
              bottom: "-10px",
              right: "10%",
              transform: "translateX(-50%)",
              zIndex: 2,
              padding: "8px 12px",
              borderRadius: "8px",
            }}
          >
            <Typography sx={{ color: "#0E1111", fontWeight: "600", fontSize: "24px", mr: 1 }}>
              Экономим Ваше время! <br />Доставка за 1 час
            </Typography>
            <Timer style={{ height: "90px", width: "auto" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourierDelivery;
