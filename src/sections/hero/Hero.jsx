import React from "react";
import hero from "../../assets/hero/hero.webp";
import heroCropped from "../../assets/hero/hero-cropped.webp";

export const Hero = () => {
  return (
    <picture class="contained">
      <source srcset={hero} media="(min-width: 850px)" />
      <img src={heroCropped} alt="" />
    </picture>
  );
};
