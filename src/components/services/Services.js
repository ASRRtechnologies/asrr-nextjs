import React from 'react';
import Section from "../layout/Section";
import Card from "./Card";
import ReadMore from "../text/ReadMore";
import Title from "../text/Title";

function Services(props) {
    return (
        <Section>
            <Title big title={"Services"} text="lorem ipsum hahahahaha"/>
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