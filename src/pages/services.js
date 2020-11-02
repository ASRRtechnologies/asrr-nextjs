import React from 'react'
import ServicePage from '../components/services/Services'
import {useTheme} from '../context/theme/ThemeContext'
import Application from '../components/layout/Application'
import SmallLanding from "@/landing/SmallLanding";
import Contact from "@/contact/Preview";

function Services(props) {
    const darkmode = useTheme().dark;

    return (
        <Application>
            <SmallLanding title="Our Services"/>
            <ServicePage/>
            <Contact/>
        </Application>
    )
}

export default Services
