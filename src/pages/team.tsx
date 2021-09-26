import React from 'react';
import TeamPage from "@/modules/team/Team";
import Banner from "@/modules/shared/landing/Banner";
import matter from "gray-matter";
import PageLayout from "@/layout/PageLayout";

function Team({content}) {
    const SEOProps = {
        ...content.meta_tags
    }

    const {title, text} = content.page_title;
    const basePath = `/content/team/nl`;

    return (
        <PageLayout className="darkmodeContainer" {...SEOProps}>
            <Banner title={title} text={text}/>
            <TeamPage team={content} basePath={basePath}/>
        </PageLayout>
    );
}

export async function getStaticProps() {
    // @ts-ignore
    let data = await import(`public/content/team/nl/team.md`);
    // let data = await import(`${BasePaths.TEAM}/nl/team.md`);
    let content = matter(data.default).data;

    return {
        props: {content},
    }
}

export default Team;
