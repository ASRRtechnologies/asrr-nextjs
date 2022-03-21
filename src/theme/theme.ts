import {DEFAULT_THEME, MantineTheme, MantineThemeOverride} from '@mantine/core';

const headerColors = {
    dark: DEFAULT_THEME.colors.dark[0],
    light: DEFAULT_THEME.colors.dark[9]
}

const textColors = {
    dark: DEFAULT_THEME.colors.dark[0],
    light: DEFAULT_THEME.colors.dark[5]
}

export const fontStyles = (theme: MantineTheme) => ({
    'h1, h2, h3, h4, h5': {
        color: theme.colorScheme === 'dark' ? headerColors.dark : headerColors.light
    },
    'a, p, li': {
        marginTop: '20px',
        color: theme.colorScheme === 'dark' ? textColors.dark : headerColors.light
    }
})

const sharedThemeStyles: MantineThemeOverride = {
    colors: {
        asrr: [
            '#F9E5E5',
            '#F7BDBB',
            '#FF908C', //Lighten button text color
            '#F07874',
            '#FF908C', //Outline button border-color & text-color
            '#DD6763',
            '#c95b57',
            '#ff6961', //Lighten & filled button background-color hover state
            '#FF908C', //Lighten & Filled button background-color
            '#C95B57'
        ],
    },
    primaryColor: 'asrr',
    other: {
        primaryColor: "#FF6961FF",
        maxWidth: "1200px"
    }
};

export const darkTheme: MantineThemeOverride = {
    colorScheme: 'dark',
    ...sharedThemeStyles,
    other: {
        ...sharedThemeStyles.other,
        applicationBackground: DEFAULT_THEME?.colors?.dark[7],
        fonts: {
            header: headerColors.dark,
            text: textColors.dark
        },
        header: {
            background: `rgba(39, 39, 39, 0.9)`,
        },
    },
};

export const lightTheme: MantineThemeOverride = {
    colorScheme: 'light',
    ...sharedThemeStyles,
    other: {
        ...sharedThemeStyles.other,
        applicationBackground: DEFAULT_THEME?.colors?.gray[0],
        fonts: {
            header: headerColors.light,
            text: textColors.light,
        },
        header: {
            background: `rgba(252, 252, 252, 0.80)`,
        },
    },
};
