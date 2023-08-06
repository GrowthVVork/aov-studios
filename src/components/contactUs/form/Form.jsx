import * as React from "react";
import emailjs from "@emailjs/browser";
import { CommonHeading, CommonWrapper } from "../../Shared.styles";
import {
  ButtonWrapper,
  FormWrapper,
  StyledButton,
  StyledTextField,
} from "./Form.styles";
import { FormControl } from "@mui/material";

export const Form = () => {
  const formRef = React.useRef();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [message, setMessage] = React.useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setMessage("");
  };

  const isFormValid = name && email && phone && location && message;

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      alert("Phone number should be a 10-digit number.");
      return;
    }

    emailjs
      .sendForm(
        "service_y4sw2ts",
        "template_4rq4cgk",
        formRef.current,
        "RQ75dNAZHFR1_-xJC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(name, email, phone);
  return (
    <CommonWrapper>
      <CommonHeading>For enquiry:</CommonHeading>
      <FormControl>
        <FormWrapper ref={formRef}>
          <StyledTextField
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <StyledTextField
            placeholder="E-mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <StyledTextField
            placeholder="Phone*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <StyledTextField
            placeholder="Location*"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <StyledTextField
            placeholder="Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{
              "& .MuiInputBase-root": {
                height: 115,
              },
            }}
          />
          <ButtonWrapper>
            <StyledButton
              onClick={sendEmail}
              variant="contained"
              disabled={!isFormValid}
            >
              Submit
            </StyledButton>
          </ButtonWrapper>
        </FormWrapper>
      </FormControl>
    </CommonWrapper>
  );
};
