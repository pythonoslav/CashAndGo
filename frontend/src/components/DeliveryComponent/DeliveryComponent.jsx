import React from "react";
import { Box, Typography, Button, Stack, List, ListItem } from "@mui/material";
import { ReactComponent as ScooterIcon } from "../DeliveryComponent/assets/Scoter.svg";
import { ReactComponent as Title } from "../DeliveryComponent/assets/CourierDeleveryTEXT.svg";
import { ReactComponent as Title_en } from "../DeliveryComponent/assets/Cash_delivery_en.svg";
import { ReactComponent as TelegramIcon } from "../../assets/telegram-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/whatsapp-icon.svg";
import { ReactComponent as Timer } from "../../assets/time_picture.svg";
import { useLanguage } from "../../helpers/LanguageContext";

const telegramLink = "https://t.me/cashandgo";
const whatsappLink = "https://wa.me/message/FTPE4X4MDBSWA1";

const CourierDelivery = () => {
  const { language } = useLanguage();
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const stepsByLanguage = {
    ru: [
      "Договоритесь о месте встречи с менеджером сервиса в Telegram или WhatsApp",
      "Дождитесь курьера",
      "Переведите оплату по нашим реквизитам и получите наличные",
    ],
    en: [
      "Agree on the meeting place with the service manager via Telegram or WhatsApp",
      "Wait for the courier",
      "Transfer the payment using our details and receive cash",
    ],
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
        gap: { xs: "16px", md: "20px" },
        width: "100%",
        mb: "2rem",
        position: "relative",
        overflow: "hidden", 
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
        }}
      >
        {/* Левый блок с текстом и кнопками */}
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            maxWidth: { xs: "100%", md: "600px" },
            px: { xs: 1, md: 2 },
          }}
        >
          {language === 'ru' ? <Title style={{ width: "100%", maxWidth: "400px" }} /> : <Title_en style={{ width: "100%",  maxWidth: '300px' }} />}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              color: "#0E1111",
              mb: { xs: "16px", md: "20px" },
              fontWeight: "600",
            }}
          >
            {language === "ru" ? " Курьерская служба Cash & Go осуществляет доставку тайских бат в любое место Пхукета, Бангкока, Паттайи." : "Cash & Go’s courier service delivers Thai Baht anywhere in Phuket, Bangkok, and Pattaya."}

          </Typography>

          {/* Список шагов */}
          <List sx={{ mb: { xs: "16px", md: "20px" } }}>
            {(stepsByLanguage[language] || stepsByLanguage.ru).map((text, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  py: 0.5,
                }}
              >
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
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0E1111",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>

          {/* Текст и кнопки для заказа */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: "600",
              mb: "10px",
              fontSize: { xs: "18px", md: "24px" },
              color: "#0E1111",
            }}
          >
            {language === 'ru' ? " Закажите доставку наличных прямо к себе в отель, домой или на работу!" : "Order cash delivery straight to your hotel, home, or workplace!"}
           
          </Typography>

          <Stack direction="column" spacing={2} mt={4}>
            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              sx={{
                borderRadius: "50px",
                p: { xs: "10px 16px", md: "15px 20px" },
                maxWidth: "293px",
                backgroundColor: "#27a7e7",
              }}
              onClick={() => openLink(telegramLink)}
            >
              {language === 'ru' ? "Обменять в Telegram" : "Exchange via Telegram"}
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              sx={{
                borderRadius: "50px",
                p: { xs: "10px 16px", md: "15px 20px" },
                maxWidth: "293px",
                backgroundColor: "#2cb742",
              }}
              onClick={() => openLink(whatsappLink)}
            >
              {language === 'ru' ? "Обменять в WhatsApp" : "Exchange via WhatsApp"} 
            </Button>
          </Stack>
        </Box>

        {/* Правый блок с мопедом и таймером */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            mt: { xs: 4, md: 0 },
            maxWidth: "100%",
          }}
        >
          {/* Контейнер с мопедом */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { xs: "0", md: "15%" },
              top: { xs: "0", md: "50%" },
              transform: { xs: "none", md: "translateY(-50%)" },
              maxWidth: { xs: "100%", md: "calc(100% + 100px)" },
              overflow: "visible",
              textAlign: "center",
            }}
          >
            <ScooterIcon style={{ height: "100%", maxHeight: window.innerWidth < 600 ? "300px" : "650px", zIndex: 1 }} />
          </Box>

          {/* Блок с таймером */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              position: { xs: "relative", md: "absolute" },
              bottom: { xs: "0", md: "-10px" },
              right: { xs: "0", md: "10%" },
              transform: { xs: "none", md: "translateX(-50%)" },
              zIndex: 2,
              p: { xs: "4px 8px", md: "8px 12px" },
              borderRadius: "8px",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                color: "#0E1111",
                fontWeight: "600",
                fontSize: { xs: "16px", md: "24px" },
                mr: 1,
              }}
            >
              {language === 'ru' ? "Экономим Ваше время!" : "Save time"}
              <br />
              {language === 'ru' ? "Доставка за 1 час" : "Delivery in just 1 hour!"}
            </Typography>
            <Timer style={{ height: window.innerWidth < 600 ? "60px" : "90px", width: "auto" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourierDelivery;
