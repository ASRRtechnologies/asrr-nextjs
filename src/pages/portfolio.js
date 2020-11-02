import React from 'react'
import {useTheme} from '../context/theme/ThemeContext'
import PortfolioPage from '@/portfolio/Portfolio'
import Application from '@/layout/Application'
import SmallLanding from "@/landing/SmallLanding";
import Contact from "@/contact/Preview";

function Portfolio() {
    return (
        <Application>
            {/*<SmallLanding title="Portfolio"/>*/}
            <PortfolioPage/>
            <Contact/>
        </Application>
    )
}

export default Portfolio
