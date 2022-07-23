import React from 'react';
import {ActionIcon, Button, Container, Group, SimpleGrid, Text, Textarea, TextInput, Title,} from '@mantine/core';
import {BrandInstagram, BrandTwitter, BrandYoutube} from 'tabler-icons-react';
import {ContactIconsList} from './ContactIcons';
import {useStyles} from "./styles";

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function ContactForm() {
    const {classes} = useStyles();

    const icons = social.map((Icon, index) => (
        <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
            <Icon size={22}/>
        </ActionIcon>
    ));

    return (
        <Container fluid>
            <Container size="xl" className={classes.wrapper}>
                <SimpleGrid cols={2} spacing={50} breakpoints={[{maxWidth: 'sm', cols: 1}]}>
                    <div>
                        <Title className={classes.title}>Contact ons</Title>
                        <Text className={classes.description} mt="sm" mb={30}>
                            Leave your email and we will get back to you within 24 hours
                        </Text>

                        <ContactIconsList/>

                        <Group mt="xl">{icons}</Group>
                    </div>
                    <form className={classes.form}>
                        <TextInput
                            label="Naam"
                            placeholder="Naam"
                            required
                            classNames={{input: classes.input, label: classes.inputLabel}}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Email"
                            required
                            mt="md"
                            classNames={{input: classes.input, label: classes.inputLabel}}
                        />
                        <Textarea
                            required
                            label="Bericht"
                            placeholder="Uw bericht..."
                            minRows={4}
                            mt="md"
                            classNames={{input: classes.input, label: classes.inputLabel}}
                        />

                        <Group position="right" mt="md">
                            <Button>Verstuur</Button>
                        </Group>
                    </form>
                </SimpleGrid>
            </Container>
        </Container>
    );
}
