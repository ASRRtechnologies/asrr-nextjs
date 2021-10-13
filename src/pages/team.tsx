import React from 'react';
import TeamPage from '@/modules/pages/team/Team';
import Banner from '@/modules/shared/landing/Banner';
import matter from 'gray-matter';
import PageLayout from '@/modules/shared/layout/PageLayout';

function Team({ content }) {
  const basePath = `/content/team/nl`;

  const SEOProps = {
    ...content.meta_tags
  };

  return (
    <PageLayout className='darkmodeContainer' {...SEOProps}>
      <Banner
        {...content.landing}
        image={`${basePath}/${content.landing.image}`}
      />
      <TeamPage team={content} basePath={basePath} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(`public/content/team/nl/team.md`);
  const content = matter(data.default).data;

  return {
    props: { content }
  };
}

export default Team;
