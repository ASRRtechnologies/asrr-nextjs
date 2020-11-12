import React, {useState} from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import Input from '@/text/Input'
import Map from '@/contact/Map'
import useI18n from '../../hooks/use-i18n'
import Fade from "react-reveal";
import styled from "@emotion/styled";
import FormButton from "@/buttons/FormButton";
import {useSnackbar} from "notistack";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
        
        a{
          text-decoration: ${props => props.theme.fonts.title};
        }
`;

const emailRegex = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'

function Contact({big}) {
    const i18n = useI18n()
    const recipient = 'contact@asrr.nl'
    const [email, setEmail] = useState({body: '', subject: '', userEmail: '', organization: '', name: ''})
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const handleChange = ({name, value}) => setEmail({...email, [name]: value});

    const handleSubmit = (event) => {

        let emailObject = {
            body: `from: ${email.userEmail}, name:${email.name}, subject:${email.subject}, organization: ${email.organization}, message: ${email.body}`,
            subject: email.subject,
            recipient: recipient,
        };

        fetch("https://mail.api.asrr-tech.com/mail/send/simple", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailObject),
        }).then(function (response) {
            if (response.ok) {
                enqueueSnackbar(i18n.t("user_notifications.contact.success.title"), {variant: "success"});
                setEmail({})
            } else {
                response.json().then(function (object) {
                    console.log(object);
                    console.log(object.propertyErrors);
                    console.log(response);

                    enqueueSnackbar(i18n.t("user_notifications.contact.error.title"), {error: true})

                });
                throw new Error(response.statusText)
            }
        }).catch(error => {
            enqueueSnackbar(i18n.t("user_notifications.contact.error.title"), {error: true})
        });

        event.preventDefault();

    };

    return (
        <Wrapper className="no-landing">


            <div className="contact">

                <Title className="title-left title-button" basePath={'contact.preview.header'}/>

                <Fade bottom>
                    <div className="contact-adress">
                        <h1 className="subheader"> Contact Details</h1>

                        <p className="text">{i18n.t("contact.address.street")}</p>
                        <p className="text">{i18n.t("contact.address.zipcode")}</p>
                        <p className="text">{i18n.t("contact.address.country")}</p>

                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7"
                           className="link text">{i18n.t("contact.address.route")}</a>
                        <a href="mailto:contact@asrr.nl" target="_blank" rel="noopener noreferrer"
                           className="link text">Email:
                            contact@asrr.nl</a>
                    </div>
                </Fade>

                <Fade bottom>
                    <h1 className="subheader"> Contact Us:</h1>

                    <form onSubmit={handleSubmit} id="contact-form" className="form">

                        <Input onChange={(e) => handleChange(e.target)} value={email.name} className="no-margin"
                               name="name" type="text"
                               required={true} placeholder={i18n.t('contact.form.name.placeholder')}/>
                        <Input onChange={(e) => handleChange(e.target)} value={email.subject} className="no-margin"
                               name="subject" type="text"
                               required={true} placeholder={i18n.t('contact.form.subject.placeholder')}/>
                        <Input onChange={(e) => handleChange(e.target)} value={email.organization} name="organization"
                               type="text"
                               placeholder={i18n.t('contact.form.organization.placeholder')}/>
                        <Input required={true} pattern={emailRegex} onChange={(e) => handleChange(e.target)}
                               value={email.userEmail}
                               name="userEmail" type="email" placeholder={i18n.t('contact.form.email.placeholder')}/>
                        <Input onChange={(e) => handleChange(e.target)} value={email.body}
                               name="body" last textArea={true} type="text"
                               required={true} placeholder={i18n.t('contact.form.message.placeholder')}/>

                        <FormButton title="buttons.submit"/>
                    </form>

                </Fade>


                <Fade bottom delay={300}>
                    <div className="map-container">
                        <Map/>
                    </div>
                </Fade>

            </div>


        </Wrapper>
    )
}

export default Contact
