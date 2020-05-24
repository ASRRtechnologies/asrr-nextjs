import React, {useState} from 'react';
import Section from "../layout/Section";
import Card from "./Card";
import ReadMore from "../text/ReadMore";
import Title from "../text/Title";
import {cases} from '../data/cases'

function Preview(props) {

    const [active, setActive] = useState(0);

    return (
        <Section>
            <Title title={"Portfolio"} text="lorem ipsum hahahahaha"/>
            <div className="portfolio">
                {cases.map(({image, tag, title}) => <Card img={image} tag={tag} title={title}/>)}
            </div>
            <ReadMore to="/portfolio" text="See all Projects"/>
        </Section>
    );
}

export default Preview;
