import React from "react";
// import { Header, Hero, About, Services, Portfolio, Footer } from "./sections";
import {
  AboutUs,
  Footer,
  Header,
  HeroImage,
  Portfolio,
  Services,
} from "./components";

const App = () => {
  // return (
  //   <>
  //     <Header />
  //     <Hero />
  //     <main>
  //       <About />
  //       <Services />
  //       <Portfolio />
  //       {/* Blog to be replaced by projects which will be another page */}
  //       {/* <Blog /> */}
  //     </main>
  //     <Footer />
  //     <div className="overlay">
  //       <div className="col"></div>
  //       <div className="col"></div>
  //       <div className="col"></div>
  //       <div className="col"></div>
  //     </div>
  //   </>
  // );
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
