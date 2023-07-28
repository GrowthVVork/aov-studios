import * as React from "react";
import image1 from "../../assets/about/About-3.jpg";
import image4 from "../../assets/about/About-1.jpg";
import image5 from "../../assets/about/About-5.jpg";
import image2 from "../../assets/about/About-2.jpg";
import image6 from "../../assets/portfolio/Portfolio-1.jpg";
import image7 from "../../assets/portfolio/Portfolio-2.jpg";
import image3 from "../../assets/portfolio/Portfolio-4.jpg";
import { SectionContainer, SectionHeading } from "../Shared.styles";
import { Image, ImagesContainer } from "./Portfolio.styles";

export const Portfolio = () => {
  return (
    <SectionContainer id="portfolio">
      <SectionHeading>Portfolio</SectionHeading>
      <ImagesContainer>
        <Image src={image1} alt="" />
        <Image src={image5} alt="" />
        <Image src={image6} alt="" />
        <Image src={image7} alt="" />
        <Image src={image2} alt="" />
        <Image src={image3} alt="" />
        <Image src={image4} alt="" />
      </ImagesContainer>
    </SectionContainer>
  );
};
