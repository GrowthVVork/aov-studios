import { Button, TextField, styled } from "@mui/material";

export const FormWrapper = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
}));

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    font: '300 1rem/1.7 "Poppins",sans-serif',
    fontSize: "1.4rem",
  },
}));

export const ButtonWrapper = styled("div")(() => ({
  display: "flex",
  "@media (max-width: 53rem)": {
    justifyContent: "center",
  },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: "rgb(239, 239, 239)",
  color: "black",
  font: '"Poppins", sans-serif',
  fontSize: "1.4rem",
  fontWeight: "normal",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#F5F5F5",
  },
}));
