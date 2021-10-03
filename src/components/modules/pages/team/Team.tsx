import React from 'react';
import TeamCard from "@/modules/pages/team/TeamCard";
import Section from "@/modules/shared/section/Section";
import {animationsSettings} from "../../../../data/animations-settings";
import {Fade} from "react-awesome-reveal";
import MaxTwoColGrid from "@/modules/shared/layout/MaxTwoColGrid";

function Team(props) {
    const {members} = props.team;
    return (
        <Section>
            <MaxTwoColGrid>
                {members.map((member, i) => {
                    const animationSettings = animationsSettings({}, i)
                    return (
                        <Fade style={{width:"100%"}} {...animationSettings}>
                            <TeamCard {...member} basePath={props.basePath}/>
                        </Fade>
                    )
                })}
            </MaxTwoColGrid>
        </Section>
    );
}

export default Team;
