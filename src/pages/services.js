import React from 'react'
import ServicePage from '../components/services/Services'
import Landing from '@/landing/ImageLanding'
import {useTheme} from '../context/theme/ThemeContext'
import image from '#/landing/portfolio/brandi-redd-aJTiW00qqtI-unsplash.jpg'
import Layout from '../components/layout/Layout'
import Application from '../components/layout/Application'
import SmallLanding from "@/landing/SmallLanding";

function Services(props) {
    const darkmode = useTheme().dark

    return (
        <Application>
            {/*<SmallLanding/>*/}
            <ServicePage/>
        </Application>
    )
}

export default Services
