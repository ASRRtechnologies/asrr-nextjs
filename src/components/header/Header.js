import React, {useContext, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {motion} from "framer-motion";
import {AnimationContext} from "../../context/animations/AnimationContext";
import {useTheme} from "../../context/theme/ThemeContext";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Sun from "./Sun";
import Moon from "./Moon";
import Hamburger from "./Hamburger";

const Wrapper = styled('nav')`
        background-color: ${props => props.visible ? props.theme.header.background : "none"};
        box-shadow: ${props => props.visible ? props.theme.header.shadow : "none"};
        
        svg{
            path{
            fill:${props => props.visible ? props.theme.header.font : "white"}
            }
        }
       
        p, a {
          color:  ${props => props.visible ? props.theme.header.font : "white"}
        }
        
        .header-menu{
                background-color: ${props => props.theme.header.background};
        }
        
`;

function Header(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("");
    const [visible, setVisible] = useState(false);

    const themeState = useTheme();
    const toggle = () => themeState.toggle();

    const animate = useContext(AnimationContext);
    const animation = animate.animation.header;

    const headerPosition = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < (1 / 16 * window.innerHeight)) {
            setVisible(false);
        } else if (currentScrollPos > (1 / 16 * window.innerHeight)) {
            setVisible(true);
        }
    };

    useEffect(() => window.addEventListener("scroll", headerPosition));
    const openMenu = () => setMenuOpen(!menuOpen);
    const setActiveHeader = (input) => setActive(input);
    const clearActiveHeader = () => setActive(null);


    {/*<motion.div animate={animation.animate} initial={animation.initial} exit={animation.exit}*/
    }

    return (
        <Wrapper visible={visible} className={`header`}>
            <div className="header-relative">
                <motion.div animate={animation.animate} exit={animation.exit} className="header-wrapper">
                    <Link href="/"><Logo/></Link>
                    <div className={`header-menu ${menuOpen && "open"}`}>
                        <Link href="/"><a onMouseEnter={() => setActive("Home")}
                                          onMouseLeave={clearActiveHeader}>Home</a></Link>
                        <Link href="/portfolio"><a onMouseEnter={() => setActive("Portfolio")}
                                                   onMouseLeave={clearActiveHeader}>Portfolio</a></Link>
                        <Link href="/"><a onMouseEnter={() => setActive("Services")}
                                          onMouseLeave={clearActiveHeader}>Services</a></Link>
                        <Link href="/"><a onMouseEnter={() => setActive("Hire")}
                                          onMouseLeave={clearActiveHeader}>Hire a Developer</a></Link>
                        <Link href="/"><a onMouseEnter={() => setActive("Contact")} onMouseLeave={clearActiveHeader}>Contact
                            us</a></Link>
                        <Link href="/"><a onMouseEnter={() => setActive("About")} onMouseLeave={clearActiveHeader}>About
                            us</a></Link>
                        <h1 className="header-background-text">{active}</h1>
                    </div>

                    {/*<div onClick={()=>{setMenuOpen(!menuOpen)}} className={menuOpen ? "btn-menu-open" : "bt-menu-trigger"}>*/}
                    {/*    <span></span>*/}
                    {/*</div>*/}

                    <div className="header-actions">
                        <span className="icon" onClick={toggle}>
                            {themeState.dark ? <Moon/> : <Sun/>}
                        </span>

                        {/*<button style={{zIndex: 100000}} onClick={() => {*/}
                        {/*    setMenuOpen(!menuOpen)*/}
                        {/*}}*/}
                        {/*        className={`hamburger hamburger--collapse ${menuOpen && "is-active"}`} type="button"*/}
                        {/*        aria-label="Menu" aria-controls="navigation">*/}
                        {/*    <span className="hamburger-box">*/}
                        {/*    <span className="hamburger-inner"></span>*/}
                        {/*    </span>*/}
                        {/*</button>*/}

                        <div className="hamburger-container">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </Wrapper>
    );
}

export default Header;