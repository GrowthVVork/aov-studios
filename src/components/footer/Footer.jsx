import {
  EmailWrapper,
  FooterContainer,
  FooterWrapper,
  InfoContent,
  InfoHeader,
  InfoText,
  ServicesList,
  LinkWrapper,
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
          <EmailWrapper href="mailto:studiosaov@gmail.com">
            studiosaov@gmail.com
          </EmailWrapper>
        </div>
        <div>
          <InfoHeader>Made by</InfoHeader>
          <LinkWrapper href="https://github.com/tejas-k3" target="_blank">
            Tejas
          </LinkWrapper>
          <br></br>
          <LinkWrapper href="https://github.com/siddhi-gh" target="_blank">
            Siddhi
          </LinkWrapper>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};
