import { styled } from "@mui/material";

export const ContactWrapper = styled("div")(() => ({
  display: "flex",
  gap: "8rem",
  "@media (max-width: 53rem)": {
    flexDirection: "column",
    gap: "3rem",
  },
}));
