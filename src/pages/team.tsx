import React from 'react';
import TeamPage from "@/modules/team/Team";
import Banner from "@/modules/shared/landing/Banner";
import {getAllTeams} from "../lib/api";
import matter from "gray-matter";

function Team({basePath, team}) {
    const {title, text} = team[0].page_title;

    return (
        <div>
            <Banner title={title} content={text}/>
            <TeamPage team={team[0]} basePath={basePath}/>
        </div>
    );
}

export async function getStaticProps () {

    const basePath = `/content/team/nl`;

    const team = getAllTeams([
        'title',
        'slug',
        'page_title',
        'members',
    ]);

    return {
        props: {basePath, team},
    }
}

export default Team;
