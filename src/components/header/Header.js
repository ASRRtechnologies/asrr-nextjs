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
import NavigationButtonWhite from "@/buttons/NavigationButtonWhite";

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

    const setSelectedLanguage = () => {
        i18n.locale('nl', NL)
    };

    const renderButton = () => {

        //If page needs header in white and at top of page (not visible) render white
        if(header.headerWhite && !visible) {
            return  <NavigationButtonWhite title="Contact" to="/contact"/>
        }

        if(header.headerWhite && visible) {
            return <NavigationButton title="Contact" to="/contact"/>
        }

        else {
            return <NavigationButton title="Contact" to="/contact"/>
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', headerPosition);
        window.addEventListener('scroll', headerProgress);
    });

    useEffect(() => {
        setSelectedLanguage()
    },[]);


    return (
        <Wrapper headerWhite={header.headerWhite} visible={visible} className="header">

            <div className="header-wrapper">

                <Link href="/"><a className="header-logo"><Logo/></a></Link>

                <div className="header-menu">
                    <Link href="/"><a className="navigation-font">{i18n.t('header.home')}</a></Link>
                    {/*<Link href="/over"><a className="text">{i18n.t('header.about')}</a></Link>*/}
                    <Link href="/portfolio"><a className="navigation-font">{i18n.t('header.portfolio')}</a></Link>
                    <Link href="/diensten"><a className="navigation-font">{i18n.t('header.services')}</a></Link>
                    <Link href="/blog"><a className="navigation-font">{i18n.t('header.blog')}</a></Link>
                    {/*<Link href="/contact"><a className="text">{i18n.t('header.contact')}</a></Link>*/}
                </div>

                <div className="header-actions">

                    {renderButton()}

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

