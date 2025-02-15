import React from "react";
import { Box, Typography, Button, Stack, List, ListItem, ListItemText } from "@mui/material";
import { ReactComponent as ScooterIcon } from "../DeliveryComponent/assets/Scoter.svg";
import { ReactComponent as Title } from "../DeliveryComponent/assets/CourierDeleveryTEXT.svg";
import { ReactComponent as TelegramIcon } from "../../assets/telegram-icon.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/whatsapp-icon.svg";
import { ReactComponent as Timer } from "../../assets/time_picture.svg"

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
        mb: '2rem'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          height: '100%',
          margin: '0 auto',
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: "column", md: "row" },
        }}>
        {/* Левый блок */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          {/* Заголовок */}

          <Title />
          {/* Описание */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "24px",
              color: "#0E1111",
              marginBottom: "20px",
              fontWeight: "600",
              width: "140%", // Делаем шире родительского блока
              display: "block", // Гарантирует, что текст растянется
              textAlign: "left", // Выравнивание
            }}
          >
            Курьерская служба Cash & Go осуществляет доставку тайских бат в любое место Пхукета, Бангкока, Паттайи.
          </Typography>


          {/* Шаги */}
          <List sx={{ marginBottom: "20px" }}>
            <ListItem sx={{ display: "flex", gap: "10px", alignItems: "center", padding: "8px 0" }}>
              <Box
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#004db4",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "30px", // Фиксированная ширина
                  height: "30px", // Фиксированная высота
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0, // Запрещаем изменять размер
                  position: "relative", // Для независимости от других стилей
                }}
              >
                1
              </Box>
              <Typography variant="body1"
                sx={{
                  color: '#0E1111',
                  fontWeight: '300px',
                  fontSize: '18px',
                }}>Договоритесь о месте встречи с менеджером сервиса в Telegram или WhatsApp</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", gap: "10px", alignItems: "center", padding: "8px 0" }}>
              <Box
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#004db4",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "30px", // Фиксированная ширина
                  height: "30px", // Фиксированная высота
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0, // Запрещаем изменять размер
                  position: "relative", // Для независимости от других стилей
                }}
              >
                2
              </Box>
              <Typography variant="body1"
                sx={{
                  color: '#0E1111',
                  fontWeight: '300px',
                  fontSize: '18px',
                }}>Дождитесь курьера</Typography>
            </ListItem>
            <ListItem sx={{ display: "flex", gap: "10px", alignItems: "center", padding: "8px 0" }}>

              <Box
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#004db4",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "30px", // Фиксированная ширина
                  height: "30px", // Фиксированная высота
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0, // Запрещаем изменять размер
                  position: "relative", // Для независимости от других стилей
                }}
              >
                3
              </Box>
              <Typography variant="body1"
                sx={{
                  color: '#0E1111',
                  fontWeight: '300px',
                  fontSize: '18px',
                }}>Переведите оплату по нашим реквизитам и получите наличные</Typography>
            </ListItem>
          </List>

          {/* Описание и кнопки */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: "600",
              marginBottom: "10px",
              fontSize: '24px',
              color: '#0E1111',
            }}
          >
            Закажите доставку наличных прямо к себе в отель, домой или на работу!
          </Typography>

          <Stack direction="column" spacing={2} mt={4} >
            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              sx={{ borderRadius: "50px", padding: "15px 20px", maxWidth: '293px', backgroundColor: "#27a7e7" }}
              onClick={() => openLink(telegramLink)}
            >
              Обменять в Telegram
            </Button>
            <Button
              variant="contained"

              startIcon={<WhatsAppIcon />}
              sx={{ borderRadius: "50px", padding: "15px 20px", maxWidth: '293px', backgroundColor: "#2cb742" }}
              onClick={() => openLink(whatsappLink)}
            >
              Обменять в WhatsApp
            </Button>
          </Stack>
        </Box>

        {/* Правый блок */}
        <Box
          sx={{
            position: "absolute",
            right: "-10%", // Немного за границы, но не выходит из экрана
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "100%",
            overflow: "hidden", // Гарантируем, что он не вызовет скроллинг
            clipPath: "inset(0px 10px 0px 0px)", // Визуально обрезаем правую часть

          }}
        >
          {/* Иконка скутера */}
          <ScooterIcon style={{ height: "650px", zIndex: 1, position: "relative", overflow: 'hidden' }} />

          {/* Блок с таймером, который будет поверх скутера */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              ml: 6,
              position: "absolute", // Размещаем поверх
              bottom: "-10px",
              left: "45%", // Смещаем вправо, можно подкорректировать
              transform: "translateX(-99%)", // Центрируем относительно родителя
              zIndex: 2, // Выше скутера
              padding: "8px 12px",
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{
                color: "#0E1111",
                fontWeight: "600",
                fontSize: "24px",
                mr: 1,
              }}
            >
              Экономим Ваше время! <br />Доставка за 1 час
            </Typography>
            <Timer style={{ height: "90px", width: 'auto' }} />
          </Box>
        </Box>

      </Box>
    </Box >
  );
};

export default CourierDelivery;