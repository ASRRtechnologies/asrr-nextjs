import React, {useContext, useEffect, useState} from 'react';
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
        
`;

function Header(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false);
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

    useEffect(() => {
        window.addEventListener("scroll", headerPosition)
    });

    const openMenu = () => {
        setMenuOpen(!menuOpen)
    };

    {/*<motion.div animate={animation.animate} initial={animation.initial} exit={animation.exit}*/
    }

    return (
        <Wrapper visible={visible} className={`header`}>
            <motion.div animate={animation.animate} exit={animation.exit} className="header-wrapper">
                <Link href="/"><Logo/></Link>
                <div  className={`header-menu ${menuOpen && "open"}`}>
                <Link href="/"><a onMouseEnter={event => console.log(event)}>Home</a></Link>
                <Link href="/portfolio"><a>Portfolio</a></Link>
                    <h1>{active}</h1>
                <Link href="/"><a>Services</a></Link>
                <Link href="/"><a>Hire a Developer</a></Link>
                <Link href="/"><a>Contact us</a></Link>
                <Link href="/"><a>About us</a></Link>
                </div>
                <span className="icon" onClick={toggle}>
                    {themeState.dark ? <Moon/> : <Sun/>}
                </span>

                {/*<div onClick={()=>{setMenuOpen(!menuOpen)}} className={menuOpen ? "btn-menu-open" : "bt-menu-trigger"}>*/}
                {/*    <span></span>*/}
                {/*</div>*/}

                <button  onClick={()=>{setMenuOpen(!menuOpen)}} className={`hamburger hamburger--arrow ${menuOpen && "is-active"}`} type="button"
                        aria-label="Menu" aria-controls="navigation">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>


            </motion.div>
        </Wrapper>
    );
}

export default Header;