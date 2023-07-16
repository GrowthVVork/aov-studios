import React, { useRef } from "react";
import sliderPrev from "../../assets/icons/slider-prev.png";
import sliderNext from "../../assets/icons/slider-next.png";
import slider1 from "../../assets/about/1.jpg";
import slider2 from "../../assets/about/2.jpg";
import slider3 from "../../assets/about/3.jpg";
import slider4 from "../../assets/about/4.jpg";
import slider5 from "../../assets/about/5.jpg";
import slider6 from "../../assets/about/6.jpg";
import slider7 from "../../assets/about/7.jpg";
import slider8 from "../../assets/about/8.jpg";
import "./aboutStyles.css";

export const About = () => {
  const sliderRef = useRef(null);

  const handleNextClick = () => {
    const slider = sliderRef.current;
    const scrollAmount = slider.offsetWidth;
    slider.scrollLeft += scrollAmount;
  };

  const handlePrevClick = () => {
    const slider = sliderRef.current;
    const scrollAmount = slider.offsetWidth;
    slider.scrollLeft -= scrollAmount;
  };

  return (
    <div className="about contained" id="about">
      <section>
        <h2>Innovative Design Firm: Architecture, Interior, Landscape & Construction Design</h2>
        <p>
          Welcome to our innovative design firm specializing in architecture, interior design,
          landscape design, and construction design. From residential to commercial projects, 
          our skilled team creates exceptional spaces that inspire. Collaborating closely with 
          clients, we bring dreams to life by combining aesthetics with functionality. Discover 
          our passion for design and let us transform your vision into reality.
        </p>
      </section>

      <div className="slider-wrap">
        <div className="navigation">
          <div className="prev" onClick={handlePrevClick}>
            <img src={sliderPrev} alt="" />
          </div>
          <div className="next" onClick={handleNextClick}>
            <img src={sliderNext} alt="" />
          </div>
        </div>

        <div className="slider" ref={sliderRef}>
          <img src={slider1} alt="" />
          <img src={slider2} alt="" />
          <img src={slider3} alt="" />
          <img src={slider4} alt="" />
          <img src={slider5} alt="" />
          <img src={slider6} alt="" />
          <img src={slider7} alt="" />
          <img src={slider8} alt="" />
        </div>
      </div>
    </div>
  );
};
