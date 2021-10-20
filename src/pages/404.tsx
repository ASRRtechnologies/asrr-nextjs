import React from 'react';
import Title from '@/utillities/titles/Title';
import PageLayout from '@/modules/shared/layout/PageLayout';
import Section from '@/modules/shared/section/Section';
import Link from 'next/link';
import { useTheme } from '../context/theme/ThemeContext';
import { Fade } from 'react-awesome-reveal';
import Banner from '@/modules/shared/landing/Banner';

function Error() {
  const SEOProps = {
    title: `ASRR - 404 Error`,
    content: `De pagina die u zoekt kan niet gevonden worden`,
  };

  const darkmode = useTheme().dark;

  return (
    <PageLayout {...SEOProps}>
      <Banner
        title="Pagina niet gevonden"
        alt="Abstract"
        image={'/assets/images/404/error.jpg'}
        text={undefined}
      />
      <Section>
        <Title
          className="error"
          title="404 Error"
          text="De pagina die u zoekt kan niet gevonden worden"
        />
        <Fade triggerOnce direction="up">
          <Link href="/">
            <a
              className={`${
                darkmode ? 'animated-link-light' : 'animated-link-dark'
              }`}
            >
              Click hier om terug te gaan naar de homepage
            </a>
          </Link>
        </Fade>
      </Section>
    </PageLayout>
  );
}

export default () => <Error />;
