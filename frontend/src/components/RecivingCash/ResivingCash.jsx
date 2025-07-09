import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, IconButton, Typography } from "@mui/material";
import "swiper/css";
import { ReactComponent as RecivingCash } from "../../assets/Receiving_cash.svg";
import { ReactComponent as RecivingCash_en } from "../../assets/Receiving_cash_en.svg";
import { ReactComponent as ArrowButtonRight } from "../RecivingCash/assets/ArrowButton.svg";
import { ReactComponent as ArrowButtonLeft } from "../RecivingCash/assets/ArrowButtonBack.svg";
import { useLanguage } from "../../helpers/LanguageContext";

const images = [
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
    "/images/photo4.png",
    "/images/photo1.png",
    "/images/photo2.png",
    "/images/photo3.png",
    "/images/photo4.png",
]; // Не убирать повторения, иначе карусель ломается

const CustomCarousel = () => {
    const { language } = useLanguage();
    const swiperRef = useRef(null);

    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                marginBottom: "1.5rem",
            }}
        >
            {/* Блок с SVG */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    mb: "20px",
                    ml: '2rem'
                }}
            >
                {language === 'ru' ? <RecivingCash sx={{ width: "750px" }} /> : <RecivingCash_en sx={{ width: "750px" }} />}
            </Box>

            {/* Описание */}
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: "300",
                    lineHeight: { xs: "22px", md: "24px" },
                    color: "#0E1111",
                    marginBottom: "2rem",
                    ml: { xs: "1rem", md: "2rem" },
                    textAlign: { xs: "left", md: "initial" },
                }}
            >
                {language === "ru" ? "Обменяйте более 20 видов валют по лучшему курсу в комфортном и современном офисе Cash & Go" : "Cet the best exchange rates for over 20 currencies in Cash & Go’s modern and comfortable office."}
                
            </Typography>

            {/* Слайдер */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1.5}
                centeredSlides={true}
                loopedSlides={images.length}
                spaceBetween={30}
                loop={true}
                initialSlide={1}
                breakpoints={{
                    640: { slidesPerView: 1.1, spaceBetween: 20 },
                    1024: { slidesPerView: 1.5, spaceBetween: 30 },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                width: "100%",
                                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "30px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кнопки переключения */}
            <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: { xs: "1rem", md: "90px" },
                    color: "#fff",
                    zIndex: 2,
                    transform: "translateY(-50%)",
                }}
            >
                <ArrowButtonLeft />
            </IconButton>
            <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: { xs: "1rem", md: "90px" },
                    color: "#fff",
                    zIndex: 2,
                    transform: "translateY(-50%)",
                }}
            >
                <ArrowButtonRight />
            </IconButton>

            {/* Адрес */}
            <Typography
                variant="h3"
                onClick={() =>
                    window.open(
                        "https://maps.app.goo.gl/5hc6Zqmuhj6ovRFx5?g_st=com.google.maps.preview.copy",
                        "_blank",
                        "noopener,noreferrer"
                    )
                }
                sx={{
                    ml: { xs: "1rem", md: "2rem" },
                    fontSize: { xs: "16px", md: "24px" },
                    fontWeight: "900",
                    lineHeight: { xs: "22px", md: "45px" },
                    color: "#0E1111",
                    width: "100%",
                    marginTop: "2rem",
                    cursor: "pointer",
                    "&:hover span": {
                        textDecoration: "underline",
                    },
                }}
            >
                {language === 'ru' ? "Адрес" : "Adress"}:{" "}
                <span>
                    5/27A, Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand
                </span>
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
                    ml: { xs: "1rem", md: "2rem" },
                    fontSize: { xs: "12px", md: "14px" },
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

export default CustomCarousel;
