import { styled, IconButton } from "@mui/material";

export const AboutUsContent = styled("div")(() => ({
  paddingBottom: "6rem",
  paddingLeft: "10%",
  "@media (max-width: 71rem)": {
    paddingLeft: "8%",
  },
  "@media (max-width: 53rem)": {
    paddingLeft: "6%",
    paddingBottom: "4.8rem",
  },
}));

export const ContentText = styled("p")(() => ({
  color: "#767676",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "2.3rem",
  fontWeight: 200,
  letterSpacing: "0.02rem",
  marginRight: "1rem",
  "@media (max-width: 53rem)": {
    marginRight: 0,
  },
}));

export const ImageSlider = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  overflowX: "auto",
}));

export const ImagesWrapper = styled("div")(() => ({
  display: "flex",
  columnGap: "20px",
  overflowX: "hidden",
  margin: "0 0.5rem",
  width: "100%",
}));

export const Images = styled("img")(() => ({
  minWidth: "33%",
  width: "33%",
  "@media (max-width: 71rem)": {
    minWidth: "50%",
    width: "50%",
  },
  "@media (max-width: 53rem)": {
    minWidth: "100%",
    width: "100%",
  },
}));

export const StyledIconButton = styled(IconButton)(() => ({
  borderRadius: "5px",
}));
