import { styled } from "@mui/material";

export const HeroImageWrapper = styled("picture")(() => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: '8rem',
  height: '100%',
  width: '100%',
}));

export const Image = styled("img")(() => ({
  width: "90%",
}));
