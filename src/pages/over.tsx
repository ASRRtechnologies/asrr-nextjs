import React from 'react';
import Banner from '@/modules/shared/landing/Banner';
import matter from 'gray-matter';
import PageLayout from '@/modules/shared/layout/PageLayout';
import About from '@/modules/pages/about/About';

function Over({ content, homepage }) {
  const basePath = `/content/over/nl/over`;

  const SEOProps = {
    ...content.meta_tags,
  };

  return (
    <PageLayout className="darkmodeContainer" {...SEOProps}>
      <Banner
        {...content.landing}
        image={`${basePath}/${content.landing.image}`}
      />
      <About content={content} homepage={homepage} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(`public/content/over/nl/over/over.md`);
  const content = matter(data.default).data;

  const homeContent = await import(`public/content/home/nl/home.md`);
  const parsedContent = matter(homeContent.default);
  const homepage = parsedContent.data;

  return {
    props: { content, homepage },
  };
}

export default Over;
