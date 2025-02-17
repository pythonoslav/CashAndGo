import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
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
                top: "10px", // Небольшой отступ от верха
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
                    padding: "0 10px",
                }}
            >
                {/* Левый блок: бургер и логотип */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <IconButton
                        sx={{
                            backgroundColor: "#F87000",
                            width: "45px",
                            height: "45px",
                            borderRadius: "50px",
                            color: "white",
                        }}
                        onClick={handleMenuOpen}
                    >
                        <img src={MenuIcon} alt="Menu" style={{ width: "22px", height: "22px" }} />
                    </IconButton>
                    <HeaderLogo
                        style={{
                            width: "35%", 
                            maxWidth: "350px",
                            height: "auto"
                        }}
                    />
                </Box>

                {/* Средний блок: текст и стрелка */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "0.8rem",
                            cursor: "pointer",
                            color: "#004DB4",
                            textAlign: "center",
                            ml: '0.5rem',
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
                    <img src={Vector} alt="Vector" style={{ width: "55px", height: "20px" }} />
                </Box>

                {/* Правый блок: иконки мессенджеров */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <IconButton
                        sx={{
                            backgroundColor: "#FFFFFF",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                        }}
                        onClick={() => openLink(telegramLink)}
                    >
                        <img src={telegramIcon} alt="Telegram" style={{ width: "30px", height: "30px" }} />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: "#FFFFFF",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                        }}
                        onClick={() => openLink(whatsappLink)}
                    >
                        <img src={whatsappIcon} alt="WhatsApp" style={{ width: "30px", height: "30px" }} />
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
