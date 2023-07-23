import React from "react";
// import hero from "./heroImage.png";
import { Image, HeroImageWrapper } from "./HeroImage.styles";
import hero from "../../assets/hero/hero.png";

export const HeroImage = () => {
  return (
    <HeroImageWrapper>
      <Image srcSet={hero} alt="heroImage" />
    </HeroImageWrapper>
  );
};
