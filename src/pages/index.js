import React, {useEffect} from 'react'
import BigLanding from '@/landing/BigLanding'
import image from '../../public/assets/images/landing/drone-2.jpg'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Stories from '@/stories/Stories'
import Why from '@/why-asrr/Why'
import Application from '../components/layout/Application'
import PreviewBlog from '@/blog/Preview'
import PreviewServices from "@/services/Preview";
import PreviewPortfolio from "@/portfolio/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import TechStack from '@/techstack/TechStack'

function Index(props) {
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);
    return (
        <Application>
            <BigLanding title={'home.landing.title'} text={'home.landing.text'} image={image}/>
            <PreviewServices/>
            <TechStack/>
            <PreviewPortfolio />
            <Stories/>
            <Why/>
            <PreviewBlog/>
            <Clients/>
            <Contact/>
        </Application>

    )
}

export default Index
