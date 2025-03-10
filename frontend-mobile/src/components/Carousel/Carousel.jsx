import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as OfficeTitle } from "../Carousel/OfficeTitle.svg";
import { ReactComponent as OfficeTitle_en } from "../Carousel/OfficeTitle_en.svg";
import ImageCarousel from "./MainCarousel";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLanguage } from "../../helpers/LanguageContext";


const position = [7.814527, 98.339614];
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
const LeafletMap = ({language}) => (
  <MapContainer center={position} zoom={18} style={{ height: "100%", width: "100%" }}>
    <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />
    <Marker position={position} icon={customIcon}>
    <Popup>{language === 'ru' ? "Офис в районе Чалонг, Пхукет" : "Office (Chalong area, Phuket)"}</Popup>
    </Marker>
  </MapContainer>
);

const CustomCarousel = () => {
  const {language} = useLanguage();
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
        {language === 'ru' ? <OfficeTitle sx={{ width: '750px' }} /> :  <OfficeTitle_en sx={{ width: '750px' }} />}
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
         {language === 'ru' ? "Это офис с динамичной энергией и атмосферой, сочетающий эффективность, эстетику, комфорт и инновации" : "Our office has a dynamic energy and atmosphere, bringing together efficiency, aesthetics, comfort and innovation"}</Typography>

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
           {language === 'ru' ? "Часы работы:" : "Business hours:"} <br /> {language === 'ru' ? "ЕЖЕДНЕВНО С 9:00 до 18:00" : "DAILY from 9:00 AM to 6:00 PM"}           
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
            {language === 'ru' ? "Адрес:" : "Adress:"}{" "}
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
          <LeafletMap language={language}/>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCarousel;
