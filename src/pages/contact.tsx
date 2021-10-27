import React from 'react';
import ContactPage from '../components/contact/Contact';
import matter from 'gray-matter';
import PageLayout from '@/modules/shared/layout/PageLayout';
import Banner from '@/modules/shared/landing/Banner';

const SEOProps = {
  title: 'ASRR - Contact',
  content:
    'ASRR Levert innovatieve software oplossingen met een specialisme in de bouw',
};

function Contact({ content }) {
  const basePath = `/content/contact/nl`;

  return (
    <PageLayout noPreview={true} className="darkmodeContainer" {...SEOProps}>
      <Banner
        {...content.landing}
        image={`${basePath}/${content.landing.image}`}
      />
      <ContactPage />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await import(`public/content/contact/nl/contact.md`);
  const content = matter(data.default).data;

  return {
    props: { content },
  };
}

export default Contact;
