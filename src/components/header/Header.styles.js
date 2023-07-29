import { styled } from "@mui/material";

export const Nav = styled("nav")(() => ({
  alignItems: "center",
  background: "rgb(239, 239, 239)",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.09)",
  display: "flex",
  fontSize: "1.7rem",
  height: "auto",
  justifyContent: "space-between",
  left: 0,
  padding: "25px 60px",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 200,
  "@media (max-width: 71rem)": {
    padding: "25px 55px",
  },
  "@media (max-width: 53rem)": {
    padding: "25px 35px",
  },
}));

export const NavLogo = styled("h1")(() => ({
  cursor: "default",
  fontSize: "2.5rem",
  fontWeight: 'normal',
  "@media (max-width: 53rem)": {
    fontSize: "2.2rem",
  },
}));

export const NavUl = styled("ul")(() => ({
  display: "flex",
  listStyle: "none",
  gap: "2rem",
}));

export const NavUlA = styled("a")(() => ({
  color: "#2d2e32",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.23s",
  fontWeight: 600,
  "@media (max-width: 900px)": {
    display: "none",
  },
  ":hover": { color: "#767676" },
}));

export const MobileMenu = styled("i")(() => ({
  cursor: "pointer",
  display: "none",
  fontSize: "2.3rem",
  "@media (max-width: 900px)": {
    display: "flex",
  },
  ":hover": { color: "#767676", transition: "all .3s" },
}));

export const MobileNavOpen = styled("div")(() => ({
  alignItems: "center",
  backgroundColor: "#fff",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  left: "0 !important",
  position: "fixed",
  textAlign: "center",
  top: 0,
  transition: "all .3s ease-in-out",
  width: "100%",
  zIndex: 300,
}));

export const MobileNavClose = styled("div")(() => ({
  alignItems: "center",
  backgroundColor: "#fff",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  left: "-100% !important",
  position: "fixed",
  textAlign: "center",
  top: 0,
  transition: "all .3s ease-in-out",
  width: "100%",
  zIndex: 300,
}));

export const MobileNavSpan = styled("span")(() => ({
  cursor: "pointer",
  fontSize: "3.3rem",
  position: "absolute",
  right: "4rem",
  top: "2rem",
  ":hover": {
    color: "#767676",
    transition: "all .3s",
  },
}));

export const MobileNavUl = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "2.3rem",
  gap: "4rem",
  listStyle: "none",
}));

export const MobileNavUla = styled("a")(() => ({
  color: "#000",
  fontWeight: 500,
  textDecoration: "none",
  ":hover": {
    color: "#767676",
    transition: "all .3s",
  },
}));
