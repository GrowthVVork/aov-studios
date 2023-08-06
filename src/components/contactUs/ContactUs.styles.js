import { styled } from "@mui/material";

export const ContactWrapper = styled("div")(() => ({
  display: "flex",
  gap: "8rem",
  "@media (max-width: 40rem)": { // to be updated to "53rem" if Careers section is integrated.
    flexDirection: "column",
    gap: "3rem",
    padding: "0 2rem",
  },
}));
