import {createStyles} from '@mantine/core';
import {relative} from '../../data/types';
import {HeaderStyle} from '@/header/types';

const useStyles = createStyles((theme, {visible}: HeaderStyle) => ({
    header: {
        display: 'none',
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            width: '100%',
            height: '80px',
            display: 'flex',
            background: visible ? theme?.other?.header?.background : 'transparent',
            backdropFilter: visible ? 'blur(12px)' : 'transparent',
            // boxShadow: visible ? theme?.other?.header?.shadow : 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            left: '0',
            top: '0',
            zIndex: 900,
            position: 'fixed',
            padding: theme.spacing.lg
        },
    },
    logoWrapper: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            margin: '0',
            zIndex: 9999,

        },
    },
    logo: {
        'path': {
            fill:"23"
        },
    },

    headerWrapper: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            maxWidth:theme.other.maxWidth,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
        }
    },
    menu: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
            'a': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 'auto',
                height: 'auto',
                margin: '0 20px',
                '.activeLink': {
                    color: theme.other.primaryColor,
                },
            },
        }
    },
    icon: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            width: '25px',
            height: '25px',
            zIndex: 10000000,
            cursor: 'pointer',
            svg: {
                width: '100%',
                height: 'auto',
            },
        }
    },
    actions: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '20px',
            alignItems: 'center',
        }
    },
    progressContainer: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            width: '100vw',
            height: '2px',
            position: 'fixed',
            top: '76px',
            left: '0',
            zIndex: 1000,
        }
    },
    progressBar: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            height: '4px',
            zIndex: 100000,
            background: theme.other.primaryColor,
            width: '0%',
        }
    },
}));
export default useStyles;
