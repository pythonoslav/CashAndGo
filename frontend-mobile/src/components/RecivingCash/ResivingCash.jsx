import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import "swiper/css";

// Стрелки (SVG)
import { ReactComponent as RecivingCash } from "../../assets/Receiving_cash.svg";
import ImageCarousel from "../Carousel/MainCarousel";

// Пример изображений для карусели
const images = [
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
    "/images/photo4.png",
];

const OfficeCashModal = () => {
    const swiperRef = useRef(null);

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
                <RecivingCash sx={{ width: "750px" }} />
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
                Обменяйте более 20 видов валют по лучшему курсу в комфортном
                и современном офисе Cash & Go
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
                Часы работы: <br />
                ЕЖЕДНЕВНО С 9:00 ДО 18:00
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
                Адрес:
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
                Нажмите, чтобы открыть местоположение на карте
            </Typography>
        </Box>
    );
};

export default OfficeCashModal;
