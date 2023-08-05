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
  "&:nth-of-type(1)": {
    gridColumn: "span 2",
  },
  "&:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(4)": {
    gridRow: "span 2",
  },
  "@media (max-width: 40rem)": {
    gridColumn: "span 1",
    gridRow: "span 1",
  },
  "@media (max-width: 40rem) and (nth-of-type(n + 6))": {
    display: "none",
  },
}));
