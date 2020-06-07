import React from 'react';
import Section from "../layout/Section";
import Card from "./Card";
import ReadMore from "../text/ReadMore";
import Title from "../text/Title";
import useI18n from "../../hooks/use-i18n";

function Services(props) {
    const i18n = useI18n();

    return (
        <Section>
            <Title title={"Services"} text="lorem ipsum hahahahaha"/>
            <div className="services">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <ReadMore margin={true} to="/services">{i18n.t("buttons.see.services")}</ReadMore>
        </Section>
    );
}

export default Services;
