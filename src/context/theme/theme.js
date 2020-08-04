//Font colors
const whiteFont = '#ffffff'
const darkFont = '#1a1a1a'
const lightFont = '#41474E'
const subFontDark = '#8B98A9'
const subFontLight = '#d4e4f9'

const dropShadowDark = ' 0 10px 15px rgba(43,42,43,0.3)'
const dropShadowLight = '0 10px 15px rgba(0,0,0,0.13)'

const white = '#fff'
const white2 = '#fbfbfb'
const white3 = '#ebebeb'

const black = '#0a0a0a'
const black2 = '#131313'
const black3 = '#1a1a1a'
const black4 = '#3c3c3c'

//Logo colors
const logoLight = white
const logoDark = black

//Header colors
const headerLight = '#ffffff'
const headerDark = '#0a0a0a'

const hoverLinkDark = 'linear-gradient(to right, #ff6961, #ff6961 50%, #ffffff 50%)'
const hoverLinkLight = 'linear-gradient(to right, #ff6961, #ff6961 50%, #1a1a1a 50%)'

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

const cards = {
	background: {
		dark: '#1a1a1a',
		light: '#ffffff',
	},

	shadow: {
		dark: dropShadowDark,
		light: dropShadowLight,
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
		subFont: fonts.subFont.dark,
		link: fonts.link.dark,

	},

	landing: {
		cards: landing.cards.light,
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
		shadow: cards.shadow.dark,
	},

}

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
		subFont: fonts.subFont.light,
		inverse: fonts.title.light,
		link: fonts.link.light,
	},

	landing: {
		cards: landing.cards.dark,
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
	},

}

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme)

export default theme
