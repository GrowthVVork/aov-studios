import * as React from "react";
import { IconButton } from "@mui/material";
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
  ContentTextH4,
  ContentTextP,
  ImageSlider,
  Images,
  ImagesWrapper,
  AboutUsContent,
  ImageContainer,
} from "./AboutUs.styles";

export const AboutUs = () => {
  const images = React.useMemo(
    () => [
      slider3,
      slider4,
      slider6,
      slider7,
      slider1,
      slider2,
      slider5,
      slider8,
    ],
    []
  );

  const sliderRef = React.useRef(null);

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

  React.useEffect(() => {
    const handleResize = () => {
      const slider = sliderRef.current;
      const containerWidth = slider.offsetWidth;
      const imageWidth = images.length > 0 ? slider.children[0].offsetWidth : 0;
      const visibleImages = Math.floor(containerWidth / imageWidth);
      const maxScroll = (images.length - visibleImages) * imageWidth;
      if (slider.scrollLeft > maxScroll) {
        slider.scrollLeft = maxScroll;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <AboutUsContainer id="about">
      <AboutUsContent>
        <ContentTextH4 textTransform={"uppercase"} variant="h4">
          Innovative Design Firm <br /> Architecture, Interior, Landscape &
          Construction Design
        </ContentTextH4>
        <ContentTextP>
          Welcome to our innovative design firm specializing in architecture,
          interior design, landscape design, and construction design. From
          residential to commercial projects, our skilled team creates
          exceptional spaces that inspire. Collaborating closely with clients,
          we bring dreams to life by combining aesthetics with functionality.
          Discover our passion for design and let us transform your vision into
          reality.
        </ContentTextP>
      </AboutUsContent>
      <ImageSlider>
        <IconButton size="large" onClick={handlePrevClick}>
          <ChevronLeft style={{ cursor: "pointer" }} />
        </IconButton>
        <ImagesWrapper ref={sliderRef}>
          {images.map((image, index) => (
            <ImageContainer>
              <Images key={index} src={image} alt="" />
            </ImageContainer>
          ))}
        </ImagesWrapper>
        <IconButton size="large" onClick={handleNextClick}>
          <ChevronRight style={{ cursor: "pointer" }} />
        </IconButton>
      </ImageSlider>
    </AboutUsContainer>
  );
};
