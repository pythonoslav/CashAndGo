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
        <DropCashSection setOpenIndex={setOpenIndex}/>
        <Element name="cash"></Element>
        <ResivingCash />
        <Element name="courier"></Element>
        <DeliveryComponent />
        <Element name="check"></Element>
        <TransferToThaiAccount />
        <Element name="about"></Element>
        <AboutUs/>
        <Element name="faq"></Element>
        <FAQ openIndex={openIndex} setOpenIndex={setOpenIndex}/>
      </Box>
      <Footer />
    </>
  );
};

export default App;
