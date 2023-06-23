import React, { useRef } from "react";
import sliderPrev from "../../assets/icons/slider-prev.png";
import sliderNext from "../../assets/icons/slider-next.png";
import slider1 from "../../assets/slider/1.webp";
import slider2 from "../../assets/slider/2.webp";
import slider3 from "../../assets/slider/3.webp";
import slider4 from "../../assets/slider/4.webp";
import slider5 from "../../assets/slider/5.webp";
import slider6 from "../../assets/slider/6.webp";
import slider7 from "../../assets/slider/7.webp";
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
        <h2>About</h2>
        <p>
          An architecture and interior design firm <br />
          that caters to both residential and commercial clients.
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
        </div>
      </div>
    </div>
  );
};
