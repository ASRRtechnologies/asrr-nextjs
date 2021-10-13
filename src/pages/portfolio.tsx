import React from 'react';
import PortfolioPage from '@/modules/pages/portfolio/Portfolio';
import matter from 'gray-matter';
import { getAllCases } from '../lib/api';
import PageLayout from '@/modules/shared/layout/PageLayout';
import Banner from '@/modules/shared/landing/Banner';

function Portfolio({ content, allCases }) {
  const SEOProps = {
    ...content.meta_tags
  };
  const basePath = '/content/portfolio/nl';

  return (
    <PageLayout className='darkmodeContainer' {...SEOProps}>
      <Banner
        {...content.landing}
        image={`${basePath}/${content.landing.image}`}
      />
      <PortfolioPage content={content} allCases={allCases} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(`public/content/portfolio/nl/portfolio.md`);
  // let data = await import(`${BasePaths.PORTFOLIO}/nl/portfolio.md`);
  const content = matter(data.default).data;

  const allCases = getAllCases(['title', 'slug', 'card', 'info']);

  return {
    props: { allCases, content }
  };
}

export default Portfolio;
