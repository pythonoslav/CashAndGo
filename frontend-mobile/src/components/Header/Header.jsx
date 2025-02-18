import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import telegramIcon from "../../assets/telegram-icon.svg";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import MenuIcon from "../../assets/MenuBurger.svg";
import Vector from "../Header/strelka.svg";

const telegramLink = "https://t.me/";
const whatsappLink = "https://wa.me/message/FTPE4X4MDBSWA1";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobile = useMediaQuery("(max-width: 378px)"); // Отслеживаем мобильное разрешение

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
        <AppBar
            position="fixed"
            sx={{
                top: "10px",
                left: 0,
                width: "100%",
                height: "60px",
                zIndex: 3000,
                backgroundColor: "#FFFFFF",
                borderRadius: "50px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "95%",
                    margin: "0 auto", // Центрируем Toolbar
                    padding: "0 10px",
                }}
            >
                {/* Левый блок: бургер и логотип */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <IconButton
                        sx={{
                            backgroundColor: "#F87000",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50px",
                            color: "white",
                            "& img": { width: "20px", height: "20px" },
                        }}
                        onClick={handleMenuOpen}
                    >
                        <img src={MenuIcon} alt="Menu" />
                    </IconButton>
                    <HeaderLogo
                        style={{
                            width: isMobile ? "120px" : "180px", // Уменьшаем на мобилках
                            height: "auto",
                        }}
                    />
                </Box>

                {/* Средний блок: текст и стрелка */}
                {!isMobile && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography
                            sx={{
                                fontWeight: "600",
                                fontSize: "0.9rem",
                                cursor: "pointer",
                                color: "#004DB4",
                                textAlign: "left",
                                ml: "0.5rem",
                                lineHeight: 1.2,
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                            onClick={() => {
                                console.log("Обменять валюту");
                            }}
                        >
                            ОБМЕНЯТЬ <br /> ВАЛЮТУ
                        </Typography>
                        <img src={Vector} alt="Vector" style={{ width: "45px", height: "20px" }} />
                    </Box>
                )}

                {/* Правый блок: иконки мессенджеров */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <IconButton
                        sx={{
                            backgroundColor: "#FFFFFF",
                            width: isMobile ? "32px" : "36px",
                            height: isMobile ? "32px" : "36px",
                            borderRadius: "50%",
                            "& img": { width: isMobile ? "28px" : "30px", height: isMobile ? "28px" : "30px" },
                        }}
                        onClick={() => openLink(telegramLink)}
                    >
                        <img src={telegramIcon} alt="Telegram" />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: "#FFFFFF",
                            width: isMobile ? "32px" : "36px",
                            height: isMobile ? "32px" : "36px",
                            borderRadius: "50%",
                            "& img": { width: isMobile ? "28px" : "30px", height: isMobile ? "28px" : "30px" },
                        }}
                        onClick={() => openLink(whatsappLink)}
                    >
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </IconButton>
                </Box>
            </Toolbar>

            {/* Меню при клике на бургер */}
            <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                sx={{
                    mt: "10px",
                    "& .MuiPaper-root": {
                        backgroundColor: "#F87000",
                        color: "#fff",
                        borderRadius: 7,
                        minWidth: "180px",
                    },
                }}
            >
                <MenuItem onClick={handleMenuClose}>НАЛИЧНЫЕ</MenuItem>
                <MenuItem onClick={handleMenuClose}>О НАС</MenuItem>
                <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
                <MenuItem onClick={handleMenuClose}>КОНТАКТЫ</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Header;
