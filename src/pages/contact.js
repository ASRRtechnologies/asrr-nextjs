import React, {useEffect} from 'react'
import ContactPage from '../components/contact/Contact2'
import {useTheme} from '../context/theme/ThemeContext'
import Application from '../components/layout/Application'
import SmallLanding from "@/landing/SmallLanding";
import {useHeader} from "../context/navigation/HeaderContext";

function Contact() {
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);
    return (
        <Application>
            <ContactPage/>
        </Application>
    )
}

export default Contact
