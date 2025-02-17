import React, { useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ReactComponent as OfficeTitle } from "../Carousel/OfficeTitle.svg";
import ImageCarousel from "./MainCarousel";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Пример LeafletMap (если он у вас уже определён, можно просто импортировать его)
const position = [7.814527, 98.339614];
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
const LeafletMap = () => (
  <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%" }}>
    <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />
    <Marker position={position} icon={customIcon}>
      <Popup>Офис в районе Чалонг, Пхукет</Popup>
    </Marker>
  </MapContainer>
);

const CustomCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        mb: "2rem",
        mt: "2rem",
      }}
    >
      {/* Верхний блок с OfficeTitle */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mb: "1rem",
          width: "90%",
          width: "408px",
          height: "auto"
        }}
      >
        {/* Уменьшаем OfficeTitle для мобилы */}
        <OfficeTitle sx={{ width: "220px" }} />
      </Box>

      {/* Описание офиса - уменьшен шрифт */}
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",         // Уменьшенный размер шрифта
          fontWeight: "300",
          lineHeight: "20px",       // Немного меньшая высота строки
          color: "#0E1111",
          mb: "2rem",
          width: "100%",
          textAlign: "left",
        }}
      >
        Это офис с динамичной энергией и атмосферой, сочетающий эффективность, эстетику, комфорт и инновации
      </Typography>

      {/* Карусель изображений */}
      <ImageCarousel />

      {/* Блок с информацией об офисе и картой */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: "20px",
          borderRadius: "12px",
          width: "100%",
          gap: "20px",
          mt: "2rem",
        }}
      >
        {/* Блок с часами работы и адресом */}
        <Box
          sx={{
            width: "90%",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "900",
              color: "#0E1111",
              mb: "2rem",
              lineHeight: "40px",
            }}
          >
            Часы работы: <br />
            ЕЖЕДНЕВНО С 9:00 до 18:00
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
              fontSize: "18px",
              fontWeight: "900",
              color: "#0E1111",
              cursor: "pointer",
              "&:hover span": {
                textDecoration: "underline",
              },
            }}
          >
            Адрес:{" "}
            <span>
              5/27A, Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand
            </span>
          </Typography>
        </Box>

        {/* Блок с картой */}
        <Box
          sx={{
            width: "90%",
            height: "250px",
            borderRadius: "50px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <LeafletMap />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCarousel;
