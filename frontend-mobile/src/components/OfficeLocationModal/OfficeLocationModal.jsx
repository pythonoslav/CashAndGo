import React from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Координаты офиса (замени своими)
const officeLocation = {
  lat: 7.8145, // Широта (пример: Пхукет)
  lng: 98.3381, // Долгота
};

// Стили контейнера карты
const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const ModalOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(Box)`
  background: #f9f9e5;
  width: 700px;
  max-height: 90vh;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: 2px solid #ccc;
  z-index: 10;

  &:hover {
    background: #f2f2f2;
  }
`;

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(Box)`
  width: 50%;
  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MapContainer = styled(Box)`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OfficeLocationModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>

          {/* Заголовок */}
          <Typography variant="h5" fontWeight="bold">
            ПОЛУЧЕНИЕ НАЛИЧНЫХ <br />
            <span style={{ color: "#FF6600" }}>В ОФИСЕ (РАЙОН ЧАЛОНГ)</span>
          </Typography>

          {/* Контент: Картинка + Карта */}
          <ContentWrapper>
            {/* Фото офиса */}
            <ImageContainer>
              <img src="/office_image.jpg" alt="Офис" />
            </ImageContainer>

            {/* Google Maps */}
            <MapContainer>
              <LoadScript googleMapsApiKey="ТВОЙ_GOOGLE_MAPS_API_КЛЮЧ">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={officeLocation}
                  zoom={15}
                >
                  <Marker position={officeLocation} />
                </GoogleMap>
              </LoadScript>
            </MapContainer>
          </ContentWrapper>

          {/* Адрес */}
          <Typography fontSize="16px" fontWeight="bold" mt={3}>
            Адрес: 5/27A, Fisherman Way, Moo 5 Wiset Rd, Rawai, Muang, Phuket 83130, Thailand
          </Typography>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default OfficeLocationModal;
