import React from 'react'
import ContactPage from '../components/contact/Contact'
import {useTheme} from '../context/theme/ThemeContext'
import Application from '../components/layout/Application'
import SmallLanding from "@/landing/SmallLanding";

function Contact() {
    const darkmode = useTheme().dark

    return (
        <Application>
            <SmallLanding title="Contact"/>
            <ContactPage/>
        </Application>
    )
}

export default Contact
