import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const formRef = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          setIsFormSubmitted(true);
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const fields = [
    { label: "Name", type: "text", name: "user_name" },
    { label: "Email", type: "email", name: "user_email" },
    { label: "Phone No.", type: "text", name: "user_phone" },
    { label: "Message", type: "textarea", name: "message" },
  ];

  const clearForm = () => {
    setIsFormSubmitted(false);
    fields.forEach(({ name }) => {
      formRef.current[name].value = "";
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {fields.map(({ label, type, name }) => (
        <div key={name}>
          <label>{label}</label>
          {type === "textarea" ? (
            <textarea name={name} />
          ) : (
            <input type={type} name={name} />
          )}
        </div>
      ))}
      <input type="submit" value="Send" />
      {isFormSubmitted && <p>Form submitted successfully!</p>}
    </form>
  );
};
