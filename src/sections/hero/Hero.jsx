import React from "react";
import hero from "../../assets/hero/hero.png";

export const Hero = () => {
  return (
    <picture className="contained" id="hero" style={{ marginTop: "6.5rem" }}>
      {/* <source srcset={hero} media="(min-width: 850px)" /> */}
      <img srcSet={hero} alt="" />
    </picture>
  );
};
