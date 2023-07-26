import { styled } from "@mui/material";

export const HeroImageWrapper = styled("picture")(() => ({
  maxWidth: "90rem",
  width: "90%",
}));

export const Image = styled("img")(() => ({
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
  paddingTop: "8rem",
  width: "90%",
}));
