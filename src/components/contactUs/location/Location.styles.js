import { styled, Link } from "@mui/material";

export const MapWrapper = styled("div")(() => ({
  display: "flex",
  height: "100%",
  paddingBottom: "2rem",
  position: "relative",
  width: "100%",
  "@media (max-width: 53rem)": {
    justifyContent: "center",
  },
}));

export const Email = styled(Link)(() => ({
  color: "black",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  paddingBottom: "1rem",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
  "@media (max-width: 53rem)": {
    textAlign: "center",
  },
}));
