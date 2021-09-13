import React from 'react';
import TeamPage from "@/modules/team/Team";
import Banner from "@/modules/shared/landing/Banner";

function Team(props) {
    return (
        <div>
            <Banner title="De Team" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque eaque est fugiat ipsa laborum
                    nisi optio quod ratione velit. Adipisci amet aut consectetur dignissimos hic illum labore quia,
                    quod!"/>
            <TeamPage/>
        </div>
    );
}

export default Team;
