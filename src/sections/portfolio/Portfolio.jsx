import React from "react";
import one from "../../assets/portfolio/1.jpg";
import two from "../../assets/portfolio/2.jpg";
import three from "../../assets/portfolio/3.jpg";
import four from "../../assets/portfolio/4.jpg";
import five from "../../assets/portfolio/5.jpg";
import six from "../../assets/portfolio/6.jpg";
import seven from "../../assets/portfolio/7.jpg";
import "./portfolioStyles.css";

export const Portfolio = () => {
  return (
    <div className="portfolio contained" id="portfolio">
      <section className="portfolio contained" id="portfolio">
        <h2>Portfolio</h2>
        <div className="gallery">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
          <img src={five} alt="" />
          <img src={six} alt="" />
          <img src={seven} alt="" />
        </div>
      </section>
    </div>
  );
};
