import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import DropCashSection from "./components/DropCashSection/DropCashSections";
import ResivingCash from "./components/RecivingCash/ResivingCash";
import DeliveryComponent from "./components/DeliveryComponent/DeliveryComponent";
import TransferToThaiAccount from "./components/TransferComponent/TransferToThaiAccaount";
import AboutUs from "./components/AboutUsComponent/AbaoutUs";
import FAQ from "./components/FAQComponent/FAQComponent";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DropCashSection/>
      <ResivingCash/>
      <DeliveryComponent/>
      <TransferToThaiAccount/>
      <AboutUs/>
      <FAQ/>
    </>
  );
};

export default App;
