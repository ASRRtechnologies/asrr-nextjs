import React from 'react'
import {useTheme} from '../context/theme/ThemeContext'
import PortfolioPage from '@/portfolio/Portfolio'
import Application from '@/layout/Application'
import SmallLanding from "@/landing/SmallLanding";

function Portfolio() {
    return (
        <Application>
            <SmallLanding title="Portfolio"/>
            <PortfolioPage/>
        </Application>
    )
}

export default Portfolio
