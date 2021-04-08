import React from 'react';
import Section from "@/utillities/section/Section";
import SubSection from "@/utillities/section/sub-components/SubSection";

function About(props) {
    return (
        <Section style={{backgroundColor: "red"}} padding={true} className="rere">
            <SubSection maxWidth={true} style={{backgroundColor: "green"}}>
                <h1>Test</h1>
            </SubSection>
        </Section>
    );
}

export default About;
