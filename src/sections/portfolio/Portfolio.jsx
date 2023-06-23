import React from "react";
import one from "../../assets/gallery/1.webp";
import two from "../../assets/gallery/2.webp";
import three from "../../assets/gallery/3.webp";
import four from "../../assets/gallery/4.webp";
import five from "../../assets/gallery/5.webp";
import six from "../../assets/gallery/6.webp";
import seven from "../../assets/gallery/7.webp";
import "./portfolioStyles.css";

export const Portfolio = () => {
  return (
    <section class="portfolio contained" id="portfolio">
      <h2>Portfolio</h2>
      <div class="gallery">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
        <img src={six} alt="" />
        <img src={seven} alt="" />
      </div>
    </section>
  );
};
