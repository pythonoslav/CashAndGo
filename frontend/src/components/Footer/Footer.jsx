import { Box, IconButton, Typography } from "@mui/material";
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
        backgroundColor: "#0E0E0E",
        color: "#fff",
        padding: "40px 20px",
        width: "100%", // Для растягивания на всю ширину
      }}
    >
      {/* Первый ряд: ссылки на политику, условия и т.д. */}
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto", // Центрируем по горизонтали
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
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
      </Box>

      {/* Второй ряд: Лого, контакты и соц.сети */}
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto", // Центрируем по горизонтали
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Левый блок - Лого и лицензия */}
        <Box sx={{ flexShrink: 0, transform: "translateY(-4rem)" }}>
          {/* Логотип */}
          <Box
            sx={{
              width: "300px",
              height: "200px",
              overflow: "hidden",
              svg: {
                width: "300px",
                height: "auto",
              },
              "@media (max-width: 768px)": {
                svg: { width: "150px" },
              },
            }}
          >
            <LogoSVG style={{ transformOrigin: "top" }} />
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#C0C0C0", mt: 1 }}>
            {language === "ru"
              ? "Лицензия ЦБ Королевства Таиланд"
              : "Licensed Money Changer – License No. "}
            <br />
            MC225670080 {language === "ru"
              ? ""
              : "authorized by the Bank of Thailand"}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#C0C0C0", mt: 3 }}>
            © Cash&Go exchange Co.,Ltd. - all rights reserved
          </Typography>
        </Box>


        {/* Заполнитель пространства (если нужно) */}
        <Box sx={{ flexGrow: 1 }}></Box>

        {/* Правый блок - Контакты и соц.сети */}
        <Box sx={{ flexShrink: 0, textAlign: "right" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            {language === 'ru' ? "КОНТАКТЫ" : "CONTACTS"}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#C0C0C0" }}>
            {language === 'ru' ? "тел.: " : "Phone: "} +66 95-876-3588
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#C0C0C0", textDecoration: "none" }}
          >
            E-mail: info@cashandgo.exchange
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#C0C0C0", textDecoration: "none" }}
          >
            {language === 'ru' ? "Адрес: " : "Address: "}: 5/27A Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang,
            Phuket 83130, Thailand
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", mt: 2 }}>
            {language === 'ru' ? "СОЦСЕТИ" : "SOCIAL MEDIA"}
          </Typography>
          {/* Иконки соцсетей */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: "15px",
              mt: 1,
            }}
          >
            <IconButton
              component="a"
              href="https://t.me/cashandgo"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: "50%",
                padding: "10px",
                width: "35px",
                height: "35px",
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
                padding: "10px",
                width: "35px",
                height: "35px",
              }}
            >
              <img src={whatsappFooter} alt="WhatsApp" width="35" height="35" />
            </IconButton>

            <IconButton
              component="a"
              href=" https://www.instagram.com/cashandgo.th/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: "50%",
                padding: "10px",
                width: "35px",
                height: "35px",
              }}
            >
              <img src={instagramFooter} alt="Instagram" width="35" height="35" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
