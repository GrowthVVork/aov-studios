import { styled, Typography } from "@mui/material";

export const SectionContainer = styled("div")(() => ({
  margin: "0 auto",
  padding: "5rem 0",
  width: "90%",
  "@media (max-width: 71rem)": {
    padding: "3rem 0",
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

export const CommonWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
}));

export const CommonHeading = styled(Typography)(() => ({
  color: "#767676",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.8rem",
  fontWeight: "bold",
  paddingBottom: "1rem",
  "@media (max-width: 53rem)": {
    textAlign: "center",
  },
}));

export const CommonText = styled(Typography)(() => ({
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  "@media (max-width: 53rem)": {
    textAlign: "center",
  },
}));
