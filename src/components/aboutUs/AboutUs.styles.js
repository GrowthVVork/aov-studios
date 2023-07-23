import { Typography, styled } from "@mui/material";

export const AboutUsContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "6rem",
  justifyContent: "center",
}));

export const StyledTypography = styled(Typography)(() => ({
  display: "flex",
  width: "70%",
  flexDirection: "column",
  alignItems: "flex-start",
  letterSpacing: "0.2rem",
}));

export const ImageSlider = styled("div")(() => ({
  paddingTop: "6rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  justifyContent: "flex-end",
  width: "70%",
}));

export const NavigationWrapper = styled("div")(() => ({
  display: "flex",
  gap: "1.5rem",
  justifyContent: "flex-end",
}));

export const ImagesWrapper = styled("div")(() => ({
  display: "flex",
  gap: "20px", // Adjust the gap between images as needed
  overflowX: "hidden", // Change to "hidden" to remove horizontal scroll
  width: "100%", // Ensure the ImagesWrapper occupies the available width
  maxWidth: "100%", // Ensure the ImagesWrapper doesn't overflow its container
}));

export const Images = styled("img")(({ numberOfImages }) => ({
  flex: `0 0 calc((100% - ${numberOfImages - 1} * 20px) / ${numberOfImages})`,
  height: "30rem",
  width: "30rem",
  objectFit: "cover",
}));
