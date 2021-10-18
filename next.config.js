const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withImages(
  withVideos({
    webpack: (cfg) => {
      cfg.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return cfg;
    },
    images: {
      disableStaticImages: true,
    },
  })
);
