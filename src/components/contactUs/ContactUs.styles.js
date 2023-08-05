import { styled } from "@mui/material";

export const ContactUsContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  gap: "5rem",
  width: "100%",
  "@media (max-width: 53rem)": {
    gap: "3rem",
  },
}));

export const ContactWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  gap: "8rem",
  "@media (max-width: 53rem)": {
    flexDirection: "column",
    gap: "3rem",
  },
}));

export const Form = styled("div")(() => ({
  display: "flex",
  width: "100%",
  backgroundColor: "lightgrey",
}));
