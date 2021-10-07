export const white = '#fff';
const white2 = '#eae5e5';
const white3 = '#d4cfcf';
const white4 = '#e7e4e4';

const black = '#0a0a0a';
const black2 = '#131313';
const black3 = '#1a1a1a';
const black4 = '#272727';
const black5 = '#444444';

const dropShadowDark = `4px 12px 15px rgba(12, 12, 12, 0.35)`;
const dropShadowLight = '0 12px 15px rgba(0,0,0,0.23)';

const fonts = {
    header: {
        light: black,
        dark: white,
    },

    subHeader: {
        light: black2,
        dark: white2,
    },

    miniHeader: {
        light: black4,
        dark: white3,
    },

    paragraph: {
        light: black4,
        dark: white,
    },
};

const layout = {
    background: {
        dark: `linear-gradient(90deg, ${black} 45%, ${black3} 100%);`,
        light: `linear-gradient(90deg, ${white} 25%, ${white} 100%);`,
    },
};

const button = {
    background: {
        dark: black5,
        light: white4,
        white: white,
    },

    font: {
        dark: fonts.header.dark,
        light: fonts.header.light,
        white: fonts.header.dark
    },
    border: {
        dark: white3,
        light: black5,
    },

    shadow: {
        dark: '0 8px 10px rgba(1, 1, 1, 0.35)',
        light: '0px 10px 15px rgba(0,0,0,0.23)',
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
        light: 'rgba(252, 252, 252, 0.80)', //white1
        dark: 'rgba(39, 39, 39, 0.9)', //black4
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
        light: fonts.header.light,
        dark: fonts.header.dark,
        white: fonts.header.dark //white fonts used in darkmode
    },
};

const card = {
    background: {
        dark: black2,
        light: white,
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
        font: navigation.fonts.light,
        shadow: navigation.shadow.light,
        fontWhite: navigation.fonts.white
    },

    fonts: {
        header: fonts.header.light,
        subHeader: fonts.subHeader.light,
        miniHeader: fonts.miniHeader.light,
        paragraph: fonts.paragraph.light,
        whiteFont: fonts.paragraph.light,
    },

    layout: {
        background: layout.background.light,
    },

    card: {
        background: card.background.light,
        shadow: card.shadow.light,
    },

    button: {
        dark: {
            background: button.background.dark, //Button is dark in lightmode
            font: button.font.dark,
            shadow: button.shadow.dark,
            border: button.border.dark
        },
        light: {
            background: button.background.light,
            font: button.font.light,
            shadow: button.shadow.light,
            border: button.border.light
        },
        darkmode: {
            background: button.background.light,
            font: button.font.light,
            shadow: button.shadow.light,
            border: button.border.light
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
        font: navigation.fonts.dark,
        shadow: navigation.shadow.dark,
        fontWhite: navigation.fonts.white
    },

    fonts: {
        header: fonts.header.dark,
        subHeader: fonts.subHeader.dark,
        miniHeader: fonts.miniHeader.dark,
        paragraph: fonts.paragraph.dark,
        whiteFont: fonts.paragraph.dark,
    },

    layout: {
        background: layout.background.dark,
    },

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
        dark: {
            background: button.background.dark, //Button is dark in lightmode
            font: button.font.dark,
            shadow: button.shadow.dark,
            border: button.border.dark
        },
        light: {
            background: button.background.light,
            font: button.font.light,
            shadow: button.shadow.light,
            border: button.border.light
        },
        darkmode: {
            background: button.background.dark,
            font: button.font.dark,
            shadow: button.shadow.dark,
            border: button.border.dark,
        },
    },

    alert: {
        background: alert.background.light,
    },

};

const theme = mode => (mode === 'dark' ? darkTheme : lightTheme);

export default theme
