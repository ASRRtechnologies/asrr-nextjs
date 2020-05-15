import React from 'react';
import Section from "../layout/Section";
import Card from "./Card";
import ReadMore from "../text/ReadMore";
import Title from "../text/Title";

function Portfolio(props) {
    return (
        <Section>
            <Title big title={"Portfolio"} text="lorem ipsum hahahahaha"/>
            <div className="portfolio">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
           <ReadMore to="/" text="Read more"/>
        </Section>
    );
}

export default Portfolio;