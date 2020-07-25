//Font colors
const whiteFont = '#ffffff'
const darkFont = '#1a1a1a'
const lightFont = '#646464'


const dropShadowDark = ' 0 3px 6px rgba(43,42,43,1)'
const dropShadowLight = ' 0 3px 6px rgba(0,0,0,0.23)'

const white = "#fff";
const white2 = "#fbfbfb";
const white3 = "#ebebeb";

const black = "#0a0a0a";
const black2 = "#131313";
const black3 = "#1a1a1a";
const black4 = "#3c3c3c";


//Logo colors
const logoLight = white
const logoDark = black

//Header colors
const headerLight = '#ffffff';
const headerDark = '#0a0a0a';

const hoverLinkDark = "linear-gradient(to right, #ff6961, #ff6961 50%, #ffffff 50%)";
const hoverLinkLight = "linear-gradient(to right, #ff6961, #ff6961 50%, #1a1a1a 50%)";


const landing = {
	cards: {
		dark: black,
		light: white2,
	},
}

const layout = {
	background: {
		dark: black3,
		light: white,
	},
}

const section = {
	portfolio: {
		dark: black3,
		light: white,
	},

	services: {
		dark: black2,
		light: white2,
	},

	contactPreview: {
		dark: black3,
		light: white,
	},

	clients: {
		dark: black2,
		light: white2,
	},

}

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

}

const fonts = {

	title: {
		light: whiteFont,
		dark: darkFont,
	},

	text: {
		light: whiteFont,
		dark: lightFont,
	},

	link:{
		light:hoverLinkLight,
		dark:hoverLinkDark,
	}

}

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

}

const lightTheme = {

	header: {
		background: header.background.light,
		logo: header.logo.dark,
		font: darkFont,
		shadow: header.shadow.light,
	},

	fonts: {
		title: fonts.title.dark,
		text: fonts.text.dark,
		white: fonts.title.light,
		inverse: fonts.title.dark,
		link: fonts.link.dark

	},

	landing: {
		cards: landing.cards.light,
	},

	layout: layout.background.light,

	section: {
		portfolio: section.portfolio.light,
		services: section.services.light,
		contactPreview: section.contactPreview.light,
		clients: section.clients.light,

	},

	portfolio: {
		landing: portfolio.landing.light,
		process: portfolio.process.light,
		showcase: portfolio.showcase.light,
		otherCases: portfolio.otherCases.light,
	},

};

const darkTheme = {

	header: {
		background: header.background.dark,
		logo: header.logo.light,
		font: whiteFont,
		shadow: header.shadow.dark,
	},

	fonts: {
		title: fonts.title.light,
		text: fonts.text.light,
		white: fonts.title.light,
		inverse:fonts.title.light,
		link: fonts.link.light
	},

	landing: {
		cards: landing.cards.dark,
	},

	layout: layout.background.dark,

	section: {
		portfolio: section.portfolio.dark,
		services: section.services.dark,
		contactPreview: section.contactPreview.dark,
		clients: section.clients.dark,

	},

	portfolio: {
		landing: portfolio.landing.dark,
		process: portfolio.process.dark,
		showcase: portfolio.showcase.dark,
		otherCases: portfolio.otherCases.dark,

	},

}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)

export default theme
