import {
  FooterContainer,
  FooterWrapper,
  InfoContent,
  InfoHeader,
  InfoText,
  ServicesList,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <div>
          <InfoHeader>Services</InfoHeader>
          <InfoContent>
            <ServicesList>Architecture</ServicesList>
            <ServicesList>Interior Design</ServicesList>
            <ServicesList>Landscape Design</ServicesList>
            <ServicesList>Construction Design</ServicesList>
          </InfoContent>
        </div>

        <div>
          <InfoHeader>Address</InfoHeader>
          <InfoText>AOV Studios</InfoText>
          <InfoText>Narayan Bagh,</InfoText>
          <InfoText>Indore (M.P.)</InfoText>
          <InfoText>India</InfoText>
        </div>

        <div>
          <InfoHeader>Contact Us </InfoHeader>
          <InfoText paddingBottom="1rem">+91-7582898292</InfoText>
          <InfoText>studiosaov@gmail.com</InfoText>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};
