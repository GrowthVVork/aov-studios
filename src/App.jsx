import * as React from "react";
import {
  AboutUs,
  Footer,
  Header,
  HeroImage,
  Portfolio,
  Services,
  ContactForm
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <HeroImage />
      <AboutUs />
      <Services />
      <Portfolio />
      {/* Uncomment below line to enable raw form */}
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
};

export default App;
