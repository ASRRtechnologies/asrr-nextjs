import React from 'react';
import TeamPage from "@/modules/team/Team";
import Banner from "@/modules/shared/landing/Banner";
import matter from "gray-matter";
import PageLayout from "@/layout/PageLayout";

const SEOProps = {
    title: "ASRR - Team",
    content: "ASRR Ons Team"
}

function Team({content}) {
    const {title, text} = content.page_title;
    const basePath = `/content/team/nl`;

    return (
        <PageLayout {...SEOProps}>
            <Banner title={title} content={text}/>
            <TeamPage team={content} basePath={basePath}/>
        </PageLayout>
    );
}

export async function getStaticProps() {
    // @ts-ignore
    let data = await import(`public/content/team/nl/team.md`);
    let content = matter(data.default).data;

    return {
        props: {content},
    }
}

export default Team;
