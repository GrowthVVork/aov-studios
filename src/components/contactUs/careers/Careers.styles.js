import { Typography, styled } from "@mui/material";

export const CareersWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
}));

export const CareersContent = styled(Typography)(() => ({
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  paddingBottom: "1rem",
  "@media (max-width: 53rem)": {
    textAlign: "center",
  },
}));
