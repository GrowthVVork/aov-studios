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
  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    // Add more image here if needed
  ];
  return (
    <SectionContainer id="portfolio">
      <SectionHeading>Portfolio</SectionHeading>
      <ImagesContainer>
        {imageUrls.map((imageUrl, index) => (
          <Image key={index} src={imageUrl} alt="" />
        ))}
      </ImagesContainer>
    </SectionContainer>
  );
};
