import React from "react";
import one from "../../assets/gallery/1.jpg";
import two from "../../assets/gallery/2.jpg";
import three from "../../assets/gallery/3.jpg";
import four from "../../assets/gallery/4.jpg";
import five from "../../assets/gallery/5.jpg";
import six from "../../assets/gallery/6.jpg";
import seven from "../../assets/gallery/7.jpg";
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
