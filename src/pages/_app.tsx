import React, { useRef } from "react";
import "../styles/App.scss";
import AnimationContextProvider from "../context/animations/AnimationContext";
import { ThemeProvider } from "../context/theme/ThemeContext";
import Overlay from "../components/animation/Overlay";
import styled from "@emotion/styled";
import I18n from "../context/lib/i18n";
import Header from "@/modules/shared/header/Header";
import ScrollUp from "@/scrollers/ScrollUp";
import HeaderMobile from "@/modules/shared/header/HeaderMobile";
import { SnackbarProvider } from "notistack";
import Footer from "@/modules/shared/footer/Footer";
import CookieBanner from "@/modules/shared/cookie/CookieBanner";

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

const GlobalStyle = styled("div")<GlobalStyleTypes>`
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
            <CookieBanner />
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
      </AnimationContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
