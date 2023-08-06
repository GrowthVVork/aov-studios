import { Typography, styled } from "@mui/material";

export const ServicesWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 53rem)": {
    flexDirection: "column",
  },
}));

export const ServicesHeading = styled(Typography)(() => ({
  marginRight: "7rem",
  paddingRight: "2rem",
  borderRight: "2px solid rgba(45, 46, 50, 0.5)",
  fontWeight: 600,
  font: '600 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.8rem",
  "@media (max-width: 53rem)": {
    borderBottom: "2px solid rgba(45, 46, 50, 0.5)",
    borderRight: "none",
    margin: 0,
    padding: "0 0 1rem 0",
  },
}));

export const ServicesContent = styled("ul")(() => ({
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "2.5rem",
  "@media (max-width: 53rem)": {
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem 0 0 0",
  },
}));

export const ServicesList = styled("li")(() => ({
  alignItems: "center",
  display: "flex",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.8rem",
  justifyContent: "center",
}));
