import React, {useContext, useEffect, useState} from 'react'
import Link from './Link';
import {motion} from 'framer-motion'
import {AnimationContext} from '../../context/animations/AnimationContext'
import {useTheme} from '../../context/theme/ThemeContext'
import styled from '@emotion/styled'
import Logo from './Logo'
import Sun from '../icons/Sun'
import Moon from '../icons/Moon'
import Language from '@/header/Language'
import LanguageMobile from '@/header/LanguageMobile'
import useI18n from '../../hooks/use-i18n'
import {MouseContext} from '../../context/animations/MouseContext'

const Wrapper = styled('nav')`
        background: ${props => props.visible ? props.theme.navigation.background : "transparent"};
        backdrop-filter: ${props => props.visible ? "blur(12px)" : "transparent"};
        box-shadow: ${props => props.visible ? props.theme.navigation.shadow : 'none'};
       
        svg{
            path{
            fill: ${props => props.theme.navigation.font};
            }
        }
       
        p, a {
          color: ${props => props.theme.navigation.font};
        }
        
        .header-background-text{
            color: ${props => props.theme.navigation.font};
        }
        
        .bar1, .bar2, .bar3, .chev > .line {
          background-color:  ${props => props.theme.navigation.font}
        }
        
        @media screen and (max-width:1200px) {
            .header-menu{
                    background-color: ${props => props.theme.navigation.background};
            }
        }
`;

const Line1 = styled('div')`background: ${props => props.theme.navigation.line_1};`;
const Line2 = styled('div')`background: ${props => props.theme.navigation.line_2};`;
const Line3 = styled('div')`background: ${props => props.theme.navigation.line_3};`;

function Header({className}) {

    const i18n = useI18n();
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    const themeState = useTheme();
    const toggle = () => themeState.toggle();

    const headerPosition = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < (2 / 16 * window.innerHeight)) {
            setVisible(false)
        } else if (currentScrollPos > (2 / 16 * window.innerHeight)) {
            setVisible(true)
        }
    };

    const headerProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    };

    useEffect(() => {
        window.addEventListener('scroll', headerPosition);
        window.addEventListener('scroll', headerProgress);
    });
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`header ${menuOpen ? "menu-open" : null} ${className}`}>
            <Wrapper visible={visible} menuOpen={menuOpen}
                     className={`header-relative ${menuOpen ? "menu-open" : null}`}>
                <div className={`header-wrapper ${menuOpen ? "menu-open" : null}`}>
                    <Link href="/"><a className="header-logo"><Logo/></a></Link>

                    <div className={`header-menu ${menuOpen ? "menu-open" : null}`}>
                        <Link scroll={false} href="/"><a className="fade-in-header"
                                                         onClick={closeMenu}>{i18n.t('header.home')}</a></Link>
                        <Link scroll={false} href="/portfolio"><a className="fade-in-header"
                                                                  onClick={closeMenu}>{i18n.t('header.portfolio')}</a></Link>
                        <Link scroll={false} href="/services"><a className="fade-in-header"
                                                                 onClick={closeMenu}>{i18n.t('header.services')}</a></Link>
                        <Link scroll={false} href="/blog"><a className="fade-in-header"
                                                                onClick={closeMenu}>{i18n.t('header.blog')}</a></Link>
                        <Link scroll={false} href="/contact"><a className="fade-in-header"
                                                                onClick={closeMenu}>{i18n.t('header.contact')}</a></Link>
                        {/*<Link href="/about"><a onClick={closeMenu}>{i18n.t('header.about')}</a></Link>*/}
                        <LanguageMobile/>
                    </div>

                    <div className="header-actions">
                        <Language/>
                        <span className="icon" onClick={toggle}>
                            {!themeState.dark ? <Moon/> : <Sun/>}
                        </span>

                        <div onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}
                             className={`${menuOpen ? 'hamburger open' : 'hamburger'}`}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>

                    <Line1 className={`menu-background top ${menuOpen ? "menu-open" : null}`}> </Line1>
                    <Line2 className={`menu-background middle ${menuOpen ? "menu-open" : null}`}> </Line2>
                    <Line3 className={`menu-background bottom ${menuOpen ? "menu-open" : null}`}> </Line3>

                </div>
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header
