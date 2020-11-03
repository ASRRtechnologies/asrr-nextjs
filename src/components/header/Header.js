import React, {useEffect, useState} from 'react'
import Link from './Link';
import {useTheme} from '../../context/theme/ThemeContext'
import styled from '@emotion/styled'
import Logo from './Logo'
import useI18n from '../../hooks/use-i18n'
import Sun from "@/icons/Sun";
import Moon from "@/icons/Moon";
import Language from "@/header/Language";

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
`;

function Header({className}) {

    const i18n = useI18n();
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


    return (
        <Wrapper visible={visible} className="header">

            <div className="header-wrapper">

                <Link href="/"><a className="header-logo"><Logo/></a></Link>

                <div className="header-menu">
                    <Link href="/"><a className="fade-in-header">{i18n.t('header.home')}</a></Link>
                    <Link href="/portfolio"><a className="text">{i18n.t('header.portfolio')}</a></Link>
                    <Link href="/services"><a className="text">{i18n.t('header.services')}</a></Link>
                    <Link href="/blog"><a className="text">{i18n.t('header.blog')}</a></Link>
                    <Link href="/contact"><a className="text">{i18n.t('header.contact')}</a></Link>
                </div>

                <div className="header-actions">
                    <Language/>
                    <span className="icon" onClick={toggle}>
                        {!themeState.dark ? <Sun/> : <Moon/>}
                    </span>
                </div>

                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>

            </div>
        </Wrapper>
    )
}

export default Header

