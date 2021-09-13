import React from 'react';
import teamStyles from "./teamStyles.module.scss"
import TeamCard from "@/modules/team/TeamCard";

function Team(props) {
    return (
        <div className={`${teamStyles.team} global-padding-horizontal global-padding-vertical`}>
            <div className={teamStyles.teamGrid}>
                <TeamCard name="Re-Angelo" website="www.linkedin.com/re-angelo" position="Work"/>
                <TeamCard name="Rere" position="Work"/>
            </div>
        </div>
    );
}

export default Team;
