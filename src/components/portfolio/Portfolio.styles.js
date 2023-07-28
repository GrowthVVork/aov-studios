import { styled } from "@mui/material";

export const ImagesContainer = styled("div")(() => ({
  display: "grid",
  gap: "0.6rem",
  gridAutoFlow: "dense",
  gridAutoRows: "14.7rem",
  gridTemplateColumns: "repeat(3, 1fr)",
  margin: 0,
  "@media (max-width: 53rem)": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@media (max-width: 40rem)": {
    gridAutoRows: "auto",
    gridTemplateColumns: "1fr",
  },
}));

export const Image = styled("img")(() => ({
  height: "100%",
  objectFit: "cover",
  width: "100%",
  "&:nth-child(1)": {
    gridColumn: "span 2",
  },
  "&:nth-child(1), &:nth-child(3), &:nth-child(4)": {
    gridRow: "span 2",
  },
  "@media (max-width: 40rem)": {
    gridColumn: "span 1",
    gridRow: "span 1",
  },
  "@media (max-width: 40rem) and (nth-child(n + 6))": {
    display: "none",
  },
}));
