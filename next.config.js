const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withVideos = require('next-videos');
const withPWA = require('next-pwa');

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
