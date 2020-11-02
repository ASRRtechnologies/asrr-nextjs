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
        
         .header-menu-accordion-mobile{
             background: ${props => props.theme.navigation.backgroundMobile};
        }
       
        svg{
            path{
            fill: ${props => props.menuOpen?  props.theme.navigation.font : props.visible ?  props.theme.navigation.font :  "white" };
            }
        }
       
        p, a {
          color: ${props => props.menuOpen?  props.theme.navigation.font : props.visible ?  props.theme.navigation.font :  "white" };
        }
        
        .header-background-text{
            color: ${props => props.theme.navigation.font};
        }
        
        .bar1, .bar2, .bar3, .chev > .line {
          background-color:  ${props => props.theme.navigation.font}
        }
    
`;

function HeaderMobile({className}) {

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
        <Wrapper visible={visible} menuOpen={menuOpen} className={`header-mobile ${menuOpen ? "menu-open" : ""} ${className}`}>
            <div className="header-wrapper-mobile">

                <Link href="/"><a className="header-logo"><Logo/></a></Link>

                <div className={`header-menu-accordion-mobile ${menuOpen ? "menu-open" : ""}`}>

                    <div className="header-menu-panel-mobile">
                        <Link scroll={false} href="/"><a onClick={closeMenu} className="header-mobile-text">{i18n.t('header.home')}</a></Link>
                        <Link scroll={false} href="/portfolio"><a onClick={closeMenu} className="header-mobile-text">{i18n.t('header.portfolio')}</a></Link>
                        <Link scroll={false} href="/services"><a onClick={closeMenu} className="header-mobile-text">{i18n.t('header.services')}</a></Link>
                        <Link scroll={false} href="/blog"><a onClick={closeMenu} className="header-mobile-text">{i18n.t('header.blog')}</a></Link>
                        <Link scroll={false} href="/contact"><a onClick={closeMenu} className="header-mobile-text">{i18n.t('header.contact')}</a></Link>
                        <LanguageMobile/>
                    </div>


                </div>

                <div className="header-actions-mobile">
                    <span className="icon" onClick={toggle}>
                        {!themeState.dark ? <Sun/> : <Moon/>}
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

                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>

            </div>
        </Wrapper>
    )
}

export default HeaderMobile
