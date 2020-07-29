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
        background-color: ${props => props.visible ? props.theme.header.background : 'none'};
        box-shadow: ${props => props.visible ? props.theme.header.shadow : 'none'};
       
        svg{
            path{
            fill: ${props => props.visible ? props.theme.header.font : props.menuOpen
    ? props.theme.header.font
    : 'white'};
            }
        }
       
        p, a {
          color:  ${props => props.visible ? props.theme.header.font : props.menuOpen
    ? props.theme.header.font
    : 'white'};
        }
        
        .header-background-text{
            color: ${props => props.theme.header.font};
        }
        
        .bar1, .bar2, .bar3, .chev > .line {
          background-color:  ${props => props.visible ? props.theme.header.font : props.menuOpen
    ? props.theme.header.font
    : 'white'};
        }
        
        @media screen and (max-width:1200px) {
            .header-menu{
                    background-color: ${props => props.theme.header.background};
            }
        }
`;

function Header(props) {
    const i18n = useI18n()
    const [menuOpen, setMenuOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    const themeState = useTheme()
    const toggle = () => themeState.toggle()

    const animate = useContext(AnimationContext)
    const animation = animate.animation.header

    const headerPosition = () => {
        let currentScrollPos = window.pageYOffset
        if (currentScrollPos < (1 / 16 * window.innerHeight)) {
            setVisible(false)
        } else if (currentScrollPos > (1 / 16 * window.innerHeight)) {
            setVisible(true)
        }
    }

    useEffect(() => window.addEventListener('scroll', headerPosition))
    const closeMenu = () => setMenuOpen(false)
    const mouse = useContext(MouseContext)

    {/*<motion.div animate={animation.animate} initial={animation.initial} exit={animation.exit}*/
    }

    //The Wrapper does not accept motion.div so the sliding down of the header wouldn't be visible if it was top-layer.
    //Thats why the second div has the wrapper styled comp. Further if a parent has transform on (motion.div)
    //Then fixed elements will be fixed to the parent not to the window body / obj.

    return (
        <motion.div animate={animation.animate} initial={animation.initial} exit={animation.exit} className={`header`}>
            <Wrapper visible={visible} menuOpen={menuOpen} className="header-relative">
                <div className="header-wrapper">
                    <Link href="/"><a className="header-logo"><Logo/></a></Link>
                    <div className={`header-menu ${menuOpen && 'open'}`}>
                         <Link href="/"><a onClick={closeMenu}>{i18n.t('header.home')}</a></Link>
                        <Link href="/portfolio"><a onClick={closeMenu}>{i18n.t('header.portfolio')}</a></Link>
                        <Link href="/services"><a onClick={closeMenu}>{i18n.t('header.services')}</a></Link>
                        <Link href="/"><a onClick={closeMenu}>{i18n.t('header.hire')}</a></Link>
                        <Link href="/contact"><a onClick={closeMenu}>{i18n.t('header.contact')}</a></Link>
                        <Link href="/about"><a onClick={closeMenu}>{i18n.t('header.about')}</a></Link>
                        <LanguageMobile/>
                    </div>

                    <div className="header-actions">
                        <Language/>
                        <span className="icon" onClick={toggle}>
                            {themeState.dark ? <Moon/> : <Sun/>}
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
                </div>
            </Wrapper>
        </motion.div>
    )
}

export default Header
