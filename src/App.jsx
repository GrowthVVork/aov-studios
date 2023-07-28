import React from "react";
import {
  AboutUs,
  Footer,
  Header,
  HeroImage,
  Portfolio,
  Services,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <HeroImage />
      <AboutUs />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
