import React, {useEffect} from 'react'
import PortfolioPage from '@/portfolio/Portfolio'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";

function Portfolio() {
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);
    return (
        <>
            <PortfolioPage/>
            <Contact/>
        </>
    )
}

export default Portfolio
