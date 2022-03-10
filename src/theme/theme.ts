import { DEFAULT_THEME, MantineThemeOverride } from '@mantine/core';

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
    primaryColor:"#FF6961FF"
  }
};

export const darkTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  other: {
    applicationBackground: DEFAULT_THEME?.colors?.dark[7],
    fontColor: DEFAULT_THEME.colors.dark[0],
    customComponents: {
      header: {
        backgroundColor: DEFAULT_THEME?.colors?.dark[7]
      },
      sideBar: {
        backgroundColor: DEFAULT_THEME?.colors?.dark[7]
      }
    }
  },
  ...sharedThemeStyles
};

export const lightTheme: MantineThemeOverride = {
  colorScheme: 'light',
  other: {
    applicationBackground: DEFAULT_THEME?.colors?.gray[0],
    fontColor: DEFAULT_THEME.colors.dark[9],
    customComponents: {
      header: {
        backgroundColor: DEFAULT_THEME?.colors?.gray[7]
      },
      sideBar: {
        backgroundColor: DEFAULT_THEME?.colors?.gray[2]
      }
    }
  },
  ...sharedThemeStyles
};
