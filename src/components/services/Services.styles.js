import { Button, styled } from "@mui/material";

export const ServicesContainer = styled("div")(() => ({
  margin: "0 auto",
  padding: "5rem 0",
  width: "90%",
}));

export const ServicesHeading = styled("h4")(() => ({
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "2.3rem",
  fontWeight: 400,
  marginBottom: "3rem",
  textAlign: "center",
  textTransform: "uppercase",
}));

export const ServiceItemContainer = styled("div")(({ reverse }) => ({
  display: "flex",
  gridTemplateColumns: "1fr 1fr",
  flexDirection: reverse ? "row-reverse" : "row",
  alignItems: "center",
  gap: "3rem 9rem",
  "&:not(:last-child)": {
    paddingBottom: "8rem",
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
  gridTemplateColumns: "auto 1fr",
  gap: "3rem",
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
  padding: "3rem 0",
  width: "min(100%, 45ch)",
  "@media (max-width: 71rem)": {
    width: "min(75ch, 100%)",
  },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: "rgb(239, 239, 239)",
  borderRadius: '4rem',
  color: "black",
  cursor: "pointer",
  font: '300 1rem/1.7 "Poppins", sans-serif',
  fontSize: "1.6rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "white",
  },
}));

export const ServiceItemPicture = styled("picture")(() => ({
  display: "block",
  maxWidth: "100%",
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
