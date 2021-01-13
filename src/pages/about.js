import React, {useEffect} from 'react'
import Application from "@/layout/Application";
import {useHeader} from "../context/navigation/HeaderContext";

function Page({data, query}) {

    const SEOProps = {
        title:"ASRR - Home",
        content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
    }

    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    return (
        <Application {...SEOProps}>

        </Application>

    )
}

export default Page

