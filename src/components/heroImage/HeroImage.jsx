import * as React from "react";
import hero from "./assets/hero.jpg";
import heroCropped from "./assets/hero-cropped.jpg";
import { HeroImageWrapper, Image } from "./HeroImage.styles";

export const HeroImage = () => {
  return (
    <HeroImageWrapper>
      <source srcset={hero} media="(min-width: 850px)" />
      <Image src={heroCropped} alt="" />
    </HeroImageWrapper>
  );
};
