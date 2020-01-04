import React from "react";
import {
  StyledContactForm,
  StyledFormInput,
  StyledSubmitButton,
  StyledFormTextArea,
} from "../../../styles/Home/Contact";

const ContactForm = () => {
  return (
    <StyledContactForm
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
    >
      <input name="bot-field" type="hidden" />

      <StyledFormInput
        aria-label="Name"
        id="name"
        name="name"
        placeholder="Name"
        required
        type="text"
      />

      <StyledFormInput
        aria-label="Email"
        id="email"
        name="email"
        placeholder="Email"
        required
        type="text"
      />

      <StyledFormInput
        aria-label="Subject"
        id="subject"
        name="subject"
        placeholder="Subject"
        type="text"
      />

      <StyledFormTextArea
        aria-label="Message"
        id="message"
        name="message"
        placeholder="Message"
        required
        rows="6"
        type="text"
      />

      <StyledSubmitButton
        aria-label="Submit"
        id="submit_btn"
        role="button"
        type="submit"
        value="Submit"
      >
        Submit
      </StyledSubmitButton>
    </StyledContactForm>
  );
};

export default ContactForm;
