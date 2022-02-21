import React from 'react';
import matter from 'gray-matter';
import PageLayout from '@/modules/shared/layout/PageLayout';
import Article from '@/modules/shared/article/Article';
import Values from '@/modules/pages/home/values/Values';

function Vacatures({ content, homepage }) {
  const basePath = `/content/vacatures/nl/vacatures`;

  const SEOProps = {
    ...content.meta_tags,
  };

  return (
    <PageLayout className="darkmodeContainer" {...SEOProps}>
      <Article content={content} basePath={basePath} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(
    `public/content/vacatures/nl/vacatures/vacatures.md`
  );
  const content = matter(data.default).data;

  const homeContent = await import(`public/content/home/nl/home.md`);
  const parsedContent = matter(homeContent.default);
  const homepage = parsedContent.data;

  return {
    props: { content, homepage },
  };
}

export default Vacatures;
