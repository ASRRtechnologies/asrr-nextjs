import React from 'react';
import Section from "../layout/Section";

import Title from "../text/Title";
import TextField from "@material-ui/core/TextField/TextField";

function Contact(props) {
    return (
        <Section>
            <Title big title={"Services"} text="lorem ipsum hahahahaha"/>
            <div className="contact">
                <form className="form">
                    <TextField id="standard-basic" label="Name"/>
                    <TextField id="standard-basic" label="Email"/>
                    <TextField id="standard-basic" label="Organization Name"/>
                    <TextField id="standard-basic" label="Message"/>
                </form>

                <div className="contact-image">

                </div>
            </div>

        </Section>
    );
}

export default Contact;