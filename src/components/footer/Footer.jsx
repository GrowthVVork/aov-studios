import {
  FooterContainer,
  FooterContentWrapper,
  FooterWrapper,
  InfoContent,
  InfoHeader,
  InfoLink,
  InfoText,
  ServicesList,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <FooterContentWrapper>
          <InfoHeader>Services</InfoHeader>
          <InfoContent>
            <ServicesList>Architecture</ServicesList>
            <ServicesList>Interior Design</ServicesList>
            <ServicesList>Landscape Design</ServicesList>
            <ServicesList>Construction Design</ServicesList>
          </InfoContent>
        </FooterContentWrapper>

        <FooterContentWrapper>
          <InfoHeader>Address</InfoHeader>
          <InfoText>AOV Studios</InfoText>
          <InfoText>Narayan Bagh,</InfoText>
          <InfoText>Indore (M.P.)</InfoText>
          <InfoText>India</InfoText>
        </FooterContentWrapper>

        <FooterContentWrapper>
          <InfoHeader>Contact Us </InfoHeader>
          <InfoText paddingBottom="1rem">+91-7582898292</InfoText>
          <InfoLink href="mailto:studiosaov@gmail.com">
            studiosaov@gmail.com
          </InfoLink>
        </FooterContentWrapper>

        <FooterContentWrapper>
          <InfoHeader>Made by</InfoHeader>
          <InfoLink
            paddingBottom="1rem"
            href="https://github.com/tejas-k3"
            target="_blank"
          >
            Tejas
          </InfoLink>
          <InfoLink href="https://github.com/siddhi-gh" target="_blank">
            Siddhi
          </InfoLink>
        </FooterContentWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};
