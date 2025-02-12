import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import FAQ from "./components/FAQComponent/FAQComponent";
import Footer from "./components/Footer/Footer";
import { Box, Modal, IconButton, Typography } from "@mui/material";
import { Element } from "react-scroll";
import styled from "styled-components";
import { ReactComponent as LastLogo } from "../src/assets/FAQTitle.svg";
import CloseIcon from "@mui/icons-material/Close";

// Импортируем секции для модалок
import DropCashSection from "./components/DropCashSection/DropCashSections";
import ResivingCash from "./components/RecivingCash/ResivingCash";
import DeliveryComponent from "./components/DeliveryComponent/DeliveryComponent";
import TransferToThaiAccount from "./components/TransferComponent/TransferToThaiAccaount";
import AboutUs from "./components/AboutUsComponent/AbaoutUs";

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
`;

// Стили модального окна
const ModalContent = styled(Box)`
  background: white;
  width: 90%;
  max-width: 700px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  position: relative;
`;

const App = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openNestedModal, setOpenNestedModal] = useState(null);

  const handleOpen = (modal) => setOpenModal(modal);
  const handleClose = () => {
    setOpenNestedModal(null); // Закрываем вложенную модалку
    setOpenModal(null);
  };

  return (
    <>
      <Header />
      <HeroSection />

      <Box sx={{ backgroundImage: "url('/mail_background.svg')" }}>
        <Element name="features"></Element>
        <FeaturesSection />

        {/* Кнопки для открытия модальных окон */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <button onClick={() => handleOpen("atm")}>Открыть DropCashSection</button>
          <button onClick={() => handleOpen("cash")}>Открыть ResivingCash</button>
          <button onClick={() => handleOpen("courier")}>Открыть DeliveryComponent</button>
          <button onClick={() => handleOpen("check")}>Открыть TransferToThaiAccount</button>
          <button onClick={() => handleOpen("about")}>Открыть AboutUs</button>
        </Box>

        <Element name="faq"></Element>
        <Wrapper>
          <TitleContainer>
            <LastLogo />
          </TitleContainer>
        </Wrapper>
        <FAQ />
      </Box>
      <Footer />

      {/* Главные модальные окна */}
      <Modal open={openModal === "atm"} onClose={handleClose}>
        <ModalContent>
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DropCashSection setOpenNestedModal={setOpenNestedModal} />
        </ModalContent>
      </Modal>

      <Modal open={openModal === "cash"} onClose={handleClose}>
        <ModalContent>
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <ResivingCash setOpenNestedModal={setOpenNestedModal} />
        </ModalContent>
      </Modal>

      <Modal open={openModal === "courier"} onClose={handleClose}>
        <ModalContent>
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DeliveryComponent setOpenNestedModal={setOpenNestedModal} />
        </ModalContent>
      </Modal>

      <Modal open={openModal === "check"} onClose={handleClose}>
        <ModalContent>
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <TransferToThaiAccount setOpenNestedModal={setOpenNestedModal} />
        </ModalContent>
      </Modal>

      <Modal open={openModal === "about"} onClose={handleClose}>
        <ModalContent>
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <AboutUs setOpenNestedModal={setOpenNestedModal} />
        </ModalContent>
      </Modal>

      {/* Вложенное модальное окно */}
      <Modal open={Boolean(openNestedModal)} onClose={() => setOpenNestedModal(null)}>
        <ModalContent>
          <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={() => setOpenNestedModal(null)}>
            <CloseIcon />
          </IconButton>
          <Typography>Вложенное модальное окно для {openNestedModal}</Typography>
        </ModalContent>
      </Modal>
    </>
  );
};

export default App;
