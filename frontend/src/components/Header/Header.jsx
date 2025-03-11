import { AppBar, Box, Button, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeaderLogo from "./HeaderLogo";
import LangSwitch from "./LangSwitch";
import telegramIcon from "../../assets/telegram-icon.svg";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import { useState } from "react";
import Vector from "./strelka.svg"
import { Link } from "react-scroll";
import { useLanguage } from "../../helpers/LanguageContext";

const telegramLink = "https://t.me/cashandgo"; // Телеги пока что нет
const whatsappLink = "https://wa.me/message/FTPE4X4MDBSWA1";


const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { language, changeLanguage } = useLanguage();
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <AppBar position="fixed" sx={{ top: 30, left: "50%", transform: "translateX(-50%)", width: "108%", maxWidth: "1440px", height: "67.2px", zIndex: 12000, backgroundColor: "transparent", borderRadius: "50px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" }}>
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "68%", height: "100%", backgroundColor: "#ffffff", borderRadius: "36px", zIndex: 2 }} />
            <Box sx={{ position: "absolute", bottom: 0, right: 0, width: "60%", height: "100%", backgroundColor: "#f87000", borderRadius: "36px", zIndex: 1 }} />

            <Toolbar sx={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0 24px" }}>
                {/* Логотип и переключатель языка */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <HeaderLogo />
                    <LangSwitch />
                </Box>

                {/* Навигация */}
                <Box sx={{ display: "flex", gap: "3.6vw", flexGrow: 1, justifyContent: "center" }}>
                    <Button component={Link} to="kurs" smooth={true} duration={500} offset={-90} sx={{ color: "#0033A0", fontWeight: "700", fontSize: "1.2rem", textTransform: "none" }}>{language == 'ru' ? "КУРС" : "EXCHANGE RATE"}</Button>
                    <Button component={Link} to="about" smooth={true} duration={500} offset={-90} sx={{ color: "#0033A0", fontWeight: "700", fontSize: "1.2rem", textTransform: "none" }}>{language == 'ru' ? "О НАС" : "ABOUT US"}</Button>
                    <Button component={Link} to="faq" smooth={true} duration={500} offset={90} sx={{ color: "#0033A0", fontWeight: "700", fontSize: "1.2rem", textTransform: "none" }}>{language == 'ru' ? "КОНТАКТЫ" : "CONTACT"}</Button>
                </Box>

                {/* Блок обмена валюты и иконки */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ backgroundColor: "#f87000", padding: "10px 20px", borderRadius: "20px", display: "flex", alignItems: "center" }}>
                        <Typography
                            sx={{
                                color: "#F9F9E5",
                                fontWeight: "bold",
                                fontSize: "1.15rem",
                                marginRight: "12px",
                                cursor: "pointer", // Добавляем курсор, чтобы было понятно, что элемент кликабельный
                                "&:hover": {
                                    textDecoration: "underline", // Подчеркивание при наведении
                                },
                            }}
                            onClick={() => window.open("https://t.me/cashandgo", "_blank")}
                        >
                            {language === 'ru' ? "ОБМЕНЯТЬ ВАЛЮТУ" : " EXCHANGE MONEY"}
                        </Typography>
                        <img
                            src={Vector}
                            alt=" "
                            style={{ width: "75px", height: "20px" }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px", marginLeft: "12px" }}>
                        <IconButton
                            sx={{
                                backgroundColor: "#f87000",
                                width: "42px",
                                height: "42px",
                                borderRadius: "50%",
                                transition: "transform 0.2s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.1)"
                                }
                            }}
                            onClick={() => openLink(telegramLink)}
                        >
                            <img src={telegramIcon} alt="Telegram" style={{ width: "36px", height: "36px" }} />
                        </IconButton>

                        <IconButton
                            sx={{
                                backgroundColor: "#f87000",
                                width: "42px",
                                height: "42px",
                                borderRadius: "50%",
                                transition: "transform 0.2s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.1)"
                                }
                            }}
                            onClick={() => openLink(whatsappLink)}
                        >
                            <img src={whatsappIcon} alt="WhatsApp" style={{ width: "36px", height: "36px" }} />
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;