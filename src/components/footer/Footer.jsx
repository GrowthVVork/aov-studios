import {
  FooterContainer,
  InfoBox,
  InfoHeader,
  FooterWrapper,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <InfoBox>
          <InfoHeader>Services</InfoHeader>
        </InfoBox>
        <InfoBox>
          <InfoHeader>Address</InfoHeader>
        </InfoBox>
        <InfoBox>
          <InfoHeader>Contact Us </InfoHeader>
        </InfoBox>
      </FooterWrapper>
    </FooterContainer>
  );
};
