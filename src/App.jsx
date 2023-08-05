import * as React from "react";
import {
  AboutUs,
  ContactUs,
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
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
