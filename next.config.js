const withImages = require('next-images');
const withVideos = require('next-videos')

module.exports = withImages(withVideos({
    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return cfg;
    }

    // shallowRender: true,  <-- enable this in production mode wont call getInitialprops on every page render
}))
// module.exports = withImages({
//     experimental: {
//         redirects() {
//             return [
//                 {
//                     source: '/',
//                     permanent: true,
//                     destination: '/en',
//                 },
//             ]
//         },
//     },
// });

