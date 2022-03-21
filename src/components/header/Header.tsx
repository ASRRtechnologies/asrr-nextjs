import React, {useEffect, useRef, useState} from 'react';
import Link from './Link';
import styled from '@emotion/styled';
import Logo from './Logo';
import Button from '@/modules/shared/buttons/Button';
import {navigationPaths} from '../../data/paths';
import useStyles from '@/header/styles';

type HeaderStyle = {
    visible: boolean;
    theme: {
        navigation: {
            background: string;
            shadow: string;
            font: string;
            fontWhite: string;
        };
    };
};

const Wrapper = styled('nav')<HeaderStyle>`
  background: ${(props) =>
          props.visible ? props.theme.navigation.background : 'transparent'};
  backdrop-filter: ${(props) => (props.visible ? 'blur(12px)' : 'transparent')};
  box-shadow: ${(props) =>
          props.visible ? props.theme.navigation.shadow : 'none'};

  .logo {
    path {
      fill: ${(props) =>
              props.visible
                      ? props.theme.navigation.font
                      : props.theme.navigation.fontWhite};
    }
  }

  p,
  a {
    color: ${(props) =>
            props.visible
                    ? props.theme.navigation.font
                    : props.theme.navigation.fontWhite};
  }
`;

function Header() {
    const [visible, setVisible] = useState(false);
    const {classes} = useStyles({visible});
    const progress = useRef<HTMLDivElement>(null);

    const headerPosition = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos < (2 / 16) * window.innerHeight) {
            setVisible(false);
        } else if (currentScrollPos > (2 / 16) * window.innerHeight) {
            setVisible(true);
        }
    };

    const headerProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progress.current.style.width = scrolled + '%';
    };

    useEffect(() => {
        window.addEventListener('scroll', headerPosition);
        window.addEventListener('scroll', headerProgress);
    }, []);

    return (
        <div className={classes.header}>
            <div className={classes.headerWrapper}>
                <Link href="/">
                    <a className={classes.logoWrapper}>
                        <Logo/>
                    </a>
                </Link>

                <div className={classes.menu}>
                    {navigationPaths.map(({path, name}) => {
                        if (path === '/contact') return null;

                        return (
                            <Link href={path} key={name}>
                                <a className="hover-link">{name}</a>
                            </Link>
                        );
                    })}
                </div>

                <div className={classes.actions}>
                    <Button
                        title="Contact"
                        mode={visible ? 'darkmode' : 'light'}
                        buttonType={{buttonType: 'navigation', href: '/contact'}}
                    />
                    {/*<DarkMode*/}
                    {/*    visible={visible}*/}
                    {/*    darkmode={darkmode}*/}
                    {/*    toggleDarkmode={toggle}*/}
                    {/*/>*/}
                </div>

                <div className={classes.progressContainer}>
                    <div ref={progress} className={classes.progressBar}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
