import { Box, Typography, IconButton } from "@mui/material";
import { ReactComponent as LogoSVG } from "../../assets/main_logo.svg";
import telegramFooter from "../Footer/assets/telegram_botlane.svg";
import whatsappFooter from "../Footer/assets/whatsapp_bot.svg";
import instagramFooter from "../Footer/assets/insta.svg";
import { useLanguage } from "../../helpers/LanguageContext";

const Footer = ({ setOpenModal }) => {
  const { language } = useLanguage();
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
          maxWidth: 600,
          backgroundColor: "#0E0E0E",
          color: "#fff",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Верхний блок с ссылками */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Typography
            onClick={() => setOpenModal("privacy")}
            sx={{
              fontSize: "14px",
              color: "#C0C0C0",
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": { color: "#ffffff" },
            }}
          >
            {language === 'ru' ? "Политика конфиденциальности" : "Privacy Policy"}
          </Typography>
          <Typography
            onClick={() => setOpenModal("terms")}
            sx={{
              fontSize: "14px",
              color: "#C0C0C0",
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": { color: "#ffffff" },
            }}
          >
            {language === 'ru' ? "Условия и положения" : "Terms & Conditions"}
          </Typography>
          <Typography
            onClick={() => setOpenModal("cookie")}
            sx={{
              fontSize: "14px",
              color: "#C0C0C0",
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": { color: "#ffffff" },
            }}
          >
            {language === 'ru' ? "Обработка файлов cookie" : " Cookie Policy"}
          </Typography>
        </Box>

        {/* Контакты и логотип */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            {language === 'ru' ? "КОНТАКТЫ" : "CONTACTS"}
          </Typography>
          <Box sx={{ width: "120px" }}>
            <LogoSVG style={{ width: "100%", height: "auto" }} />
          </Box>
        </Box>

        {/* Телефон, e-mail, адрес */}
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
          {language === 'ru' ? "Tел.:" : "Phone: "} +66 95-876-3588
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
          E-mail: info@cashandgo.exchange
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
          {language === 'ru' ? "Адрес: " : "Address: "}: 5/27A Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand
        </Typography>

        {/* Социальные сети */}
        <Typography sx={{ fontSize: "18px", fontWeight: "bold", mt: 1 }}>
          {language === 'ru' ? "СОЦСЕТИ" : "SOCIAL MEDIA"}
        </Typography>
        <Box sx={{ display: "flex", gap: "15px", mt: 1 }}>
          <IconButton
            component="a"
            href="https://t.me/cashandgo"
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
          {language === "ru"
            ? "Лицензия ЦБ Королевства Таиланд"
            : "Licensed Money Changer – License No."} <br /> MC225670080 {language === 'ru' ? '' : 'authorized by the Bank of Thailand'}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#C0C0C0", mt: 1 }}>
          © Cash&Go exchange Co.,Ltd. - all rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
