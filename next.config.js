const withImages = require('next-images');
const withVideos = require('next-videos')

module.exports = withImages(withVideos());


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

