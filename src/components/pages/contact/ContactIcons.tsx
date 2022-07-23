import React from 'react';
import {Box, createStyles, Group, Text} from '@mantine/core';
import {At, MapPin, Phone, Sun} from 'tabler-icons-react';

const useStyles = createStyles((theme,) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: theme.white,
        zIndex: 10,
    },
    icon: {
        marginRight: theme.spacing.md,
    },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({icon: Icon, title, description, className, ...others}: ContactIconProps) {
    const {classes, cx} = useStyles();
    return (
        <div className={cx(classes.wrapper, className)} {...others}>
            <Box mr="md">
                <Icon size={24}/>
            </Box>

            <div>
                <Text size="xs">
                    {title}
                </Text>
                <Text>{description}</Text>
            </div>
        </div>
    );
}

const data = [
    {title: 'Email', description: 'contact@asrr.nl', icon: At, href: "emailto:contact@asrr.nl"},
    {title: 'Telefoon', description: '+(085) 2007 465', icon: Phone, href: "tel:+(085) 2007 465"},
    {title: 'Address', description: 'Gravenzandseweg 2 unit A 2291 PE Wateringen',
        icon: MapPin, href: "https://goo.gl/maps/vahr71ReChpT6ZqX9"
    },
    {title: 'Working hours', description: '09:00 – 17:00', icon: Sun},
];

export function ContactIconsList() {
    return (
        <Group direction="column">
            {data.map((item, index) => <ContactIcon key={index} {...item} />)}
        </Group>
    )
}

