import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, IconButton } from "@mui/material";
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
]; // Оставляем повторение для корректной работы карусели




const ImageCarousel = () => {
    const swiperRef = useRef(null);

    return (
        <Box position="relative" width="100%">
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
                    top: "44%",
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
                    top: "44%",
                    right: "90px",
                    color: "#fff",
                    zIndex: 2,
                }}
            >
                <ArrowButtonRight />
            </IconButton>
        </Box>
    );
};

export default ImageCarousel;
