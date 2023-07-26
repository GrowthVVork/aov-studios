import * as React from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "react-feather";
import slider1 from "./assets/About-1.jpg";
import slider2 from "./assets/About-2.jpg";
import slider3 from "./assets/About-3.jpg";
import slider4 from "./assets/About-4.jpg";
import slider5 from "./assets/About-5.jpg";
import slider6 from "./assets/About-6.jpg";
import slider7 from "./assets/About-7.jpg";
import {
  AboutUsContainer,
  ContentTextH4,
  ContentTextP,
  ImageSlider,
  Images,
  ImagesWrapper,
  AboutUsContent,
} from "./AboutUs.styles";

export const AboutUs = () => {
  const images = React.useMemo(
    () => [slider1, slider2, slider3, slider4, slider5, slider6, slider7],
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

  const handleScroll = () => {
    const slider = sliderRef.current;
    const isAtStart = slider.scrollLeft === 0;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const isAtEnd = slider.scrollLeft >= maxScroll;

    setIsLeftButtonDisabled(isAtStart);
    setIsRightButtonDisabled(isAtEnd);
  };

  React.useEffect(() => {
    const slider = sliderRef.current;

    const handleInitialButtonStates = () => {
      handleScroll();
      setIsLeftButtonDisabled(slider.scrollLeft === 0);
      setIsRightButtonDisabled(
        slider.scrollLeft >= slider.scrollWidth - slider.clientWidth
      );
    };

    const imageLoadPromises = images.map((imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imageLoadPromises)
      .then(() => {
        handleInitialButtonStates();
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        handleInitialButtonStates();
      });

    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
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
        <IconButton
          size="large"
          onClick={handlePrevClick}
          disabled={isLeftButtonDisabled}
        >
          <ChevronLeft style={{ cursor: "pointer" }} />
        </IconButton>
        <ImagesWrapper ref={sliderRef}>
          {images.map((image, index) => (
            <Images key={index} src={image} alt="" />
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
