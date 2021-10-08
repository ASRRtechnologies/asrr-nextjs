import React from 'react'
import Section from '@/modules/shared/section/Section'
import {Fade} from 'react-awesome-reveal'
import contactStyles from "./contact.module.scss";
import Button from "@/modules/shared/buttons/Button";
import buttonStyles from "@/modules/shared/buttons/buttonStyles.module.scss";

// @ts-ignore

function Preview() {
    const titleObject = {
        title: 'Neem contact met ons op',
        header: 'Meer weten over wat ASRR voor u kan betekenen? Een van onze experts staat u graag te woord.',
        subheader: 'Contact',
    };

    return (
        <Section className={contactStyles.contactPreview}>
            <Fade delay={400} triggerOnce={true}>
                <div className={contactStyles.contactInner}>
                    <h1 className="h2">{titleObject.title}</h1>
                    <h2 className="h3 not-bold">{titleObject.header}</h2>
                    <Button title="Kom in contact" mode="light"
                            className={buttonStyles.contactPreview}
                            buttonType={{buttonType: "navigation", href: "/contact"}}/>
                </div>
            </Fade>
        </Section>
    )
}

export default Preview


