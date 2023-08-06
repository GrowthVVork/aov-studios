import * as React from "react";
import { SectionContainer, SectionHeading } from "../Shared.styles";
import { Location } from "./location";
import { Form } from "./form";
import { ContactWrapper } from "./ContactUs.styles";

export const ContactUs = () => {
  return (
    <SectionContainer id="contact">
      <SectionHeading>contact</SectionHeading>
      <ContactWrapper>
        <Location />
        <Form />
      </ContactWrapper>
    </SectionContainer>
  );
};
