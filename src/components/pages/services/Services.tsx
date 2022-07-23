import React from 'react';
import {Container, createStyles, SimpleGrid, Text, ThemeIcon, useMantineTheme,} from '@mantine/core';
import {Certificate, Coin, Icon as TablerIcon, Truck} from 'tabler-icons-react';
import TitleComponent from "../../title/Title";
import Link from "next/link";

const MOCKDATA = [
    {
        icon: Truck,
        title: 'Free Worldwide shipping',
        description:
            'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
    },
    {
        icon: Certificate,
        title: 'Best Quality Product',
        description:
            'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
    },
    {
        icon: Coin,
        title: 'Very Affordable Pricing',
        description:
            'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
    },
]

interface FeatureProps {
    icon: TablerIcon;
    title: React.ReactNode;
    description: React.ReactNode;
}

export function Feature({icon: Icon, title, description}: FeatureProps) {
    const theme = useMantineTheme();
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon style={{width: 20, height: 20}}/>
            </ThemeIcon>
            <Text style={{marginTop: theme.spacing.sm, marginBottom: 7}}>{title}</Text>
            <Text size="sm" color="dimmed" style={{lineHeight: 1.6}}>
                {description}
            </Text>
            <Link href={"/"}>
                <Text variant={"link"} color="primary">
                    Read more
                </Text>
            </Link>
        </div>
    );
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },
}));

interface FeaturesGridProps {
    title: string;
    text?: string;
    data?: FeatureProps[];
}

export function Services({title, text, data = MOCKDATA}: FeaturesGridProps) {
    const {classes} = useStyles();
    const theme = useMantineTheme();
    const features = data.map((feature, index) => <Feature {...feature} key={index}/>);

    return (
        <Container className={classes.wrapper}>
            <TitleComponent title={title} text={text}/>

            <SimpleGrid
                mt={60}
                cols={3}
                spacing={theme.spacing.xl * 2}
                breakpoints={[
                    {maxWidth: 980, cols: 2, spacing: 'xl'},
                    {maxWidth: 755, cols: 1, spacing: 'xl'},
                ]}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}
