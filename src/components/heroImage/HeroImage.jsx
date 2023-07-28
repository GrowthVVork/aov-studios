import * as React from "react";
import hero from "../../assets/hero/hero.jpg";
import heroCropped from "../../assets/hero/hero-cropped.jpg";
import { HeroImageWrapper, Image } from "./HeroImage.styles";

export const HeroImage = () => {
  return (
    <HeroImageWrapper id="home">
      <source srcset={hero} media="(min-width: 850px)" />
      <Image src={heroCropped} alt="" />
    </HeroImageWrapper>
  );
};
