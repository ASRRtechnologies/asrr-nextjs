import React, {useEffect} from 'react'
import ContactPage from '../components/contact/Contact2'
import Application from '../components/layout/Application'
import {useHeader} from "../context/navigation/HeaderContext";

function Contact() {
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);
    return (
        <>
            <ContactPage/>
        </>
    )
}

export default Contact
