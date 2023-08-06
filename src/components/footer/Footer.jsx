import {
  FooterContainer,
  FooterWrapper,
  FooterText,
  GithubLink,
  TextWrapper,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <TextWrapper>
          <FooterText>
            © {new Date().getFullYear()} by{" "}
            <GithubLink href="https://github.com/GrowthVVork/" target="_blank">
              GrowthVVork
            </GithubLink>
          </FooterText>
        </TextWrapper>
        <FooterText>
          This website is maintained by -{" "}
          <GithubLink href="https://github.com/tejas-k3" target="_blank">
            Tejas
          </GithubLink>{" "}
          &{" "}
          <GithubLink href="https://github.com/siddhi-gh" target="_blank">
            Siddhi
          </GithubLink>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
};
