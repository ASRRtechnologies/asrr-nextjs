import React from 'react';
import {Container, Text, Title} from "@mantine/core";
import {useStyles} from "./styles";

type TitleComponent = {
    title: string;
    text?:string;
}

function TitleComponent(props: TitleComponent) {
    const {classes} = useStyles();

    return (
        <>
            <Title className={classes.title}>{props.title}</Title>
            <Container size={560} p={0}>
                <Text size="sm" className={classes.text}>
                    {props.text}
                </Text>
            </Container>
        </>
    );
}

export default TitleComponent;
