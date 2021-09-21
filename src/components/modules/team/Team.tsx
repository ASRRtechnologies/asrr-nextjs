import React from 'react';
import teamStyles from "./teamStyles.module.scss"
import TeamCard from "@/modules/team/TeamCard";

function Team(props) {
    const {members} = props.team;

    return (
        <div className={`${teamStyles.team} global-padding-horizontal global-padding-vertical`}>
            <div className={teamStyles.teamGrid}>
                {members.map(({name, website, position, alt, image, story}) => {
                    return <TeamCard name={name} website={website} position={position}
                                     image={image} alt={alt} story={story} basePath={props.basePath}/>
                })}
            </div>
        </div>
    );
}

export default Team;
