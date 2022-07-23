import React, {useEffect, useState} from 'react';
import {Burger, Button, Center, Container, Group, Header, Menu,} from '@mantine/core';
import {useBooleanToggle} from '@mantine/hooks';
import {ChevronDown} from 'tabler-icons-react';
import {navigationLinks} from "../../../data/navigation/links";
import Logo from "../../logo/Logo";
import {HEADER_HEIGHT, useStyles} from "./styles";
import Link from "next/link";
import {DarkmodeToggle} from "../../colorscheme-toggle/DarkmodeToggle";

export function HeaderMenu() {
    const [opened, toggleOpened] = useBooleanToggle(false);
    const [visible, setVisible] = useState<boolean>(false);
    const {classes} = useStyles({visible: visible});

    const headerPosition = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos < (2 / 16) * window.innerHeight) {
            setVisible(false);
        } else if (currentScrollPos > (2 / 16) * window.innerHeight) {
            setVisible(true);
        }
    };

    const items = navigationLinks.map((link) => {
        const menuItems = link.subPaths?.map((item) => (
            <Menu.Item key={item.path}>{item.label}</Menu.Item>
        ));

        if(link.path?.includes("contact"))
            return null;

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
            <Link key={link.path} href={link?.path ?? "/"}>
                <Button variant="subtle">
                    {link.label}
                </Button>
            </Link>
        );
    });

    useEffect(() => {
        window.addEventListener('scroll', headerPosition);

        return () => window.removeEventListener('scroll', headerPosition);
    }, [])

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

                <Group spacing={15} className={classes.links}>
                    <Link href="/contact">
                        <Button>
                            Contact
                        </Button>
                    </Link>
                    <DarkmodeToggle/>
                </Group>
            </Container>
        </Header>
    );
}
