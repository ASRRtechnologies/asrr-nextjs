// noinspection DuplicatedCode
import React from 'react';
import PageLayout from '@/modules/shared/layout/PageLayout';
import {getAllServices} from '../../lib/api';
import matter from 'gray-matter';
import Article from '@/modules/shared/article/Article';

function Page({ content }) {
  const basePath = `/content/services/posts/nl/${content.title}`;

  const SEOProps = {
    ...content.meta_tags,
  };

  return (
    <PageLayout className="darkmodeContainer" {...SEOProps}>
      <Article content={content} basePath={basePath} />
    </PageLayout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const slug = params.dienst.toLowerCase();
  const data = await import(
    `public/content/services/posts/nl/${slug}/${slug}.md`
  );
  // let data = await import(`${BasePaths.SERVICES}/nl/${slug}/${slug}.md`);
  const content = matter(data.default).data;
  const basePath = `/content/services/nl/${slug.toLowerCase()}`;

  return {
    props: { basePath, content },
  };
}

export async function getStaticPaths() {
  const allServices = await getAllServices(['title']);

  const paths = allServices.map((project) => ({
    params: { dienst: project.title.toLowerCase() },
  }));

  return { paths, fallback: false };
}
