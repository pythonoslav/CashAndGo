import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import DropCashSection from "./components/DropCashSection/DropCashSections";
import ResivingCash from "./components/RecivingCash/ResivingCash";
import DeliveryComponent from "./components/DeliveryComponent/DeliveryComponent";
import TransferToThaiAccount from "./components/TransferComponent/TransferToThaiAccaount";
import AboutUs from "./components/AboutUsComponent/AbaoutUs";
import FAQ from "./components/FAQComponent/FAQComponent";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import { Element } from "react-scroll";
import styled from "styled-components";
import { ReactComponent as LastLogo } from "../src/assets/FAQTitle.svg";

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


const App = () => {

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Header />
      <HeroSection />
      <Box
        sx={{
          backgroundImage: "url('/mail_background.svg')"
        }}>
        <Element name="features"></Element>
        <FeaturesSection />
        <Element name="atm"></Element>
        <DropCashSection setOpenIndex={setOpenIndex} />
        <Element name="cash"></Element>
        <ResivingCash />
        <Element name="courier"></Element>
        <DeliveryComponent />
        <Element name="check"></Element>
        <TransferToThaiAccount />
        <Element name="about"></Element>
        <AboutUs />
        <Element name="faq"></Element>
        <Wrapper>
          <TitleContainer>
            <LastLogo/>
          </TitleContainer>
        </Wrapper>
        <FAQ openIndex={openIndex} setOpenIndex={setOpenIndex} />
      </Box>
      <Footer />
    </>
  );
};

export default App;
