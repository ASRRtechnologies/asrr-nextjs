// noinspection DuplicatedCode
import React from 'react';
import PageLayout from '@/modules/shared/layout/PageLayout';
import { getAllArticles } from '../../../lib/api';
import matter from 'gray-matter';
import Article from '@/modules/shared/article/Article';

function Page({ content }) {
  const basePath = `/content/blog/posts/${content.type}/nl/${content.title}`;

  const SEOProps = {
    ...content.meta_tags
  };

  return (
    <PageLayout className='darkmodeContainer' {...SEOProps}>
      <Article content={content} basePath={basePath} />
    </PageLayout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const slug = params.article.toLowerCase();
  // let data = await import(`${BasePaths.ARTICLE}/nl/${slug}/${slug}.md`);
  // @ts-ignore
  const data = await import(
    `public/content/blog/posts/artikel//nl/${slug}/${slug}.md`
    );
  const content = matter(data.default).data;
  const basePath = `/content/written/artikel/nl/${slug}`;

  //Get all project info and only show their cards and titles for the read more part
  const allArticles = getAllArticles(['title', 'card']);

  return {
    props: { allArticles, basePath, content }
  };
}

export async function getStaticPaths() {
  const allArticles = await getAllArticles(['title']);

  const paths = allArticles.map((project) => ({
    params: { article: project.title.toLowerCase() }
  }));

  return { paths, fallback: false };
}
