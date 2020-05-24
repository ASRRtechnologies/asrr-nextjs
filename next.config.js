// const withImages = require('next-images');
// module.exports = withImages();

const withImages = require('next-images');
const withFonts = require('nextjs-fonts');

module.exports = withFonts(withImages({
		enableSvg: true,
		webpack(config, options) {
			return config;
		}
	}
));
