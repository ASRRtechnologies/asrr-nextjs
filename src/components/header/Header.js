import React, { useEffect, useRef, useState } from 'react'
import Link from './Link'
import { useTheme } from '../../context/theme/ThemeContext'
import styled from '@emotion/styled'
import Logo from './Logo'
import useI18n from '../../hooks/use-i18n'
import Sun from '@/icons/Sun'
import Moon from '@/icons/Moon'
import { useHeader } from '../../context/navigation/HeaderContext'
import NL from '../../locales/nl'
import NavigationButton from '../buttons/NavigationButton'

const Wrapper = styled('nav')`
        background: ${props => props.visible ? props.theme.navigation.background : "transparent"};
        backdrop-filter: ${props => props.visible ? "blur(12px)" : "transparent"};
        box-shadow: ${props => props.visible ? props.theme.navigation.shadow : 'none'};
        
        svg{
            path{
              fill: ${props => props.visible ? props.theme.navigation.font : props.headerWhite ? "white" : props.theme.navigation.font};
            }
        }
    
         p, a {
          color: ${props => props.visible ? props.theme.navigation.font : props.headerWhite ? "white" : props.theme.navigation.font};
        }
        
        .button{
          p, a {color: ${props => props.visible ? props.theme.button.font : props.headerWhite ? props.theme.button.light.font : props.theme.button.font};}
           background-color: ${props => props.visible ? props.theme.button.background : props.headerWhite ? props.theme.button.light.background : props.theme.button.background};
           box-shadow: ${props => props.visible ? props.theme.button.shadow : props.headerWhite ? props.theme.button.light.shadow : props.theme.button.shadow};
           &:hover{
              background-color: ${props => props.visible ? props.theme.button.hover : props.headerWhite ? props.theme.button.light.hover : props.theme.button.hover};
              box-shadow: none;
          ;}
        }
          
`;

function Header({className}) {

    const i18n = useI18n();
    const [visible, setVisible] = useState(false);
    const themeState = useTheme();
    const toggle = () => themeState.toggle();
    const header = useHeader();
    const progress = useRef("");

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
        progress.current.style.width = scrolled + "%";

    };

    useEffect(() => {
        window.addEventListener('scroll', headerPosition);
        window.addEventListener('scroll', headerProgress);
    });

    const setSelectedLanguage = () => {
        i18n.locale('nl', NL)
    }

    useEffect(() => {
        setSelectedLanguage()
    },[]);


    return (
        <Wrapper headerWhite={header.headerWhite} visible={visible} className="header">

            <div className="header-wrapper">

                <Link href="/"><a className="header-logo"><Logo/></a></Link>

                <div className="header-menu">
                    <Link href="/"><a className="text">{i18n.t('header.home')}</a></Link>
                    {/*<Link href="/over"><a className="text">{i18n.t('header.about')}</a></Link>*/}
                    <Link href="/portfolio"><a className="text">{i18n.t('header.portfolio')}</a></Link>
                    <Link href="/diensten"><a className="text">{i18n.t('header.services')}</a></Link>
                    <Link href="/blog"><a className="text">{i18n.t('header.blog')}</a></Link>
                    {/*<Link href="/contact"><a className="text">{i18n.t('header.contact')}</a></Link>*/}
                </div>

                <div className="header-actions">
                    <NavigationButton title="Contact ons" to="/contact"/>
                    {/*<Language/>*/}
                    <span className="icon" onClick={toggle}>
                        {themeState.dark ? <Sun/> : <Moon/>}
                    </span>
                </div>

                <div className="progress-container">
                    <div ref={progress} className="progress-bar"></div>
                </div>

            </div>
        </Wrapper>
    )
}

export default Header

