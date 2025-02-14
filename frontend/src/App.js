import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import FAQ from "./components/FAQComponent/FAQComponent";
import Footer from "./components/Footer/Footer";
import { Box, Modal, IconButton, Slide } from "@mui/material";
import styled from "styled-components";
import { ReactComponent as LastLogo } from "../src/assets/FAQTitle.svg";
import CloseIcon from "@mui/icons-material/Close";

// Импортируем секции для модалок
import DropCashSection from "./components/DropCashSection/DropCashSections";
import ResivingCash from "./components/RecivingCash/ResivingCash";
import DeliveryComponent from "./components/DeliveryComponent/DeliveryComponent";
import TransferToThaiAccount from "./components/TransferComponent/TransferToThaiAccaount";
import AboutUs from "./components/AboutUsComponent/AbaoutUs";
import InstructionsKasikorn from "./components/FAQComponent/InstructionsKasikorn";
import CustomCarousel from "./components/Carousel/Carousel";
import ReviewsCarousel from "./components/Reviews/Reviews";

const Wrapper = styled.div`
  max-width: 1400px; 
  width: 100%; 
  height: 100%; 
  margin: 0 auto; 
  position: relative; 
  margin-top: 3rem;
  display: flex;
  flex-direction: column; 
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-left: '2rem';
`;

const ModalOverlay = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
 
`;

const ModalContent = styled(Box)`
  background: #f9f9e5;
  width: 60%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 6px;
  border-radius: 50px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;


  @media (max-width: 1024px) {
    width: 90%;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 90%;
    padding: 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 95%;
    padding: 12px;
    border-radius: 8px;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px; 
  background: white;
  border: 2px solid #ccc;
  z-index: 10;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f2f2f2;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
  }
`;


const App = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openNestedModal, setOpenNestedModal] = useState(null);

  const handleOpen = (modal) => setOpenModal(modal);
  const handleClose = () => {
    setOpenNestedModal(null);
    setOpenModal(null);
  };

  return (
    <>
      <Header />
      <HeroSection />

      <Box sx={{ backgroundImage: "url('/mail_background.svg')" }}>
        <FeaturesSection openModal={handleOpen} closeModal={handleClose} />
        <AboutUs/>
        <CustomCarousel  />
        <ReviewsCarousel />
        <Wrapper>
          <TitleContainer>
            <LastLogo style={{marginLeft: '2rem'}}/>
          </TitleContainer>
        </Wrapper>
        
        <FAQ />
      </Box>
      <Footer />

      <Modal open={Boolean(openModal)} onClose={handleClose}>
        <ModalOverlay>
          <Slide direction="left" in={Boolean(openModal)} mountOnEnter unmountOnExit>
            <ModalContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ flexGrow: 1 }} /> {/* Раздвигает кнопку вправо */}
                <CloseButton onClick={handleClose}>
                  <CloseIcon />
                </CloseButton>
              </Box>

              {/* Контент модального окна */}
              {openModal === "atm" && <DropCashSection />}
              {openModal === "cash" && <ResivingCash />}
              {openModal === "courier" && <DeliveryComponent />}
              {openModal === "check" && <TransferToThaiAccount />}
            </ModalContent>
          </Slide>
        </ModalOverlay>

      </Modal>

      {/* Вложенное модальное окно */}
      <Modal open={Boolean(openNestedModal)} onClose={() => setOpenNestedModal(null)}>
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setOpenNestedModal(null)}>
              <CloseIcon />
            </CloseButton>
              {openNestedModal === "kassicorn" && <InstructionsKasikorn />}
              {openNestedModal === "ba" && <ResivingCash />}
              {openNestedModal === "courier" && <DeliveryComponent />}
              {openNestedModal === "check" && <TransferToThaiAccount />}
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default App;
