import React from 'react';
import TeamPage from '@/modules/pages/team/Team';
import Banner from '@/modules/shared/landing/Banner';
import matter from 'gray-matter';
import PageLayout from '@/modules/shared/layout/PageLayout';

function Over({ content }) {
  const basePath = `/content/over/nl`;

  const SEOProps = {
    ...content.meta_tags,
  };

  return (
    <PageLayout className="darkmodeContainer" {...SEOProps}>
      <Banner
        {...content.landing}
        image={`${basePath}/${content.landing.image}`}
      />
      {/*<TeamPage team={content} basePath={basePath} />*/}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(`public/content/over/nl/over/over.md`);
  const content = matter(data.default).data;

  return {
    props: { content },
  };
}

export default Over;
