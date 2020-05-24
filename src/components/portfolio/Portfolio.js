import React, {useState} from 'react';
import Section from "../layout/Section";
import Card from "./Card";
import ReadMore from "../text/ReadMore";
import Title from "../text/Title";

const links = [
    {name: "ALL"},
    {name: "BIM"},
    {name: "GENERAL"}
];

const post = [
    {type: "all", title: "xtra"},
    {type: "bim", title: "ert"},
    {type: "general", title: "x"}
];

function Portfolio(props) {

    const [active, setActive] = useState(0);

    return (
        <Section>
            <div className="portfolio-links">
                {links.map((d, i) => <p key={`portfolio-link${i}`}
                                        onClick={() => setActive(i)}
                                        className={`${i === active && "active"}`}>{d.name}</p>)}
            </div>
            <Title big title={"Portfolio"} text="lorem ipsum hahahahaha"/>
            <div className="portfolio">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <ReadMore to="/" text="See all Projects"/>
        </Section>
    );
}

export default Portfolio;