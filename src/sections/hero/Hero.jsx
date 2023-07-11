import React from "react";
import hero from "../../assets/hero/hero.jpg";

export const Hero = () => {
  return (
    <picture class="contained" id="hero">
      <img srcset={hero} alt="" />
    </picture>
  );
};
