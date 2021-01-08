import React, {useEffect} from 'react'
import BigLanding from '@/landing/BigLanding'
import image from '../../public/assets/images/landing/drone-2.jpg'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Stories from '@/stories/Stories'
import Why from '@/why-asrr/Why'
import PreviewBlog from '@/blog/Preview'
import PreviewServices from "@/services/Preview";
import PreviewPortfolio from "@/portfolio/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import TechStack from '@/techstack/TechStack'

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const homeDirectory = join(process.cwd(), 'public', 'content', 'pages', 'nl', 'home');
export function getDocBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(homeDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {data, content};
 }

function Index(props) {
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);
    return (
        <>
            <BigLanding title={'home.landing.title'} text={'home.landing.text'} image={image}/>
            <PreviewServices/>
            <TechStack/>
            <PreviewPortfolio />
            <Stories/>
            <Why/>
            <PreviewBlog/>
            <Clients/>
            <Contact/>
        </>

    )
}

export async function getStaticProps () {
    const data = getDocBySlug("homepage")

    return {
        props: { data },
    }
}

export default Index
