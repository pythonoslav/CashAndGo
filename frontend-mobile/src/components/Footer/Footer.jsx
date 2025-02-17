import { Box, Typography, IconButton } from "@mui/material";
import { ReactComponent as LogoSVG } from "../../assets/main_logo.svg";
import telegramFooter from "../Footer/assets/telegram_botlane.svg";
import whatsappFooter from "../Footer/assets/whatsapp_bot.svg";
import instagramFooter from "../Footer/assets/insta.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,               // При необходимости меняйте под макет
          backgroundColor: "#0E0E0E",  // Основной чёрный фон
          color: "#fff",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Верхняя строка: "Контакты" и логотип справа */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Блок "Контакты" */}
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            КОНТАКТЫ
          </Typography>

          {/* Логотип справа */}
          <Box sx={{ width: "120px" }}>
            <LogoSVG style={{ width: "100%", height: "auto" }} />
          </Box>
        </Box>

        {/* Телефон, e-mail, адрес */}
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
          тел. +66 95-876-3588
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
          e-mail info@cashandgo.exchange
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
          Адрес: 5/27A Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand
        </Typography>

        {/* Социальные сети */}
        <Typography sx={{ fontSize: "18px", fontWeight: "bold", mt: 1 }}>
          СОЦИАЛЬНЫЕ СЕТИ
        </Typography>
        <Box sx={{ display: "flex", gap: "15px", mt: 1 }}>
          <IconButton
            component="a"
            href="https://t.me/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              p: 0,
            }}
          >
            <img src={telegramFooter} alt="Telegram" width="35" height="35" />
          </IconButton>

          <IconButton
            component="a"
            href="https://wa.me/message/FTPE4X4MDBSWA1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              p: 0,
            }}
          >
            <img src={whatsappFooter} alt="WhatsApp" width="35" height="35" />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.instagram.com/cashandgo.th/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              p: 0,
            }}
          >
            <img src={instagramFooter} alt="Instagram" width="35" height="35" />
          </IconButton>
        </Box>

        {/* Лицензия и копирайт */}
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0", mt: 2 }}>
          Лицензия ЦБ Королевства Таиланд <br /> MC225670080
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0", mt: 1 }}>
          © Cash&Go exchange Co.,Ltd. - all rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
