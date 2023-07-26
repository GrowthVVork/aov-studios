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
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = React.useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] =
    React.useState(false);

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
    const handleScroll = () => {
      const slider = sliderRef.current;
      const isAtStart = slider.scrollLeft === 0;
      const isAtEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;

      setIsLeftButtonDisabled(isAtStart);
      setIsRightButtonDisabled(isAtEnd);
    };

    handleScroll();

    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <IconButton
          size="large"
          onClick={handlePrevClick}
          disabled={isLeftButtonDisabled}
        >
          <ChevronLeft style={{ cursor: "pointer" }} />
        </IconButton>
        <ImagesWrapper ref={sliderRef}>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <Images src={image} alt="" />
            </ImageContainer>
          ))}
        </ImagesWrapper>
        <IconButton
          size="large"
          onClick={handleNextClick}
          disabled={isRightButtonDisabled}
        >
          <ChevronRight style={{ cursor: "pointer" }} />
        </IconButton>
      </ImageSlider>
    </AboutUsContainer>
  );
};
