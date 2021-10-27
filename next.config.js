// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withVideos = require('next-videos');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const prod = process.env.NODE_ENV === 'production';

module.exports = withPlugins(
  [
    [
      withVideos,
      {
        /* plugin config here ... */
      },
    ],
    [
      withImages,
      {
        images: {
          formats: ['image/avif', 'image/webp'],
        },
      },
    ],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          register: true,
          skipWaiting: true,
          disable: !prod,
        },
      },
    ],
  ],
  {
    webpack: (cfg) => {
      cfg.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return cfg;
    },
    swcMinify: false,
  }
);
