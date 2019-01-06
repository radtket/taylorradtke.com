import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Container } from "../../styles/SharedStyles";

const Contact = () => (
  <Container>
    <ContactInfo />
    <ContactForm />
  </Container>
);

export default Contact;
