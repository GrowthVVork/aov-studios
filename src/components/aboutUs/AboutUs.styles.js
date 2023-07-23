import { styled } from "@mui/material";

export const AboutUsContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "5rem",
  justifyContent: "center",
}));

export const AboutUsContent = styled("div")(() => ({
  width: "70%",
  padding: "0 0 0 5%",
}));

export const ContentTextH4 = styled("h4")(() => ({
  fontSize: "2.2rem",
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: "2.6rem",
  color: "#2d2e32",
  textTransform: 'uppercase',
}));

export const ContentTextP = styled("p")(() => ({
  fontSize: "2.2rem",
  fontFamily:'"Poppins", sans-serif',
  color: "#767676",
  fontWeight: 200,
  lineHeight: 1.5,
  letterSpacing: '0.2rem',
}));

export const ImageSlider = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  gap: "1.5rem",
  justifyContent: "flex-end",
  width: "100%",
  padding: '6rem 10px 0 10px'
}));

export const ImagesWrapper = styled("div")(() => ({
  display: "flex",
  columnGap: "20px",
  overflowX: "hidden",
  width: "100%",
}));

export const Images = styled("img")(() => ({
  height: "30rem",
  width: "30rem",
  maxWidth: "30rem",
}));
