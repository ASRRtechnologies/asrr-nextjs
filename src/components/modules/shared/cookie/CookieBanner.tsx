import React from 'react';
import CookieConsent from 'react-cookie-consent';
import buttonStyles from '../buttons/buttonStyles.module.scss';
import bannerStyles from './style.module.scss';
import { useTheme } from '../../../../context/theme/ThemeContext';
import Image from 'next/image';
const cookies = '/assets/images/cookies/cookies.png';
const cookiesDark = '/assets/images/cookies/cookies-dark.png';
const privacy = '/assets/documents/privacy-asrr.pdf';

function CookieBanner() {
  const { dark } = useTheme();

  return (
    <CookieConsent
      location="none"
      overlay={true}
      overlayClasses={bannerStyles.overlay}
      containerClasses={`${bannerStyles.banner} ${dark && bannerStyles.dark}`}
      contentClasses={bannerStyles.content}
      disableButtonStyles={true}
      buttonClasses={`${buttonStyles.button} ${buttonStyles.cookieButton} ${
        dark && buttonStyles.dark
      }`}
      buttonWrapperClasses={bannerStyles.buttonWrapper}
      buttonText="Accepteren"
    >
      <div className="darkmodeContainer">
        <img src={dark ? cookies : cookiesDark} alt="cookies icon" />
        <h1 className="h3">Wij gebruiken cookies</h1>
        <p>
          Deze website maakt gebruik van anonieme cookies voor statistische
          doeleinden, namelijk om meer informatie te krijgen over het algemeen
          gebruik van de website. Door gebruik te maken van deze website gaat u
          hiermee akkoord. Meer info kunt u vinden in onze{' '}
          <span>
            <a
              className="hover-link link"
              href={privacy}
              target="_blank"
              rel="noopener noreferrer"
            >
              privacybeleid.
            </a>
          </span>
        </p>
      </div>
    </CookieConsent>
  );
}

export default CookieBanner;
