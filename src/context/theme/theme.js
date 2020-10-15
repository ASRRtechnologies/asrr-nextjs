//Font colors
const headerDark= '#ffffff';
const headerLight= '#1a1a1a';
const paragraphLight = '#41474E';
const paragraphDark = '#ededed';
const subHeaderDark = '#e9e9e9';
const subHeaderLight = '#41474E';

const dropShadowDark = ' 0 8px 10px rgba(235, 235, 235, 0.15)';
const dropShadowLight = '0 10px 15px rgba(0,0,0,0.23)';
const dropShadowDarkMedium = ' 0 0px 10px rgba(235, 235, 235, 0.15)';
const dropShadowLightMedium = '0 10px 15px rgba(0,0,0,0.23)';

const white = '#fff';
const white2 = '#fbfbfb';

const black = '#0a0a0a';
const black2 = '#131313';
const black3 = '#1a1a1a';

//Logo colors
const logoLight = black;
const logoDark = white;

//Navigation colors
const navigationBlurredLight = 'rgba(252, 252, 252, 0.80)';
const navigationBlurredDark = 'rgba(10, 10, 10, 0.9)';

const navigationLight = 'rgba(252, 252, 252, 1)';
const navigationDark = 'rgba(10, 10, 10, 1)';

const hoverLinkDark = 'linear-gradient(to right, #ff6961, #ff6961 50%, #ffffff 50%)';
const hoverLinkLight = 'linear-gradient(to right, #ff6961, #ff6961 50%, #1a1a1a 50%)';

const borderColorDark = "2px solid #f0f0f0";
const borderColorLight = "2px solid #ababab";


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

	link: {
		light: hoverLinkLight,
		dark: hoverLinkDark,
	},


	inverse: {
		light: headerDark ,
		dark: headerLight,
	},

};

const layout = {
	background: {
		dark: "linear-gradient(120deg, #131313 45%, #0a0a0a 100%);",
		light: "linear-gradient(120deg, #FBFBFB 45%, #efedec 100%);",
	},
};

const landing = {
	background: {
		dark: black,
		light: "linear-gradient(120deg, #eeeff1 45%, #e9e9e9 100%);",
	},

	listItem:{
		dark: borderColorDark,
		light: borderColorLight,
	}

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
		dark:fonts.inverse.dark,
		light:fonts.inverse.light,
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

const navigation = {

	backgroundBlurred: {
		light: navigationBlurredLight,
		dark: navigationBlurredDark,
	},

	background:{
		light: navigationLight,
		dark: navigationDark,
	},

	shadow: {
		dark: dropShadowDark,
		light: dropShadowLight,
	},

	fonts:{
		light: fonts.paragraph.light,
		dark: fonts.paragraph.dark,
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
		services:{
			dark:dropShadowDarkMedium,
			light:dropShadowLightMedium,
		},
		portfolio:{
			dark: dropShadowDark,
			light: dropShadowLight,
		},


	},

	border: {
		dark: borderColorDark,
		light: borderColorLight,
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
		backgroundBlurred: navigation.backgroundBlurred.light,
		background: navigation.background.light,
		logo: navigation.logo.light,
		font: navigation.fonts.light,
		shadow: navigation.shadow.light,
		line_1:navigation.line_1.light,
		line_2:navigation.line_2.light,
		line_3:navigation.line_3.light,
	},

	fonts: {
		title: fonts.header.light,
		paragraph: fonts.paragraph.light,
		whiteFont: fonts.paragraph.light,
		inverse: fonts.inverse.light,
		subHeader: fonts.subHeader.light,
		link: fonts.link.light,
	},

	landing: {
		background: landing.background.light,
		listItem: landing.listItem.light,
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
		shadow: {
			portfolio:cards.shadow.portfolio.light,
			services:cards.shadow.services.light
		},
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
		backgroundBlurred: navigation.backgroundBlurred.dark,
		background: navigation.background.dark,
		logo: navigation.logo.dark,
		font: navigation.fonts.dark,
		shadow: navigation.shadow.dark,
		line_1:navigation.line_1.dark,
		line_2:navigation.line_2.dark,
		line_3:navigation.line_3.dark,
	},

	fonts: {
		header: fonts.header.dark,
		paragraph: fonts.paragraph.dark,
		whiteFont: fonts.paragraph.dark,
		inverse: fonts.inverse.dark,
		subHeader: fonts.subHeader.dark,
		link: fonts.link.dark,
	},

	landing: {
		background: landing.background.dark,
		listItem: landing.listItem.light,
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
		shadow: {
			portfolio:cards.shadow.portfolio.dark,
			services:cards.shadow.services.dark
		},
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
