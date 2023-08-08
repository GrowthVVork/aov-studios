import { styled, Link } from "@mui/material";

export const FooterContainer = styled("footer")(() => ({
  background: "rgb(239, 239, 239)",
  padding: "3rem 0",
  "@media (max-width: 40rem)": {
    padding: "2rem 0",
  },
}));

export const FooterWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  textAlign: "center",
  width: "90%",
}));

export const TextWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  "@media (max-width: 40rem)": {
    flexDirection: "column",
  },
}));

export const GithubLink = styled(Link)(() => ({
  color: "black",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  fontWeight: "bold",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
}));

export const FooterText = styled("h3")(() => ({
  font: '500 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.7rem",
  fontWeight: "bold",
  letterSpacing: "0.02rem",
}));
