import * as React from "react";
import { SectionContainer, SectionHeading } from "../Shared.styles";
import { Location } from "./location";
import { Form } from "./form";
import { Careers } from "./careers";
import { ContactWrapper } from "./ContactUs.styles";

export const ContactUs = () => {
  return (
    <SectionContainer id="contact">
      <SectionHeading>contact us</SectionHeading>
      <ContactWrapper>
        <Location />
        <Form />
        <Careers />
      </ContactWrapper>
    </SectionContainer>
  );
};
