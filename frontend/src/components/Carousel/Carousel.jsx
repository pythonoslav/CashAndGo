import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import "swiper/css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ReactComponent as OfficeTitle } from "../Carousel/OfficeTitle.svg"
import { ReactComponent as OfficeTitle_En } from "../Carousel/OfficeTitle_en.svg"
import ImageCarousel from "./MainCarousel";
import { useLanguage } from "../../helpers/LanguageContext";



const position = [7.814527, 98.339614]; // Широта и долгота Пхукета



const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

const LeafletMap = ({language}) => {

    // const [userPosition, setUserPosition] = useState(null);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //         setUserPosition([pos.coords.latitude, pos.coords.longitude]);
    //         debugger
    //     });
    // }, []);

    return (
        <MapContainer
            center={position}
            zoom={18}
            style={{ height: "400px", width: "100%" }}
            className="custom-map"
        >
            {/* Подключение карты OpenStreetMap */}
            <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />

            {/* Добавляем маркер */}
            <Marker position={position} icon={customIcon}>
                <Popup>{language === 'ru' ? "Офис в районе Чалонг, Пхукет" : "Office (Chalong area, Phuket)"}</Popup>
            </Marker>
            {/* <Polyline positions={[userPosition, position]} color="blue" /> */}
        </MapContainer>
    );
};


const CustomCarousel = () => {
    const swiperRef = useRef(null);
    const {language} = useLanguage();
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
                marginBottom: "2rem",
                marginTop: "2rem"
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

                {language === 'ru' ? <OfficeTitle sx={{ width: '750px' }} /> :  <OfficeTitle_En sx={{ width: '750px' }} />}
            </Box>
            <Typography
                variant="body1"
                sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "24px",
                    color: "#0E1111",
                    marginBottom: "16px",
                    width: "40  %",
                    marginBottom: "2rem",
                    '@media (max-width: 768px)': {
                        fontSize: "16px", // Уменьшаем шрифт на мобильных
                        lineHeight: "22px",
                        textAlign: "left"
                    },
                    ml: "2rem"
                }}
            >
                {language === 'ru' ? "Это офис с динамичной энергией и атмосферой, сочетающий эффективность, эстетику, комфорт и инновации" : "Our office has a dynamic energy and atmosphere, bringing together efficiency, aesthetics, comfort and innovation"}</Typography>
            <ImageCarousel />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // В колонку на мобильных, в строку на десктопе
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    borderRadius: "12px",
                    width: "100%",
                    gap: "40px", // Отступ между колонками
                    marginTop: "5rem"
                }}
            >
                {/* Левая колонка - Часы работы и адрес */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        flex: "0 0 auto", // Оставляем фиксированный размер
                        width: "45%", // Уменьшаем ширину контента
                        marginRight: "40px", // Отступ между текстом и картой
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "32px",
                            fontWeight: "900",
                            color: "#0E1111",
                            marginBottom: '4rem',
                            lineHeight: '45px'
                        }}
                    >
                        {language === 'ru' ? "Часы работы:" : "Business hours:"} <br /> {language === 'ru' ? "ЕЖЕДНЕВНО С 9:00 до 18:00" : "DAILY from 9:00 AM to 6:00 PM"}
                    </Typography>

                    <Typography
                        onClick={() => window.open("https://maps.app.goo.gl/5hc6Zqmuhj6ovRFx5?g_st=com.google.maps.preview.copy", "_blank", "noopener,noreferrer")}
                        sx={{
                            fontSize: "32px",
                            fontWeight: "900",
                            color: "#0E1111",
                            cursor: 'pointer',
                            '&:hover span': {
                                textDecoration: "underline",

                            },
                        }}>{language === 'ru' ? "Адрес: " : "Adress: "}<span>5/27A, Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand</span></Typography>

                </Box>

                {/* Правая колонка - Карта */}
                <Box
                    sx={{
                        flex: 1, // Карта занимает оставшееся пространство
                        height: "300px",
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
