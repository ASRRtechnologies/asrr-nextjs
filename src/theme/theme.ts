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

    primaryShade: 3,
    colors: {
        asrr: [
                "#F7DEDD",
                "#F4B9B6",
                "#F6928D",
                "#FF6961", //primaryShade = 3
                "#F1544B",
                "#E2443B",
                "#D13830",
                "#B33B34",
                "#993C37",
                "#833C38"
        ],
    },
    primaryColor: 'asrr',
    other: {
        primaryColor: "#FF6961",
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
