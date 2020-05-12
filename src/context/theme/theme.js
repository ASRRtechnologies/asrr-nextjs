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

const layout = {
    background: {
        dark: "#1e1e1e",
        light: "#ffffff"
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
        fonts: {
            title: fonts.title.light,
            text: fonts.text.light
        }
    },

    layout: layout.background.light


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
        text: fonts.text.light
    },

    layout: layout.background.dark



};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
