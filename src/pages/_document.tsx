import React from 'react';
import Document, { Head, Html, Main } from 'next/document';
import { GA_TRACKING_ID, GTM_ID } from '../lib/gtag';
import DeferNextScript from '@/utillities/seo/DeferNextScript';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtmTestimonialCard.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtmTestimonialCard.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          {/* End Google Tag Manager */}

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            type="text/javascript"
            src="https://platform-api.sharethis.com/js/sharethis.js#property=5f9e0bb92a7af500195a76a7&product=inline-share-buttons"
            async
          />
          <link rel="preconnect" href="https://l.sharethis.com" />
          <link rel="dns-prefetch" href="https://l.sharethis.com" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=${GTM_ID}' height='0' width='0' style='display:none;visibility:hidden'></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
