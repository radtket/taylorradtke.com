import React from "react";
import { StyledContainer } from "../../../styles/Shared";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => (
  <StyledContainer>
    <ContactInfo />
    <ContactForm />
  </StyledContainer>
);

export default Contact;
