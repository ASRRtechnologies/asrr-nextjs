//Font colors
const whiteFont = "#ffffff";
const darkFont = "#1a1a1a";
const lightFont = "#646464";

//Logo colors
const logoLight = "#ffffff";
const logoDark = "#000000";

//Header colors
const headerLight = "#ffffff";
const headerDark = "#000000";



const layout = {
    background: {
        dark: "#1a1a1a",
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

    logo: {
        light: logoLight,
        dark: logoDark
    }


};


const lightTheme = {

    header: {
        background: header.background.light,
        logo: header.logo.dark,
        font: darkFont
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
        font: whiteFont
    },

    fonts: {
        title: fonts.title.dark,
        text: fonts.text.dark
    },

    layout: layout.background.dark



};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;
