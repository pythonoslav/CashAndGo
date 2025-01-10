import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import DropCashSection from "./components/DropCashSection/DropCashSections";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DropCashSection/>
    </>
  );
};

export default App;
