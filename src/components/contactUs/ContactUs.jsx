import * as React from "react";
import { SectionContainer, SectionHeading } from "../Shared.styles";
import { Location } from "./location";
import { Careers } from "./careers";
import { Services } from "./services";
import { ContactUsContent, ContactWrapper, Form } from "./ContactUs.styles";

export const ContactUs = () => {
  return (
    <SectionContainer id="contact">
      <SectionHeading>contact us</SectionHeading>
      <ContactUsContent>
        <ContactWrapper>
          <Location />
          <Form>Contact form comes here</Form>
          <Careers />
        </ContactWrapper>
        <Services />
      </ContactUsContent>
    </SectionContainer>
  );
};
