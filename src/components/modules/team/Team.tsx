import React from 'react';
import teamStyles from "./teamStyles.module.scss"
import TeamCard from "@/modules/team/TeamCard";
import Section from "@/modules/shared/section/Section";

function Team(props) {
    const {members} = props.team;
    return (
        <Section>
            <div className={teamStyles.teamGrid}>
                {members.map(({name, website, position, alt, image, story}) => {
                    return <TeamCard name={name} website={website} position={position}
                                     image={image} alt={alt} story={story} basePath={props.basePath}/>
                })}
            </div>
        </Section>
    );
}

export default Team;
