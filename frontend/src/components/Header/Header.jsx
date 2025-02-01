import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeaderLogo from "./HeaderLogo";
import LangSwitch from "./LangSwitch";
import telegramIcon from "../../assets/telegram-icon.svg";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import { useState } from "react";
import MenuIcon from "../../assets/MenuBurger.svg";
import Vector from "./strelka.svg"
import { Link } from "react-scroll";

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            {isMobile ? (
                <>
                    <AppBar
                        position="fixed"
                        sx={{
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "90%",
                            maxWidth: "600px",
                            height: "60px",
                            zIndex: 1000,
                            backgroundColor: "#FFFFFF",
                            borderRadius: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Toolbar
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "90%",
                            }}
                        >
                            {/* Меню */}
                            <IconButton
                                sx={{
                                    backgroundColor: "#F87000",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    color: "white",
                                }}
                                onClick={handleMenuOpen}
                            >
                                <img src={MenuIcon} alt="Menu" style={{ width: "20px", height: "20px" }} />
                            </IconButton>

                            {/* Логотип */}
                            <HeaderLogo />

                            {/* Иконки Telegram и WhatsApp */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <IconButton
                                    sx={{
                                        backgroundColor: "#FFFFFF",
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <img src={telegramIcon} alt="Telegram" style={{ width: "20px", height: "20px" }} />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        backgroundColor: "#FFFFFF",
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <img src={whatsappIcon} alt="WhatsApp" style={{ width: "20px", height: "20px" }} />
                                </IconButton>
                                <LangSwitch />
                            </Box>
                        </Toolbar>

                        {/* Мобильное меню */}
                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={handleMenuClose}
                            sx={{ mt: "45px" }}
                        >
                            <MenuItem onClick={handleMenuClose}>НАЛИЧНЫЕ</MenuItem>
                            <MenuItem onClick={handleMenuClose}>О НАС</MenuItem>
                            <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
                        </Menu>
                    </AppBar>
                </>) :
                <AppBar position="fixed" sx={{ top: 30, left: "50%", transform: "translateX(-50%)", width: "108%", maxWidth: "1440px", height: "67.2px", zIndex: 1000, backgroundColor: "transparent", boxShadow: "none" }}>
                    <Box sx={{ position: "absolute", top: 0, left: 0, width: "68%", height: "100%", backgroundColor: "#ffffff", borderRadius: "36px", zIndex: 1 }} />
                    <Box sx={{ position: "absolute", bottom: 0, right: 0, width: "60%", height: "100%", backgroundColor: "#f87000", borderRadius: "36px", zIndex: 0 }} />

                    <Toolbar sx={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0 24px" }}>
                        {/* Логотип и переключатель языка */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <HeaderLogo />
                            <LangSwitch />
                        </Box>

                        {/* Навигация */}
                        <Box sx={{ display: "flex", gap: "3.6vw", flexGrow: 1, justifyContent: "center" }}>
                            <Button component={Link} to="features" smooth={true} duration={500}  offset={-90}  sx={{ color: "#0033A0", fontWeight: "700", fontSize: "1.2rem", textTransform: "none" }}>НАЛИЧНЫЕ</Button>
                            <Button component={Link} to="about" smooth={true} duration={500} offset={-90}  sx={{ color: "#0033A0", fontWeight: "700", fontSize: "1.2rem", textTransform: "none" }}>О НАС</Button>
                            <Button component={Link} to="faq" smooth={true} duration={500} offset={-90} sx={{ color: "#0033A0", fontWeight: "700", fontSize: "1.2rem", textTransform: "none" }}>FAQ</Button>
                        </Box>

                        {/* Блок обмена валюты и иконки */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ backgroundColor: "#f87000", padding: "10px 20px", borderRadius: "20px", display: "flex", alignItems: "center" }}>
                                <Typography sx={{ color: "#F9F9E5", fontWeight: "bold", fontSize: "1.2rem", marginRight: "12px" }}>ОБМЕНЯТЬ ВАЛЮТУ</Typography>
                                <img
                                    src={Vector}
                                    alt=" "
                                    style={{ width: "75px", height: "20px" }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: "10px", marginLeft: "12px" }}>
                                <IconButton sx={{ backgroundColor: "#f87000", width: "42px", height: "42px", borderRadius: "50%" }}>
                                    <img src={telegramIcon} alt="Telegram" style={{ width: "36px", height: "36px" }} />
                                </IconButton>
                                <IconButton sx={{ backgroundColor: "#f87000", width: "42px", height: "42px", borderRadius: "50%" }}>
                                    <img src={whatsappIcon} alt="WhatsApp" style={{ width: "36px", height: "36px" }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            }
        </>
    );
};

export default Header;