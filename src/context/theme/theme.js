//Font colors
const whiteFont = "#ffffff";
const darkFont = "#1a1a1a";
const lightFont = "#646464";

//Logo colors
const logoLight = "#ffffff";
const logoDark = "#000000";

//Header colors
const headerLight = "#ffffff";
const headerDark = "#0a0a0a";

const dropShadowDark = " 0 3px 6px rgba(43,42,43,1)";
const dropShadowLight = " 0 3px 6px rgba(0,0,0,0.23)";

const landing = {
    cards:{
        dark:"#131313",
        light:"#fbfbfb"
    }
};

const layout = {
    background: {
        dark: "#1a1a1a",
        light: "#ffffff"
    },
};

const section = {
    portfolio:{
        dark: "#1a1a1a",
        light: "#ffffff"
    },

    services:{
        dark: "#131313",
        light: "#fbfbfb"
    },

    contactPreview:{
        dark: "#1a1a1a",
        light: "#ffffff"
    },

    clients:{
        dark:"#131313",
        light:"#fbfbfb"
    },

};

const portfolio = {
    landing:{
        dark: "#1a1a1a",
        light: "#ffffff"
    },

    process:{
        dark: "#131313",
        light: "#fbfbfb"
    },

    showcase:{
        dark: "#1a1a1a",
        light: "#ffffff"
    },

    otherCases:{
        dark: "#131313",
        light: "#fbfbfb"
    },

};


const fonts = {

    title: {
        light: whiteFont,
        dark: darkFont,
    },

    text: {
        light: whiteFont,
        dark: lightFont
    }

};


const header = {

    background: {
        dark: headerDark,
        light: headerLight
    },

    shadow:{
        dark:dropShadowDark,
        light:dropShadowLight
    },

    logo: {
        light: logoLight,
        dark: logoDark
    }

};

const lightTheme = {

    header: {
        background: header.background.light,
        logo: header.logo.dark,
        font: darkFont,
        shadow:header.shadow.light
    },

    fonts: {
            title: fonts.title.dark,
            text: fonts.text.dark,
            white:fonts.title.light
    },

    landing:{
        cards:landing.cards.light
    },

    layout: layout.background.light,


    section: {
        portfolio: section.portfolio.light,
        services: section.services.light,
        contactPreview: section.contactPreview.light,
        clients: section.clients.light,

    },

    portfolio:{
        landing: portfolio.landing.light,
        process: portfolio.process.light,
        showcase: portfolio.showcase.light,
        otherCases: portfolio.otherCases.light,
    }


};

const darkTheme = {

    header: {
        background: header.background.dark,
        logo: header.logo.light,
        font: whiteFont,
        shadow:header.shadow.dark
    },

    fonts: {
        title: fonts.title.light,
        text: fonts.text.light,
        white:fonts.title.light
    },

    landing:{
        cards:landing.cards.dark
    },

    layout: layout.background.dark,

    section: {
        portfolio: section.portfolio.dark,
        services: section.services.dark,
        contactPreview: section.contactPreview.dark,
        clients: section.clients.dark,

    },

    portfolio:{
        landing: portfolio.landing.dark,
        process: portfolio.process.dark,
        showcase: portfolio.showcase.dark,
        otherCases: portfolio.otherCases.dark,

    }

};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
