//Font colors
const whiteFont = '#ffffff';
const darkFont = '#1a1a1a';
const lightFont = '#41474E';
const subFontDark = '#41474E';
const subFontLight = '#c4c4c4';

const dropShadowDark = ' 0 8px 10px rgba(235, 235, 235, 0.15)';
const dropShadowLight = '0 10px 15px rgba(0,0,0,0.23)';

const white = '#fff';
const white2 = '#fbfbfb';
const white3 = '#ebebeb';

const black = '#0a0a0a';
const black2 = '#131313';
const black3 = '#1a1a1a';
const black4 = '#3c3c3c';

//Logo colors
const logoLight = white;
const logoDark = black;

//Header colors
const headerLight = '#ffffff';
const headerDark = '#0a0a0a';

const hoverLinkDark = 'linear-gradient(to right, #ff6961, #ff6961 50%, #ffffff 50%)';
const hoverLinkLight = 'linear-gradient(to right, #ff6961, #ff6961 50%, #1a1a1a 50%)';

const landing = {
	background: {
		dark: black,
		light: "linear-gradient(120deg, #eeeff1 45%, #e9e9e9 100%);",
	},
};

const layout = {
	background: {
		dark: "linear-gradient(120deg, #131313 45%, #0a0a0a 100%);",
		light: "linear-gradient(120deg, #FBFBFB 45%, #ebedee 100%);",
	},
};

const button = {

	background:{
		dark:white,
		light:black,
	},

	hover:{
		dark:"#d7d7d7",
		light:"#4a4a4a",
	},

	font:{
		dark:darkFont,
		light:whiteFont,
	},

	shadow:{
		dark:"0px 10px 15px rgba(235, 235, 235, 0.2)",
		light:"0px 10px 15px rgba(0,0,0,0.23)"
	}

};

const home = {

	services: {
		dark: black3,
		light: white,
	},

	portfolio: {
		dark: black3,
		light: white,
	},

	contact: {
		dark: black3,
		light: white,
	},

	stories: {
		dark: black2,
		light: white2,
	},

	clients: {
		dark: black2,
		light: white2,
	},

};

const portfolio = {
	landing: {
		dark: black3,
		light: white,
	},

	process: {
		dark: black2,
		light: white2,
	},

	showcase: {
		dark: black3,
		light: white,
	},

	otherCases: {
		dark: black2,
		light: white2,
	},

};

const fonts = {

	title: {
		light: whiteFont,
		dark: darkFont,
	},

	text: {
		light: '#ededed',
		dark: lightFont,
	},

	subFont: {
		light: subFontLight,
		dark: subFontDark,
	},

	link: {
		light: hoverLinkLight,
		dark: hoverLinkDark,
	},

};

const header = {

	background: {
		dark: headerDark,
		light: headerLight,
	},

	shadow: {
		dark: dropShadowDark,
		light: dropShadowLight,
	},

	logo: {
		light: logoLight,
		dark: logoDark,
	},

	line_1:{
		dark:"linear-gradient(to top, #ff6961 50%, #0a0a0a 50%)",
		light:"linear-gradient(to top, #ff6961 50%, #ffffff 50%)",
	},
	line_2:{
		dark:"linear-gradient(to top, #ff6961 50%, #0a0a0a 50%)",
		light:"linear-gradient(to top, #ff6961 50%, #ffffff 50%)",
	},
	line_3:{
		dark:"linear-gradient(to bottom, #ff6961 50%, #0a0a0a 50%) 0 -100%",
		light:"linear-gradient(to bottom, #ff6961 50%, #ffffff 50%) 0 -100%",
	}
};

const cards = {
	background: {
		dark: '#1a1a1a',
		light: '#ffffff',
	},

	shadow: {
		dark: dropShadowDark,
		light: dropShadowLight,
	},

	border: {
		dark: "2px solid #f0f0f0",
		light: "2px solid #eee",
	},

};

const alert = {
	background:{
		dark:cards.background.dark,
		light:cards.background.light
	}
};

const lightTheme = {

	header: {
		background: header.background.light,
		logo: header.logo.dark,
		font: darkFont,
		shadow: header.shadow.light,
		line_1:header.line_1.light,
		line_2:header.line_2.light,
		line_3:header.line_3.light,
	},

	fonts: {
		title: fonts.title.dark,
		text: fonts.text.dark,
		white: fonts.title.light,
		inverse: fonts.title.dark,
		subFont: fonts.subFont.dark,
		link: fonts.link.dark,

	},

	landing: {
		background: landing.background.light,
	},

	layout: layout.background.light,

	home: {
		portfolio: home.portfolio.light,
		services: home.services.light,
		contact: home.contact.light,
		clients: home.clients.light,
		stories: home.stories.light,

	},

	portfolio: {
		landing: portfolio.landing.light,
		process: portfolio.process.light,
		showcase: portfolio.showcase.light,
		otherCases: portfolio.otherCases.light,
	},

	card: {
		background: cards.background.light,
		shadow: cards.shadow.light,
		border: cards.border.light,
	},

	button:{
		background: button.background.light,
		font: button.font.light,
		hover: button.hover.light,
		shadow: button.shadow.light,
	},

	alert:{
		background:alert.background.light
	}

};

const darkTheme = {

	header: {
		background: header.background.dark,
		logo: header.logo.light,
		font: whiteFont,
		shadow: header.shadow.dark,
		line_1:header.line_1.dark,
		line_2:header.line_2.dark,
		line_3:header.line_3.dark,
	},

	fonts: {
		title: fonts.title.light,
		text: fonts.text.light,
		white: fonts.title.light,
		subFont: fonts.subFont.light,
		inverse: fonts.title.light,
		link: fonts.link.light,
	},

	landing: {
		background: landing.background.dark,
	},

	layout: layout.background.dark,

	home: {
		portfolio: home.portfolio.dark,
		services: home.services.dark,
		contact: home.contact.dark,
		clients: home.clients.dark,
		stories: home.stories.dark,
	},

	portfolio: {
		landing: portfolio.landing.dark,
		process: portfolio.process.dark,
		showcase: portfolio.showcase.dark,
		otherCases: portfolio.otherCases.dark,

	},

	card: {
		background: cards.background.dark,
		shadow: cards.shadow.dark,
		border: cards.border.dark,

	},

	button:{
		background: button.background.dark,
		font: button.font.dark,
		hover: button.hover.dark,
		shadow: button.shadow.dark,
	},

	alert:{
		background:alert.background.light
	}

};

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);

export default theme
