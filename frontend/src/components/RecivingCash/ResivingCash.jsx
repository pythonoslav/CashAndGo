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
]; //не убирать повторение иначе карусель умирает насмерть

const CustomCarousel = () => {
    const swiperRef = useRef(null);

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
                marginBottom: "2rem"
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    mb: "20px",
                    ml: "2rem"
                    
                }}
            >
                <RecivingCash sx={{ width: '750px' }} />
            </Box>
            <Typography
                variant="body1"
                sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "24px",
                    color: "#0E1111",
                    marginBottom: "16px",
                    width: "100%",
                    marginBottom: "2rem",
                    '@media (max-width: 768px)': {
                        fontSize: "16px", // Уменьшаем шрифт на мобильных
                        lineHeight: "22px",
                        textAlign: "left"
                    },
                    ml: "2rem"
                }}
            >Обменяйте более 20 видов валют по лучшему курсу в комфортном и современном офисе Cash & Go</Typography>

            {/* Swiper */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1.5} // Показываем центральный слайд + части соседних
                centeredSlides={true} // Центрируем текущий слайд
                loopedSlides={images.length}
                spaceBetween={30} // Отступы между слайдами
                loop={true} // Зацикленное переключение
                initialSlide={1} // Начинаем со второго слайда
                breakpoints={{
                    // Адаптивность для разных экранов
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
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Тень для слайда
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
                }}
            >
                <ArrowButtonRight />
            </IconButton>

            <Typography
                variant="h3"
                onClick={() => window.open("https://maps.app.goo.gl/5hc6Zqmuhj6ovRFx5?g_st=com.google.maps.preview.copy", "_blank", "noopener,noreferrer")}
                sx={{
                    fontSize: "24px",
                    fontWeight: "900",
                    lineHeight: "45px",
                    color: "#0E1111",
                    width: "100%",
                    marginTop: '2rem',
                    cursor: 'pointer',
                    '@media (max-width: 768px)': {
                        fontSize: "16px",
                        lineHeight: "22px",
                        textAlign: "left"
                    },
                    '&:hover span': {
                        textDecoration: "underline", 
                    },
                    ml: "2rem"
                }}>Адрес: <span>5/27A, Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand</span></Typography>

            <Typography
            sx={{
                fontSize: "14px",
                fontWeight: "500",
                width: "100%",
                color: "#F87000",
                ml: "2rem"
            }}>
                Нажмите, чтобы открыть местоположение на карте
            </Typography>
        </Box>


    );
};

export default CustomCarousel;
