import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8taoi7a",
        "template_5bmibrs",
        form.current,
        "impAcGr41plhJ134p"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

const StyledContactForm = styled.div`
    padding : 50px;
  display: flex;
  justify-content: center;
  width: 900px;
  align-items: center;
  margin: 0 auto;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 10px;
    }
    input[type="text"],
    input[type="email"],
    textarea {
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    input[type="submit"] {
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #25316D;
      color: #FFFFFF;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
