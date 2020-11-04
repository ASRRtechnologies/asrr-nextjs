import React, {useEffect} from 'react'
import ServicePage from '../components/services/Services'
import {useTheme} from '../context/theme/ThemeContext'
import Application from '../components/layout/Application'
import SmallLanding from "@/landing/SmallLanding";
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";

function Services(props) {
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);
    return (
        <Application>
            {/*<SmallLanding title="Our Services"/>*/}
            <ServicePage/>
            <Contact/>
        </Application>
    )
}

export default Services
