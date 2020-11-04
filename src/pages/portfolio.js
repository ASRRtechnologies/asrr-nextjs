import React, {useEffect} from 'react'
import {useTheme} from '../context/theme/ThemeContext'
import PortfolioPage from '@/portfolio/Portfolio'
import Application from '@/layout/Application'
import SmallLanding from "@/landing/SmallLanding";
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";

function Portfolio() {
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);
    return (
        <Application>
            {/*<SmallLanding title="Portfolio"/>*/}
            <PortfolioPage/>
            <Contact/>
        </Application>
    )
}

export default Portfolio
