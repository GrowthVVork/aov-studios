import { Link, Typography, styled } from "@mui/material";

export const FooterContainer = styled("footer")(() => ({
  background: "rgb(239, 239, 239)",
  padding: "1.5rem 0",
}));

export const FooterWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  width: "90%",
  "@media (max-width: 40rem)": {
    flexDirection: "column",
    gap: "3rem",
  },
}));

export const FooterContentWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const InfoHeader = styled("h3")(() => ({
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "2.2rem",
  fontWeight: 400,
  letterSpacing: "0.02rem",
  marginBottom: "2.6rem",
  textTransform: "uppercase",
  "@media (max-width: 40rem)": {
    display: "flex",
    justifyContent: "center",
  },
}));

export const InfoContent = styled("ul")(() => ({
  listStyleType: "none",
  padding: 0,
}));

export const ServicesList = styled("li")(() => ({
  color: "#767676",
  display: "list-item",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  "@media (max-width: 40rem)": {
    display: "flex",
    justifyContent: "center",
  },
}));

export const InfoText = styled(Typography)(() => ({
  color: "#767676",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  "@media (max-width: 40rem)": {
    display: "flex",
    justifyContent: "center",
  },
}));

export const InfoLink = styled(Link)(() => ({
  color: "#767676",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  "@media (max-width: 40rem)": {
    display: "flex",
    justifyContent: "center",
  },
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
}));
