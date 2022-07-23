import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        marginBottom: theme.spacing.md,
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    text: {
        textAlign: 'center',
        [theme.fn.smallerThan('sm')]: {
            textAlign: 'left',
        },
    },
}));
