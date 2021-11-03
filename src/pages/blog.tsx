import React from 'react';
import BlogPage from '@/modules/pages/blog/Blog';
import matter from 'gray-matter';
import { getAllArticles, getAllNews, getAllTutorials } from '../lib/api';
import PageLayout from '@/modules/shared/layout/PageLayout';
import Banner from '@/modules/shared/landing/Banner';

const SEOProps = {
  title: 'ASRR - Blog',
  content:
    'ASRR Levert innovatieve software oplossingen met een specialisme in de bouw',
};

//Todo add allNews to AllArticles array
function Blog({ content, allBlogs }) {
  const basePath = `/content/blog/nl`;

  return (
    <PageLayout className="darkmodeContainer" {...SEOProps}>
      <Banner
        {...content.landing}
        image={`${basePath}/${content.landing.image}`}
      />
      <BlogPage data={content} allBlogs={allBlogs} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(`public/content/blog/nl/blog.md`);
  const content = matter(data.default).data;

  const allArticles = getAllArticles(['title', 'slug', 'card', 'info', 'type']);

  const allNews = getAllNews(['title', 'slug', 'card', 'info', 'type']);

  const allTutorials = getAllTutorials([
    'title',
    'slug',
    'card',
    'info',
    'type',
  ]);

  const allBlogs = [...allArticles, ...allNews, ...allTutorials];

  return {
    props: {
      allBlogs,
      content,
    },
  };
}

export default Blog;
