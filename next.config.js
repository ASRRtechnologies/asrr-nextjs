const withImages = require('next-images');
module.exports = withImages();

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

