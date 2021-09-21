import React, {useState} from 'react'
import Section from '../modules/shared/section/Section'
import Title from '../utillities/titles/Title'
import Input from '@/utillities/text/Input'
import Map from '@/contact/Map'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import FormButton from '@/buttons/FormButton'
import {useSnackbar} from 'notistack'
import {useTheme} from '../../context/theme/ThemeContext'

const Wrapper = styled(Section)`
  background: ${props => props.theme.layout};

  a {
    text-decoration: ${props => props.theme.fonts.title};
  }
`;

const emailRegex = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';

function Contact({data}) {
    const i18n = useI18n();
    const recipient = 'contact@asrr.nl';
    const [email, setEmail] = useState({body: '', subject: '', userEmail: '', organization: '', name: ''});
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const darkmode = useTheme().dark;

    const handleChange = ({name, value}) => setEmail({...email, [name]: value});

    const handleSubmit = (event) => {

        let emailObject = {
            body: `from: ${email.userEmail}, name:${email.name}, subject:${email.subject}, organization: ${email.organization}, message: ${email.body}`,
            subject: email.subject,
            recipient: recipient,
        };

        fetch('https://mail.api.asrr-tech.com/mail/send/simple', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailObject),
        }).then(function (response) {
            if (response.ok) {
                enqueueSnackbar(i18n.t('user_notifications.contact.success.title'), {variant: 'success'});
                setEmail({})
            } else {
                response.json().then(function (object) {
                    console.log(object);
                    enqueueSnackbar(i18n.t('user_notifications.contact.error.title'), {error: true})
                });
                throw new Error(response.statusText)
            }
        }).catch(error => {
            enqueueSnackbar(i18n.t('user_notifications.contact.error.title'), {error: true})
        });

        event.preventDefault()

    };

    return (
        <Wrapper className="no-landing">

            <Title className="title-button" title={data.page_title.title}
                   subHeader={data.page_title.subheader} header={data.page_title.header}/>

            <div className="contact">

                <div className="contact-details">

                    <div className="contact-form">
                        <h1 className="font-header">Contactformulier</h1>

                        <form onSubmit={handleSubmit} id="contact-form" className="form">

                            <Input onChange={(e) => handleChange(e.target)} value={email.name} className="no-margin"
                                   name="name" type="text"
                                   required={true} placeholder="Naam*"/>
                            <Input onChange={(e) => handleChange(e.target)} value={email.subject}
                                   className="no-margin"
                                   name="subject" type="text"
                                   required={true} placeholder="Onderwerp*"/>
                            <Input onChange={(e) => handleChange(e.target)} value={email.organization}
                                   name="organization"
                                   type="text"
                                   placeholder="Organisatie"/>
                            <Input required={true} pattern={emailRegex} onChange={(e) => handleChange(e.target)}
                                   value={email.userEmail}
                                   name="userEmail" type="email"
                                   placeholder="Email*"/>
                            <Input onChange={(e) => handleChange(e.target)} value={email.body}
                                   name="body" last textArea={true} type="text"
                                   required={true} placeholder="Bericht*"/>
                            <FormButton title="buttons.submit"/>
                        </form>
                    </div>

                    <div className="map-container">
                        <Map/>
                    </div>

                </div>

                <div className="contact-adres">

                    <h1 className="font-header">Informatie</h1>

                    <span>
                        <p className="font-general">
                            ASRR B.V.<br/>Gravenzandseweg 2 unit A <br/>2291 PE Wateringen
                            </p>
                    </span>

                    <a href="tel:+(085) 2007 465" target="_blank" rel="noopener noreferrer"
                       className={`font-general ${darkmode
                           ? 'animated-link-light'
                           : 'animated-link-dark'}`}>Telefoonnummer: +(085) 2007 465
                    </a>

                    <a href="mailto:contact@asrr.nl" target="_blank" rel="noopener noreferrer"
                       className={`font-general ${darkmode
                           ? 'animated-link-light'
                           : 'animated-link-dark'}`}>Email: contact@asrr.nl
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7"
                       className={`font-general ${darkmode
                           ? 'animated-link-light'
                           : 'animated-link-dark'}`}>Plan route
                    </a>

                </div>

            </div>

        </Wrapper>
    )
}

export default Contact
