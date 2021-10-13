import React, { useState } from 'react';
// @ts-ignore
import logo from '#/logo/asrr-logo-spacing-white.svg';
import Section from '@/modules/shared/section/Section';
import footerStyles from './footer.module.scss';
import { useRouter } from 'next/router';
import LinkedIn from '@/icons/LinkedIn';
import Facebook from '@/icons/Facebook';
import LinkText from '@/modules/shared/text/LinkText';

const year = new Date().getFullYear();

function Footer(props) {
  const [email, setEmail] = useState({
    body: '',
    subject: '',
    userEmail: '',
    organization: '',
    name: '',
  });
  const router = useRouter();
  const goToHome = () => router.push('/');

  const navigation = [
    {
      title: 'Navigatie',
      paths: [
        'Home',
        'Portfolio',
        'Diensten',
        'Over',
        'Team',
        'Blog',
        'Contact',
      ],
    },
    {
      title: 'Contact',
      texts: [
        'ASRR Tech',
        "'s Gravenzandseweg 2 unit A",
        '2291 PE',
        'Wateringen',
        'Nederland',
      ],
      customPaths: [
        {
          title: 'Contact@asrr.nl',
          href: 'mailto:contact@asrr.nl',
        },
        {
          title: 'Plan uw route',
          href: 'https://goo.gl/maps/fZqhC9FUVTpiEiCb7',
        },
      ],
    },
    {
      title: 'Informatie',
      customPaths: [
        {
          title: 'Algemene Voorwaarden',
          href: '/assets/documents/algemene-voorwaarden-asrr.pdf',
        },
        {
          title: 'Privacybeleid',
          href: '/assets/documents/privacy-asrr.pdf',
        },
      ],
    },
  ];

  return (
    <Section className={footerStyles.footer}>
      <div className={footerStyles.innerFooter}>
        <div className={footerStyles.footerGrid}>
          <div>
            <img
              onClick={goToHome}
              className="logo"
              alt="asrr-logo"
              src={logo}
            />
            <p className="h6">Innovative Software</p>
          </div>

          {navigation.map((nav) => {
            return (
              <div className={footerStyles.grid}>
                <h1 className="h5 bold">{nav.title}</h1>

                {nav.texts?.map((path, i) => (
                  <p key={path + i} className="h6">
                    {path}
                  </p>
                ))}

                {nav.paths?.map((path, i) => {
                  return (
                    //Extra span so that a tag width is its own width and not 100% of grid for underline to be same width
                    <span key={path + i}>
                      <LinkText
                        className="h6 hover-link"
                        href={path.toLowerCase()}
                        title={path}
                        customLink
                      />
                    </span>
                  );
                })}

                {nav.customPaths?.map(({ href, title }) => {
                  return (
                    //Extra span so that a tag width is its own width and not 100% of grid for underline to be same width
                    <span key={href}>
                      <LinkText
                        href={href}
                        customLink={true}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h6 hover-link"
                        title={title}
                      />
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className={footerStyles.bottom}>
          <div>
            <p className="h7">Copyright ASRR {year}</p>
            <p className="h7">Gemaakt met ❤ door ASRR</p>
          </div>

          <div className={footerStyles.socials}>
            <a
              className={footerStyles.icons}
              href="https://www.linkedin.com/company/asrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              className={footerStyles.icons}
              href="https://www.facebook.com/ASRRTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
