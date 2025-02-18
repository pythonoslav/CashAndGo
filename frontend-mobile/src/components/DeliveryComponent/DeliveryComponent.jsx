import React from "react";
import { Box, Typography, Button, Stack, List, ListItem } from "@mui/material";
import { ReactComponent as ScooterIcon } from "../DeliveryComponent/assets/Scoter.svg";
import { ReactComponent as Title } from "../DeliveryComponent/assets/CourierDeleveryTEXT.svg";
import { ReactComponent as TelegramIcon } from "../DeliveryComponent/assets/tg_delivery.svg";
import { ReactComponent as WhatsAppIcon } from "../DeliveryComponent/assets/wt_delivery.svg";
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
        flexDirection: "column",
        p: 2,
        gap: 2,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Заголовок (SVG) */}
      <Box sx={{ width: "100%", maxWidth: 420 }}>
        <Title style={{ width: "100%", height: "auto" }} />
      </Box>

      {/* Текст о доставке */}
      <Typography
        sx={{
          fontSize: "16px",
          color: "#0E1111",
          fontWeight: 600,
        }}
      >
        Курьерская служба Cash & Go осуществляет доставку тайских бат в любое место Пхукета,
        Бангкока, Паттайи.
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
              <Typography variant="body1" sx={{ color: "#0E1111", fontSize: "14px", fontWeight: '300' }}>{text}</Typography>
            </ListItem>
          ))}
      </List>


      <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#0E1111", marginTop: '-1rem' }}>
        Закажите доставку наличных прямо к себе в отель, домой или на работу!
      </Typography>

      {/* Кнопки */}
      <Stack direction="column" spacing={1.5} sx={{ mt: 1 }}>
        <Button
          variant="contained"
          startIcon={<TelegramIcon />}
          sx={{
            borderRadius: "50px",
            py: 1,
            px: 2,
            backgroundColor: "#27a7e7",
            textTransform: "none",
            fontSize: "14px",
          }}
          onClick={() => openLink(telegramLink)}
        >
          Обменять в Telegram
        </Button>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            borderRadius: "50px",
            py: 1,
            px: 2,
            backgroundColor: "#2cb742",
            textTransform: "none",
            fontSize: "14px",

          }}
          onClick={() => openLink(whatsappLink)}
        >
          Обменять в WhatsApp
        </Button>
      </Stack>

      {/* Иллюстрация мопеда + таймер */}
      <Box sx={{
        position: "relative", mt: 1, display: 'flex', flexDirection: 'row', "@media (max-height: 840px)": {
          overflow: "hidden",  
        },
      }}>
        <Typography
          sx={{
            color: "#0E1111",
            fontWeight: 600,
            fontSize: "14px",
            mr: 1,
          }}
        >
          Экономим ваше время! <br /> Доставка за 1 час
        </Typography>
        <Timer style={{ width: "40px", height: "auto" }} />
      </Box>

    </Box>
  );
};

export default CourierDelivery;
