import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, IconButton, Typography } from "@mui/material";
import "swiper/css";
import { ReactComponent as RecivingCash } from "../../assets/Receiving_cash.svg";
import { ReactComponent as ArrowButtonRight } from "../RecivingCash/assets/ArrowButton.svg";
import { ReactComponent as ArrowButtonLeft } from "../RecivingCash/assets/ArrowButtonBack.svg";

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
                <RecivingCash sx={{ width: "750px" }} />
            </Box>

            {/* Описание */}
            <Typography
                variant="body1"
                sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "24px",
                    color: "#0E1111",
                    marginBottom: "2rem",
                    ml: '2rem',
                    "@media (max-width: 768px)": {
                        fontSize: "16px",
                        lineHeight: "22px",
                        textAlign: "left",
                    },
                }}
            >
                Обменяйте более 20 видов валют по лучшему курсу в комфортном и современном офисе Cash & Go
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
                                height: "600px",
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
                    left: "90px",
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
                    right: "90px",
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
                    ml: '2rem',
                    fontSize: "24px",
                    fontWeight: "900",
                    lineHeight: "45px",
                    color: "#0E1111",
                    width: "100%",
                    marginTop: "2rem",
                    cursor: "pointer",
                    "@media (max-width: 768px)": {
                        fontSize: "16px",
                        lineHeight: "22px",
                        textAlign: "left",
                    },
                    "&:hover span": {
                        textDecoration: "underline",
                    },
                }}
            >
                Адрес:{" "}
                <span>
                    5/27A, Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130,
                    Thailand
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
                    ml: '2rem',
                    fontSize: "14px",
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

export default CustomCarousel;
