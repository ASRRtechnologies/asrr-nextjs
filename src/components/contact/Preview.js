import React from 'react';
import Section from "../layout/Section";
import ReadMore from "@/text/ReadMore";
import Input from "@/text/Input";
import useI18n from "../../hooks/use-i18n";

function Contact(props) {
    const i18n = useI18n();
    return (
        <Section>
            <div className="contact preview">
                <h3>{i18n.t("contact.cta.curious")}<br/>{i18n.t("contact.cta.touch")}</h3>
                <form className="form">
                    <Input className="no-margin" name="name" label={i18n.t("contact.form.name")} type="text"
                           required={true} placeholder={i18n.t("contact.form.email")}/>
                    <Input name="organization" label={i18n.t("contact.form.organization")} type="text" required={true}
                           placeholder={i18n.t("contact.form.organization")}/>
                    <Input name="email" label={i18n.t("contact.form.email")} type="email"
                           placeholder={i18n.t("contact.form.email")}/>
                    <Input name="message" textArea={true} label={i18n.t("contact.form.message")} type="text"
                           required={true} placeholder={i18n.t("contact.form.message")}/>
                    <ReadMore margin action>{i18n.t("buttons.submit")}</ReadMore>
                </form>
            </div>
        </Section>
    );
}
export default Contact;
