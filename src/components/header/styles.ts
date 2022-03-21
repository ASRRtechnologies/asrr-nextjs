import { createStyles } from '@mantine/core';
import { relative } from '../../data/types';
import { HeaderStyle } from '@/header/types';

type Postion = 'fixed' | 'relative' | 'static';
const fixed: Postion = 'fixed';

const useStyles = createStyles((theme, { visible }: HeaderStyle) => ({
  [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
    header: {
      display: 'none',
    },
  },

  [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
    header: {
      width: '100%',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      left: '0',
      top: '0',
      zIndex: 900,
      position: relative,
    },
    logoWrapper: {
      margin: '0',
      zIndex: 9999,
    },
    headerWrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // '@include size(100%, 100%)': true,
      // '@include flex(space-between, center, row)': true,
      maxWidth: '$max-width',
      position: relative,
    },
    menu: {
      position: fixed,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden',
      '&: a': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        // "@include flex(space-between, center, row)": true,
        // "@include size(auto, auto)": true,
        margin: '0 20px',
        '&: .activeLink': {
          color: theme.other.primaryColor,
        },
      },
    },
    icon: {
      width: '25px',
      height: '25px',
      zIndex: 10000000,
      cursor: 'pointer',
      svg: {
        width: '100%',
        height: 'auto',
      },
    },
    actions: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '20px',
      alignItems: 'center',
    },
    progressContainer: {
      width: '100vw',
      height: '2px',
      position: fixed,
      top: '76px',
      left: '0',
      zIndex: 1000,
    },
    progressBar: {
      height: '4px',
      zIndex: 100000,
      background: theme.other.primaryColor,
      width: '0%',
    },
  },
}));

export default useStyles;
