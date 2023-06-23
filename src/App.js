import React from "react";
import { Header } from "./sections/header/Header";
import { Hero } from "./sections/hero/Hero";
import { About } from "./sections/about/About";
import { Services } from "./sections/services/Services";
import { Portfolio } from "./sections/portfolio/Portfolio";
import { Blog } from "./sections/blog/Blog";
import { Footer } from "./sections/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <Services />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default App;
