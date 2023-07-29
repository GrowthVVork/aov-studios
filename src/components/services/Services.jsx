import * as React from "react";
// import { ChevronRight } from "react-feather";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HouseIcon from "@mui/icons-material/House";
import service1_large from "../../assets/services/Services1-large.jpg";
import service1_medium from "../../assets/services/Services1-medium.jpg";
import service1_small from "../../assets/services/Services1-small.jpg";
import service2_large from "../../assets/services/Services2-large.jpg";
import service2_medium from "../../assets/services/Services2-medium.jpg";
import service2_small from "../../assets/services/Services2-small.jpg";
import service3_large from "../../assets/services/Services3-large.jpg";
import service3_medium from "../../assets/services/Services3-medium.jpg";
import service3_small from "../../assets/services/Services3-small.jpg";
import { SectionContainer, SectionHeading } from "../Shared.styles";
import {
  ServiceItemContainer,
  ServiceItemContent,
  ServiceItemHeading,
  ServiceItemImage,
  ServiceItemPicture,
  ServiceItemText,
  //StyledButton,
} from "./Services.styles";

export const Services = () => {
  return (
    <SectionContainer id="services">
      <SectionHeading>Services</SectionHeading>

      <ServiceItemContainer>
        <ServiceItemContent>
          <ArchitectureIcon style={{ color: "#767676", fontSize: "40px" }} />
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
            {/* <StyledButton variant="contained" endIcon={<ChevronRight />}>
              Learn More
            </StyledButton> */}
          </div>
        </ServiceItemContent>
        <ServiceItemPicture>
          <source srcset={service1_large} media="(min-width: 850px)" />
          <source srcset={service1_medium} media="(min-width: 500px)" />
          <ServiceItemImage src={service1_small} alt="" />
        </ServiceItemPicture>
      </ServiceItemContainer>

      <ServiceItemContainer reverse>
        <ServiceItemPicture>
          <source srcset={service3_large} media="(min-width: 850px)" />
          <source srcset={service3_medium} media="(min-width: 500px)" />
          <ServiceItemImage src={service3_small} alt="" />
        </ServiceItemPicture>
        <ServiceItemContent>
          <HouseIcon style={{ color: "#767676", fontSize: "40px" }} />
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
            {/* <StyledButton variant="contained" endIcon={<ChevronRight />}>
              Learn More
            </StyledButton> */}
          </div>
        </ServiceItemContent>
      </ServiceItemContainer>

      <ServiceItemContainer>
        <ServiceItemContent>
          <DesignServicesIcon style={{ color: "#767676", fontSize: "40px" }} />
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
            {/* <StyledButton variant="contained" endIcon={<ChevronRight />}>
              Learn More
            </StyledButton> */}
          </div>
        </ServiceItemContent>
        <ServiceItemPicture>
          <source srcset={service2_large} media="(min-width: 850px)" />
          <source srcset={service2_medium} media="(min-width: 500px)" />
          <ServiceItemImage src={service2_small} alt="" />
        </ServiceItemPicture>
      </ServiceItemContainer>
    </SectionContainer>
  );
};
