import React from 'react';
import {Container} from "@mantine/core";
import {Landing} from "../components/landing/Landing";
import {ContactForm} from "../components/pages/contact/ContactForm";

function Contact() {
    return (
        <Container fluid px={0} py={0}>
            <Landing/>
            <ContactForm/>
        </Container>
    );
}

export default Contact;
