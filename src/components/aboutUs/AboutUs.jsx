import * as React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import slider1 from "../../assets/about/1.jpg";
import slider2 from "../../assets/about/2.jpg";
import slider3 from "../../assets/about/3.jpg";
import slider4 from "../../assets/about/4.jpg";
import slider5 from "../../assets/about/5.jpg";
import slider6 from "../../assets/about/6.jpg";
import slider7 from "../../assets/about/7.jpg";
import slider8 from "../../assets/about/8.jpg";
import {
  AboutUsContainer,
  StyledTypography,
  ImageSlider,
  NavigationWrapper,
  Images,
  ImagesWrapper,
} from "./AboutUs.styles";

export const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const images = [
    slider3,
    slider4,
    slider6,
    slider7,
    slider1,
    slider2,
    slider5,
    slider8,
  ];

  const numberOfImages = 4;
  const visibleImages = images.slice(
    currentIndex,
    currentIndex + numberOfImages
  );

  return (
    <AboutUsContainer id="about">
      <StyledTypography variant="h3">
        Innovative Design Firm <br /> Architecture, Interior, Landscape &
        Construction Design
      </StyledTypography>
      <StyledTypography variant="h4" paddingTop={"2rem"}>
        Welcome to our innovative design firm specializing in architecture,
        interior design, landscape design, and construction design. <br /> From
        residential to commercial projects, our skilled team creates exceptional
        spaces that inspire. <br /> Collaborating closely with clients, we bring
        dreams to life by combining aesthetics with functionality. <br />
        Discover our passion for design and let us transform your vision into
        reality.
      </StyledTypography>
      <ImageSlider>
        <NavigationWrapper>
          <ChevronLeft
            style={{ cursor: "pointer" }}
            size={30}
            onClick={prevImage}
          />
          <ChevronRight
            style={{ cursor: "pointer" }}
            size={30}
            onClick={nextImage}
          />
        </NavigationWrapper>
        <ImagesWrapper numberOfImages={numberOfImages}>
          {visibleImages.map((image, index) => (
            <Images key={index} src={image} alt="" />
          ))}
        </ImagesWrapper>
      </ImageSlider>
    </AboutUsContainer>
  );
};
