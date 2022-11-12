import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Snackbar from '@mui/material/Snackbar';
import { Alert, Stack } from "@mui/material";

const Contact = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


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
      <h4>Please send me message for contact.</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" onClick={handleClick} value="Send" />
      </form>
      <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%', color:"white", backgroundColor:"#5F9DF7" }}>
        Your message has been sent...!
        </Alert>
      </Snackbar>
    </Stack>
    </StyledContactForm>
  );
};

export default Contact;

const StyledContactForm = styled.div`
background-color: rgb(0, 0, 0);
  padding: 183px;
  display: flex;
  justify-content: center;
  width: 170em;
  align-items: center;
  margin: auto;
  h4 {
    font-size: 1.5rem;
    color: #fff;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
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
      background-color: #25316d;
      color: #ffffff;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
