import React from 'react';
import Clients from '@/modules/pages/home/clients/Clients';
import Values from '@/modules/pages/home/values/Values';
import PreviewServices from '@/modules/pages/services/ServicePreview';
import TechStack from '@/modules/pages/home/techstack/TechStack';
import matter from 'gray-matter';
import Testimonials from '@/modules/pages/home/testimonials/Testimonials';
import {
  getAllArticles,
  getAllCases,
  getAllNews,
  getAllServices,
  getAllTutorials,
} from '../lib/api';
import PageLayout from '@/modules/shared/layout/PageLayout';
import PortfolioPreview from '@/modules/pages/portfolio/PortfolioPreview';
import Banner from '@/modules/shared/landing/Banner';
import BlogPreview from '@/modules/pages/blog/BlogPreview';
import Head from 'next/head';

function Index({ homepage, allServices, allCases, allBlogs }) {
  const basePath = `/content/home/nl`;

  const SEOProps = {
    ...homepage.meta_tags,
  };

  return (
    <PageLayout className="darkmodeContainer" {...SEOProps}>
      <Head>
        <link
          rel="preload"
          href={'/assets/images/landing/landing-asrr-min.jpg'}
          as="image"
        />
      </Head>
      <h1>re</h1>
      <Banner
        landing={true}
        image={'/assets/images/landing/landing-asrr-min.jpg'}
        title={homepage.landing.title}
        text={homepage.landing.text}
        button={homepage.landing.button}
        alt={homepage.landing.title + '-image'}
      />
      <PreviewServices content={homepage.services} allServices={allServices} />
      <PortfolioPreview content={homepage.portfolio} allCases={allCases} />
      <Testimonials content={homepage.testimonials} basePath={basePath} />
      <Values content={homepage.quality} />
      <Clients content={homepage.clients} />
      <BlogPreview content={homepage.blog} allBlogs={allBlogs} />
      <TechStack basePath={basePath} content={homepage.technologies} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const content = await import(`public/content/home/nl/home.md`);
  const parsedContent = matter(content.default);
  const homepage = parsedContent.data;

  const allServices = getAllServices(['title', 'slug', 'card', 'info']);

  const allCases = getAllCases(['title', 'slug', 'card', 'info']);

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
    props: { homepage, allCases, allBlogs, allServices },
  };
}

export default Index;
