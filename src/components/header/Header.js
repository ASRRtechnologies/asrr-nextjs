import React, {useContext, useEffect} from 'react';
import Link from "next/link";
import logo from "../../../public/assets/images/logo/asrr.svg";
import{motion} from "framer-motion";
import {AnimationContext} from "../../context/AnimationContext";


function Header(props) {
    const animate = useContext(AnimationContext);
    return (
        <nav className="header-container">
            <motion.div variants={animate.home.header.variant} animate={animate.home.header.animate} initial={"hidden"}
                        className="header-wrapper">
                <img  src={logo} alt="asrr-logo"/>
                <Link href="/"><a>Home</a></Link>
                <Link href="/"><a>Projects</a></Link>
                <Link href="/"><a>Services</a></Link>
                <Link href="/"><a>Hire a Developer</a></Link>
                <Link href="/"><a>Contact us</a></Link>
                <Link href="/"><a>About us</a></Link>
            </motion.div>
        </nav>
    );
}

export default Header;