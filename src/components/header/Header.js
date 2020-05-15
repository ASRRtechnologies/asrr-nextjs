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
            fill: ${props => props.visible ? props.theme.header.font : props.menuOpen ? props.theme.header.font : "white"};
            }
        }
       
        p, a {
          color:  ${props => props.visible ? props.theme.header.font : props.menuOpen ? props.theme.header.font : "white"};
        }
        
        .header-background-text{
            color: ${props => props.theme.header.font};
        }
        
        .bar1, .bar2, .bar3 {
          background-color:  ${props => props.visible ? props.theme.header.font : props.menuOpen ? props.theme.header.font : "white"};
        }
        
        @media screen and (max-width:1200px) {
            .header-menu{
                    background-color: ${props => props.theme.header.background};
            }
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
    const closeMenu = () => setMenuOpen(false);
    const clearActiveHeader = () => setActive(null);

    {/*<motion.div animate={animation.animate} initial={animation.initial} exit={animation.exit}*/
    }

    //The Wrapper does not accept motion.div so the sliding down of the header wouldn't be visible if it was top-layer.
    //Thats why the second div has the wrapper styled comp. Further if a parent has transform on (motion.div)
    //Then fixed elements will be fixed to the parent not to the window body / obj.

    return (
        <motion.div animate={animation.animate} initial={animation.initial} exit={animation.exit} className={`header`}>
            <Wrapper visible={visible} menuOpen={menuOpen} className="header-relative">
                <div className="header-wrapper">
                    <Link href="/"><a><Logo/></a></Link>
                    <div className={`header-menu ${menuOpen && "open"}`}>
                        <Link href="/"><a onClick={closeMenu} onMouseEnter={() => setActive("Home")}
                                          onMouseLeave={clearActiveHeader}>Home</a></Link>
                        <Link href="/portfolio"><a onClick={closeMenu} onMouseEnter={() => setActive("Portfolio")}
                                                   onMouseLeave={clearActiveHeader}>Portfolio</a></Link>
                        <Link href="/"><a onClick={closeMenu} onMouseEnter={() => setActive("Services")}
                                          onMouseLeave={clearActiveHeader}>Services</a></Link>
                        <Link href="/"><a onClick={closeMenu} onMouseEnter={() => setActive("Hire")}
                                          onMouseLeave={clearActiveHeader}>Hire a Developer</a></Link>
                        <Link href="/"><a onClick={closeMenu} onMouseEnter={() => setActive("Contact")}
                                          onMouseLeave={clearActiveHeader}>Contact
                            us</a></Link>
                        <Link href="/"><a onClick={closeMenu} onMouseEnter={() => setActive("About")}
                                          onMouseLeave={clearActiveHeader}>About
                            us</a></Link>
                        <h1 className="header-background-text">{active}</h1>

                    </div>

                    <div className="header-actions">
                        <span className="icon" onClick={toggle}>
                            {themeState.dark ? <Moon/> : <Sun/>}
                        </span>

                        <div onClick={() => {
                            setMenuOpen(!menuOpen)
                        }} className={`hamburger ${menuOpen ? "open" : " "}`}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>

                    </div>
                </div>
            </Wrapper>
        </motion.div>
    );
}

export default Header;
