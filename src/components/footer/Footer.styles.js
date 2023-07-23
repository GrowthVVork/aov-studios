import { styled } from "@mui/material";

export const FooterContainer = styled("footer")(() => ({
  backgroundColor: "#2d2e32",
  display: "block",
  padding: "4rem 0",
  width: "100%",
  justifyContent: "space-between",
}));

export const FooterWrapper = styled("div")(() => ({
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  alignContent: "center",
  margin: "0 auto",
}));

export const InfoBox = styled("div")(() => ({
  backgroundColor: "#2d2e32",
  width: "100%",
}));

export const InfoHeader = styled("h3")(() => ({
  fontSize: "2rem",
  color: "white",
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 400,
  marginBottom: "2.6rem",
  textTransform: "uppercase",
}));
