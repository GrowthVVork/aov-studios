import * as React from "react";
import { ChevronRight } from "react-feather";
import  service1_1  from "../../assets/services/Services1-1.jpg";
import  service1_2  from "../../assets/services/Services1-2.jpg";
import  service1_3  from "../../assets/services/Services1-3.jpg";
import  service2_1  from "../../assets/services/Services2-1.jpg";
import  service2_2  from "../../assets/services/Services2-2.jpg";
import  service2_3  from "../../assets/services/Services2-3.jpg";
import architecture from "../../assets/icons/architecture.png";
import interior from "../../assets/icons/interior.png";
import renovation from "../../assets/icons/renovation.png";
import {
  ServiceItemContainer,
  ServiceItemHeading,
  ServiceItemImage,
  ServiceItemPicture,
  ServiceItemText,
  ServiceItemContent,
  ServicesContainer,
  ServicesHeading,
  StyledButton,
} from "./Services.styles";

export const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesHeading>Services</ServicesHeading>

      <ServiceItemContainer>
        <ServiceItemContent>
          <img src={architecture} alt="" />
          <div>
            <ServiceItemHeading>Architecture</ServiceItemHeading>
            <ServiceItemText>
              The company offers a comprehensive range of services including
              architecture design, documentation, construction, interiors, and
              landscape services. Our expertise spans across various sectors
              such as residential, institutional, commercial, industrial, and
              hospitality. With a wealth of design experience in areas like
              Day-care, office (General and Healthcare), Industrial, Automotive,
              and residential facilities, as well as multiple building site
              planning, we have successfully completed projects involving both
              new constructions and renovations of existing buildings.
            </ServiceItemText>
            <StyledButton variant="contained" endIcon={<ChevronRight />}>
              Learn More
            </StyledButton>
          </div>
        </ServiceItemContent>
        <ServiceItemPicture>
          <source srcset={service1_1} media="(min-width: 850px)" />
          <source srcset={service1_2} media="(min-width: 500px)" />
          <ServiceItemImage src={service1_3} alt="" />
        </ServiceItemPicture>
      </ServiceItemContainer>

      <ServiceItemContainer reverse>
        <ServiceItemPicture>
          <ServiceItemImage src={service1_1} alt="" />
        </ServiceItemPicture>
        <ServiceItemContent>
          <img src={interior} alt="" />
          <div>
            <ServiceItemHeading>Interior Design</ServiceItemHeading>
            <ServiceItemText>
              Our involvement in projects begins from the early stages of
              programming and site selection, and extends throughout the design
              and construction phases. We have a deep understanding of the
              municipal agency approval processes in our region, which has
              facilitated a smoother path for many of our clients. Our approach
              emphasizes pushing the boundaries of creativity while maintaining
              a focus on practicality and utility. We recognize the evolving
              nature of the profession and strive to address key aspects of
              adapting to change.
            </ServiceItemText>
            <StyledButton variant="contained" endIcon={<ChevronRight />}>
              Learn More
            </StyledButton>
          </div>
        </ServiceItemContent>
      </ServiceItemContainer>

      <ServiceItemContainer>
        <ServiceItemContent>
          <img src={renovation} alt="" />
          <div>
            <ServiceItemHeading>Construction Design</ServiceItemHeading>
            <ServiceItemText>
              Above all, we are committed to our clients and prioritize their
              satisfaction. Our entire firm is dedicated to going the extra mile
              when needed, ensuring that we understand our clients' business
              needs, requirements, preferences, and budget. By doing so, we
              consistently deliver highly satisfying outcomes for the agencies
              and organizations responsible for the projects.
            </ServiceItemText>
            <StyledButton variant="contained" endIcon={<ChevronRight />}>
              Learn More
            </StyledButton>
          </div>
        </ServiceItemContent>
        <ServiceItemPicture>
          <source srcset={service2_1} media="(min-width: 850px)" />
          <source srcset={service2_2} media="(min-width: 500px)" />
          <ServiceItemImage src={service2_3} alt="" />
        </ServiceItemPicture>
      </ServiceItemContainer>
    </ServicesContainer>
  );
};
