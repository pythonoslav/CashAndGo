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
]; // Повторения для корректной работы карусели

const ImageCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <Box position="relative" width="100%">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1.1} // Почти один слайд + небольшой просмотр следующего
        centeredSlides={true}
        loopedSlides={images.length}
        spaceBetween={20}   // Отступы для мобильного
        loop={true}
        initialSlide={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%",
                height: "250px", // Высота слайда для мобильного
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

      {/* Кнопки навигации на всю высоту слайда */}
      <IconButton
        onClick={() => swiperRef.current?.slidePrev()}
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "40px", // ширина зоны клика
          color: "#fff",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowButtonLeft />
      </IconButton>
      <IconButton
        onClick={() => swiperRef.current?.slideNext()}
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "40px",
          color: "#fff",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowButtonRight />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
