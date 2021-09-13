import React from 'react';
import TeamPage from "@/modules/team/Team";
import Banner from "@/modules/shared/landing/Banner";

function Team(props) {
    return (
        <div>
            <Banner/>
            <TeamPage/>
        </div>
    );
}

export default Team;
