import React from 'react';
import {Button, Container, Overlay, Text, Title} from '@mantine/core';
import {useStyles} from "./styles";

export function Landing() {
    const {classes} = useStyles();
    return (
        <div className={classes.root}>
            <Container size="xl">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Innovation is our{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{from: 'pink', to: 'yellow'}}
                            >
                                tradition
                            </Text>{' '}
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Here at ASRR we strive to achieve the greatest
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{from: 'asrr', to: 'asrr'}}
                            className={classes.control}
                            mt={40}
                        >
                            Get started
                        </Button>
                    </div>
                </div>

                <Overlay opacity={0.4} color="#000" zIndex={5} />
            </Container>
        </div>
    );
}
