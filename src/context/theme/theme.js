const white = '#fff';
const white2 = '#fbfbfb';
const white3 = '#fdf1f1ff';

const black = '#0a0a0a';
const black2 = '#131313';
const black3 = '#1a1a1a';
const black4 = '#272727';

const dropShadowDark = ' 0 8px 10px rgba(1, 1, 1, 0.35)';
const dropShadowLight = '0 10px 15px rgba(0,0,0,0.23)';

//Font colors
const headerDark = white;
const subHeaderDark = white2;
const paragraphDark = white3;

const headerLight = black2;
const subHeaderLight = black3;
const paragraphLight = '#41474E';


const fonts = {

	header: {
		light: headerLight,
		dark: headerDark,
	},

	paragraph: {
		light: paragraphLight,
		dark: paragraphDark,
	},

	subHeader: {
		light: subHeaderLight,
		dark: subHeaderDark,
	},

	inverse: {
		light: headerDark,
		dark: headerLight,
	},

};

const layout = {
	background: {
		dark: 'linear-gradient(120deg, #131313 45%, #0a0a0a 100%);',
		light: 'linear-gradient(120deg, #FBFBFB 45%, #efedec 100%);',
	},
};

const button = {

	background: {
		dark: white,
		light: black,
	},

	hover: {
		dark: '#d7d7d7',
		light: '#4a4a4a',
	},

	font: {
		dark: fonts.inverse.dark,
		light: fonts.inverse.light,
	},

	shadow: {
		dark: '0 8px 10px rgba(1, 1, 1, 0.35)',
		light: '0px 10px 15px rgba(0,0,0,0.23)',
	},

	lightButton: {
		background: black,
		font: '#fff',
		shadow: '0px 10px 15px rgba(0,0,0,0.23)',
		hover: '#4a4a4a',
	},

	darkButton: {
		background: white,
		font: `${fonts.inverse.dark}`,
		shadow: '0px 10px 15px rgba(0,0,0,0.23)',
		hover: '#f5f5f5',
	},

};

const home = {

	services: {
		background: {
			dark: 'linear-gradient(120deg, #131313 45%, #0a0a0a 100%);',
			light: 'linear-gradient(120deg, #fff 75%, #efedec 100%);',
		},
	},

	techstack: {
		background: {
			dark: 'linear-gradient(120deg, #131313 35%, rgba(39, 39, 39, 0.9) 100%);',
			light: 'linear-gradient(120deg, #f3f3f3 45%, #fff 100%);',
		},
	},

	portfolio: {
		background: {
			dark: 'linear-gradient(-120deg, #211D25 45%, #37333a 100%);',
			light: 'linear-gradient(-120deg, #efedec 65%, #f3f3f3 100%);',
		},
	},

	stories: {
		background: {
			dark: 'linear-gradient(120deg, #131313 35%, rgba(39, 39, 39, 0.9) 100%);',
			light: 'linear-gradient(120deg, #f3f3f3 45%, #fff 100%);',
		},
	},

	values: {
		background: {
			dark: 'linear-gradient(120deg, #29323c 45%, #191f25  100%);',
			light: 'linear-gradient(-120deg, #fff 65%, #fbfbfb 100%);',
		},
	},

	blog: {
		background: {
			dark: 'linear-gradient(120deg, #131313 35%, rgba(39, 39, 39, 0.9) 100%);',
			light: 'linear-gradient(120deg, #fbfbfb 45%, #efedec 100%);',
		},
	},

	contact: {
		background: {
			dark: 'linear-gradient(-120deg, #ff6961 45%, #ff392e  100%);',
			light: 'linear-gradient(-120deg, #ff6961 45%, #ff392e  100%);',
		},
	},

	clients: {
		background: {
			dark: 'linear-gradient(120deg, #1a1a1a 45%, #0a0a0a  100%);',
			light: 'linear-gradient(120deg, #FBFBFB 45%, #efedec 100%);',
		},
	},

};

