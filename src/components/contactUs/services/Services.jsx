// currently not being used.
import * as React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  ServicesContent,
  ServicesHeading,
  ServicesList,
  ServicesWrapper,
} from "./Services.styles";

export const Services = () => {
  const services = ["Architecture", "Interior", "Landscape", "Construction"];

  return (
    <ServicesWrapper>
      <ServicesHeading>Services</ServicesHeading>
      <ServicesContent>
        {services.map((service) => (
          <ServicesList key={service}>
            <FiberManualRecordIcon style={{ paddingRight: "1rem" }} />
            {service}
          </ServicesList>
        ))}
      </ServicesContent>
    </ServicesWrapper>
  );
};
