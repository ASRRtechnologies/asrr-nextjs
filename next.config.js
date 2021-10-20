const withImages = require('next-images');
const withVideos = require('next-videos');
const withPWA = require('next-pwa');

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