const navigation = {

	background: {
		light: 'rgba(252, 252, 252, 0.80)',
		dark: 'rgba(39, 39, 39, 0.9)',
	},

	backgroundMobile: {
		light: 'rgba(252, 252, 252, 1)',
		dark: 'rgba(39, 39, 39, 1)',
	},

	shadow: {
		dark: dropShadowDark,
		light: dropShadowLight,
	},

	fonts: {
		light: fonts.paragraph.light,
		dark: fonts.paragraph.dark,
	},

	logo: {
		light: '#1a1a1a',
		dark: '#fff',
	},

};

const card = {

	background: {
		dark: '#1a1a1a',
		light: '#ffffff',
	},

	shadow: {
		dark: dropShadowDark,
		light: dropShadowLight,
	},
};

const alert = {
	background: {
		dark: card.background.dark,
		light: card.background.light,
	},
};

const lightTheme = {
	home: {
		services: home.services.background.light,
		techstack: home.techstack.background.light,
		portfolio: home.portfolio.background.light,
		contact: home.contact.background.light,
		clients: home.clients.background.light,
		stories: home.stories.background.light,
		values: home.values.background.light,
		blog: home.blog.background.light,
	},

	navigation: {
		background: navigation.background.light,
		backgroundMobile: navigation.backgroundMobile.light,
		logo: navigation.logo.light,
		font: navigation.fonts.light,
		shadow: navigation.shadow.light,
	},

	fonts: {
		title: fonts.header.light,
		paragraph: fonts.paragraph.light,
		whiteFont: fonts.paragraph.light,
		inverse: fonts.inverse.light,
		subHeader: fonts.subHeader.light,
	},

	layout: layout.background.light,

	card: {
		background: card.background.light,
		shadow: card.shadow.light,
	},

	button: {
		background: button.background.light,
		font: button.font.light,
		hover: button.hover.light,
		shadow: button.shadow.light,
		dark: {
			font: button.darkButton.font,
			background: button.darkButton.background,
			shadow: button.darkButton.shadow,
			hover: button.darkButton.hover,
		},
		light: {
			font: button.lightButton.font,
			background: button.lightButton.background,
			shadow: button.lightButton.shadow,
			hover: button.lightButton.hover,
		},
	},

	alert: {
		background: alert.background.light,
	},

};

const darkTheme = {
	navigation: {
		background: navigation.background.dark,
		backgroundMobile: navigation.backgroundMobile.dark,
		logo: navigation.logo.dark,
		font: navigation.fonts.dark,
		shadow: navigation.shadow.dark,
	},

	fonts: {
		title: fonts.header.dark,
		header: fonts.header.dark,
		paragraph: fonts.paragraph.dark,
		whiteFont: fonts.paragraph.dark,
		inverse: fonts.inverse.dark,
		subHeader: fonts.subHeader.dark,
	},

	layout: layout.background.dark,

	home: {
		services: home.services.background.dark,
		techstack: home.techstack.background.dark,
		portfolio: home.portfolio.background.dark,
		contact: home.contact.background.dark,
		clients: home.clients.background.dark,
		stories: home.stories.background.dark,
		values: home.values.background.dark,
		blog: home.blog.background.dark,
	},

	card: {
		background: card.background.dark,
		shadow: card.shadow.dark,
	},

	button: {
		background: button.background.dark,
		font: button.font.dark,
		hover: button.hover.dark,
		shadow: button.shadow.dark,
		dark: {
			font: button.darkButton.font,
			background: button.darkButton.background,
			shadow: button.darkButton.shadow,
			hover: button.darkButton.hover,
		},
		light: {
			font: button.lightButton.font,
			background: button.lightButton.background,
			shadow: button.lightButton.shadow,
			hover: button.lightButton.hover,
		},
	},

	alert: {
		background: alert.background.light,
	},

};

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);

export default theme
