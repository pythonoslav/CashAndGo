import React from "react";
import { Box, Typography } from "@mui/material";
import "swiper/css";


import { ReactComponent as RecivingCash } from "../../assets/Receiving_cash.svg";
import { ReactComponent as RecivingCash_en } from "../../assets/Receiving_cash_en.svg";
import ImageCarousel from "../Carousel/MainCarousel";
import { useLanguage } from "../../helpers/LanguageContext";


const OfficeCashModal = () => {
    const {language} = useLanguage()

    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                mt: -2,
            }}
        >
            {/* Заголовок */}
            {/* Блок с SVG */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
            >
               {language === 'ru' ? <RecivingCash sx={{ width: "750px" }} /> : <RecivingCash_en sx={{ width: "750px" }} />}
            </Box>

            {/* Короткий абзац-описание */}
            <Typography
                sx={{
                    width: '93%',
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "17px",
                    color: "#0E1111",
                    mb: 2,
                }}
            >
                 {language === "ru" ? "Обменяйте более 20 видов валют по лучшему курсу в комфортном и современном офисе Cash & Go" : "Cet the best exchange rates for over 20 currencies in Cash & Go’s modern and comfortable office."}
                
            </Typography>

            {/* Карусель */}
            <ImageCarousel />

            {/* Часы работы */}
            <Typography
                sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0E1111",
                    mt: 2,
                }}
            >
               {language === 'ru' ? "Часы работы:" : "Business hours:"} <br /> {language === 'ru' ? "ЕЖЕДНЕВНО С 9:00 до 18:00" : "DAILY from 9:00 AM to 6:00 PM"}
                  
            </Typography>

            {/* Адрес */}
            <Typography
                sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0E1111",
                    mt: 2,
                }}
            >
               {language === 'ru' ? "Адрес" : "Adress"}:{" "}
            </Typography>
            <Typography
                onClick={() =>
                    window.open(
                        "https://maps.app.goo.gl/5hc6Zqmuhj6ovRFx5?g_st=com.google.maps.preview.copy",
                        "_blank",
                        "noopener,noreferrer"
                    )
                }
                sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#0E1111",
                    lineHeight: "20px",
                    cursor: "pointer",
                    textDecoration: "underline" ,
                    mb: 2,
                }}
            >
                5/27A, Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand
            </Typography>
            <Typography
                onClick={() =>
                    window.open(
                        "https://maps.app.goo.gl/5hc6Zqmuhj6ovRFx5?g_st=com.google.maps.preview.copy",
                        "_blank",
                        "noopener,noreferrer"
                    )
                }
                sx={{
                
                    fontSize: "12px",
                    fontWeight: "500",
                    width: "100%",
                    color: "#F87000",
                    cursor: "pointer",
                    mb: "1.5rem",
                }}
            >
                 ({language === 'ru' ? "Нажмите, чтобы открыть местоположение на карте" : "Click to open location on the map"})
               
            </Typography>
        </Box>
    );
};

export default OfficeCashModal;
