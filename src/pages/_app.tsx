import React, { useRef } from 'react';
import '../styles/App.scss';
import AnimationContextProvider from '../context/animations/AnimationContext';
import { ThemeProvider } from '../context/theme/ThemeContext';
import Overlay from '../components/animation/Overlay';
import styled from '@emotion/styled';
import I18n from '../context/lib/i18n';
import Header from '@/modules/shared/header/Header';
import ScrollUp from '@/scrollers/ScrollUp';
import HeaderMobile from '@/modules/shared/header/HeaderMobile';
import { SnackbarProvider } from 'notistack';
import Footer from '@/modules/shared/footer/Footer';
import CookieConsent from 'react-cookie-consent';

type GlobalStyleTypes = {
  theme: {
    fonts: {
      header: string;
      subHeader: string;
      miniHeader: string;
      paragraph: string;
    };
    layout: string;
  };
};

const GlobalStyle = styled('div')<GlobalStyleTypes>`
  .darkmodeContainer {
    h1,
    h2,
    .h1,
    .h2 {
      color: ${(props) => props.theme.fonts.header};
    }

    h3,
    .h3,
    h4,
    .h4,
    h5,
    .h5 {
      color: ${(props) => props.theme.fonts.subHeader};
    }

    h6,
    .h6,
    h7,
    .h7 {
      color: ${(props) => props.theme.fonts.miniHeader};
    }

    li,
    a,
    p,
    .p {
      color: ${(props) => props.theme.fonts.paragraph};
    }
  }

  background: ${(props) => props.theme.layout};
`;

function MyApp({ Component, pageProps }) {
  const firstUpdate = useRef(true); //Ref used to persist value for overlay animation

  return (
    <ThemeProvider>
      <AnimationContextProvider>
        <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
          <GlobalStyle theme={undefined}>
            <Header />
            <HeaderMobile />
            <ScrollUp />
            <Overlay loadAnimation={firstUpdate} />
            <SnackbarProvider maxSnack={3}>
              <Component {...pageProps} />
              <Footer />
            </SnackbarProvider>
          </GlobalStyle>
        </I18n>

        <CookieConsent buttonText="Accepteer cookies">
          <div className="cookie-banner">
            <p>
              Deze website maakt gebruik van anonieme cookies voor statistische
              doeleinden, namelijk om meer informatie te krijgen over het
              algemeen gebruik van de website. Meer info kunt u vinden in onze{' '}
              <a
                href="/assets/documents/privacy-asrr.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacybeleid.
              </a>
            </p>
          </div>
        </CookieConsent>
      </AnimationContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
