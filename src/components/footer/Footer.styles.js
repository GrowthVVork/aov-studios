import { Typography, styled } from "@mui/material";

export const FooterContainer = styled("footer")(() => ({
  backgroundColor: "#2d2e32",
  padding: "4.8rem 0",
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

export const InfoHeader = styled("h3")(() => ({
  color: "white",
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
  color: "white",
  display: "list-item",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  "@media (max-width: 40rem)": {
    display: "flex",
    justifyContent: "center",
  },
}));

export const InfoText = styled(Typography)(() => ({
  color: "white",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  "@media (max-width: 40rem)": {
    display: "flex",
    justifyContent: "center",
  },
}));
