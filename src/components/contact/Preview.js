import React from 'react'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import useI18n from '../../hooks/use-i18n'

function Contact(props) {
    const i18n = useI18n();
    return (
            <div className="contact preview">
                <h3>{i18n.t("contact.cta.curious")}<br/>{i18n.t("contact.cta.touch")}</h3>
                <form className="form">
                    <Input className="no-margin" name="name" label={i18n.t("contact.form.name.label")} type="text"
                           required={true} placeholder={i18n.t("contact.form.email.placeholder")}/>
                    <Input name="organization" label={i18n.t("contact.form.organization.label")} type="text" required={true}
                           placeholder={i18n.t("contact.form.organization.placeholder")}/>
                    <Input name="email" label={i18n.t("contact.form.email.label")} type="email"
                           placeholder={i18n.t("contact.form.email.placeholder")}/>
                    <Input name="message" textArea={true} label={i18n.t("contact.form.message.label")} type="text"
                           required={true} placeholder={i18n.t("contact.form.message.placeholder")}/>
                    <ReadMore margin action>{i18n.t("buttons.submit")}</ReadMore>
                </form>
            </div>
    );
}
export default Contact;
