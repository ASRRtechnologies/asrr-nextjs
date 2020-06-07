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

//Footer colors
const footerLight = "#ffffff";
const footerDark = "#0a0a0a";

const dropShadowDark = " 0 3px 6px rgba(43,42,43,1)";
const dropShadowLight = " 0 3px 6px rgba(0,0,0,0.23)";

const landing = {
    cards:{
        dark:"#1e1e1e",
        light:"#ffffff"
    }
};

const clients = {
    background:{
        dark:"#292929",
        light:"#F4F4F4"
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
        dark: "#292929",
        light: "#f4f4f4"
    },

    services:{
        dark: "#131313",
        light: "#eaebec"
    },

    contactPreview:{
        dark: "#292929",
        light: "#f4f4f4"
    }

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

    clients: clients.background.light,

    section: {
        portfolio: section.portfolio.light,
        services: section.services.light,
        contactPreview: section.contactPreview.light,
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

    clients: clients.background.dark,

    section: {
        portfolio: section.portfolio.dark,
        services: section.services.dark,
        contactPreview: section.contactPreview.dark,
    }

};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
