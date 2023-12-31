import { Button, styled } from "@mui/material";

export const ServiceItemContainer = styled("div")(({ reverse }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
  gap: "3rem 9rem",
  gridTemplateColumns: "1fr 1fr",
  "&:not(:last-child)": {
    paddingBottom: "8rem",
    "@media (max-width: 53rem)": {
      paddingBottom: "6.5rem",
    },
  },
  "@media (max-width: 71rem)": {
    flexDirection: "column",
    "& > div": {
      padding: "0",
    },
  },
}));

export const ServiceItemContent = styled("div")(() => ({
  display: "grid",
  gap: "3rem",
  gridTemplateColumns: "auto 1fr",
  width: "100%",
  "@media (max-width: 71rem)": {
    width: "100%",
  },
}));

export const ServiceItemHeading = styled("h5")(() => ({
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "2rem",
  fontWeight: 300,
  letterSpacing: "0.02rem",
}));

export const ServiceItemText = styled("p")(() => ({
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  padding: "2.6rem 0 0 0",
  width: "min(100%, 45ch)",
  "@media (max-width: 71rem)": {
    width: "min(75ch, 100%)",
  },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: "rgb(239, 239, 239)",
  borderRadius: "4rem",
  color: "black",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  margin: "2.6rem 0 0 0",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#F5F5F5",
  },
}));

export const ServiceItemPicture = styled("picture")(() => ({
  display: "block",
  maxWidth: "100%",
  width: "100%",
  "&:nth-of-type(odd)": {
    order: -1,
  },
  "@media (max-width: 71rem)": {
    "&:nth-of-type(n)": {
      order: -1,
    },
  },
}));

export const ServiceItemImage = styled("img")(() => ({
  display: "block",
  maxWidth: "100%",
}));
