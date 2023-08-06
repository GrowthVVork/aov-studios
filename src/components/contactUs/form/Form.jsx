import * as React from "react";
import emailjs from "@emailjs/browser";
import { CommonHeading, CommonWrapper } from "../../Shared.styles";
import {
  ButtonWrapper,
  FormWrapper,
  StyledButton,
  StyledTextField,
} from "./Form.styles";

export const Form = () => {
  const formRef = React.useRef();

  const fields = [
    { label: "Name*", type: "text", name: "user_name" },
    { label: "Email*", type: "email", name: "user_email" },
    { label: "Phone No.*", type: "text", name: "user_phone" },
    { label: "Message*", type: "textarea", name: "message" },
  ];

  const [formData, setFormData] = React.useState(
    Object.fromEntries(fields.map(({ name }) => [name, ""]))
  );

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const isFormValid =
    formData.user_name &&
    formData.user_email &&
    formData.user_phone &&
    formData.message;

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+\.com$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.user_email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(formData.user_phone)) {
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
          console.log(formRef.current);
          setFormData(Object.fromEntries(fields.map(({ name }) => [name, ""])));
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <CommonWrapper>
      <CommonHeading>For enquiry:</CommonHeading>
      <FormWrapper ref={formRef}>
        {fields.map(({ label, type, name }) => (
          <StyledTextField
            key={name}
            placeholder={label}
            name={name}
            value={formData[name]}
            onChange={(e) => handleChange(name, e.target.value)}
            required
            InputLabelProps={{ shrink: true }}
            multiline={type === "textarea"}
            rows={type === "textarea" ? 6.5 : undefined}
          />
        ))}
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
    </CommonWrapper>
  );
};
