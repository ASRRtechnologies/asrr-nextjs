import React from 'react';
import Section from "../layout/Section";
import Card from "./Card";
import Title from "../text/Title";
import useI18n from "../../hooks/use-i18n";

function Services(props) {
    const i18n = useI18n();
    return (
        <Section>
            <Title big title={i18n.t("contact.title.header")} text={i18n.t("contact.title.text")}/>
            <div className="services">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </Section>
    );
}

export default Services;