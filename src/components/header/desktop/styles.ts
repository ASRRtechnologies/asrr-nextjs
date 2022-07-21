import {createStyles} from "@mantine/core";

export const HEADER_HEIGHT = 60;

export const useStyles = createStyles((theme) => ({
    header:{
        display:"block",
        backgroundColor: theme.other.header.background,
        position: "fixed",
        top:0,
        left:0,
        boxShadow: theme.shadows.md,
    },
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.other.header.background
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: 5,
    },
}));
