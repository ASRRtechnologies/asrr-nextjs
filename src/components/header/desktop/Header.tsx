import React from 'react';
import {Burger, Button, Center, Container, Group, Header, Menu,} from '@mantine/core';
import {useBooleanToggle} from '@mantine/hooks';
import {ChevronDown} from 'tabler-icons-react';
import {navigationLinks} from "../../../data/header/links";
import Logo from "../../logo/Logo";
import {useStyles} from "./styles";
import {HEADER_HEIGHT} from "./styles";
import Link from "next/link";

export function HeaderMenu() {
    const {classes} = useStyles();
    const [opened, toggleOpened] = useBooleanToggle(false);

    const items = navigationLinks.map((link) => {
        const menuItems = link.subPaths?.map((item) => (
            <Menu.Item key={item.path}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    delay={0}
                    transitionDuration={0}
                    placement="end"
                    gutter={1}
                    control={
                        <a
                            href={link?.path}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <ChevronDown size={12}/>
                            </Center>
                        </a>
                    }
                >
                    {menuItems}
                </Menu>
            );
        }

        return (
            <Link href={link?.path ?? "/"}>
                <a key={link.label} className={classes.link}>
                    {link.label}
                </a>
            </Link>
        );
    });

    return (
        <Header className={classes.header} height={HEADER_HEIGHT} sx={{borderBottom: 0}} mb={120}>
            <Container className={classes.inner} size={"xl"}>
                <Group>
                    <Burger
                        opened={opened}
                        onClick={() => toggleOpened()}
                        className={classes.burger}
                        size="sm"
                    />
                    <Logo/>
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Link href="/contact">
                    <Button>
                        Contact
                    </Button>
                </Link>
            </Container>
        </Header>
    );
}
