import React, {useEffect} from 'react';
import Title from "@/utillities/titles/Title";
import Layout from "@/layout/Application";
import SmallLanding from "@/landing/SmallLanding";
import error from "#/404/error.jpg";
import error2 from "#/404/error.webp";
import Section from "@/layout/Section";
import {useHeader} from "../context/navigation/HeaderContext";
import Link from 'next/link'
import {useTheme} from "../context/theme/ThemeContext";
import { Fade } from 'react-awesome-reveal'

function Error() {

    const darkmode = useTheme().dark;
    const header = useHeader();
    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    return (
        <Layout>
            <SmallLanding title="Pagina niet gevonden" alt="Abstract" image={error} imageWebp={error2}/>
            <Section>
                <Title className="error" title="404 Error" subHeader="Error"
                       header="De pagina die u zoekt kan niet gevonden worden"/>
                       <Fade triggerOnce direction="up">
                           <Link href="/">
                               <a className={`${darkmode
                                   ? 'animated-link-light'
                                   : 'animated-link-dark'}`}>Click hier om terug te gaan naar de homepage</a>
                           </Link>
                       </Fade>
            </Section>
        </Layout>
    );
}

export default () => <Error/>
