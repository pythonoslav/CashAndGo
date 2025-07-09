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
import InstructionsBangkokBank from "./components/FAQComponent/InstructionsBangkokBank";
import InstructionsKrungThai from "./components/FAQComponent/InstructionsKrungThai";
import { Element } from "react-scroll";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import TermsAndConditions from "./components/Privacy/TermsAndConditions";
import CookiePolicy from "./components/Privacy/CookiePolicy";
import { LanguageProvider } from "./helpers/LanguageContext";
import LangSwitch from "./components/Header/LangSwitch";

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
    justify-content: flex-start;
    width: 140px;
    margin-left: 2rem;
  }
`;

const ModalOverlay = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled(Box)`
  background: url('backgraund_modal.svg') center center / cover no-repeat;
  width: 60%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 20px;
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
    overflow-y: "auto",
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 95%;
    padding: 12px;
    border-radius: 8px;
    overflow-y: "auto",
  }
`;

const CloseButton = styled(IconButton)`
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
    <LanguageProvider>
    <Box sx={{ width: "100%", overflowX: "hidden", margin: 0, padding: 0 }}>
      {/* Убираем Header, если модальное окно открыто */}
      {openModal === null && <Header />}

      <HeroSection />

      <Box
        sx={{
          backgroundImage: "url('/mail_background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pt: { xs: 2, md: 4 },
          pb: { xs: 2, md: 4 },
          px: { xs: 1, md: 0 },
        }}
      >
        <Element name = "features"></Element>
        <FeaturesSection openModal={handleOpen} closeModal={handleClose} />
        <Element name="about"></Element>
        <AboutUs />
        <CustomCarousel />
        <ReviewsCarousel />
        <TitleContainer>
          <LastLogo
            style={{
              width: "220px",
            }}
          />
        </TitleContainer>
        <FAQ />
      </Box>
      <Element name="faq"></Element>
      <Footer setOpenModal={setOpenModal} />

      {/* Модалки */}
      <Modal open={Boolean(openModal)} onClose={handleClose}>
        <ModalOverlay>
          <Slide direction="left" in={Boolean(openModal)} mountOnEnter unmountOnExit>
            <ModalContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ flexGrow: 1 }} />
                <CloseButton onClick={handleClose}>
                  <CloseIcon />
                </CloseButton>
              </Box>

              {/* Контент модального окна */}
              {openModal === "atm" && <DropCashSection setOpenNestedModal={setOpenNestedModal} />}
              {openModal === "cash" && <ResivingCash />}
              {openModal === "courier" && <DeliveryComponent />}
              {openModal === "check" && <TransferToThaiAccount />}
              {openModal === "privacy" && <PrivacyPolicy />}
              {openModal === "terms" && <TermsAndConditions />}
              {openModal === "cookie" && <CookiePolicy />}
            </ModalContent>
          </Slide>
        </ModalOverlay>
      </Modal>

      {/* Вложенное модальное окно (FAQ банков) */}
      <Modal open={Boolean(openNestedModal)} onClose={() => setOpenNestedModal(null)}>
        <ModalOverlay>
          <Slide direction="left" in={Boolean(openNestedModal)} mountOnEnter unmountOnExit>
            <ModalContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ flexGrow: 1 }} />
                <CloseButton onClick={() => setOpenNestedModal(null)}>
                  <CloseIcon />
                </CloseButton>
              </Box>

              {/* Контент вложенного окна */}
              {openNestedModal === "Kassicorn" && <InstructionsKasikorn />}
              {openNestedModal === "Bangkok" && <InstructionsBangkokBank />}
              {openNestedModal === "Krungthai" && <InstructionsKrungThai />}
            </ModalContent>
          </Slide>
        </ModalOverlay>
      </Modal>
    </Box>
    </LanguageProvider>
  );
};

export default App;
