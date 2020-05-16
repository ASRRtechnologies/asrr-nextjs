import React, {useState} from 'react';
import Section from "../layout/Section";
import Card from "./Card";
import ReadMore from "../text/ReadMore";
import Title from "../text/Title";

function Preview(props) {

    const [active, setActive] = useState(0);

    return (
        <Section>
            <Title title={"Portfolio"} text="lorem ipsum hahahahaha"/>
            <div className="portfolio">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <ReadMore to="/portfolio" text="See all Projects"/>
        </Section>
    );
}

export default Preview;