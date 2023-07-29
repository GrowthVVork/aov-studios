import { styled } from "@mui/material";

export const SectionContainer = styled("div")(() => ({
  margin: "0 auto",
  padding: "5rem 0",
  width: "90%",
  "@media (max-width: 53rem)": {
    padding: "4.2rem 0",
  },
}));

export const SectionHeading = styled("h4")(() => ({
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "2.3rem",
  fontWeight: 400,
  marginBottom: "3rem",
  textAlign: "center",
  textTransform: "uppercase",
}));
