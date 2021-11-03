// eslint-disable-next-line @typescript-eslint/no-var-requires
const withVideos = require('next-videos');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');

module.exports = withImages(
  withVideos(
    withPWA({
      pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
      },
      webpack: (cfg) => {
        cfg.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        return cfg;
      },
    })
  )
);
