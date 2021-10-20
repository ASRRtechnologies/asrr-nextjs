import React, { useEffect, useRef, useState } from 'react';
import Link from './Link';
import styled from '@emotion/styled';
import Logo from './Logo';
import { navigationPaths } from '../../../../data/paths';
import { useTheme } from '@/../context/theme/ThemeContext';
import headerStyles from './mobileHeader.module.scss';
import DarkMode from '@/modules/shared/header/DarkMode';
import HamburgerMenu from '@/modules/shared/header/HamburgerMenu';

type HeaderStyle = {
  visible: boolean;
  open: boolean;
  theme: {
    navigation: {
      backgroundMobile: string;
      shadow: string;
      font: string;
      fontWhite: string;
    };
  };
};

const Wrapper = styled('nav')<HeaderStyle>`
  background: ${(props) =>
    props.visible ? props.theme.navigation.backgroundMobile : 'transparent'};
  backdrop-filter: ${(props) => (props.visible ? 'blur(12px)' : 'transparent')};
  box-shadow: ${(props) =>
    props.visible ? props.theme.navigation.shadow : 'none'};

  .${headerStyles.menu} {
    background: ${(props) => props.theme.navigation.backgroundMobile};
  }

  .logo {
    path {
      fill: ${(props) =>
        props.open || props.visible
          ? props.theme.navigation.font
          : props.theme.navigation.fontWhite};
    }
  }

  p,
  a {
    color: ${(props) => props.theme.navigation.font};
  }

  //Target pseudo element of grid-cell
  .${headerStyles.gridCell} {
    &:before {
      background-color: ${(props) => props.theme.navigation.font};
    }
  }
`;

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const themeState = useTheme();
  const toggle = () => themeState.toggle();
  const darkmode = themeState.dark;
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
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.current.style.width = scrolled + '%';
  };

  useEffect(() => {
    window.addEventListener('scroll', headerPosition);
    window.addEventListener('scroll', headerProgress);
  }, []);

  return (
    <Wrapper
      open={open}
      visible={visible}
      className={`${headerStyles.header}`}
      theme={undefined}
    >
      <div className={`${headerStyles.wrapper} global-padding-horizontal`}>
        <HamburgerMenu
          visible={visible}
          onClick={() => setOpen(!open)}
          open={open}
        />

        <div
          className={`${headerStyles.menu} ${
            open && headerStyles.menuOpen
          } global-padding-horizontal`}
        >
          <div className={headerStyles.menuGrid}>
            {navigationPaths.map(({ path, name }, i) => {
              let darkButton = null;
              //Last element show darkmode button
              if (i === navigationPaths.length - 1)
                darkButton = (
                  <DarkMode
                    visible={true}
                    darkmode={darkmode}
                    toggleDarkmode={toggle}
                  />
                );

              return (
                <div className={headerStyles.gridCell} key={name}>
                  <Link href={path}>
                    <a onClick={() => setOpen(false)} className="hover-link">
                      {name}
                    </a>
                  </Link>
                  {darkButton}
                </div>
              );
            })}
          </div>
        </div>

        <div className={headerStyles.progressContainer}>
          <div ref={progress} className={headerStyles.progressBar} />
        </div>

        <div className={headerStyles.actions}>
          <Link href="/">
            <a className={headerStyles.logoWrapper}>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
